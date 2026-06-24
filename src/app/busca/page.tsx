import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { InstitutionalFooter } from "@/components/layout/institutional-footer";
import { PublicHeader } from "@/components/layout/public-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type SearchPageProps = {
  searchParams?: Promise<{
    q?: string | string[];
  }>;
};

type SearchResult = {
  category: string;
  title: string;
  description: string;
  href: string;
  tags: string[];
};

const suggestedSearches = ["FAPESP", "rubrica", "patente", "prestação de contas", "modelo"];

const searchResults: SearchResult[] = [
  {
    category: "Glossário",
    title: "FAPESP",
    description: "Entenda o papel da agência paulista de fomento, tipos de apoio e documentos comuns.",
    href: "/glossario",
    tags: ["fapesp", "fomento", "agência", "bolsa", "auxílio"]
  },
  {
    category: "Glossário",
    title: "Rubrica",
    description: "Conceito de classificação orçamentária usada para organizar despesas de projetos.",
    href: "/glossario",
    tags: ["rubrica", "orçamento", "despesa", "prestação de contas", "fapesp"]
  },
  {
    category: "Glossário",
    title: "Prestação de contas",
    description: "Resumo sobre comprovação de despesas, relatórios, prazos e documentos financeiros.",
    href: "/glossario",
    tags: ["prestação de contas", "nota fiscal", "comprovante", "relatório", "financeiro"]
  },
  {
    category: "Modelos",
    title: "Checklist de Submissão FAPESP",
    description: "Roteiro demonstrativo para conferir proposta, orçamento, equipe, anuências e anexos.",
    href: "/modelos",
    tags: ["fapesp", "modelo", "checklist", "submissão", "documentos"]
  },
  {
    category: "Modelos",
    title: "Modelo de orçamento por rubrica",
    description: "Planilha demonstrativa para organizar despesas por rubrica e justificar valores.",
    href: "/modelos",
    tags: ["rubrica", "modelo", "orçamento", "fomento", "fapesp"]
  },
  {
    category: "Modelos",
    title: "Checklist de prestação de contas",
    description: "Lista de documentos normalmente usados para notas fiscais, relatórios e comprovações.",
    href: "/modelos",
    tags: ["prestação de contas", "nota fiscal", "documentos", "modelo", "comprovante"]
  },
  {
    category: "Fomento e Oportunidades",
    title: "FAPESP - Chamada Regular 2026",
    description: "Oportunidade demonstrativa com prazo, área, público-alvo e documentos necessários.",
    href: "/fomento-editais",
    tags: ["fapesp", "edital", "chamada", "fomento", "oportunidade"]
  },
  {
    category: "Fomento e Oportunidades",
    title: "FINEP - Inovação",
    description: "Linha demonstrativa para projetos de inovação, infraestrutura e desenvolvimento tecnológico.",
    href: "/fomento-editais",
    tags: ["finep", "inovação", "empresa", "fomento", "oportunidade"]
  },
  {
    category: "Fomento e Oportunidades",
    title: "Cooperação internacional",
    description: "Chamadas futuras para redes de pesquisa, intercâmbio científico e parcerias externas.",
    href: "/fomento-editais",
    tags: ["internacional", "cooperação", "fomento", "parceria", "oportunidade"]
  },
  {
    category: "Trilhas de Apoio",
    title: "Submeter projeto de pesquisa",
    description: "Fluxo público para organizar proposta, documentos, orçamento e submissão institucional.",
    href: "/trilhas",
    tags: ["fapesp", "projeto", "submissão", "trilha", "documentos"]
  },
  {
    category: "Trilhas de Apoio",
    title: "Organizar prestação de contas",
    description: "Etapas para reunir comprovantes, notas fiscais, relatórios e prazos administrativos.",
    href: "/trilhas",
    tags: ["prestação de contas", "nota fiscal", "comprovante", "relatório", "trilha"]
  },
  {
    category: "Patentes",
    title: "Comunicação de invenção",
    description: "Orientação pública para proteger resultados antes de artigo, resumo, evento ou divulgação.",
    href: "/patentes",
    tags: ["patente", "inovação", "invenção", "inova unicamp", "sigilo"]
  },
  {
    category: "Centros e Núcleos",
    title: "Rede COCEN",
    description: "Conheça centros e núcleos interdisciplinares ligados à pesquisa da COCEN/UNICAMP.",
    href: "/centros-nucleos",
    tags: ["centros", "núcleos", "cocen", "unicamp", "pesquisa"]
  },
  {
    category: "Atena recomenda",
    title: "Perguntar à Atena sobre FAPESP",
    description: "Entre no Ambiente do Pesquisador para receber orientação personalizada sobre editais e documentos.",
    href: "/login?callbackUrl=%2Fdashboard%2Fatena%3Fintent%3Dchat-atena&message=atena-chat",
    tags: ["fapesp", "atena", "edital", "documentos", "login"]
  },
  {
    category: "Atena recomenda",
    title: "Perguntar à Atena sobre prestação de contas",
    description: "A Atena pode orientar próximos passos, documentos, notas fiscais e pendências no ambiente logado.",
    href: "/login?callbackUrl=%2Fdashboard%2Fatena%3Fintent%3Dchat-atena&message=atena-chat",
    tags: ["prestação de contas", "atena", "nota fiscal", "documentos", "login"]
  }
];

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function getQueryValue(value?: string | string[]) {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

function filterResults(query: string) {
  const normalizedQuery = normalize(query);

  return searchResults.filter((result) => {
    const haystack = normalize([result.category, result.title, result.description, ...result.tags].join(" "));
    return haystack.includes(normalizedQuery);
  });
}

export default async function PublicBuscaPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = getQueryValue(params?.q).trim();
  const hasQuery = query.length > 0;
  const results = hasQuery ? filterResults(query) : [];
  const groupedResults = results.reduce<Record<string, SearchResult[]>>((groups, result) => {
    groups[result.category] = groups[result.category] ?? [];
    groups[result.category].push(result);
    return groups;
  }, {});

  return (
    <div className="min-h-screen bg-[#f8fafc] text-foreground">
      <PublicHeader />
      <main>
        <section className="connection-pattern border-b bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
            <Badge variant="secondary" className="text-accent">
              Busca pública
            </Badge>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-end">
              <div>
                <h1 className="max-w-4xl text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-6xl">
                  Busca no Portal Público
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                  Pesquise conteúdos públicos e veja sugestões organizadas por glossário, modelos, fomento, trilhas,
                  patentes, centros e recomendações da Atena.
                </p>
                {hasQuery ? (
                  <p className="mt-4 text-sm font-bold text-slate-700">
                    Resultado demonstrativo para: <span className="text-accent">{query}</span>
                  </p>
                ) : null}
              </div>
              <form action="/busca" role="search" className="rounded-3xl border bg-slate-50 p-4 shadow-inner">
                <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm">
                  <Search className="h-5 w-5 text-accent" />
                  <label className="sr-only" htmlFor="public-search-page-input">
                    Pesquisar no Portal Público
                  </label>
                  <input
                    id="public-search-page-input"
                    name="q"
                    defaultValue={query}
                    className="min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none placeholder:text-muted-foreground"
                    placeholder="Buscar por FAPESP, rubrica, patente..."
                  />
                </div>
                <Button className="mt-4 w-full" type="submit">
                  Pesquisar
                </Button>
              </form>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14">
          {!hasQuery ? (
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-accent">Sugestões de busca</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">Comece por um tema frequente</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {suggestedSearches.map((suggestion) => (
                  <Link
                    key={suggestion}
                    href={`/busca?q=${encodeURIComponent(suggestion)}`}
                    className="rounded-full border bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-accent hover:bg-accent/5 hover:text-accent"
                  >
                    {suggestion}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          {hasQuery && results.length === 0 ? (
            <Card className="rounded-3xl border-dashed bg-white shadow-sm">
              <CardContent className="p-8">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-accent">Nenhum resultado</p>
                <h2 className="mt-2 text-2xl font-black text-slate-950">Nenhum resultado encontrado.</h2>
                <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                  Tente buscar por FAPESP, rubrica, patente, prestação de contas ou modelo.
                </p>
              </CardContent>
            </Card>
          ) : null}

          {results.length > 0 ? (
            <div className="space-y-8">
              {Object.entries(groupedResults).map(([category, categoryResults]) => (
                <section key={category}>
                  <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.16em] text-accent">{category}</p>
                      <h2 className="text-2xl font-black text-slate-950">
                        {categoryResults.length} resultado{categoryResults.length > 1 ? "s" : ""}
                      </h2>
                    </div>
                    <Badge variant="secondary">{category}</Badge>
                  </div>
                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {categoryResults.map((result) => (
                      <Link key={`${result.category}-${result.title}`} href={result.href}>
                        <Card className="connection-corner h-full rounded-2xl border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md">
                          <CardContent className="flex h-full flex-col p-6">
                            <h3 className="text-xl font-black tracking-[-0.02em] text-slate-950">{result.title}</h3>
                            <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{result.description}</p>
                            <div className="mt-5 flex flex-wrap gap-2">
                              {result.tags.slice(0, 3).map((tag) => (
                                <Badge key={tag} variant="secondary">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <span className="mt-5 inline-flex items-center text-sm font-bold text-accent">
                              Abrir resultado <ArrowRight className="ml-1 h-4 w-4" />
                            </span>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : null}
        </section>
      </main>
      <InstitutionalFooter />
    </div>
  );
}
