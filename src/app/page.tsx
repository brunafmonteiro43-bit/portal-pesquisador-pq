import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  FileText,
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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const quickAccess = [
  {
    title: "Glossário Facilitado",
    description: "Termos institucionais explicados com clareza.",
    icon: BookOpen
  },
  {
    title: "Modelos e Documentos",
    description: "Arquivos essenciais para projetos e rotinas.",
    icon: FileText
  },
  {
    title: "Fomento e Editais",
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
    title: "Assistente do Pesquisador",
    description: "Dúvidas respondidas com apoio institucional.",
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
  "Assistente com IA especializada"
];

export default function PublicHomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PublicHeader />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-border" />
          <div className="mx-auto grid min-h-[calc(100vh-118px)] max-w-7xl gap-12 px-4 py-16 lg:grid-cols-[1fr_0.84fr] lg:items-center lg:py-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-bold shadow-sm">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="text-accent">Ambiente Institucional</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">Pesquisa • Inovação • Fomento</span>
              </div>

              <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.98] tracking-normal text-foreground md:text-7xl">
                Simplificando a gestão da pesquisa universitária.
              </h1>
              <p className="mt-7 max-w-3xl text-2xl font-semibold leading-9 text-foreground">
                Centralize editais, modelos, fluxos administrativos, patentes e suporte especializado em um único
                ambiente.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="h-14 px-8 text-base shadow-lg shadow-accent/20">
                  <Link href="/login?callbackUrl=%2Fchat">Conversar com o Assistente do Pesquisador</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-14 border-accent px-9 text-base font-bold text-accent hover:bg-accent hover:text-white"
                >
                  <Link href="#acesso-rapido">Explorar Recursos</Link>
                </Button>
              </div>

              <div className="mt-8 flex max-w-3xl flex-col gap-3 rounded-2xl border bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.10)] sm:flex-row sm:items-center">
                <div className="flex min-h-16 flex-1 items-center gap-3 px-4 text-muted-foreground">
                  <Search className="h-5 w-5 text-accent" />
                  <span>Pesquise editais, modelos, rubricas, convênios, patentes ou fluxos administrativos...</span>
                </div>
                <Button asChild className="h-12 px-7">
                  <Link href="/login">Pesquisar</Link>
                </Button>
              </div>

              <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
                {heroIndicators.map((indicator) => (
                  <div
                    key={indicator}
                    className="flex items-center gap-3 rounded-xl border bg-white px-4 py-3 text-sm font-bold shadow-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    {indicator}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:justify-self-end">
              <div className="absolute right-[-16px] top-8 z-10 hidden rounded-xl border bg-white px-6 py-4 font-bold shadow-xl md:flex">
                <Sparkles className="mr-3 h-5 w-5 text-accent" /> Pesquisa • Inovação • Impacto
              </div>
              <Image
                src="/assets/hero-laboratorio-unicamp.png"
                alt="Pesquisadores em laboratório universitário"
                width={860}
                height={760}
                priority
                className="aspect-[0.92] w-full rounded-2xl object-cover shadow-[0_28px_80px_rgba(0,0,0,0.18)] lg:max-w-[45vw]"
              />
              <div className="absolute bottom-8 left-[-32px] hidden max-w-xs rounded-xl border bg-white p-5 shadow-xl lg:block">
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <FileText className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-black">Guia de Patentes</p>
                    <p className="mt-1 text-sm leading-5 text-muted-foreground">
                      Fluxo simplificado para orientar proteção intelectual.
                    </p>
                    <Link href="/login" className="mt-4 inline-flex items-center text-sm font-bold text-accent">
                      Acessar guia <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="acesso-rapido" className="border-y bg-muted/20 py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <h2 className="text-4xl font-black tracking-normal">Acesso Rápido</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                As principais áreas do portal em uma navegação simples.
              </p>
            </div>

            <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {quickAccess.map((card) => {
                const Icon = card.icon;

                return (
                  <Link
                    key={card.title}
                    href="/login"
                    className="group min-h-[230px] rounded-xl border bg-white p-9 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted text-accent transition group-hover:bg-accent group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-8 text-2xl font-black">{card.title}</h3>
                    <p className="mt-4 max-w-sm leading-7 text-muted-foreground">{card.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section id="destaques" className="mx-auto max-w-7xl px-4 py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-4xl font-black tracking-normal">Destaques da Semana</h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Avisos selecionados para apoiar a rotina dos pesquisadores.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/login">Ver oportunidades</Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-5">
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
                  <Link href="/login">
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </section>

        <section id="assistente" className="bg-muted/20 py-24">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <MessageSquare className="h-8 w-8" />
            </span>
            <h2 className="mt-8 text-4xl font-black tracking-normal">Pergunte ao Assistente do Pesquisador</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
              Tire dúvidas sobre editais, Funcamp, patentes, prestação de contas e processos administrativos.
            </p>
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
              {[
                "O que é uma rubrica?",
                "Como abrir um projeto Funcamp?",
                "Como registrar uma patente?",
                "Como submeter um projeto FAPESP?"
              ].map((question) => (
                <div
                  key={question}
                  className="flex items-center gap-4 rounded-lg border bg-white p-5 text-left font-semibold shadow-sm"
                >
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  {question}
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-10">
              <Link href="/login">Iniciar conversa</Link>
            </Button>
          </div>
        </section>
      </main>

      <InstitutionalFooter />
    </div>
  );
}
