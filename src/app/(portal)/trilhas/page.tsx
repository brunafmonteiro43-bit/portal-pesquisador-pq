import { ArrowDown, CheckCircle2, Clock3, GitBranch, UserRound } from "lucide-react";
import { FavoriteButton } from "@/components/modules/favorite-button";
import { SectionHeader } from "@/components/modules/section-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supportTrails } from "@/data/portal-content";

export default function TrilhasPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Processos"
        title="Trilhas de Apoio"
        description="Fluxogramas visuais para apoiar o pesquisador em cada etapa: ideia, financiamento, execução, inovação e prestação de contas."
      />

      <div className="grid gap-5">
        {supportTrails.map((trail) => (
          <Card key={trail.slug} className="overflow-hidden">
            <CardHeader className="border-b bg-muted/35">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">{trail.category}</Badge>
                    <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                      <GitBranch className="h-4 w-4" /> {trail.steps.length} etapas detalhadas
                    </span>
                  </div>
                  <CardTitle className="mt-3 text-2xl">{trail.title}</CardTitle>
                  <p className="mt-2 text-sm text-muted-foreground">{trail.summary}</p>
                </div>
                <FavoriteButton item={{ id: trail.slug, type: "trilha", title: trail.title, href: "/trilhas" }} />
              </div>
            </CardHeader>
            <CardContent className="space-y-6 p-5">
              <div className="overflow-x-auto rounded-lg border bg-background p-4">
                <div className="flex min-w-max items-center gap-3">
                  {trail.flow.map((step, index) => (
                    <div key={step} className="flex items-center gap-3">
                      <div className="rounded-lg border bg-card px-4 py-3 text-center shadow-sm">
                        <span className="block text-xs font-bold text-accent">Etapa {index + 1}</span>
                        <span className="block whitespace-nowrap font-bold">{step}</span>
                      </div>
                      {index < trail.flow.length - 1 ? <ArrowDown className="-rotate-90 text-accent" /> : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-3">
                {trail.steps.map((step, index) => (
                  <div key={step.title} className="rounded-lg border bg-card p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
                        {index + 1}
                      </span>
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.whatToDo}</p>
                    <div className="mt-4 space-y-3 text-sm">
                      <p className="flex gap-2">
                        <UserRound className="mt-0.5 h-4 w-4 text-accent" />
                        <span><strong>Responsável:</strong> {step.responsible}</span>
                      </p>
                      <p className="flex gap-2">
                        <Clock3 className="mt-0.5 h-4 w-4 text-accent" />
                        <span><strong>Prazo estimado:</strong> {step.estimatedTime}</span>
                      </p>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-semibold">Documentos necessários</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {step.documents.map((document) => (
                          <Badge key={document} variant="secondary">
                            {document}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <p className="mt-4 rounded-md bg-muted p-3 text-sm">
                      <strong>Próximo passo:</strong> {step.nextStep}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
