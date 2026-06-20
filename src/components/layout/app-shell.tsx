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
  SlidersHorizontal,
  Star,
  UserCircle,
  X
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
  Star,
  SlidersHorizontal
};

const researcherMenuLabels: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/fomento": "Editais",
  "/trilhas": "Projetos",
  "/templates": "Documentos",
  "/centros": "Centros e Núcleos",
  "/glossario": "Serviços",
  "/favoritos": "Favoritos",
  "/faq": "Configurações"
};

const researcherMenuOrder = ["/dashboard", "/fomento", "/trilhas", "/templates", "/centros", "/glossario", "/favoritos", "/faq"];

export function AppShell({ children, role }: { children: React.ReactNode; role: AppRole }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const visibleNavItems = navItems.filter((item) => item.roles.includes(role));
  const menuItems = researcherMenuOrder
    .map((href) => visibleNavItems.find((item) => item.href === href))
    .filter((item): item is (typeof visibleNavItems)[number] => Boolean(item));

  const renderNavigation = (mobile = false) => (
    <nav className="space-y-1.5">
      {menuItems.map((item) => {
        const Icon = icons[item.icon as keyof typeof icons] ?? LayoutDashboard;
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
        const label = researcherMenuLabels[item.href] ?? item.shortLabel ?? item.label;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => mobile && setOpen(false)}
            className={cn(
              "group flex min-h-12 items-center gap-3 rounded-xl px-4 text-sm font-semibold text-white/68 transition-all hover:bg-white/8 hover:text-white",
              active && "bg-white/10 text-white shadow-[inset_4px_0_0_hsl(var(--accent))]"
            )}
          >
            <Icon className={cn("h-4 w-4 shrink-0 text-white/58 transition-colors group-hover:text-white", active && "text-accent")} />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen bg-[#f4f5f7] text-foreground">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-white/10 bg-graphite text-white shadow-2xl lg:block">
        <div className="flex h-full flex-col p-5">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-lg font-black tracking-tight">Olá, Pesquisador</p>
            <p className="mt-1 text-sm font-medium text-white/62">Bem-vindo ao seu ambiente</p>
          </div>
          <div className="mt-8 flex-1">{renderNavigation()}</div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-xs leading-5 text-white/60">
            <p className="font-bold text-white">Ambiente do Pesquisador</p>
            <p>COCEN/UNICAMP</p>
          </div>
        </div>
      </aside>

      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur lg:ml-72">
        <div className="flex min-h-20 items-center gap-3 px-4 md:px-8">
          <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setOpen(true)} aria-label="Abrir menu">
            <Menu className="h-4 w-4" />
          </Button>
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">Ambiente do Pesquisador</p>
            <h1 className="truncate text-xl font-black tracking-tight text-[#20232b] md:text-2xl">Dashboard institucional</h1>
          </div>
          <div className="ml-auto hidden min-w-0 max-w-xl flex-1 items-center rounded-2xl border border-slate-200 bg-[#f7f8fa] px-4 md:flex">
            <Search className="mr-3 h-4 w-4 text-slate-400" />
            <input className="h-12 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="Buscar no ambiente..." />
          </div>
          <Button variant="ghost" size="icon" aria-label="Notificações" className="rounded-full text-slate-600 hover:text-accent">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Ajuda" className="rounded-full text-slate-600 hover:text-accent">
            <CircleHelp className="h-5 w-5" />
          </Button>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-sm font-black text-white shadow-lg shadow-primary/20" title={roleLabels[role]}>
            <UserCircle className="h-5 w-5" />
          </div>
        </div>
      </header>

      <aside className={cn("fixed inset-y-0 left-0 z-50 w-80 bg-graphite p-5 text-white shadow-2xl transition-transform lg:hidden", open ? "translate-x-0" : "-translate-x-full")}>
        <div className="mb-6 flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div>
            <p className="text-lg font-black">Olá, Pesquisador</p>
            <p className="text-sm text-white/62">Bem-vindo ao seu ambiente</p>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Fechar menu" className="text-white hover:bg-white/10 hover:text-white">
            <X className="h-4 w-4" />
          </Button>
        </div>
        {renderNavigation(true)}
      </aside>

      {open && <button className="fixed inset-0 z-40 bg-slate-950/60 lg:hidden" onClick={() => setOpen(false)} aria-label="Fechar menu" />}

      <main className="min-w-0 px-4 py-6 md:px-8 lg:ml-72 lg:py-8">{children}</main>
    </div>
  );
}
