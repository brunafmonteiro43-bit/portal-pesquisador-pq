import { CalendarClock, ExternalLink, SlidersHorizontal } from "lucide-react";
import { FavoriteButton } from "@/components/modules/favorite-button";
import { SectionHeader } from "@/components/modules/section-header";
import { StatusPill } from "@/components/modules/status-pill";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fundingCalls } from "@/data/portal-content";

export default function FomentoPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Fomento"
        title="Fomento e Editais"
        description="Filtros por agência, área de pesquisa, prazo, valor e status. Para uma busca completa, acesse a Central de Oportunidades."
        action={
          <Button asChild variant="outline">
            <a href="/dashboard/oportunidades">
              <SlidersHorizontal className="mr-2 h-4 w-4" /> Central de Oportunidades
            </a>
          </Button>
        }
      />

      <div className="grid gap-4">
        {fundingCalls.map((call) => (
          <Card key={call.slug} className={call.closingSoon ? "border-accent/60" : undefined}>
            <CardHeader className="flex flex-col gap-3 space-y-0 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>{call.agency}</Badge>
                  <StatusPill status={call.status} />
                  {call.closingSoon ? <Badge variant="secondary" className="text-accent">Prazo próximo</Badge> : null}
                </div>
                <CardTitle className="mt-3 text-xl">{call.title}</CardTitle>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarClock className="h-4 w-4" />
                {call.deadline}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-6 text-muted-foreground">{call.summary}</p>
              <div className="grid gap-3 text-sm sm:grid-cols-3">
                <p><span className="font-semibold">Área:</span> {call.area}</p>
                <p><span className="font-semibold">Valor:</span> {call.value}</p>
                <p><span className="font-semibold">Público-alvo:</span> {call.audience}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {call.categories.map((category) => (
                  <Badge key={category} variant="secondary">
                    {category}
                  </Badge>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold">Documentos necessários</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {call.requiredDocuments.map((document) => (
                    <Badge key={document} variant="outline">
                      {document}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button asChild variant="outline">
                  <a href={call.link}>
                    <ExternalLink className="mr-2 h-4 w-4" /> Abrir edital
                  </a>
                </Button>
                <FavoriteButton item={{ id: call.slug, type: "edital", title: call.title, href: "/dashboard/editais" }} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
