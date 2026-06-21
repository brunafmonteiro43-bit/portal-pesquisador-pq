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

function getDashboardLabel(label: string, href: string) {
  if (href === "/dashboard") return "Dashboard";
  return label;
}

export function AppShell({ children, role }: { children: React.ReactNode; role: AppRole }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const visibleNavItems = navItems.filter((item) => item.roles.includes(role));

  const SidebarContent = ({ mobile = false }: { mobile?: boolean }) => (
    <div className="flex h-full flex-col bg-[#1f252b] text-white">
      <div className="px-5 pb-5 pt-6 lg:px-6 lg:pb-6 lg:pt-7">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 p-1 shadow-sm">
            <Image src="/assets/logo-unicamp.png" alt="UNICAMP" width={44} height={44} className="h-9 w-auto object-contain" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-black uppercase tracking-[0.18em] text-white/55">COCEN / UNICAMP</p>
            <h1 className="truncate text-xl font-black leading-tight">Ambiente do Pesquisador</h1>
          </div>
        </div>

        <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
          <p className="text-lg font-black">Olá, {roleLabels[role]}</p>
          <p className="mt-1 text-sm leading-6 text-white/62">Acompanhe pesquisa, fomento, documentos e apoio institucional.</p>
        </div>

        <Button
          asChild
          variant="outline"
          className="mt-4 w-full justify-start border-white/15 bg-white text-slate-800 shadow-sm hover:bg-slate-100 hover:text-slate-950"
        >
          <Link href="/" onClick={() => mobile && setOpen(false)}>
            ← Ver Portal Público
          </Link>
        </Button>
      </div>

      <nav className="min-h-0 flex-1 space-y-1 overflow-y-auto px-3 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:px-4">
        {visibleNavItems.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons];
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          const label = getDashboardLabel(item.label, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => mobile && setOpen(false)}
              className={cn(
                "group relative flex min-h-12 items-center gap-3 rounded-2xl px-4 text-sm font-bold text-white/72 transition hover:bg-white/[0.07] hover:text-white",
                active && "bg-white/[0.10] text-white shadow-[inset_4px_0_0_hsl(var(--accent))]"
              )}
            >
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] text-white/75 transition group-hover:bg-white/[0.10] group-hover:text-white",
                  active && "bg-accent text-white"
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              <span className="truncate">{label}</span>
            </Link>
          );
        })}
      </nav>

    </div>
  );

  return (
    <div className="min-h-screen bg-[#f4f6f8] text-foreground dark:bg-background">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[17.5rem] overflow-hidden border-r border-slate-950/20 shadow-[18px_0_50px_rgba(15,23,42,0.12)] lg:block">
        <SidebarContent />
      </aside>

      <header className="sticky top-0 z-30 border-b bg-white/92 backdrop-blur-xl dark:bg-background/95 lg:ml-[17.5rem]">
        <div className="flex min-h-[4.75rem] items-center gap-3 px-4 py-3 md:px-6 xl:px-8">
          <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setOpen(true)} aria-label="Abrir menu">
            <Menu className="h-4 w-4" />
          </Button>

          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">Ambiente do Pesquisador</p>
            <p className="mt-0.5 truncate text-sm font-semibold text-muted-foreground">Dashboard institucional de apoio à pesquisa</p>
          </div>

          <div className="mx-4 hidden min-w-0 max-w-2xl flex-1 items-center rounded-2xl border bg-slate-50 px-4 shadow-inner lg:flex">
            <Search className="mr-2 h-4 w-4 text-accent" />
            <input
              className="h-11 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              placeholder="Buscar edital, rubrica, patente, modelo, FAQ ou documento..."
            />
          </div>

          <div className="ml-auto flex items-center gap-2">
            <Button asChild variant="outline" className="hidden border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-950 lg:inline-flex">
              <Link href="/">← Ver Portal Público</Link>
            </Button>
            <Button variant="outline" size="icon" aria-label="Notificações">
              <Bell className="h-4 w-4" />
            </Button>
            <ThemeToggle />
            <div className="hidden items-center gap-2 rounded-2xl border bg-white px-3 py-2 text-sm shadow-sm md:flex dark:bg-card">
              <UserCircle className="h-5 w-5 text-accent" />
              <span className="font-bold">{roleLabels[role]}</span>
            </div>
          </div>
        </div>

        <div className="border-t px-4 py-3 md:px-6 lg:hidden">
          <div className="flex min-w-0 items-center rounded-2xl border bg-slate-50 px-4 shadow-inner">
            <Search className="mr-2 h-4 w-4 text-accent" />
            <input
              className="h-11 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              placeholder="Buscar no ambiente..."
            />
          </div>
        </div>
      </header>

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[18rem] overflow-hidden shadow-2xl transition-transform lg:hidden",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="absolute right-3 top-3 z-10">
          <Button variant="outline" size="icon" onClick={() => setOpen(false)} aria-label="Fechar menu" className="border-white/15 bg-white/10 text-white hover:bg-white/15 hover:text-white">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <SidebarContent mobile />
      </aside>

      {open && <button className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)} />}

      <main className="min-w-0 px-4 py-6 md:px-6 lg:ml-[17.5rem] lg:px-8 lg:py-8 xl:px-10">
        <div className="mx-auto max-w-[92rem]">{children}</div>
      </main>
    </div>
  );
}
