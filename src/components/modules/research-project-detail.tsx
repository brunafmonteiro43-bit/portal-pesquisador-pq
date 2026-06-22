import {
  AlertTriangle,
  ArrowLeft,
  Bot,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  FileText,
  FolderKanban,
  History,
  ReceiptText,
  Upload
} from "lucide-react";
import Link from "next/link";
import { AtenaAvatar } from "@/components/modules/atena-avatar";
import { SectionHeader } from "@/components/modules/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ResearchProject } from "@/data/research-projects";

const detailTabs = [
  { href: "#visao-geral", label: "Visão geral" },
  { href: "#documentos", label: "Documentos" },
  { href: "#notas-fiscais", label: "Notas fiscais" },
  { href: "#rubricas", label: "Rubricas" },
  { href: "#prestacao", label: "Prestação de contas" },
  { href: "#historico", label: "Histórico" },
  { href: "#atena", label: "Atena" }
];

const summaryCards = [
  { label: "Documentos anexados", key: "documentsCount", icon: FileText },
  { label: "Notas fiscais", key: "invoicesCount", icon: ReceiptText },
  { label: "Pendências", key: "pendingCount", icon: AlertTriangle },
  { label: "Prazos próximos", key: "deadline", icon: CalendarDays },
  { label: "Rubricas utilizadas", key: "budget", icon: CircleDollarSign }
] as const;

function projectStatusClass(status: string) {
  if (status === "Prestação de contas") {
    return "border-accent/25 bg-accent/10 text-accent";
  }

  if (status === "Em análise") {
    return "border-amber-200 bg-amber-50 text-amber-700";
  }

  return "border-emerald-200 bg-emerald-50 text-emerald-700";
}

function getSummaryValue(project: ResearchProject, key: (typeof summaryCards)[number]["key"]) {
  if (key === "documentsCount") return String(project.documentsCount);
  if (key === "invoicesCount") return String(project.invoicesCount);
  if (key === "pendingCount") return String(project.pendingCount);
  if (key === "deadline") return project.accountabilityDeadline;
  return String(project.budgetCategories.length);
}

