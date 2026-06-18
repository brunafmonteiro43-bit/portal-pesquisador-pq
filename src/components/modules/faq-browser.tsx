"use client";

import { ChevronDown, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/modules/section-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type FaqItem = {
  question: string;
  answer: string;
  category: string;
  tags: string[];
};

export function FaqBrowser({ items }: { items: FaqItem[] }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(items[0]?.question ?? "");

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase();
    return items.filter((item) =>
      [item.question, item.answer, item.category, ...item.tags].join(" ").toLowerCase().includes(normalized)
    );
  }, [items, query]);

  return (
    <div className="space-y-6">
      <SectionHeader eyebrow="FAQ" title="Perguntas frequentes" />
      <div className="relative max-w-2xl">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input value={query} onChange={(event) => setQuery(event.target.value)} className="pl-10" placeholder="Buscar no FAQ" />
      </div>
      <Card>
        <CardContent className="divide-y p-0">
          {filtered.map((item) => {
            const active = open === item.question;
            return (
              <div key={item.question} className="p-4">
                <button
                  className="flex w-full items-start justify-between gap-4 text-left"
                  onClick={() => setOpen(active ? "" : item.question)}
                >
                  <span className="font-medium">{item.question}</span>
                  <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform", active && "rotate-180")} />
                </button>
                {active ? (
                  <div className="mt-3 space-y-3">
                    <p className="text-sm text-muted-foreground">{item.answer}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge>{item.category}</Badge>
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
