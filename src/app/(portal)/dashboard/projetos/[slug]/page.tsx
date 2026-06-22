import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Bot,
  CheckCircle2,
  Clock3,
  FileText,
  ReceiptText,
  WalletCards,
  AlertTriangle
} from "lucide-react";
import { AtenaAvatar } from "@/components/modules/atena-avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  accountabilityChecklist,
  projectBudgets,
  projectDocuments,
  projectHistory,
  projectInvoices,
  researchProjects
} from "@/data/research-projects";

export default function ResearchProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = researchProjects.find((item) => item.slug === params.slug);

  if (!project) notFound();

  return (
    <div className="space-y-8">
      <section className="connection-pattern overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <Button asChild variant="ghost" className="mb-5 px-0 text-muted-foreground hover:text-accent">
          <Link href="/dashboard/projetos"><ArrowLeft className="mr-2 h-4 w-4" /> Voltar aos projetos</Link>
        </Button>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.36fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-accent">Projeto de pesquisa</p>
            <h1 className="mt-2 text-4xl font-black tracking-[-0.03em] text-slate-950 md:text-5xl">{project.name}</h1>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Gestão demonstrativa de documentos, notas fiscais, rubricas, prazos e prestação de contas.
            </p>
          </div>
          <div className="rounded-2xl border bg-slate-50 p-4">
            <div className="flex items-center justify-between gap-3">
              <Badge variant="secondary" className="text-accent">{project.status}</Badge>
              <span className="text-2xl font-black text-accent">{project.progress}%</span>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white">
              <div className="h-full rounded-full bg-accent" style={{ width: `${project.progress}%` }} />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {project.summaryCards.map((card) => (
          <Card key={card.label} className="connection-corner rounded-2xl bg-white shadow-sm">
            <CardContent className="p-5">
              <p className="text-3xl font-black text-accent">{card.value}</p>
              <p className="mt-2 text-sm font-bold text-muted-foreground">{card.label}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_0.78fr]">
        <Card className="rounded-2xl bg-white shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-2xl font-black">Visão geral</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {[
                ["Pesquisador responsável", project.researcher],
                ["Centro/Núcleo vinculado", project.center],
                ["Agência de fomento", project.agency],
                ["Período de execução", project.period],
                ["Prazo de prestação de contas", project.accountabilityDeadline],
                ["Status geral", project.status]
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border bg-slate-50 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
                  <p className="mt-2 font-bold text-slate-900">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-4">
              <p className="font-black text-accent">Próximos passos</p>
              <div className="mt-3 grid gap-2">
                {project.nextSteps.map((step) => (
                  <p key={step} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-accent" /> {step}
                  </p>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="connection-pattern-dark rounded-2xl border-accent/30 bg-accent text-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AtenaAvatar className="h-14 w-14 shrink-0" />
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-white/75">Atena</p>
                <h2 className="mt-2 text-3xl font-black">Atena pode ajudar neste projeto</h2>
                <p className="mt-3 leading-7 text-white/85">
                  Peça ajuda para organizar documentos, classificar rubricas, identificar pendências e preparar a prestação de contas.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {["Perguntar sobre prestação de contas", "Ver documentos necessários", "Revisar pendências", "Explicar rubricas"].map((action) => (
                <Button key={action} asChild variant="secondary" className="justify-start text-left">
                  <Link href="/dashboard/atena"><Bot className="mr-2 h-4 w-4" /> {action}</Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_0.92fr]">
        <Card className="rounded-2xl bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-black">Documentos</h2>
              <Button variant="outline"><FileText className="mr-2 h-4 w-4" /> Anexar novo</Button>
            </div>
            <div className="mt-5 space-y-3">
              {projectDocuments.map((document) => (
                <div key={document.name} className="grid gap-3 rounded-xl border p-4 md:grid-cols-[1.2fr_0.5fr_0.7fr_0.7fr_auto] md:items-center">
                  <p className="font-bold">{document.name}</p>
                  <p className="text-sm text-muted-foreground">{document.type}</p>
                  <p className="text-sm text-muted-foreground">{document.date}</p>
                  <Badge variant="secondary" className="w-fit">{document.status}</Badge>
                  <Button variant="outline" size="sm">Visualizar</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-black">Notas fiscais e comprovantes</h2>
              <Button variant="outline"><ReceiptText className="mr-2 h-4 w-4" /> Anexar nota fiscal</Button>
            </div>
            <div className="mt-5 space-y-3">
              {projectInvoices.map((invoice) => (
                <div key={invoice.name} className="rounded-xl border bg-slate-50 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-black">{invoice.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{invoice.category} • {invoice.date}</p>
                    </div>
                    <Badge variant="secondary" className="text-accent">{invoice.status}</Badge>
                  </div>
                  <p className="mt-3 text-lg font-black text-slate-950">{invoice.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{invoice.note}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_0.8fr]">
        <Card className="rounded-2xl bg-white shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-2xl font-black">Rubricas</h2>
            <div className="mt-5 space-y-3">
              {projectBudgets.map((budget) => (
                <div key={budget.category} className="rounded-xl border p-4">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="font-black">{budget.category}</p>
                      <p className="mt-1 text-sm text-muted-foreground">Previsto {budget.planned} • Utilizado {budget.used} • Saldo {budget.balance}</p>
                    </div>
                    <span className="text-sm font-black text-accent">{budget.percent}% utilizado</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-accent" style={{ width: `${budget.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-5">
          <Card className="rounded-2xl bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <WalletCards className="h-5 w-5 text-accent" />
                <h2 className="text-2xl font-black">Prestação de Contas Assistida</h2>
              </div>
              <Badge variant="secondary" className="mt-4 text-accent">Em andamento</Badge>
              <div className="mt-5 space-y-3">
                {accountabilityChecklist.map((item) => (
                  <p key={item.label} className="flex items-center gap-2 text-sm font-semibold">
                    {item.done ? <CheckCircle2 className="h-4 w-4 text-accent" /> : <Clock3 className="h-4 w-4 text-muted-foreground" />}
                    {item.label}
                  </p>
                ))}
              </div>
              <div className="mt-5 rounded-xl border border-accent/20 bg-accent/5 p-4 text-sm text-muted-foreground">
                <p className="flex gap-2 font-semibold"><AlertTriangle className="h-4 w-4 text-accent" /> 2 notas fiscais sem rubrica</p>
                <p className="mt-2 font-semibold">1 comprovante sem descrição</p>
                <p className="mt-2 font-semibold">Relatório técnico pendente</p>
              </div>
              <Button className="mt-5 w-full">Organizar prestação de contas</Button>
            </CardContent>
          </Card>

          <Card className="rounded-2xl bg-white shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-black">Histórico</h2>
              <div className="mt-5 space-y-3">
                {projectHistory.map((event, index) => (
                  <div key={event} className="flex gap-3 rounded-xl border p-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-black text-accent">{index + 1}</span>
                    <p className="text-sm font-semibold text-slate-700">{event}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