export function ResearchProjectDetail({ project }: { project: ResearchProject }) {
  return (
    <div className="space-y-6">
      <Button asChild variant="ghost" className="px-0 text-muted-foreground hover:text-accent">
        <Link href="/projetos">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para Projetos de Pesquisa
        </Link>
      </Button>

      <section className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-card">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className={projectStatusClass(project.status)}>
                {project.status}
              </Badge>
              <Badge variant="secondary">{project.fundingSource}</Badge>
              <Badge variant="secondary">Protótipo demonstrativo</Badge>
            </div>
            <h1 className="mt-4 text-3xl font-black tracking-normal md:text-4xl">{project.name}</h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
              Área demonstrativa para centralizar dados do projeto, documentos, notas fiscais, rubricas, prazos e
              prestação de contas assistida.
            </p>
          </div>
          <div className="rounded-2xl border bg-muted/30 p-4 lg:min-w-72">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-bold text-muted-foreground">Progresso geral</span>
              <span className="text-3xl font-black">{project.progress}%</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
              <div className="h-full rounded-full bg-accent" style={{ width: `${project.progress}%` }} />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{project.mainDeadline}</p>
          </div>
        </div>
      </section>

      <nav className="flex gap-2 overflow-x-auto rounded-2xl border bg-white p-2 shadow-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden dark:bg-card">
        {detailTabs.map((tab) => (
          <a
            key={tab.href}
            href={tab.href}
            className="shrink-0 rounded-xl px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            {tab.label}
          </a>
        ))}
      </nav>

      <section id="visao-geral" className="space-y-4 scroll-mt-32">
        <SectionHeader eyebrow="Visão geral" title="Dados principais do projeto" />

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <FolderKanban className="h-5 w-5 text-accent" />
                Identificação
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 p-5 pt-0 sm:grid-cols-2">
              <InfoItem label="Pesquisador responsável" value={project.responsibleResearcher} />
              <InfoItem label="Centro/Núcleo vinculado" value={project.center} />
              <InfoItem label="Agência de fomento" value={project.fundingSource} />
              <InfoItem label="Período de execução" value={project.executionPeriod} />
              <InfoItem label="Prazo de prestação de contas" value={project.accountabilityDeadline} />
              <InfoItem label="Status geral" value={project.status} />
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Clock3 className="h-5 w-5 text-accent" />
                Próximos passos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 p-5 pt-0">
              {project.nextSteps.map((step) => (
                <div key={step} className="flex gap-3 rounded-xl border bg-muted/25 p-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{step}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {summaryCards.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.label} className="rounded-2xl">
                <CardContent className="p-5">
                  <Icon className="h-5 w-5 text-accent" />
                  <p className="mt-4 text-2xl font-black">{getSummaryValue(project, item.key)}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="documentos" className="scroll-mt-32">
        <Card className="rounded-2xl">
          <CardHeader className="flex flex-col gap-3 space-y-0 border-b bg-muted/30 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle className="text-xl">Documentos do projeto</CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">Arquivos demonstrativos vinculados ao acompanhamento do projeto.</p>
            </div>
            <Button type="button" variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Anexar novo
            </Button>
          </CardHeader>
          <CardContent className="divide-y p-0">
            {project.documents.map((document) => (
              <div key={document.name} className="grid gap-3 p-4 md:grid-cols-[1.4fr_0.7fr_0.7fr_0.7fr_auto] md:items-center">
                <div>
                  <p className="font-bold">{document.name}</p>
                  <p className="text-sm text-muted-foreground">{document.type}</p>
                </div>
                <span className="text-sm text-muted-foreground">{document.date}</span>
                <Badge variant="secondary" className="w-fit">
                  {document.status}
                </Badge>
                <span className="text-sm font-semibold text-muted-foreground">{document.type}</span>
                <Button type="button" variant="outline" size="sm">
                  Visualizar
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section id="notas-fiscais" className="scroll-mt-32">
        <Card className="rounded-2xl">
          <CardHeader className="flex flex-col gap-3 space-y-0 border-b bg-muted/30 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle className="text-xl">Notas fiscais e comprovantes</CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">Lista demonstrativa de notas, rubricas vinculadas, valores e observações.</p>
            </div>
            <Button type="button">
              <Upload className="mr-2 h-4 w-4" />
              Anexar nota fiscal
            </Button>
          </CardHeader>
          <CardContent className="grid gap-4 p-5 lg:grid-cols-3">
            {project.invoices.map((invoice) => (
              <div key={invoice.number} className="rounded-2xl border bg-background p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-black">{invoice.number}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{invoice.date}</p>
                  </div>
                  <Badge variant="secondary">{invoice.status}</Badge>
                </div>
                <div className="mt-5 space-y-3 text-sm">
                  <InfoLine label="Categoria" value={invoice.category} />
                  <InfoLine label="Valor" value={invoice.value} />
                  <InfoLine label="Rubrica vinculada" value={invoice.category} />
                  <p className="rounded-xl bg-muted/50 p-3 text-muted-foreground">{invoice.note}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section id="rubricas" className="scroll-mt-32">
        <Card className="rounded-2xl">
          <CardHeader className="border-b bg-muted/30">
            <CardTitle className="text-xl">Controle demonstrativo de rubricas</CardTitle>
          </CardHeader>
          <CardContent className="p-5">
            <div className="grid gap-3">
              {project.budgetCategories.map((category) => (
                <div key={category.name} className="rounded-2xl border p-4">
                  <div className="grid gap-3 md:grid-cols-[1.2fr_0.7fr_0.7fr_0.7fr_1fr] md:items-center">
                    <p className="font-bold">{category.name}</p>
                    <InfoLine label="Previsto" value={category.planned} />
                    <InfoLine label="Utilizado" value={category.used} />
                    <InfoLine label="Saldo" value={category.balance} />
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-muted-foreground">Uso</span>
                        <span className="font-black">{category.percent}%</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                        <div className="h-full rounded-full bg-accent" style={{ width: `${category.percent}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="prestacao" className="scroll-mt-32">
        <Card className="rounded-2xl border-accent/30">
          <CardHeader className="border-b bg-accent text-white">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <CardTitle className="text-xl">Prestação de Contas Assistida</CardTitle>
                <p className="mt-2 text-sm text-white/80">Status geral: Em andamento</p>
              </div>
              <Button type="button" variant="secondary">
                Organizar prestação de contas
              </Button>
            </div>
          </CardHeader>
          <CardContent className="grid gap-5 p-5 lg:grid-cols-[1fr_0.75fr]">
            <div className="grid gap-3 sm:grid-cols-2">
              {project.accountabilityChecklist.map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-xl border bg-background p-3 text-sm">
                  {item.done ? (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                  ) : (
                    <Clock3 className="h-5 w-5 shrink-0 text-accent" />
                  )}
                  <span className={item.done ? "font-semibold" : "font-semibold text-muted-foreground"}>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border bg-muted/30 p-4">
              <p className="font-black">Pendências demonstrativas</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {project.accountabilityPendingItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="historico" className="scroll-mt-32">
        <Card className="rounded-2xl">
          <CardHeader className="border-b bg-muted/30">
            <CardTitle className="flex items-center gap-2 text-xl">
              <History className="h-5 w-5 text-accent" />
              Histórico do projeto
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5">
            <div className="space-y-3">
              {project.history.map((event) => (
                <div key={`${event.title}-${event.date}`} className="grid gap-3 rounded-2xl border p-4 md:grid-cols-[0.35fr_1fr]">
                  <span className="text-sm font-black text-accent">{event.date}</span>
                  <div>
                    <p className="font-bold">{event.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{event.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="atena" className="scroll-mt-32">
        <Card className="rounded-2xl border-accent/30">
          <CardContent className="grid gap-5 p-6 lg:grid-cols-[auto_1fr] lg:items-center">
            <AtenaAvatar className="h-16 w-16 shadow-none" />
            <div>
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-accent" />
                <h2 className="text-2xl font-black tracking-normal">Atena pode ajudar neste projeto</h2>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
                Peça ajuda para organizar documentos, classificar rubricas, identificar pendências e preparar a
                prestação de contas.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.atenaPrompts.map((prompt) => (
                  <Button key={prompt} asChild variant="outline" size="sm">
                    <Link href={`/chat?message=${encodeURIComponent(`${prompt} do projeto ${project.name}`)}`}>{prompt}</Link>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border bg-background p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-2 font-semibold">{value}</p>
    </div>
  );
}

function InfoLine({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-1 font-semibold">{value}</p>
    </div>
  );
}
