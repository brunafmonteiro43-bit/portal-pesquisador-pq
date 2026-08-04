'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { templateSchema, type Template } from '@/schemas/template';

const AGENCIES = ['TODAS', 'FAPESP', 'CAPES', 'CNPQ', 'UNICAMP'] as const;

export default function TemplatesPage() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [selectedAgency, setSelectedAgency] = useState<string>('TODAS');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTemplates() {
      setLoading(true);
      const supabase = createClient();
      
      let query = supabase
        .from('templates')
        .select('*')
        .eq('is_active', true)
        .order('agency', { ascending: true });

      if (selectedAgency !== 'TODAS') {
        query = query.eq('agency', selectedAgency);
      }

      const { data, error } = await query;

      if (!error && data) {
        // Valida os dados vindos do Supabase usando o Zod
        const validated = data.map((item) => templateSchema.parse(item));
        setTemplates(validated);
      }
      setLoading(false);
    }

    fetchTemplates();
  }, [selectedAgency]);

  return (
    <main className="max-w-6xl mx-auto p-6">
      <header className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Repositório Institucional de Templates
        </h1>
        <p className="text-gray-600 mt-2">
          Consulte e baixe sempre as versões mais atualizadas dos formulários das agências de fomento e checklists institucionais COCEN/Unicamp.
        </p>
      </header>

      {/* Filtros por Agência */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {AGENCIES.map((agency) => (
          <button
            key={agency}
            onClick={() => setSelectedAgency(agency)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              selectedAgency === agency
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {agency}
          </button>
        ))}
      </div>

      {/* Lista de Documentos */}
      {loading ? (
        <div className="text-center py-12 text-gray-500">
          Carregando modelos atualizados...
        </div>
      ) : templates.length === 0 ? (
        <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg">
          Nenhum modelo encontrado para esta agência.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {templates.map((tpl) => (
            <div
              key={tpl.id}
              className="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded bg-blue-50 text-blue-700 border border-blue-200">
                    {tpl.agency}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    v{tpl.version}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {tpl.title}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {tpl.description}
                </p>
                <div className="mt-3">
                  <span className="inline-block text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                    {tpl.category}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t flex justify-end">
                <a
                  href={tpl.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
                >
                  Baixar Modelo Atualizado →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
