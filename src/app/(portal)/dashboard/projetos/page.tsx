import { ArrowRight, CalendarDays, FileText, ReceiptText, AlertTriangle, FolderKanban } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { researchProjects } from "@/data/research-projects";

export default function ResearchProjectsPage() {
  return (
    <div className="space-y-8">
      <section className="connection-pattern overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-accent">Ambiente do Pesquisador</p>
            <h1 className="mt-2 text-4xl font-black tracking-[-0.03em] text-slate-950 md:text-5xl">Projetos de Pesquisa</h1>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Acompanhe projetos, documentos, notas fiscais, rubricas, prazos e prestação de contas em um painel demonstrativo.
            </p>
          </div>
          <Button asChild variant="outline" className="w-fit">
            <Link href="/dashboard/atena">Perguntar à Atena</Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-3">
        {researchProjects.map((project) => (
          <Card key={project.slug} className="connection-corner rounded-2xl border-slate-200 bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <FolderKanban className="h-6 w-6" />
                </span>
                <Badge variant="secondary" className="text-accent">{project.status}</Badge>
              </div>

              <h2 className="mt-5 text-2xl font-black tracking-[-0.02em] text-slate-950">{project.name}</h2>
              <p className="mt-2 text-sm font-semibold text-muted-foreground">{project.agency}</p>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold text-slate-700">Andamento</span>
                  <span className="font-black text-accent">{project.progress}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-accent" style={{ width: `${project.progress}%` }} />
                </div>
              </div>

              <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
                <div className="rounded-xl border bg-slate-50 p-3">
                  <CalendarDays className="mb-2 h-4 w-4 text-accent" />
                  <p className="font-bold">Prazo principal</p>
                  <p className="text-muted-foreground">{project.mainDeadline}</p>
                </div>
                <div className="rounded-xl border bg-slate-50 p-3">
                  <FileText className="mb-2 h-4 w-4 text-accent" />
                  <p className="font-bold">Documentos</p>
                  <p className="text-muted-foreground">{project.documents} anexados</p>
                </div>
                <div className="rounded-xl border bg-slate-50 p-3">
                  <ReceiptText className="mb-2 h-4 w-4 text-accent" />
                  <p className="font-bold">Notas fiscais</p>
                  <p className="text-muted-foreground">{project.invoices} lançadas</p>
                </div>
                <div className="rounded-xl border bg-slate-50 p-3">
                  <AlertTriangle className="mb-2 h-4 w-4 text-accent" />
                  <p className="font-bold">Pendências</p>
                  <p className="text-muted-foreground">{project.pending} itens</p>
                </div>
              </div>

              <Button asChild className="mt-6 w-full">
                <Link href={`/dashboard/projetos/${project.slug}`}>
                  Abrir projeto <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
