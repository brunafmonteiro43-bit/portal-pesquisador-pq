import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { InstitutionalFooter } from "@/components/layout/institutional-footer";
import { PublicHeader } from "@/components/layout/public-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type PublicItem = {
  title: string;
  description: string;
  meta?: string;
  tags?: string[];
};

export function PublicPage({
  eyebrow,
  title,
  description,
  items,
  ctaHref = "/login",
  ctaLabel = "Entrar no Ambiente do Pesquisador"
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: PublicItem[];
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-foreground">
      <PublicHeader />
      <main>
        <section className="connection-pattern border-b bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
            <Badge variant="secondary" className="text-accent">
              {eyebrow}
            </Badge>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-end">
              <div>
                <h1 className="max-w-4xl text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-6xl">{title}</h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{description}</p>
              </div>
              <div className="rounded-3xl border bg-slate-50 p-4 shadow-inner">
                <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm">
                  <Search className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold text-muted-foreground">Buscar nesta área pública...</span>
                </div>
                <Button asChild className="mt-4 w-full">
                  <Link href={ctaHref}>{ctaLabel}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <Card key={item.title} className="connection-corner rounded-2xl border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md">
                <CardContent className="p-6">
                  {item.meta ? <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">{item.meta}</p> : null}
                  <h2 className="mt-2 text-2xl font-black tracking-[-0.02em] text-slate-950">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  {item.tags?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="connection-pattern mt-12 rounded-3xl border bg-white p-6 shadow-sm md:flex md:items-center md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-accent">Atena</p>
              <h2 className="mt-2 text-2xl font-black">Precisa de orientação personalizada?</h2>
              <p className="mt-2 text-muted-foreground">Entre no Ambiente do Pesquisador para conversar com a Atena e acessar recursos internos.</p>
            </div>
            <Button asChild className="mt-5 md:mt-0">
              <Link href="/login?callbackUrl=%2Fdashboard%2Fatena%3Fintent%3Dchat-atena&message=atena-chat">
                Entrar para conversar <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <InstitutionalFooter />
    </div>
  );
}
