"use client";

import { ExternalLink, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/modules/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { CocenCenter } from "@/data/portal-content";

const areas = ["Todos", "Saúde", "Tecnologia", "Energia", "Humanidades", "Meio Ambiente", "Ciências Sociais", "Interdisciplinar"];

export function CentersBrowser({ centers }: { centers: CocenCenter[] }) {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState("Todos");

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase();

    return centers.filter((center) => {
      const matchesArea = area === "Todos" || center.area === area;
      const matchesQuery = [center.name, center.description, center.contact, center.area, ...center.researchLines]
        .join(" ")
        .toLowerCase()
        .includes(normalized);

      return matchesArea && matchesQuery;
    });
  }, [area, centers, query]);

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="COCEN/UNICAMP"
        title="Centros e Núcleos da COCEN"
        description="Explore áreas de atuação, contatos e linhas de pesquisa dos Centros e Núcleos vinculados à COCEN."
      />

      <div className="grid gap-3 lg:grid-cols-[1fr_auto]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={query} onChange={(event) => setQuery(event.target.value)} className="pl-10" placeholder="Buscar por nome, contato ou linha de pesquisa" />
        </div>
        <div className="flex flex-wrap gap-2">
          {areas.map((item) => (
            <Button key={item} variant={area === item ? "default" : "outline"} onClick={() => setArea(item)}>
              {item}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {filtered.map((center) => (
          <Card key={center.name}>
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge>{center.area}</Badge>
                <Button asChild variant="outline" size="sm">
                  <a href={center.site} target="_blank" rel="noreferrer">
                    Site <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <CardTitle className="text-xl">{center.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-6 text-muted-foreground">{center.description}</p>
              <div>
                <p className="text-sm font-semibold">Contato</p>
                <p className="mt-1 text-sm text-muted-foreground">{center.contact}</p>
              </div>
              <div>
                <p className="text-sm font-semibold">Linhas de pesquisa</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {center.researchLines.map((line) => (
                    <Badge key={line} variant="secondary">
                      {line}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
