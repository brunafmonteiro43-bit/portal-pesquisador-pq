import { LockKeyhole, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const publicNav = [
  { label: "Início", href: "/" },
  { label: "Glossário", href: "/#acesso-rapido" },
  { label: "Modelos e Templates", href: "/#acesso-rapido" },
  { label: "Fomento e Editais", href: "/#destaques" },
  { label: "Trilhas de Apoio", href: "/#acesso-rapido" },
  { label: "Patentes", href: "/#acesso-rapido" },
  { label: "Assistente IA", href: "/#assistente" }
];

export function PublicHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex shrink-0 items-center gap-3">
            <Link href="https://www.unicamp.br/" aria-label="Acessar site da UNICAMP">
              <Image
                src="/assets/logo-unicamp.png"
                alt="UNICAMP"
                width={68}
                height={68}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <Link href="https://www.cocen.unicamp.br/" aria-label="Acessar site da COCEN">
              <Image
                src="/assets/logo-cocen.jpg"
                alt="COCEN"
                width={190}
                height={58}
                className="hidden h-11 w-auto object-contain md:block"
              />
            </Link>
          </div>

          <span className="hidden h-12 w-px bg-border lg:block" />

          <Link href="/" className="min-w-0">
            <span className="block whitespace-nowrap text-[1.7rem] font-black leading-tight tracking-normal text-foreground md:text-3xl">
              Portal do Pesquisador
            </span>
            <span className="block text-sm font-semibold text-foreground">Pesquisa • Inovação • Fomento</span>
            <span className="block text-xs font-bold uppercase text-accent">COCEN | UNICAMP</span>
            {!compact ? (
              <span className="mt-1 inline-flex items-center gap-2 rounded-full border bg-accent/5 px-2.5 py-1 text-xs font-bold text-accent">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Portal Oficial COCEN
              </span>
            ) : null}
          </Link>
        </div>

        <div className="flex flex-col gap-3 lg:items-end">
          <nav className="flex max-w-4xl flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold">
            {publicNav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  index === 0
                    ? "group relative rounded-md bg-accent/10 px-3.5 py-2 text-accent transition-colors duration-200 hover:bg-accent/15"
                    : "group relative rounded-md px-3.5 py-2 text-foreground transition-colors duration-200 hover:bg-muted/70 hover:text-accent"
                }
              >
                {item.label}
                <span className="absolute inset-x-3 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-accent transition-transform duration-200 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center lg:w-auto lg:justify-end">
            <label className="flex h-10 min-w-0 items-center gap-2 rounded-xl border bg-white px-3 text-sm text-muted-foreground shadow-sm transition-colors focus-within:border-accent sm:w-80">
              <Search className="h-4 w-4 shrink-0 text-accent" />
              <span className="sr-only">Pesquisar no Portal</span>
              <input
                className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
                placeholder="Pesquisar documentos, editais, modelos ou termos..."
              />
            </label>
            <Button asChild className="h-10 self-start px-5 lg:self-auto">
              <Link href="/login">
                <LockKeyhole className="mr-2 h-4 w-4" />
                Entrar no Portal
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
