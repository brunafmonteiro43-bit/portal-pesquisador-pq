import {
  AlertTriangle,
  ArrowRight,
  CalendarDays,
  FileText,
  FolderKanban,
  ReceiptText,
  TrendingUp
} from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/modules/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ResearchProject } from "@/data/research-projects";

function projectStatusClass(status: string) {
  if (status === "Prestação de contas") {
    return "border-accent/25 bg-accent/10 text-accent";
  }

  if (status === "Em análise") {
    return "border-amber-200 bg-amber-50 text-amber-700";
  }

  return "border-emerald-200 bg-emerald-50 text-emerald-700";
}

export function ResearchProjectsOverview({ projects }: { projects: ResearchProject[] }) {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Gestão de projetos"
        title="Projetos de Pesquisa"
        description="Acompanhe projetos, documentos, notas fiscais, rubricas, prazos e prestação de contas em uma área demonstrativa do Ambiente do Pesquisador."
        action={<Badge variant="secondary">Dados demonstrativos</Badge>}
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="rounded-2xl">
          <CardContent className="flex items-center gap-4 p-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <FolderKanban className="h-6 w-6" />
            </span>
            <div>
              <p className="text-2xl font-black">{projects.length}</p>
              <p className="text-sm text-muted-foreground">projetos acompanhados</p>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl">
          <CardContent className="flex items-center gap-4 p-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-accent">
              <FileText className="h-6 w-6" />
            </span>
            <div>
              <p className="text-2xl font-black">{projects.reduce((total, project) => total + project.documentsCount, 0)}</p>
              <p className="text-sm text-muted-foreground">documentos centralizados</p>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl">
          <CardContent className="flex items-center gap-4 p-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-accent">
              <AlertTriangle className="h-6 w-6" />
            </span>
            <div>
              <p className="text-2xl font-black">{projects.reduce((total, project) => total + project.pendingCount, 0)}</p>
              <p className="text-sm text-muted-foreground">pendências demonstrativas</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.slug} className="overflow-hidden rounded-2xl shadow-sm">
            <CardHeader className="border-b bg-muted/30">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-accent shadow-sm">
                  <FolderKanban className="h-5 w-5" />
                </span>
                <Badge variant="outline" className={projectStatusClass(project.status)}>
                  {project.status}
                </Badge>
              </div>
              <CardTitle className="mt-4 text-xl leading-tight">{project.name}</CardTitle>
              <p className="text-sm font-semibold text-muted-foreground">{project.fundingSource}</p>
            </CardHeader>

            <CardContent className="space-y-5 p-5">
              <div className="flex items-center gap-2 rounded-xl border bg-background p-3 text-sm">
                <CalendarDays className="h-4 w-4 text-accent" />
                <span className="font-semibold">{project.mainDeadline}</span>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-muted-foreground">Andamento</span>
                  <span className="font-black">{project.progress}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-accent" style={{ width: `${project.progress}%` }} />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="rounded-xl border p-3">
                  <FileText className="mx-auto h-4 w-4 text-accent" />
                  <p className="mt-2 text-lg font-black">{project.documentsCount}</p>
                  <p className="text-xs text-muted-foreground">documentos</p>
                </div>
                <div className="rounded-xl border p-3">
                  <ReceiptText className="mx-auto h-4 w-4 text-accent" />
                  <p className="mt-2 text-lg font-black">{project.invoicesCount}</p>
                  <p className="text-xs text-muted-foreground">notas</p>
                </div>
                <div className="rounded-xl border p-3">
                  <AlertTriangle className="mx-auto h-4 w-4 text-accent" />
                  <p className="mt-2 text-lg font-black">{project.pendingCount}</p>
                  <p className="text-xs text-muted-foreground">pendências</p>
                </div>
              </div>

              <div className="rounded-xl bg-muted/40 p-4">
                <div className="flex items-center gap-2 text-sm font-bold">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  Próximos passos
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {project.nextSteps.slice(0, 2).map((step) => (
                    <li key={step}>• {step}</li>
                  ))}
                </ul>
              </div>

              <Button asChild className="w-full">
                <Link href={`/projetos/${project.slug}`}>
                  Abrir projeto <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
