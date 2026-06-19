"use client";

import {
  Bell,
  BookOpenText,
  Bot,
  Building2,
  CalendarDays,
  CircleHelp,
  Files,
  GitBranch,
  Landmark,
  LayoutDashboard,
  Lightbulb,
  Menu,
  Search,
  ShieldCheck,
  Star,
  UserCircle,
  X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { type AppRole, navItems, roleLabels } from "@/lib/permissions";
import { cn } from "@/lib/utils";

const icons = {
  LayoutDashboard,
  BookOpenText,
  Files,
  Landmark,
  GitBranch,
  Lightbulb,
  CircleHelp,
  Bot,
  ShieldCheck,
  Building2,
  CalendarDays,
  Star
};

export function AppShell({ children, role }: { children: React.ReactNode; role: AppRole }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const visibleNavItems = navItems.filter((item) => item.roles.includes(role));

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-foreground dark:bg-background">
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur dark:bg-background/95">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 md:px-6">
          <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setOpen(true)} aria-label="Abrir menu">
            <Menu className="h-4 w-4" />
          </Button>

          <div className="flex min-w-0 items-center gap-3">
            <Link href="https://www.unicamp.br/" aria-label="Acessar site da UNICAMP">
              <Image src="/assets/logo-unicamp.png" alt="UNICAMP" width={48} height={48} className="h-9 w-auto object-contain" />
            </Link>
            <Link href="https://www.cocen.unicamp.br/" aria-label="Acessar site da COCEN" className="hidden sm:block">
              <Image src="/assets/logo-cocen.jpg" alt="COCEN" width={130} height={40} className="h-8 w-auto object-contain" />
            </Link>
            <Link href="/" className="min-w-0">
              <span className="block truncate text-base font-black text-foreground">Portal do Pesquisador</span>
              <span className="block truncate text-xs font-semibold text-muted-foreground">Plataforma de gestão da pesquisa</span>
            </Link>
          </div>

          <div className="mx-2 hidden min-w-0 flex-1 items-center rounded-xl border bg-muted/35 px-3 lg:flex">
            <Search className="mr-2 h-4 w-4 text-muted-foreground" />
            <input
              className="h-10 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              placeholder="Buscar edital, rubrica, patente, modelo, FAQ ou documento..."
            />
          </div>

          <div className="ml-auto flex items-center gap-2">
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link href="/">← Ver Portal Público</Link>
            </Button>
            <Button variant="outline" size="icon" aria-label="Notificações">
              <Bell className="h-4 w-4" />
            </Button>
            <ThemeToggle />
            <div className="hidden items-center gap-2 rounded-xl border bg-white px-3 py-2 text-sm shadow-sm md:flex dark:bg-card">
              <UserCircle className="h-5 w-5 text-accent" />
              <span className="font-semibold">{roleLabels[role]}</span>
            </div>
          </div>
        </div>

        <nav className="hidden border-t bg-white lg:block dark:bg-background">
          <div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-4 md:px-6">
            {visibleNavItems.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "border-b-2 border-transparent px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-accent hover:text-foreground",
                    active && "border-accent text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-80 border-r bg-card p-4 shadow-xl transition-transform lg:hidden",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="font-bold">Portal do Pesquisador</p>
            <p className="text-sm text-muted-foreground">Menu de trabalho</p>
          </div>
          <Button variant="outline" size="icon" onClick={() => setOpen(false)} aria-label="Fechar menu">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <Button asChild variant="outline" className="mb-4 w-full justify-start">
          <Link href="/" onClick={() => setOpen(false)}>
            ← Ver Portal Público
          </Link>
        </Button>
        <nav className="space-y-1">
          {visibleNavItems.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex min-h-11 items-center gap-3 rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                  active && "bg-accent text-white hover:bg-accent hover:text-white"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {open && <button className="fixed inset-0 z-40 bg-background/75 lg:hidden" onClick={() => setOpen(false)} />}

      <main className="mx-auto min-w-0 max-w-7xl px-4 py-8 md:px-6 lg:py-10">{children}</main>
    </div>
  );
}
