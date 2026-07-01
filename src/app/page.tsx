import {
  ArrowRight,
  Bell,
  Bot,
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Handshake,
  Landmark,
  Lightbulb,
  LockKeyhole,
  Map,
  MessageSquare,
  ReceiptText,
  Search,
  ShieldCheck,
  Sparkles,
  UsersRound
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { InstitutionalFooter } from "@/components/layout/institutional-footer";
import { PublicHeader } from "@/components/layout/public-header";
import { AtenaAvatar } from "@/components/modules/atena-avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const atenaLoginHref = "/login?callbackUrl=%2Fdashboard%2Fatena%3Fintent%3Dchat-atena&message=atena-chat";

const quickSuggestions = ["FAPESP", "CAPES", "Patentes", "Convênios", "Prestação de contas"];

const heroHighlights = [
  "Informações públicas organizadas",
  "Apoio à rotina de pesquisa",
  "Ambiente logado para acompanhamento"
];

const offerCards = [
  {
    title: "Fomento e Oportunidades",
    description: "Editais, chamadas, prazos e orientações para encontrar caminhos de financiamento.",
    href: "/fomento-editais",
    icon: Landmark
  },
  {
    title: "Modelos e Documentos",
    description: "Arquivos, checklists e referências institucionais para preparar solicitações e projetos.",
    href: "/modelos",
    icon: FileText
  },
  {
    title: "Trilhas de Apoio",
    description: "Passo a passo para submissão, abertura, execução e prestação de contas.",
    href: "/trilhas",
    icon: Map
  },
  {
    title: "Patentes e Inovação",
    description: "Orientações sobre sigilo, proteção de resultados, Inova Unicamp e INPI.",
    href: "/patentes",
    icon: Lightbulb
  }
];

const environmentFeatures = [
  { label: "Projetos", icon: ClipboardCheck },
  { label: "Documentos", icon: FileCheck2 },
  { label: "Notas fiscais", icon: ReceiptText },
  { label: "Rubricas", icon: Landmark },
  { label: "Prazos", icon: CalendarClock },
  { label: "Prestação de contas", icon: ShieldCheck },
  { label: "Favoritos", icon: Sparkles }
];

const atenaQuestions = [
  "Quais documentos preciso para submeter um projeto?",
  "Como organizar notas fiscais para prestação de contas?",
  "Como identificar oportunidades de fomento?"
];

const automationSteps = [
  {
    title: "Captação de editais",
    description: "Mapeamento contínuo de chamadas relevantes para pesquisa, inovação e cooperação.",
    icon: Search
  },
  {
    title: "Pré-triagem",
    description: "Organização inicial por tema, público-alvo, prazo e documentos solicitados.",
    icon: ClipboardCheck
  },
  {
    title: "Validação COCEN",
    description: "Apoio para revisar aderência institucional antes da publicação no portal.",
    icon: ShieldCheck
  },
  {
    title: "Publicação de oportunidades",
    description: "Disponibilização das chamadas em linguagem clara para a comunidade.",
    icon: Bell
  },
  {
    title: "Alertas de prazo",
    description: "Sinalização de datas importantes para reduzir perda de oportunidades.",
    icon: CalendarClock
  }
];

const audienceCards = [
  {
    title: "Pesquisadores",
    description: "Encontram documentos, trilhas, editais e apoio para organizar projetos.",
    icon: UsersRound
  },
  {
    title: "Centros e Núcleos",
    description: "Acessam referências comuns para orientar equipes e rotinas institucionais.",
    icon: Building2
  },
  {
    title: "Equipe COCEN",
    description: "Ganha visibilidade sobre demandas, prazos, documentos e fluxos de apoio.",
    icon: ShieldCheck
  },
  {
    title: "Parceiros institucionais",
    description: "Entendem caminhos de colaboração, inovação e relacionamento com a pesquisa.",
    icon: Handshake
  }
];

export default function PublicHomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PublicHeader />

      <main>
        <section className="relative isolate overflow-hidden border-b bg-white">
          <Image
            src="/assets/hero-laboratorio-unicamp.png"
            alt="Pesquisadores em laboratório universitário"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.96)_38%,rgba(255,255,255,0.78)_68%,rgba(255,255,255,0.44)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.92)_100%)]" />

          <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-4 py-16 sm:py-20 lg:py-24">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="border border-slate-200 bg-white/85 px-3 py-1.5 text-accent shadow-sm">
                COCEN / UNICAMP
              </Badge>

              <h1 className="mt-5 max-w-4xl text-[2.25rem] font-black leading-[1.05] tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
                Simplificando a gestão da pesquisa universitária.
              </h1>
              <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-slate-700 sm:text-xl sm:leading-8">
                O Portal do Pesquisador centraliza informações, documentos, oportunidades e apoio à rotina de pesquisa
                da COCEN/UNICAMP.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 px-6 shadow-lg shadow-red-900/10">
                  <Link href="#recursos">
                    Explorar recursos <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 border-slate-300 bg-white/86 px-6 font-bold text-slate-900 hover:border-accent hover:text-accent"
                >
                  <Link href="/login">
                    <LockKeyhole className="mr-2 h-4 w-4" />
                    Entrar no Ambiente
                  </Link>
                </Button>
              </div>

              <form
                action="/busca"
                role="search"
                className="mt-8 max-w-3xl rounded-lg border border-slate-200 bg-white p-2.5 shadow-[0_18px_50px_rgba(15,23,42,0.12)]"
              >
                <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
                  <div className="flex min-h-12 flex-1 items-center gap-3 px-3 text-sm text-muted-foreground sm:px-4 sm:text-base">
                    <Search className="h-5 w-5 shrink-0 text-accent" />
                    <label className="sr-only" htmlFor="home-public-search">
                      Pesquisar no Portal
                    </label>
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
                      className="rounded-md bg-muted px-3 py-1.5 text-xs font-bold text-muted-foreground transition hover:bg-accent/10 hover:text-accent"
                    >
                      {suggestion}
                    </Link>
                  ))}
                </div>
              </form>

              <div className="mt-5 flex max-w-3xl flex-wrap gap-2">
                {heroHighlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white/82 px-3 py-2 text-xs font-bold text-slate-700 shadow-sm"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="recursos" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-accent">O que o portal oferece?</p>
              <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
                Recursos públicos para avançar com mais clareza.
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Conteúdos organizados por necessidade, para que pesquisadores e equipes encontrem rapidamente o próximo
                passo.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {offerCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className="group flex min-h-[260px] flex-col rounded-lg border bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-accent/55 hover:shadow-lg"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-accent transition group-hover:bg-accent group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 text-2xl font-black text-slate-950">{card.title}</h3>
                    <p className="mt-3 flex-1 leading-7 text-muted-foreground">{card.description}</p>
                    <Link href={card.href} className="mt-6 inline-flex items-center text-sm font-bold text-accent">
                      Acessar área <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="ambiente-pesquisador" className="bg-[#252d30] py-16 text-white sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-white/58">Área logada</p>
              <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">Ambiente do Pesquisador</h2>
              <p className="mt-5 text-lg leading-8 text-white/76">
                Um espaço reservado para acompanhar projetos, consultar documentos, organizar pendências e manter a
                rotina administrativa mais visível.
              </p>
              <Button asChild size="lg" className="mt-8 h-12 bg-white px-6 text-slate-950 hover:bg-white/90">
                <Link href="/login">
                  Entrar no Ambiente <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {environmentFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.label}
                    className="flex min-h-20 items-center gap-4 rounded-lg border border-white/10 bg-white/[0.06] p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-bold text-white/92">{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="atena" className="border-y bg-muted/25 py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <div className="flex items-center gap-4">
                <AtenaAvatar className="h-20 w-20" />
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-accent">Atena</p>
                  <p className="font-semibold text-muted-foreground">Assistente institucional do portal</p>
                </div>
              </div>
              <h2 className="mt-7 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
                Orientação para transformar dúvidas em próximos passos.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                A Atena ajuda a localizar informações do portal, interpretar fluxos e orientar perguntas sobre pesquisa,
                fomento, documentos, prestação de contas e inovação.
              </p>
              <div className="mt-6 flex items-start gap-3 rounded-lg border border-accent/25 bg-white p-4 text-sm leading-6 text-slate-700 shadow-sm">
                <Bot className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p>
                  Algumas funções exigem login para acessar contexto do Ambiente do Pesquisador, como projetos,
                  favoritos e documentos internos.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 px-6">
                  <Link href={atenaLoginHref}>Conversar com a Atena</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 bg-white px-6">
                  <Link href="/modelos">Ver documentos públicos</Link>
                </Button>
              </div>
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-accent">Exemplos de perguntas</p>
              <div className="mt-5 grid gap-4">
                {atenaQuestions.map((question) => (
                  <Link
                    key={question}
                    href={atenaLoginHref}
                    className="flex items-center gap-4 rounded-lg border bg-white p-5 font-semibold shadow-sm transition hover:border-accent/55 hover:bg-accent/5"
                  >
                    <MessageSquare className="h-5 w-5 shrink-0 text-accent" />
                    {question}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="automacao" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-accent">Automação e oportunidades</p>
                <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
                  Fluxos mais claros para encontrar e publicar oportunidades.
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  O portal pode apoiar a captação, organização e validação de editais por meio de automação de fluxos,
                  mantendo a curadoria institucional da COCEN no centro do processo.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {automationSteps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <article key={step.title} className="rounded-lg border bg-muted/20 p-5">
                      <span className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-accent shadow-sm">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-5 text-xl font-black text-slate-950">{step.title}</h3>
                      <p className="mt-2 leading-7 text-muted-foreground">{step.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="publicos" className="border-y bg-muted/25 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-accent">Para quem é</p>
              <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
                Um portal para conectar pesquisa, gestão e parceria institucional.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {audienceCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article key={card.title} className="rounded-lg border bg-white p-6 shadow-sm">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-accent">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 text-xl font-black text-slate-950">{card.title}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground">{card.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="connection-pattern-dark overflow-hidden rounded-lg bg-[#252d30] px-6 py-12 text-white sm:px-10 lg:px-12">
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-white/58">Portal do Pesquisador</p>
                  <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-normal sm:text-4xl">
                    Explore os recursos públicos ou acesse o Ambiente do Pesquisador.
                  </h2>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                  <Button asChild size="lg" className="h-12 bg-white px-6 text-slate-950 hover:bg-white/90">
                    <Link href="#recursos">Explorar recursos</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-12 border-white/30 bg-transparent px-6 text-white hover:bg-white/10"
                  >
                    <Link href="/login">Entrar no Ambiente</Link>
                  </Button>
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
