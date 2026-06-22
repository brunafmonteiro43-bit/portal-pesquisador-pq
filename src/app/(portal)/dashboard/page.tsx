import {
  ArrowRight,
  BookOpenText,
  Bot,
  CalendarDays,
  Clock3,
  FileText,
  FolderKanban,
  Landmark,
  Lightbulb,
  Route,
  Search,
  Star,
  Workflow
} from "lucide-react";
import Link from "next/link";
import { AtenaAvatar } from "@/components/modules/atena-avatar";
import { GlobalSearch } from "@/components/modules/global-search";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuredDeadlines, fundingCalls, moduleCards, mostAccessedDocuments } from "@/data/portal-content";

const moduleIconMap = {
  glossario: BookOpenText,
  templates: FileText,
  projetos: FolderKanban,
  fomento: Landmark,
  trilhas: Route,
  patentes: Lightbulb,
  chat: Bot
};

const moduleActions = {
  glossario: "Consultar termo",
  templates: "Abrir biblioteca",
  projetos: "Gerenciar projetos",
  fomento: "Ver editais",
  trilhas: "Continuar fluxo",
  patentes: "Ver guia",
  chat: "Iniciar conversa"
};

const workItems = [
  { label: "Editais salvos", value: "4", detail: "2 encerram este mês", icon: Star },
  { label: "Trilhas em andamento", value: "3", detail: "Projeto, patente e contas", icon: Workflow },
  { label: "Modelos favoritos", value: "8", detail: "Documentos usados com frequência", icon: FileText },
  { label: "Patentes acompanhadas", value: "2", detail: "Uma em análise pela Inova", icon: Lightbulb },
  { label: "Consultas recentes", value: "12", detail: "Rubricas, FAPESP e Funcamp", icon: Search }
];

const executiveDeadlines = [
  { date: "29/06", agency: "Funcamp", type: "Prestação de contas", status: "Em atenção", priority: "Alta" },
  { date: "14/07", agency: "FAPESP", type: "Chamada Regular", status: "Aberto", priority: "Alta" },
  { date: "02/08", agency: "FINEP", type: "Subvenção", status: "Aberto", priority: "Média" },
  { date: "Set/26", agency: "Internacional", type: "Cooperação", status: "Previsto", priority: "Baixa" }
];

const recentActivities = [
  { title: "Rubrica consultada", detail: "Material permanente em projeto FAPESP", time: "há 12 min" },
  { title: "Modelo baixado", detail: "Plano de Trabalho v2.1", time: "há 38 min" },
  { title: "Edital visualizado", detail: "FINEP - Subvenção Econômica", time: "há 1 h" },
  { title: "Conversa iniciada com a Atena", detail: "Dúvidas sobre abertura Funcamp", time: "ontem" }
];

const assistantTopics = ["Rubricas", "FAPESP", "Funcamp", "Prestação de contas", "Patentes", "Convênios", "Documentação"];

