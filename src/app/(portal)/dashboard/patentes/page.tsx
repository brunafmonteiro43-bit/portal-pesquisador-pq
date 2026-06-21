import { ArrowRight, FileText, Lightbulb, ShieldCheck, TimerReset } from "lucide-react";
import { SectionHeader } from "@/components/modules/section-header";
import { StatusPill } from "@/components/modules/status-pill";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { patentGuides } from "@/data/portal-content";

export default function PatentesPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Inovação"
        title="Patentes e Inovação"
        description="Orientações sobre sigilo, comunicação de invenção, Inova Unicamp, INPI, transferência de tecnologia e royalties."
        action={
          <Button>
            <Lightbulb className="mr-2 h-4 w-4" /> Nova triagem
          </Button>
        }
      />

      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Antes de publicar</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Preserve sigilo antes de artigos, eventos, resumos, defesas ou reuniões sem confidencialidade.</p>
            <p className="inline-flex items-center gap-2 text-foreground">
              <ShieldCheck className="h-4 w-4 text-accent" /> Protege a novidade
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Comunicação de invenção</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Registre inventores, financiamento, aplicação, evidências técnicas e possíveis divulgações.</p>
            <p className="inline-flex items-center gap-2 text-foreground">
              <TimerReset className="h-4 w-4 text-accent" /> 3 a 5 dias úteis
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Transferência</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Resultados protegidos podem apoiar licenciamento, parceria, transferência tecnológica e royalties.</p>
            <p className="inline-flex items-center gap-2 text-foreground">
              <Lightbulb className="h-4 w-4 text-accent" /> Impacto e inovação
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4">
        {patentGuides.map((guide) => (
          <Card key={guide.slug}>
            <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
              <div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{guide.area}</Badge>
                  <StatusPill status={guide.status} />
                </div>
                <CardTitle className="mt-3 text-xl">{guide.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-6 text-muted-foreground">{guide.summary}</p>
              <div className="grid gap-3 lg:grid-cols-3">
                {guide.details.map((detail) => (
                  <div key={detail} className="rounded-md border bg-muted/30 p-3 text-sm text-muted-foreground">
                    <FileText className="mb-2 h-4 w-4 text-accent" />
                    {detail}
                  </div>
                ))}
              </div>
              <Button variant="outline">
                Ver documentos relacionados <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
