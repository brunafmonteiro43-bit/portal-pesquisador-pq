"use client";

import {
  AlertTriangle,
  ArrowRight,
  CalendarDays,
  ClipboardCheck,
  FileText,
  FolderKanban,
  ReceiptText,
  UploadCloud
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { researchProjects } from "@/data/research-projects";

const filters = ["Todos", "Em execução", "Prestação de contas", "Em análise", "Com pendências"];

export default function ResearchProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredProjects = useMemo(() => {
    return researchProjects.filter((project) => {
      if (activeFilter === "Todos") return true;
      if (activeFilter === "Com pendências") return project.pending > 0;
      return project.status === activeFilter;
    });
  }, [activeFilter]);

  return (
    <div className="space-y-8">
      <section className="connection-pattern overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-accent">Ambiente do Pesquisador</p>
            <h1 className="mt-2 text-4xl font-black tracking-[-0.03em] text-slate-950 md:text-5xl">Projetos de Pesquisa</h1>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Acompanhe projetos, documentos, notas fiscais, rubricas, prazos e prestação de contas em um único painel.
            </p>
          </div>
          <Button asChild variant="outline" className="w-fit">
            <Link href="/dashboard/atena">Perguntar à Atena</Link>
          </Button>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter}
              type="button"
              variant={activeFilter === filter ? "default" : "outline"}
              className={activeFilter === filter ? "shadow-sm" : "border-slate-200 bg-white text-slate-700"}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-3">
        {filteredProjects.map((project) => {
          const isAccountability = project.status === "Prestação de contas";

          return (
            <Card
              key={project.slug}
              className={`connection-corner rounded-2xl bg-white shadow-sm ${
                isAccountability ? "border-accent/50 ring-1 ring-accent/15" : "border-slate-200"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <FolderKanban className="h-6 w-6" />
                  </span>
                  <Badge variant="secondary" className="text-accent">
                    {project.status}
                  </Badge>
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

                {isAccountability ? (
                  <div className="mt-5 rounded-2xl border border-accent/25 bg-accent/5 p-4">
                    <div className="flex items-start gap-3">
                      <ClipboardCheck className="mt-0.5 h-5 w-5 text-accent" />
                      <div>
                        <p className="font-black text-slate-950">Prestação de contas em andamento</p>
                        <div className="mt-3 grid gap-2 text-sm text-slate-700">
                          <p>
                            <span className="font-bold">Prazo de entrega:</span> {project.accountabilityDeadline}
                          </p>
                          <p>
                            <span className="font-bold">Notas fiscais:</span> {project.invoices} lançadas
                          </p>
                          <p>
                            <span className="font-bold">Pendências:</span> {project.pending} itens para revisar
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button asChild className="mt-4 w-full">
                      <Link href={`/dashboard/projetos/${project.slug}`}>
                        Organizar prestação de contas <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                ) : null}

                <div className="mt-6 grid gap-2">
                  <Button asChild className="w-full" variant={isAccountability ? "outline" : "default"}>
                    <Link href={`/dashboard/projetos/${project.slug}`}>
                      Abrir projeto <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <div className="grid gap-2">
                    <Button type="button" variant="outline" className="w-full border-slate-200 bg-white text-slate-700">
                      <UploadCloud className="mr-2 h-4 w-4" /> Anexar nota fiscal
                    </Button>
                    <Button asChild variant="outline" className="w-full border-slate-200 bg-white text-slate-700">
                      <Link href={`/dashboard/projetos/${project.slug}`}>
                        <ReceiptText className="mr-2 h-4 w-4" /> Ver prestação de contas
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>
    </div>
  );
}
