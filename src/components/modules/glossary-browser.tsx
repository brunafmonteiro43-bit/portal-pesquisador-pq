"use client";

import { BookOpenText, Bot, FileText, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { FavoriteButton } from "@/components/modules/favorite-button";
import { SectionHeader } from "@/components/modules/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { GlossaryTerm } from "@/data/portal-content";

export function GlossaryBrowser({ terms }: { terms: GlossaryTerm[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase();
    return terms.filter((term) =>
      [
        term.term,
        term.category,
        term.area,
        term.simpleExplanation,
        term.technicalExplanation,
        term.cocenExample,
        ...term.synonyms,
        ...term.recommendedDocuments
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalized)
    );
  }, [query, terms]);

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Glossário Facilitado"
        title="Termos administrativos em linguagem clara"
        description="Cada termo combina explicação simples, definição técnica e exemplo aplicado à rotina da COCEN."
      />
      <div className="relative max-w-2xl">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="pl-10"
          placeholder="Filtrar por termo, área, documento ou exemplo"
        />
      </div>
      <div className="grid gap-4 xl:grid-cols-2">
        {filtered.map((term) => (
          <Card key={term.slug} className="overflow-hidden">
            <CardHeader className="border-b bg-muted/40">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-3">
                  <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <BookOpenText className="h-5 w-5" />
                  </span>
                  <div>
                    <CardTitle className="text-xl">{term.term}</CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground">{term.category}</p>
                  </div>
                </div>
                <Badge variant="outline">{term.area}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-5 p-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Explicação simples</p>
                <p className="mt-2 text-sm text-muted-foreground">{term.simpleExplanation}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Explicação técnica</p>
                <p className="mt-2 text-sm text-muted-foreground">{term.technicalExplanation}</p>
              </div>
              <div className="rounded-md border-l-4 border-accent bg-muted/40 p-3">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Exemplo prático na COCEN</p>
                <p className="mt-2 text-sm text-muted-foreground">{term.cocenExample}</p>
              </div>
              <div>
                <p className="text-sm font-semibold">Documentos recomendados</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {term.recommendedDocuments.map((document) => (
                    <Badge key={document} variant="secondary">
                      <FileText className="mr-1 h-3 w-3" /> {document}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 border-t pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  {term.synonyms.map((synonym) => (
                    <Badge key={synonym} variant="outline">
                      {synonym}
                    </Badge>
                  ))}
                </div>
                <Button asChild>
                  <Link href={`/chat?termo=${term.slug}`}>
                    <Bot className="mr-2 h-4 w-4" /> Perguntar à Atena
                  </Link>
                </Button>
                <FavoriteButton item={{ id: term.slug, type: "termo", title: term.term, href: "/glossario" }} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
