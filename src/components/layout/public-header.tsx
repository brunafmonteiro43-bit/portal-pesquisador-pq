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
  { label: "Centros e Núcleos", href: "/centros" },
  { label: "Atena", href: "/login?callbackUrl=%2Fchat%3Fintent%3Duse-atena&message=atena-use" }
];

export function PublicHeader({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const brandTitleSize = compact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl xl:text-3xl";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-[0_10px_30px_rgba(15,23,42,0.07)] backdrop-blur">
      <div className="mx-auto flex max-w-[112rem] flex-col px-4 py-3 lg:px-6 lg:py-4 2xl:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Link
            href="/"
            className="group flex min-w-0 flex-col items-start gap-3 rounded-2xl pr-2 transition-colors focus-ring sm:flex-row sm:items-center sm:gap-5 lg:max-w-[34rem] xl:max-w-[40rem] 2xl:max-w-[46rem]"
            aria-label="Portal do Pesquisador - Página inicial"
          >
            <span className="flex shrink-0 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm sm:gap-4 sm:px-4 sm:py-3">
              <Image
                src="/assets/logo-unicamp.png"
                alt="UNICAMP"
                width={64}
                height={64}
                className="h-10 w-auto object-contain sm:h-12 xl:h-14"
              />
              <span className="h-10 w-px bg-slate-200 sm:h-12" aria-hidden="true" />
              <Image
                src="/assets/logo-cocen.jpg"
                alt="COCEN"
                width={170}
                height={52}
                className="h-8 w-auto object-contain sm:h-10 xl:h-12"
              />
            </span>

            <span className="min-w-0 border-l-4 border-accent pl-4 sm:pl-5">
              <span className={`block whitespace-nowrap font-black leading-none tracking-[-0.03em] text-foreground ${brandTitleSize}`}>
                Portal do Pesquisador
              </span>
              <span className="mt-2 block whitespace-nowrap text-xs font-semibold leading-none text-slate-600 sm:text-sm">
                Pesquisa • Inovação • Fomento
              </span>
              <span className="mt-2 block whitespace-nowrap text-[0.66rem] font-black uppercase leading-none tracking-[0.18em] text-accent sm:text-xs">
                COCEN / UNICAMP
              </span>
            </span>
          </Link>

          <div className="flex shrink-0 items-center gap-2 lg:gap-3">
            <label className="hidden h-11 min-w-0 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-muted-foreground shadow-sm transition-colors focus-within:border-accent md:flex md:w-[15rem] xl:w-[18rem] 2xl:w-[22rem]">
              <Search className="h-4 w-4 shrink-0 text-accent" />
              <span className="sr-only">Pesquisar no Portal</span>
              <input
                className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
                placeholder="Pesquisar no portal..."
              />
            </label>
            <Button asChild className="h-10 whitespace-nowrap px-3 text-xs sm:h-11 sm:px-4 sm:text-sm 2xl:px-5">
              <Link href="/login">
                <LockKeyhole className="mr-1.5 h-3.5 w-3.5 sm:mr-2 sm:h-4 sm:w-4" />
                <span className="sm:hidden">Entrar</span>
                <span className="hidden sm:inline">Entrar no Ambiente</span>
              </Link>
            </Button>
          </div>
        </div>

        <nav className="mt-3 flex min-w-0 max-w-full flex-nowrap items-center gap-1 overflow-x-auto whitespace-nowrap border-t border-slate-100 pt-3 text-[0.72rem] font-semibold [scrollbar-width:none] sm:text-xs md:justify-center lg:flex-wrap lg:overflow-visible lg:text-[0.78rem] xl:gap-1.5 xl:text-sm [&::-webkit-scrollbar]:hidden">
          {publicNav.map((item) => {
            const isActive = item.href === pathname;

            return (
              <Link
                key={`${item.label}-${item.href}`}
                href={item.href}
                className={
                  isActive
                    ? "group relative shrink-0 rounded-xl bg-primary-soft px-2.5 py-2 text-accent transition-colors duration-200 hover:bg-primary-soft xl:px-3"
                    : "group relative shrink-0 rounded-xl px-2.5 py-2 text-slate-700 transition-colors duration-200 hover:bg-slate-50 hover:text-accent xl:px-3"
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
      </div>
    </header>
  );
}
