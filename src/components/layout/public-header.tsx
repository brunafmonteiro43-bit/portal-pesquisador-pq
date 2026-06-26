"use client";

import { LockKeyhole, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const publicNav = [
  { label: "Início", compactLabel: "Início", mobileLabel: "Início", href: "/" },
  { label: "Glossário", compactLabel: "Glossário", mobileLabel: "Glossário", href: "/glossario" },
  { label: "Modelos e Templates", compactLabel: "Modelos", mobileLabel: "Modelos", href: "/modelos" },
  { label: "Fomento e Oportunidades", compactLabel: "Oportunidades", mobileLabel: "Fomento", href: "/fomento-editais" },
  { label: "Trilhas de Apoio", compactLabel: "Trilhas", mobileLabel: "Trilhas", href: "/trilhas" },
  { label: "Patentes", compactLabel: "Patentes", mobileLabel: "Patentes", href: "/patentes" },
  { label: "Centros e Núcleos", compactLabel: "Centros", mobileLabel: "Centros", href: "/centros-nucleos" },
  {
    label: "Atena",
    compactLabel: "Atena",
    mobileLabel: "Atena",
    href: "/login?callbackUrl=%2Fdashboard%2Fatena%3Fintent%3Duse-atena&message=atena-use"
  }
];

export function PublicHeader({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const titleSize = compact ? "text-lg" : "text-base sm:text-xl lg:text-lg 2xl:text-xl";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
      <div className="mx-auto max-w-[118rem] px-4 py-2.5 lg:px-6 xl:px-8">
        <div className="grid gap-2 lg:grid-cols-[minmax(19rem,21rem)_minmax(0,1fr)_14.5rem] lg:items-center lg:gap-3 xl:grid-cols-[minmax(21rem,23rem)_minmax(0,1fr)_16rem] xl:gap-4 2xl:grid-cols-[minmax(23rem,25rem)_minmax(0,1fr)_21rem] min-[1800px]:grid-cols-[minmax(27rem,30rem)_minmax(0,1fr)_25rem]">
          <div className="min-w-0">
            <div className="flex min-w-0 items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3 sm:gap-4 lg:gap-3.5 2xl:gap-4">
                <span className="flex shrink-0 items-center gap-2.5 sm:gap-3 lg:gap-2.5 2xl:gap-3">
                  <Link href="https://www.unicamp.br/" aria-label="Acessar site da UNICAMP" className="shrink-0">
                    <Image
                      src="/assets/logo-unicamp.png"
                      alt="UNICAMP"
                      width={64}
                      height={64}
                      className="h-9 w-auto object-contain sm:h-10 lg:h-9 2xl:h-10"
                    />
                  </Link>
                  <Link href="https://www.cocen.unicamp.br/" aria-label="Acessar site da COCEN" className="shrink-0">
                    <Image
                      src="/assets/logo-cocen.jpg"
                      alt="COCEN"
                      width={180}
                      height={54}
                      className="h-7 w-auto rounded-sm object-contain sm:h-8 lg:h-7 2xl:h-8"
                    />
                  </Link>
                </span>
                <Link href="/" className="min-w-0 border-l border-slate-200 pl-3 sm:pl-4 lg:pl-3 2xl:pl-4">
                  <span className={`block font-black leading-tight tracking-normal text-slate-950 sm:truncate ${titleSize}`}>
                    Portal do Pesquisador
                  </span>
                  <span className="mt-0.5 block text-[0.62rem] font-black uppercase leading-tight tracking-[0.13em] text-slate-500 sm:truncate sm:text-[0.68rem] lg:text-[0.6rem] 2xl:text-[0.68rem]">
                    COCEN / UNICAMP
                  </span>
                  <span className="mt-0.5 hidden text-[0.66rem] font-bold leading-tight text-accent sm:block sm:truncate sm:text-xs lg:text-[0.66rem] 2xl:text-xs">
                    Pesquisa • Inovação • Fomento
                  </span>
                </Link>
              </div>

              <Button asChild className="h-9 shrink-0 whitespace-nowrap px-3 text-xs shadow-sm sm:h-10 sm:px-4 sm:text-sm lg:hidden">
                <Link href="/login">
                  <LockKeyhole className="mr-1.5 h-3.5 w-3.5" />
                  Entrar
                </Link>
              </Button>
            </div>
          </div>

          <nav className="-mx-4 flex min-w-0 items-center gap-2 overflow-x-auto px-4 pb-1 pt-0.5 text-sm font-bold [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:justify-start lg:gap-0.5 lg:overflow-visible lg:px-0 lg:pr-3 lg:pb-0 lg:text-[0.72rem] xl:gap-1 xl:pr-4 xl:text-[0.76rem] 2xl:text-[0.78rem] min-[1800px]:gap-2 min-[1800px]:pr-5 min-[1800px]:text-[0.86rem]">
            {publicNav.map((item) => {
              const isActive = item.href === pathname;

              return (
                <Link
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  className={
                    isActive
                      ? "relative shrink-0 rounded-full bg-accent px-3.5 py-2.5 text-white shadow-sm lg:px-1.5 xl:px-2 min-[1800px]:px-3"
                      : "relative shrink-0 rounded-full px-3.5 py-2.5 text-slate-700 transition hover:bg-red-50 hover:text-accent lg:px-1.5 xl:px-2 min-[1800px]:px-3"
                  }
                >
                  <span className="lg:hidden">{item.mobileLabel}</span>
                  <span className="hidden lg:inline">{item.compactLabel}</span>
                </Link>
              );
            })}
          </nav>

          <div className="grid gap-2 lg:grid-cols-[minmax(5.75rem,1fr)_auto] lg:items-center xl:grid-cols-[minmax(7rem,1fr)_auto] 2xl:grid-cols-[minmax(8rem,1fr)_auto]">
            <form action="/busca" role="search" className="flex h-10 min-w-0 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm text-muted-foreground shadow-inner transition focus-within:border-accent focus-within:bg-white lg:h-10 2xl:h-11">
              <Search className="h-4 w-4 shrink-0 text-accent" />
              <span className="sr-only">Pesquisar no Portal</span>
              <input
                name="q"
                className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
                placeholder="Buscar no portal..."
              />
              <button type="submit" className="sr-only">Pesquisar</button>
            </form>
            <Button asChild className="hidden h-10 shrink-0 whitespace-nowrap px-3 text-xs shadow-md shadow-red-900/10 lg:inline-flex">
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
