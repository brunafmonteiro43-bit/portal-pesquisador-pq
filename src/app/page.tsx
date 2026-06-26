import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  FileText,
  Landmark,
  Lightbulb,
  Map,
  MessageSquare,
  Search,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { InstitutionalFooter } from "@/components/layout/institutional-footer";
import { PublicHeader } from "@/components/layout/public-header";
import { AtenaAvatar } from "@/components/modules/atena-avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const institutionalIndicators = [
  { value: "23", label: "Centros e Núcleos" },
  { value: "+500", label: "documentos e modelos" },
  { value: "24h", label: "editais atualizados" },
  { value: "Atena", label: "especializada" }
];

const quickSuggestions = ["FAPESP", "CAPES", "Patentes", "Convênios", "Prestação de contas"];

const helpCards = [
  {
    title: "Pesquisa",
    description: "Encontre caminhos para submeter, acompanhar e organizar projetos.",
    icon: BookOpen
  },
  {
    title: "Fomento",
    description: "Acompanhe chamadas, agências, prazos e oportunidades abertas.",
    icon: Landmark
  },
  {
    title: "Documentação",
    description: "Acesse modelos, formulários, checklists e documentos institucionais.",
    icon: FileText
  },
  {
    title: "Patentes",
    description: "Entenda sigilo, comunicação de invenção, Inova Unicamp e INPI.",
    icon: Lightbulb
  },
  {
    title: "Centros e Núcleos",
    description: "Acesse a rede interdisciplinar de centros e núcleos da COCEN.",
    icon: Landmark
  },
  {
    title: "Atena",
    description: "Inteligência para pesquisa, fomento e inovação.",
    icon: Sparkles
  }
];

const quickAccess = [
  {
    title: "Glossário Facilitado",
    description: "Termos institucionais explicados com clareza.",
    icon: BookOpen
  },
  {
    title: "Modelos e Templates",
    description: "Arquivos essenciais para projetos e rotinas.",
    icon: FileText
  },
  {
    title: "Fomento e Oportunidades",
    description: "Chamadas e prazos de financiamento.",
    icon: CalendarDays
  },
  {
    title: "Trilhas de Apoio",
    description: "Fluxos administrativos passo a passo.",
    icon: Map
  },
  {
    title: "Patentes e Inovação",
    description: "Orientações para proteger descobertas.",
    icon: Lightbulb
  },
  {
    title: "Centros e Núcleos",
    description: "Conheça a estrutura pública de centros e núcleos interdisciplinares.",
    icon: Landmark
  },
  {
    title: "Atena",
    description: "Assistente institucional especializado.",
    icon: MessageSquare
  }
];

const weeklyHighlights = [
  {
    category: "Edital",
    title: "Edital FAPESP aberto",
    date: "14/07/2026"
  },
  {
    category: "Prazo",
    title: "Prestação de contas",
    date: "29/06/2026"
  },
  {
    category: "Documento",
    title: "Novo modelo disponível",
    date: "17/06/2026"
  }
];

const heroIndicators = [
  "23 Centros e Núcleos",
  "+500 documentos e modelos",
  "Editais atualizados",
  "Atena especializada"
];

const assistantQuestions = [
  "O que é uma rubrica e como ela impacta meu orçamento?",
  "Quais documentos preciso para abrir um projeto Funcamp?",
  "Como registrar uma patente antes de publicar um artigo?",
  "Como preparar uma submissão para edital FAPESP?"
];

const researchJourney = ["Ideia", "Fomento", "Execução", "Inovação", "Prestação de contas"];

const publicHelpLinks: Record<string, string> = {
  Pesquisa: "/trilhas",
  Fomento: "/fomento-editais",
  Documentação: "/modelos",
  Patentes: "/patentes",
  "Centros e Núcleos": "/centros-nucleos",
  Atena: "/login?callbackUrl=%2Fdashboard%2Fatena%3Fintent%3Dchat-atena&message=atena-chat"
};

