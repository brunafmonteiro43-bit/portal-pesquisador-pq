"use client";

import { ArrowRight, Loader2, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { PortalSearchResult } from "@/lib/search";

const quickSuggestions = ["rubrica", "patente", "FAPESP", "Funcamp", "prestação de contas"];

export function GlobalSearch({
  placeholder = "Busque por edital, rubrica, patente, Funcamp, modelo ou fluxo administrativo..."
}: {
  placeholder?: string;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PortalSearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const enabled = useMemo(() => query.trim().length >= 2, [query]);
  const groupedResults = useMemo(() => {
    return results.reduce<Record<string, PortalSearchResult[]>>((groups, result) => {
      groups[result.module] = groups[result.module] ?? [];
      groups[result.module].push(result);
      return groups;
    }, {});
  }, [results]);

  useEffect(() => {
    if (!enabled) {
      setResults([]);
      return;
    }

    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`, {
          signal: controller.signal
        });
        const data = (await response.json()) as { results: PortalSearchResult[] };
        setResults(data.results);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 250);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [enabled, query]);

  return (
    <Card>
      <CardContent className="p-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="h-12 pl-10 text-base"
            placeholder={placeholder}
          />
          {loading ? <Loader2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin" /> : null}
        </div>

        {!enabled ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {quickSuggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => setQuery(suggestion)}
                className="rounded-full border bg-white px-3 py-1.5 text-xs font-semibold text-muted-foreground transition hover:border-accent hover:bg-primary-soft hover:text-accent"
              >
                {suggestion}
              </button>
            ))}
          </div>
        ) : null}

        {results.length > 0 ? (
          <div className="mt-4 space-y-4">
            {Object.entries(groupedResults).map(([moduleName, moduleResults]) => (
              <section key={moduleName} className="rounded-xl border bg-white p-3">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <h3 className="text-xs font-black uppercase tracking-wide text-accent">{moduleName}</h3>
                  <span className="text-xs font-semibold text-muted-foreground">
                    {moduleResults.length} resultado{moduleResults.length > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="grid gap-2">
                  {moduleResults.map((result) => (
                    <Link
                      key={`${result.module}-${result.title}`}
                      href={result.href}
                      className="group rounded-lg border border-transparent p-3 transition hover:border-primary/20 hover:bg-primary-soft"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold text-foreground">{result.title}</p>
                          <p className="mt-1 line-clamp-2 text-sm leading-6 text-muted-foreground">{result.excerpt}</p>
                        </div>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-accent" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : null}

        {enabled && !loading && results.length === 0 ? (
          <div className="mt-4 rounded-xl border border-dashed p-4 text-sm leading-6 text-muted-foreground">
            Nenhum resultado encontrado. Tente buscar por agência, documento, termo administrativo ou fluxo de trabalho.
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
