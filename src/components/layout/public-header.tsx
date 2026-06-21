"use client";

import { LockKeyhole, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const publicNav = [
  { label: "Início", mobileLabel: "Início", href: "/" },
  { label: "Glossário", mobileLabel: "Glossário", href: "/glossario" },
  { label: "Modelos e Templates", mobileLabel: "Modelos", href: "/templates" },
  { label: "Fomento e Editais", mobileLabel: "Editais", href: "/fomento" },
  { label: "Trilhas de Apoio", mobileLabel: "Trilhas", href: "/trilhas" },
  { label: "Patentes", mobileLabel: "Patentes", href: "/patentes" },
  { label: "Centros e Núcleos", mobileLabel: "Centros", href: "/centros" },
  { label: "Atena", mobileLabel: "Atena", href: "/login?callbackUrl=%2Fchat%3Fintent%3Duse-atena&message=atena-use" }
];

export function PublicHeader({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const titleSize = compact ? "text-lg" : "text-xl sm:text-2xl lg:text-xl 2xl:text-2xl";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-[0_10px_30px_rgba(15,23,42,0.07)] backdrop-blur-xl">
      <div className="mx-auto max-w-[118rem] px-4 py-4 lg:px-6 lg:py-3 xl:px-8">
        <div className="grid gap-4 lg:grid-cols-[minmax(25rem,0.95fr)_minmax(34rem,1.45fr)_minmax(20rem,0.72fr)] lg:items-center lg:gap-5 2xl:grid-cols-[minmax(33rem,1fr)_minmax(43rem,1.5fr)_minmax(24rem,0.8fr)]">
          <div className="min-w-0">
            <div className="flex items-center justify-between gap-3 lg:justify-start">
              <div className="flex shrink-0 items-center gap-3 sm:gap-4 lg:gap-5">
                <Link href="https://www.unicamp.br/" aria-label="Acessar site da UNICAMP" className="shrink-0">
                  <Image
                    src="/assets/logo-unicamp.png"
                    alt="UNICAMP"
                    width={64}
                    height={64}
                    className="h-10 w-auto object-contain sm:h-12 lg:h-11 2xl:h-14"
                  />
                </Link>
                <Link href="https://www.cocen.unicamp.br/" aria-label="Acessar site da COCEN" className="shrink-0">
                  <Image
                    src="/assets/logo-cocen.jpg"
                    alt="COCEN"
                    width={180}
                    height={54}
                    className="h-9 w-auto rounded-sm object-contain sm:h-11 lg:h-10 2xl:h-12"
                  />
                </Link>
              </div>

              <Button asChild className="h-10 shrink-0 whitespace-nowrap px-3 text-xs shadow-sm sm:px-4 sm:text-sm lg:hidden">
                <Link href="/login">
                  <LockKeyhole className="mr-1.5 h-3.5 w-3.5" />
                  Entrar
                </Link>
              </Button>
            </div>

            <Link href="/" className="mt-4 block min-w-0 rounded-2xl border border-slate-100 border-l-4 border-l-accent bg-slate-50/70 px-4 py-3 shadow-sm lg:mt-0 lg:border-0 lg:border-l-[5px] lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none lg:inline-block lg:pl-5 lg:align-middle 2xl:ml-5">
              <span className={`block font-black leading-none tracking-[-0.025em] text-slate-950 ${titleSize}`}>
                Portal do Pesquisador
              </span>
              <span className="mt-1 block text-xs font-bold leading-tight text-accent sm:text-sm lg:text-xs 2xl:text-sm">
                Pesquisa • Inovação • Fomento
              </span>
              <span className="mt-0.5 block text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-500 sm:text-xs lg:text-[0.65rem] 2xl:text-xs">
                COCEN / UNICAMP
              </span>
            </Link>
          </div>

          <nav className="-mx-4 flex min-w-0 items-center gap-2.5 overflow-x-auto px-4 pb-1.5 pt-0.5 text-sm font-bold [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:justify-center lg:gap-1.5 lg:overflow-visible lg:px-0 lg:pb-0 lg:text-[0.76rem] xl:gap-2 xl:text-[0.82rem] 2xl:gap-3 2xl:text-sm">
            {publicNav.map((item) => {
              const isActive = item.href === pathname;

              return (
                <Link
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  className={
                    isActive
                      ? "relative shrink-0 rounded-full bg-accent px-4 py-2.5 text-white shadow-sm lg:px-2.5 xl:px-3 2xl:px-4"
                      : "relative shrink-0 rounded-full px-4 py-2.5 text-slate-700 transition hover:bg-red-50 hover:text-accent lg:px-2.5 xl:px-3 2xl:px-4"
                  }
                >
                  <span className="lg:hidden">{item.mobileLabel}</span>
                  <span className="hidden lg:inline">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <label className="flex h-11 min-w-0 items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm text-muted-foreground shadow-inner transition focus-within:border-accent focus-within:bg-white lg:h-10 2xl:h-11">
              <Search className="h-4 w-4 shrink-0 text-accent" />
              <span className="sr-only">Pesquisar no Portal</span>
              <input
                className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
                placeholder="Buscar no portal..."
              />
            </label>
            <Button asChild className="hidden h-10 shrink-0 whitespace-nowrap px-4 text-sm shadow-md shadow-red-900/10 2xl:h-11 2xl:px-5 lg:inline-flex">
              <Link href="/login">
                <LockKeyhole className="mr-2 h-4 w-4" />
                Entrar no Ambiente
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
