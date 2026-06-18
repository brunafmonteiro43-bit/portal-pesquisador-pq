"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type FavoriteItem = {
  id: string;
  type: "documento" | "edital" | "termo" | "trilha";
  title: string;
  href: string;
};

const storageKey = "pq-favorites";

function readFavorites(): FavoriteItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    return JSON.parse(window.localStorage.getItem(storageKey) ?? "[]") as FavoriteItem[];
  } catch {
    return [];
  }
}

export function getStoredFavorites() {
  return readFavorites();
}

export function FavoriteButton({ item, className }: { item: FavoriteItem; className?: string }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(readFavorites().some((favorite) => favorite.id === item.id));
  }, [item.id]);

  function toggleFavorite() {
    const favorites = readFavorites();
    const exists = favorites.some((favorite) => favorite.id === item.id);
    const next = exists ? favorites.filter((favorite) => favorite.id !== item.id) : [...favorites, item];

    window.localStorage.setItem(storageKey, JSON.stringify(next));
    window.dispatchEvent(new Event("pq-favorites-change"));
    setActive(!exists);
  }

  return (
    <Button type="button" variant="outline" className={cn("gap-2", className)} onClick={toggleFavorite}>
      <Star className={cn("h-4 w-4", active && "fill-accent text-accent")} />
      {active ? "Favorito" : "Favoritar"}
    </Button>
  );
}
