"use client";

import { ExternalLink, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { FavoriteButton } from "@/components/modules/favorite-button";
import { SectionHeader } from "@/components/modules/section-header";
import { StatusPill } from "@/components/modules/status-pill";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { FundingCall } from "@/data/portal-content";

const agencies = ["Todos", "FAPESP", "CAPES", "CNPq", "FINEP", "Empresas", "Internacional"];

export function OpportunitiesBrowser({ calls }: { calls: FundingCall[] }) {
  const [agency, setAgency] = useState("Todos");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase();

    return calls.filter((call) => {
      const matchesAgency = agency === "Todos" || call.agency === agency;
      const matchesQuery = [call.title, call.area, call.audience, call.summary, call.status, ...call.categories, ...call.requiredDocuments]
        .join(" ")
        .toLowerCase()
        .includes(normalized);

      return matchesAgency && matchesQuery;
    });
  }, [agency, calls, query]);

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Fomento"
        title="Central de Oportunidades"
        description="Editais e chamadas organizados por agência, prazo, área, público-alvo e status."
      />

      <div className="space-y-3 rounded-lg border bg-card p-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={query} onChange={(event) => setQuery(event.target.value)} className="pl-10" placeholder="Buscar oportunidade, área ou público-alvo" />
        </div>
        <div className="flex flex-wrap gap-2">
          {agencies.map((item) => (
            <Button key={item} variant={agency === item ? "default" : "outline"} onClick={() => setAgency(item)}>
              {item}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {filtered.map((call) => (
          <Card key={call.slug} className={call.closingSoon ? "border-accent/60 shadow-sm" : undefined}>
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  <Badge>{call.agency}</Badge>
                  <StatusPill status={call.status} />
                  {call.closingSoon ? <Badge variant="secondary" className="text-accent">Encerramento próximo</Badge> : null}
                </div>
                <FavoriteButton item={{ id: call.slug, type: "edital", title: call.title, href: "/dashboard/oportunidades" }} />
              </div>
              <CardTitle className="text-xl">{call.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-6 text-muted-foreground">{call.summary}</p>
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <p><span className="font-semibold">Prazo:</span> {call.deadline}</p>
                <p><span className="font-semibold">Área:</span> {call.area}</p>
                <p><span className="font-semibold">Público-alvo:</span> {call.audience}</p>
                <p><span className="font-semibold">Valor:</span> {call.value}</p>
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
              <Button asChild variant="outline">
                <a href={call.link}>
                  Abrir oportunidade <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
