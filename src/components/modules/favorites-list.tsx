"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getStoredFavorites, type FavoriteItem } from "@/components/modules/favorite-button";
import { SectionHeader } from "@/components/modules/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mostAccessedDocuments } from "@/data/portal-content";

export function FavoritesList() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    function sync() {
      setFavorites(getStoredFavorites());
    }

    sync();
    window.addEventListener("pq-favorites-change", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("pq-favorites-change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Área pessoal"
        title="Meus Favoritos"
        description="Acesse rapidamente documentos, editais, termos do glossário e trilhas marcados como favoritos neste navegador."
      />

      <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>Itens favoritados</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {favorites.length ? (
              favorites.map((item) => (
                <Link key={item.id} href={item.href} className="flex items-center justify-between rounded-md border p-4 hover:border-accent">
                  <span>
                    <span className="block font-semibold">{item.title}</span>
                    <Badge className="mt-2" variant="secondary">
                      {item.type}
                    </Badge>
                  </span>
                  <Button variant="ghost">Abrir</Button>
                </Link>
              ))
            ) : (
              <div className="rounded-xl border border-dashed bg-muted/30 p-5">
                <p className="font-bold text-foreground">Sua biblioteca pessoal ainda está vazia.</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Use o botão Favoritar em documentos, editais, termos e trilhas para montar uma lista rápida do que você mais consulta.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button asChild size="sm" variant="outline">
                    <Link href="/dashboard/modelos">Ver documentos</Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link href="/dashboard/oportunidades">Ver editais</Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="/dashboard/glossario">Explorar glossário</Link>
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mais acessados pelos pesquisadores</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {mostAccessedDocuments.map((item) => (
              <div key={item} className="rounded-md border p-3">
                <p className="text-sm font-semibold">{item}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
