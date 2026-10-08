"use client";

import { useMemo, useState } from "react";
import { ExternalLink, FileText, Info, Search, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/modules/section-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  fundingModelAgencies,
  fundingModelCategories,
  fundingModelResources
} from "@/data/funding-models";

export default function TemplatesPage() {
  const [selectedAgency, setSelectedAgency] = useState<(typeof fundingModelAgencies)[number]>("Todos");
  const [selectedCategory, setSelectedCategory] = useState<(typeof fundingModelCategories)[number]>("Todas");
  const [query, setQuery] = useState("");

  const filteredResources = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("pt-BR");

    return fundingModelResources.filter((resource) => {
      const matchesAgency = selectedAgency === "Todos" || resource.agency === selectedAgency;
      const matchesCategory = selectedCategory === "Todas" || resource.category === selectedCategory;
      const searchable = [
        resource.title,
        resource.agency,
        resource.organization,
        resource.description,
        resource.category,
        resource.scope,
        ...resource.tags
      ]
        .join(" ")
        .toLocaleLowerCase("pt-BR");

      const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);
      return matchesAgency && matchesCategory && matchesQuery;
    });
  }, [query, selectedAgency, selectedCategory]);

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Apoio à elaboração e submissão"
        title="Modelos, documentos e apoio à elaboração de projetos"
        description="Encontre roteiros, formulários, manuais e orientações oficiais organizados por agência de fomento e finalidade."
      />

      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <div className="space-y-1">
            <p className="font-semibold">Consulte sempre a fonte oficial antes da submissão.</p>
            <p className="leading-6">
              FAPESP possui diversos roteiros relativamente estáveis, mas CNPq, CAPES e Finep podem publicar
              modelos específicos para cada chamada. Por isso, o Portal direciona para a versão mantida pela
              própria agência em vez de armazenar cópias que podem ficar desatualizadas.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_220px]">
        <label className="relative block">
          <span className="sr-only">Buscar modelo, agência ou documento</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar modelo, agência ou documento..."
            className="h-11 w-full rounded-md border border-input bg-background pl-10 pr-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
          />
        </label>

        <label>
          <span className="sr-only">Filtrar por finalidade</span>
          <select
            value={selectedCategory}
            onChange={(event) =>
              setSelectedCategory(event.target.value as (typeof fundingModelCategories)[number])
            }
            className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
          >
            {fundingModelCategories.map((category) => (
              <option key={category} value={category}>
                {category === "Todas" ? "Todas as finalidades" : category}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex flex-wrap gap-2" aria-label="Filtrar por agência">
        {fundingModelAgencies.map((agency) => {
          const active = selectedAgency === agency;
          return (
            <button
              key={agency}
              type="button"
              onClick={() => setSelectedAgency(agency)}
              aria-pressed={active}
              className={
                active
                  ? "rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm"
                  : "rounded-full border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              }
            >
              {agency}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-muted/30 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-foreground">
            {filteredResources.length} {filteredResources.length === 1 ? "recurso encontrado" : "recursos encontrados"}
          </p>
          <p className="text-xs text-muted-foreground">
            Catálogo demonstrativo com links para as fontes oficiais.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          Fonte e data de verificação visíveis em cada card
        </div>
      </div>

      {filteredResources.length === 0 ? (
        <div className="rounded-xl border border-dashed p-10 text-center">
          <p className="font-semibold">Nenhum recurso encontrado.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Tente outro termo de busca ou remova um dos filtros.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="flex h-full flex-col">
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 gap-3">
                    <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <FileText className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <div className="mb-2 flex flex-wrap gap-2">
                        <Badge variant="secondary">{resource.agency}</Badge>
                        <Badge variant="outline">{resource.category}</Badge>
                      </div>
                      <CardTitle className="text-lg leading-6">{resource.title}</CardTitle>
                      <p className="mt-1 text-sm text-muted-foreground">{resource.organization}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col gap-4">
                <p className="text-sm leading-6 text-muted-foreground">{resource.description}</p>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{resource.scope}</Badge>
                  {resource.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto border-t pt-4">
                  <div className="mb-4 grid gap-2 text-xs text-muted-foreground sm:grid-cols-2">
                    <p>
                      <span className="font-semibold text-foreground">Fonte:</span> {resource.sourceLabel}
                    </p>
                    <p className="sm:text-right">
                      <span className="font-semibold text-foreground">Verificado pela COCEN:</span>{" "}
                      {resource.verifiedAt}
                    </p>
                  </div>

                  <a
                    href={resource.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 sm:w-auto"
                  >
                    Acessar fonte oficial
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="rounded-xl border bg-card p-5">
        <h2 className="font-semibold text-foreground">Evolução sugerida para a TI</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Em uma próxima etapa, os anexos das chamadas capturadas pelo SGCP podem ser associados automaticamente
          a cada oportunidade. Assim, o pesquisador deixa de consultar um repositório genérico e passa a visualizar
          os documentos necessários para preparar aquela submissão específica.
        </p>
      </div>
    </div>
  );
}
