"use client";

import { Loader2, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { PortalSearchResult } from "@/lib/search";

export function GlobalSearch({
  placeholder = "Busque por edital, rubrica, patente, Funcamp, modelo ou fluxo administrativo..."
}: {
  placeholder?: string;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PortalSearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const enabled = useMemo(() => query.trim().length >= 2, [query]);

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

        {results.length > 0 ? (
          <div className="mt-4 grid gap-2">
            {results.map((result) => (
              <Link key={`${result.module}-${result.title}`} href={result.href} className="rounded-md border p-3 hover:bg-muted">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium">{result.title}</p>
                  <span className="text-xs text-muted-foreground">{result.module}</span>
                </div>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{result.excerpt}</p>
              </Link>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
