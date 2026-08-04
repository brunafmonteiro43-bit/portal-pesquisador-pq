import Link from 'next/link';
import Image from 'next/image';
import { Search, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Cabeçalho / Navegação */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="font-bold text-lg tracking-tight text-slate-900">
              Portal do Pesquisador
            </div>
            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded font-medium">
              COCEN / UNICAMP
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link href="/" className="text-red-700 font-semibold">Início</Link>
            <Link href="/templates" className="hover:text-slate-900">Modelos e Templates</Link>
            <Link href="#" className="hover:text-slate-900">Oportunidades</Link>
            <Link href="#" className="hover:text-slate-900">Trilhas de Apoio</Link>
          </nav>
          <div>
            <Link
              href="/login"
              className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Entrar no Ambiente
            </Link>
          </div>
        </div>
      </header>

      {/* Seção Principal (Hero) */}
      <section className="relative bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo: Textos e Busca */}
          <div className="lg:col-span-7 z-10 space-y-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-100">
              COCEN / UNICAMP
            </span>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Simplificando a gestão da pesquisa universitária.
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              O Portal do Pesquisador centraliza informações, documentos, oportunidades e apoio à rotina de pesquisa da COCEN/UNICAMP.
            </p>

            {/* Botoes de Ação */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/templates"
                className="bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-lg shadow-sm transition-colors text-sm"
              >
                Explorar recursos
              </a>
              <Link
                href="/login"
                className="border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Entrar no Ambiente
              </Link>
            </div>

            {/* Campo de Busca */}
            <div className="pt-4">
              <div className="bg-white border border-slate-300 rounded-xl p-2 shadow-sm flex items-center gap-2 max-w-2xl">
                <Search className="w-5 h-5 text-slate-400 ml-2 shrink-0" />
                <input
                  type="text"
                  placeholder="Pesquise editais, modelos, rubricas ou patentes..."
                  className="w-full bg-transparent text-sm text-slate-800 focus:outline-none placeholder:text-slate-400"
                />
                <button className="bg-red-700 hover:bg-red-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shrink-0 transition-colors">
                  Pesquisar
                </button>
              </div>

              {/* Tags Populares */}
              <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-slate-500">
                <span className="font-medium text-slate-400">Populares:</span>
                <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded hover:bg-slate-200 cursor-pointer">FAPESP</span>
                <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded hover:bg-slate-200 cursor-pointer">CAPES</span>
                <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded hover:bg-slate-200 cursor-pointer">CNPq</span>
                <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded hover:bg-slate-200 cursor-pointer">Unicamp</span>
                <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded hover:bg-slate-200 cursor-pointer">Prestação de contas</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Imagem do Laboratório */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100 h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80"
                alt="Pesquisadora no laboratório"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

        </div>
      </section>

      {/* Botão Flutuante Atena */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-white border border-slate-200 text-slate-800 font-semibold px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl flex items-center gap-2 text-sm transition-all border-red-100">
          <span className="p-1 bg-red-100 rounded-full text-red-700">
            <Sparkles className="w-4 h-4" />
          </span>
          Atena
        </button>
      </div>
    </div>
  );
}