const quickAccessLinks: Record<string, string> = {
  "Glossário Facilitado": "/glossario",
  "Modelos e Templates": "/modelos",
  "Fomento e Oportunidades": "/fomento-editais",
  "Trilhas de Apoio": "/trilhas",
  "Patentes e Inovação": "/patentes",
  "Centros e Núcleos": "/centros-nucleos",
  Atena: "/login?callbackUrl=%2Fdashboard%2Fatena%3Fintent%3Dchat-atena&message=atena-chat"
};

export default function PublicHomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PublicHeader />

      <main>
        <section className="connection-pattern relative overflow-hidden bg-[radial-gradient(circle_at_12%_8%,rgba(185,28,28,0.10),transparent_30%),linear-gradient(180deg,#fff_0%,#f8fafc_100%)]">
          <div className="absolute inset-x-0 top-0 h-px bg-border" />
          <div className="absolute -left-24 top-28 h-64 w-64 rounded-full border border-slate-200/70 opacity-40" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full border border-red-900/10 opacity-50" />
          <div className="mx-auto grid max-w-[88rem] gap-8 px-4 py-8 sm:py-10 md:gap-10 min-[860px]:grid-cols-[minmax(0,0.92fr)_minmax(20rem,0.88fr)] min-[860px]:items-center min-[860px]:py-10 lg:min-h-[580px] lg:grid-cols-[minmax(0,0.92fr)_minmax(25rem,1fr)] lg:gap-10 lg:px-6 lg:py-9 xl:min-h-[620px] xl:gap-14 xl:px-8 xl:py-10 2xl:py-12">
            <div className="min-[860px]:max-w-[38rem] lg:max-w-[40rem] xl:max-w-[42rem]">
              <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border bg-white px-3 py-1.5 text-xs font-bold shadow-sm sm:px-4">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="text-accent">Ambiente Institucional</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">Pesquisa • Inovação • Fomento</span>
              </div>

              <h1 className="mt-4 max-w-4xl text-[1.9rem] font-black leading-[1.07] tracking-normal text-slate-950 sm:mt-5 sm:text-[2.65rem] md:text-[2.95rem] min-[860px]:text-[2.45rem] lg:text-[2.95rem] xl:text-[3.35rem] 2xl:text-[3.85rem]">
                Simplificando a gestão da pesquisa universitária.
              </h1>
              <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-slate-700 sm:mt-4 sm:text-lg sm:leading-8 lg:text-lg lg:leading-8 xl:text-xl">
                Centralize editais, modelos, fluxos administrativos, patentes e suporte especializado em um único
                ambiente.
              </p>

              <div className="mt-5 grid max-w-[32rem] grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 sm:mt-6 sm:gap-3">
                <Button asChild size="lg" className="h-12 w-full px-4 text-sm shadow-lg shadow-accent/20 sm:h-[3.25rem] sm:px-6 sm:text-base lg:h-12">
                  <Link href="/login?callbackUrl=%2Fdashboard%2Fatena%3Fintent%3Dchat-atena&message=atena-chat">Conversar com a Atena</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 w-full border-accent px-4 text-sm font-bold text-accent hover:bg-accent hover:text-white sm:h-[3.25rem] sm:px-6 sm:text-base lg:h-12"
                >
                  <Link href="#acesso-rapido">Explorar Recursos</Link>
                </Button>
              </div>
              <p className="mt-2.5 max-w-2xl text-xs font-semibold leading-5 text-slate-600 sm:mt-3 sm:text-sm sm:leading-6">
                Consulte conteúdos públicos do portal ou entre no Ambiente do Pesquisador para acompanhar projetos,
                documentos, notas fiscais, prazos e interagir com a Atena.
              </p>
              <p className="mt-1.5 hidden max-w-2xl text-xs font-semibold leading-5 text-muted-foreground lg:block">
                Ações como favoritar, conversar com a Atena, acompanhar projeto, anexar documentos e anexar notas
                fiscais exigem login.
              </p>

              <form action="/busca" role="search" className="mt-3.5 max-w-[40rem] rounded-2xl border border-slate-200 bg-white p-2.5 shadow-[0_18px_48px_rgba(15,23,42,0.12)] sm:mt-4">
                <div className="flex flex-col gap-2.5 min-[520px]:flex-row min-[520px]:items-center">
                  <div className="flex min-h-12 flex-1 items-center gap-3 px-3 text-sm text-muted-foreground sm:min-h-[3.25rem] sm:px-4 sm:text-base">
                    <Search className="h-5 w-5 shrink-0 text-accent" />
                    <label className="sr-only" htmlFor="home-public-search">Pesquisar no Portal</label>
                    <input
                      id="home-public-search"
                      name="q"
                      className="min-w-0 flex-1 bg-transparent font-semibold outline-none placeholder:text-muted-foreground"
                      placeholder="Pesquise editais, modelos, rubricas ou patentes..."
                    />
                  </div>
                  <Button className="h-11 shrink-0 px-7 sm:h-12" type="submit">
                    Pesquisar
                  </Button>
                </div>
                <div className="mt-2.5 hidden flex-wrap gap-2 border-t pt-2.5 sm:flex">
                  {quickSuggestions.map((suggestion) => (
                    <Link
                      key={suggestion}
                      href={`/busca?q=${encodeURIComponent(suggestion)}`}
                      className="rounded-full bg-muted px-3 py-1.5 text-xs font-bold text-muted-foreground transition hover:bg-accent/10 hover:text-accent"
                    >
                      {suggestion}
                    </Link>
                  ))}
                </div>
              </form>

              <div className="mt-3 flex max-w-[40rem] flex-wrap gap-2">
                {heroIndicators.map((indicator) => (
                  <div
                    key={indicator}
                    className="flex items-center gap-2 rounded-full border bg-white/85 px-3.5 py-2 text-xs font-bold text-slate-700 shadow-sm"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                    {indicator}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[38rem] self-center min-[860px]:mx-0 min-[860px]:max-w-[34rem] min-[860px]:justify-self-end lg:max-w-[37rem] xl:max-w-[41rem]">
              <div className="absolute right-3 top-4 z-10 hidden rounded-xl md:right-5 md:top-6 lg:right-[-8px] lg:top-7 border bg-white px-5 py-3 text-sm font-bold shadow-xl md:flex xl:px-6 xl:py-4 xl:text-base">
                <Sparkles className="mr-3 h-5 w-5 text-accent" /> Pesquisa • Inovação • Fomento
              </div>
              <Image
                src="/assets/hero-laboratorio-unicamp.png"
                alt="Pesquisadores em laboratório universitário"
                width={860}
                height={760}
                priority
                className="max-h-[17rem] aspect-[1.55] w-full rounded-[1.7rem] border border-white object-cover shadow-[0_20px_60px_rgba(15,23,42,0.14)] sm:max-h-[21rem] sm:aspect-[1.32] md:max-h-[24rem] md:aspect-[1.35] min-[860px]:max-h-[25rem] min-[860px]:aspect-[0.98] lg:max-h-[30rem] lg:aspect-[1.03] lg:shadow-[0_30px_90px_rgba(15,23,42,0.20)] xl:max-h-[32rem] xl:aspect-[1.08]"
              />
              <div className="mt-3 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.14)] backdrop-blur sm:p-5 lg:absolute lg:bottom-6 lg:left-5 lg:mt-0 lg:max-w-[20rem] xl:left-[-12px]">
                <div className="flex gap-4">
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <FileText className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-wide text-accent">Atena recomenda</p>
                    <p className="mt-1 text-lg font-black">Trilha de Patentes</p>
                    <p className="mt-1 text-sm leading-5 text-muted-foreground">
                      Entenda os passos para proteger resultados de pesquisa e inovação.
                    </p>
                    <Link href="/patentes" className="mt-4 inline-flex items-center text-sm font-bold text-accent">
                      Acessar trilha <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y bg-muted/20 py-8 lg:py-10">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
            {institutionalIndicators.map((indicator) => (
              <div key={indicator.label} className="connection-corner rounded-2xl border bg-white p-4 text-center shadow-sm sm:p-5">
                <p className="text-3xl font-black text-accent">{indicator.value}</p>
                <p className="mt-2 text-sm font-bold text-muted-foreground">{indicator.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 lg:py-16">
          <div className="text-center">
            <h2 className="text-4xl font-black tracking-normal">Como podemos ajudar?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Escolha o tipo de apoio que você precisa e siga para o conteúdo certo.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {helpCards.map((card) => {
              const Icon = card.icon;

              return (
                <Link
                  key={card.title}
                  href={publicHelpLinks[card.title] ?? "/"}
                  className="connection-corner group rounded-2xl border bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-accent transition group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-black">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.description}</p>
                </Link>
              );
            })}
          </div>
          <div className="mt-8 rounded-2xl border bg-white p-4 shadow-sm">
            <p className="text-center text-sm font-bold uppercase tracking-wide text-accent">Ciclo da pesquisa apoiado pelo portal</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              {researchJourney.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="rounded-full border bg-muted px-4 py-2 text-sm font-bold text-foreground">{step}</span>
                  {index < researchJourney.length - 1 ? <ArrowRight className="hidden h-4 w-4 text-accent sm:block" /> : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="acesso-rapido" className="border-y bg-muted/20 py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <h2 className="text-4xl font-black tracking-normal">Acesso Rápido</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                As principais áreas do portal em uma navegação simples.
              </p>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {quickAccess.map((card) => {
                const Icon = card.icon;

                return (
                  <Link
                    key={card.title}
                    href={quickAccessLinks[card.title] ?? "/"}
                    className="connection-corner group min-h-[200px] rounded-xl border bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted text-accent transition group-hover:bg-accent group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 text-2xl font-black">{card.title}</h3>
                    <p className="mt-3 max-w-sm leading-7 text-muted-foreground">{card.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section id="destaques" className="mx-auto max-w-7xl px-4 py-14 lg:py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-4xl font-black tracking-normal">Destaques da Semana</h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Avisos selecionados para apoiar a rotina dos pesquisadores.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/fomento-editais">Ver oportunidades</Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-4">
            {weeklyHighlights.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-5 rounded-xl border bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
                  <Badge variant="secondary" className="w-fit text-accent">
                    {item.category}
                  </Badge>
                  <div>
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.date}</p>
                  </div>
                </div>
                <Button asChild variant="ghost" className="w-fit text-accent hover:text-accent">
                  <Link href="/fomento-editais">
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </section>

        <section id="assistente" className="bg-muted/20 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="connection-pattern grid gap-10 rounded-3xl border bg-white p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
              <div>
                <div className="flex items-center gap-4">
                  <AtenaAvatar className="h-20 w-20" />
                  <div>
                    <p className="text-sm font-black uppercase tracking-wide text-accent">Atena</p>
                    <p className="text-sm font-semibold text-muted-foreground">
                      Inteligência para Pesquisa, Fomento e Inovação
                    </p>
                  </div>
                </div>
                <h2 className="mt-8 text-4xl font-black tracking-normal">Pergunte à Atena</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
                  Conecte editais, oportunidades de fomento, patentes, modelos, fluxos administrativos, convênios,
                  prestação de contas, normas institucionais e trilhas de apoio em respostas claras.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href="/login?callbackUrl=%2Fdashboard%2Fatena%3Fintent%3Dchat-atena&message=atena-chat">Perguntar à Atena</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/modelos">Ver documentos relacionados</Link>
                  </Button>
                </div>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-accent">Exemplos de perguntas</p>
                <div className="mt-5 grid gap-4">
                  {assistantQuestions.map((question) => (
                    <Link
                      key={question}
                      href="/login?callbackUrl=%2Fdashboard%2Fatena%3Fintent%3Dchat-atena&message=atena-chat"
                      className="flex items-center gap-4 rounded-2xl border bg-muted/20 p-5 text-left font-semibold shadow-sm transition hover:border-accent/60 hover:bg-accent/5"
                    >
                      <AtenaAvatar className="h-8 w-8 shrink-0 shadow-none" />
                      {question}
                    </Link>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-accent/30 bg-accent/5 p-5">
                  <p className="font-black text-accent">Valor para o pesquisador</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    A Atena ajuda a localizar orientações, reduzir retrabalho e transformar termos administrativos em
                    ações práticas para submissões, convênios, fomento e inovação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <InstitutionalFooter />
    </div>
  );
}