export default function DashboardPage() {
  return (
    <div className="connection-pattern space-y-8">
      <section className="connection-pattern overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8 dark:bg-card">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-accent">Ambiente do Pesquisador</p>
            <h1 className="mt-2 text-4xl font-black tracking-[-0.03em] text-foreground md:text-5xl">
              Olá, Pesquisador(a).
            </h1>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground">
              Um painel institucional para acompanhar editais, projetos, documentos, trilhas e suporte especializado da Atena.
            </p>
          </div>
          <Button asChild className="h-12 px-6">
            <Link href="/dashboard/atena">
              Perguntar à Atena <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-7">
          <GlobalSearch placeholder="Buscar edital, rubrica, patente, modelo, FAQ ou documento..." />
        </div>
      </section>



      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {workItems.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.label} className="connection-corner rounded-2xl border-slate-200 bg-white shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-3xl font-black tracking-[-0.04em] text-slate-950">{item.value}</span>
                </div>
                <p className="mt-4 font-black text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-5 text-muted-foreground">{item.detail}</p>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-accent">Acesso rápido</p>
            <h2 className="text-2xl font-black tracking-normal">Módulos de trabalho</h2>
          </div>
          <Badge variant="secondary">7 áreas principais</Badge>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {moduleCards.map((module) => {
            const Icon = moduleIconMap[module.key as keyof typeof moduleIconMap] ?? Search;
            const action = moduleActions[module.key as keyof typeof moduleActions] ?? "Abrir";

            return (
              <Link
                key={module.href}
                href={module.href}
                className="connection-corner group rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-md dark:bg-card"
              >
                <div className="flex items-start justify-between gap-4">
                  {module.key === "chat" ? (
                    <AtenaAvatar className="h-12 w-12 shadow-none" />
                  ) : (
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-accent">
                      <Icon className="h-6 w-6" />
                    </span>
                  )}
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-accent" />
                </div>
                <h3 className="mt-5 text-xl font-black">{module.title}</h3>
                <p className="mt-2 min-h-10 text-sm leading-6 text-muted-foreground">{module.description}</p>
                <div className="mt-5 flex items-center justify-between gap-3 border-t pt-4">
                  <span className="text-xs font-bold text-accent">{module.count}</span>
                  <span className="text-sm font-bold text-foreground">{action}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_0.9fr]">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-accent">Meu Trabalho</p>
                <h2 className="text-2xl font-black tracking-normal">Seu espaço de acompanhamento</h2>
              </div>
              <Clock3 className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="mt-6 space-y-3">
              {["Abertura de projeto", "Proteção de patente", "Prestação de contas"].map((trail, index) => (
                <div key={trail} className="rounded-xl border bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-black">{trail}</p>
                      <p className="mt-1 text-sm text-muted-foreground">Etapa {index + 2} de 5 em andamento</p>
                    </div>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-black text-accent">
                      {index === 0 ? "60%" : index === 1 ? "40%" : "75%"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="connection-pattern-dark rounded-2xl border-accent/30 bg-accent text-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-white/75">Atena</p>
                <h2 className="mt-2 text-3xl font-black">Assistente de Pesquisa e Inovação</h2>
                <p className="mt-3 leading-7 text-white/85">Faça perguntas sobre editais, fomento, patentes, documentos e normas da rotina COCEN.</p>
              </div>
              <AtenaAvatar className="h-14 w-14 shrink-0" />
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {assistantTopics.map((topic) => (
                <span key={topic} className="rounded-full bg-white/15 px-3 py-1 text-sm font-semibold text-white">
                  {topic}
                </span>
              ))}
            </div>
            <Button asChild variant="secondary" className="mt-7">
              <Link href="/dashboard/atena">
                Perguntar à Atena <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_0.8fr]">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-accent">Próximos Prazos</p>
                <h2 className="text-2xl font-black tracking-normal">Calendário executivo</h2>
              </div>
              <CalendarDays className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="mt-6 overflow-hidden rounded-xl border">
              {executiveDeadlines.map((item) => (
                <div key={`${item.date}-${item.type}`} className="grid gap-3 border-b bg-white p-4 last:border-b-0 md:grid-cols-[0.7fr_1fr_1.4fr_0.9fr_0.8fr] md:items-center dark:bg-card">
                  <span className="text-lg font-black">{item.date}</span>
                  <span className="text-sm font-bold">{item.agency}</span>
                  <span className="text-sm text-muted-foreground">{item.type}</span>
                  <Badge variant="secondary" className="w-fit">
                    {item.status}
                  </Badge>
                  <span
                    className={
                      item.priority === "Alta"
                        ? "text-sm font-black text-accent"
                        : "text-sm font-bold text-muted-foreground"
                    }
                  >
                    {item.priority}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-accent">Atividades Recentes</p>
              <h2 className="text-2xl font-black tracking-normal">Últimas ações</h2>
            </div>
            <div className="mt-6 space-y-3">
              {recentActivities.map((activity) => (
                <div key={activity.title} className="rounded-xl border bg-muted/20 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-bold">{activity.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{activity.detail}</p>
                    </div>
                    <span className="shrink-0 text-xs font-semibold text-muted-foreground">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-xl font-black">Editais recentes</h2>
            <div className="mt-5 space-y-3">
              {fundingCalls.slice(0, 3).map((call) => (
                <Link key={call.slug} href="/dashboard/oportunidades" className="block rounded-xl border p-4 transition hover:border-accent">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-bold">{call.title}</p>
                    <Badge variant="secondary">{call.agency}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{call.deadline}</p>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-xl font-black">Modelos favoritos</h2>
            <div className="mt-5 space-y-3">
              {mostAccessedDocuments.slice(0, 3).map((document) => (
                <div key={document} className="flex items-center gap-3 rounded-xl border p-4">
                  <FileText className="h-4 w-4 text-accent" />
                  <span className="text-sm font-semibold">{document}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-xl font-black">Prazos em destaque</h2>
            <div className="mt-5 space-y-3">
              {featuredDeadlines.map((item) => (
                <div key={item.title} className="rounded-xl border p-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-bold">{item.title}</p>
                    <Badge variant="secondary">{item.status}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
