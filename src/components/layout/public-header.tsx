"use client";

import { LockKeyhole, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const publicNav = [
  { label: "Início", href: "/" },
  { label: "Glossário", href: "/glossario" },
  { label: "Modelos e Templates", href: "/templates" },
  { label: "Fomento e Editais", href: "/fomento" },
  { label: "Trilhas de Apoio", href: "/trilhas" },
  { label: "Patentes", href: "/patentes" },
  { label: "Atena", href: "/login?callbackUrl=%2Fchat%3Fintent%3Duse-atena&message=atena-use" }
];

export function PublicHeader({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const titleSize = compact ? "text-base" : "text-base xl:text-lg 2xl:text-xl";

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur">
      <div className="mx-auto flex max-w-[112rem] flex-col gap-2 px-4 py-2 lg:grid lg:grid-cols-[minmax(18rem,auto)_minmax(0,1fr)_auto] lg:items-center lg:gap-4 lg:px-5 lg:py-3 xl:grid-cols-[minmax(20rem,auto)_minmax(0,1fr)_auto] xl:gap-5 2xl:grid-cols-[minmax(26rem,auto)_minmax(0,1fr)_auto] 2xl:gap-6 2xl:px-8">
        <div className="flex min-w-0 items-center justify-between gap-3 lg:justify-start">
          <div className="flex shrink-0 items-center gap-2.5">
            <Link href="https://www.unicamp.br/" aria-label="Acessar site da UNICAMP">
              <Image
                src="/assets/logo-unicamp.png"
                alt="UNICAMP"
                width={56}
                height={56}
                className="h-8 w-auto object-contain sm:h-9 2xl:h-12"
              />
            </Link>
            <Link href="https://www.cocen.unicamp.br/" aria-label="Acessar site da COCEN">
              <Image
                src="/assets/logo-cocen.jpg"
                alt="COCEN"
                width={150}
                height={46}
                className="hidden h-7 w-auto object-contain sm:block 2xl:h-10"
              />
            </Link>
          </div>

          <Link href="/" className="min-w-0">
            <span className={`block whitespace-nowrap font-black leading-tight tracking-normal text-foreground ${titleSize}`}>
              Portal do Pesquisador
            </span>
            <span className="block whitespace-nowrap text-[0.64rem] font-semibold leading-tight text-slate-700 2xl:text-[0.68rem]">
              Pesquisa • Inovação • Fomento
            </span>
            <span className="block whitespace-nowrap text-[0.58rem] font-bold uppercase tracking-wide text-slate-500 2xl:text-[0.6rem]">
              COCEN / UNICAMP
            </span>
          </Link>

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <Button asChild className="h-9 whitespace-nowrap px-3 text-xs">
              <Link href="/login">
                <LockKeyhole className="mr-1.5 h-3.5 w-3.5" />
                Entrar
              </Link>
            </Button>
          </div>
        </div>

        <nav className="-mx-4 flex min-w-0 max-w-[100vw] flex-nowrap items-center gap-1 overflow-x-auto whitespace-nowrap px-4 pb-1 text-[0.72rem] font-medium [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:justify-center lg:overflow-visible lg:px-0 lg:pb-0 xl:gap-1 xl:text-[0.76rem] 2xl:gap-2 2xl:text-sm">
          {publicNav.map((item) => {
            const isActive = item.href === pathname;

            return (
              <Link
                key={`${item.label}-${item.href}`}
                href={item.href}
                className={
                  isActive
                    ? "group relative shrink-0 rounded-lg bg-accent/10 px-2 py-2 text-accent transition-colors duration-200 hover:bg-accent/15 xl:px-2.5 2xl:px-3"
                    : "group relative shrink-0 rounded-lg px-2 py-2 text-slate-700 transition-colors duration-200 hover:bg-slate-50 hover:text-accent xl:px-2.5 2xl:px-3"
                }
              >
                {item.label}
                <span
                  className={
                    isActive
                      ? "absolute inset-x-2 bottom-1 h-0.5 rounded-full bg-accent"
                      : "absolute inset-x-2 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-accent transition-transform duration-200 ease-out group-hover:scale-x-100"
                  }
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <label className="hidden h-9 min-w-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm text-muted-foreground shadow-sm transition-colors focus-within:border-accent lg:flex lg:w-24 xl:w-28 2xl:w-48">
            <Search className="h-4 w-4 shrink-0 text-accent" />
            <span className="sr-only">Pesquisar no Portal</span>
            <input
              className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
              placeholder="Pesquisar no portal..."
            />
          </label>
          <Button asChild className="h-9 whitespace-nowrap px-3.5 text-sm 2xl:px-5">
            <Link href="/login">
              <LockKeyhole className="mr-2 h-4 w-4" />
              Entrar no Portal
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
