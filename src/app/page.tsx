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
  { value: "+500", label: "modelos e documentos" },
  { value: "+120", label: "editais monitorados" },
  { value: "+50", label: "fluxos administrativos" },
  { value: "+100", label: "termos do glossário" }
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
                  <Link href="/chat?intent=chat-atena">Conversar com a Atena</Link>
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

              <div className="mt-8 max-w-3xl rounded-2xl border bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex min-h-16 flex-1 items-center gap-3 px-4 text-muted-foreground">
                    <Search className="h-5 w-5 text-accent" />
                    <span>Pesquise editais, modelos, rubricas, convênios, patentes ou fluxos administrativos...</span>
                  </div>
                  <Button asChild className="h-12 px-7">
                    <Link href="/login">Pesquisar</Link>
                  </Button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 border-t pt-3">
                  {quickSuggestions.map((suggestion) => (
                    <Link
                      key={suggestion}
                      href="/login"
                      className="rounded-full bg-muted px-3 py-1.5 text-xs font-bold text-muted-foreground transition hover:bg-accent/10 hover:text-accent"
                    >
                      {suggestion}
                    </Link>
                  ))}
                </div>
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

        <section className="border-y bg-muted/20 py-14">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
            {institutionalIndicators.map((indicator) => (
              <div key={indicator.label} className="rounded-2xl border bg-white p-6 text-center shadow-sm">
                <p className="text-4xl font-black text-accent">{indicator.value}</p>
                <p className="mt-2 text-sm font-bold text-muted-foreground">{indicator.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-black tracking-normal">Como podemos ajudar?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Escolha o tipo de apoio que você precisa e siga para o conteúdo certo.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {helpCards.map((card) => {
              const Icon = card.icon;

              return (
                <Link
                  key={card.title}
                  href="/login"
                  className="group rounded-2xl border bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg"
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
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-10 rounded-3xl border bg-white p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
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
                    <Link href="/chat?intent=chat-atena">Perguntar à Atena</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/login">Ver documentos relacionados</Link>
                  </Button>
                </div>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-accent">Exemplos de perguntas</p>
                <div className="mt-5 grid gap-4">
                  {assistantQuestions.map((question) => (
                    <Link
                      key={question}
                      href="/chat?intent=chat-atena"
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
