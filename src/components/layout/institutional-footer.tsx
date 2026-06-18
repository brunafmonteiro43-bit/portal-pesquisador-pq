import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function InstitutionalFooter() {
  return (
    <footer className="mt-16">
      <div className="border-t bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="https://www.unicamp.br/" aria-label="Acessar site da UNICAMP">
                <Image src="/assets/logo-unicamp.png" alt="UNICAMP" width={88} height={88} className="h-16 w-auto object-contain" />
              </Link>
              <Link href="https://www.cocen.unicamp.br/" aria-label="Acessar site da COCEN">
                <Image src="/assets/logo-cocen.jpg" alt="COCEN" width={250} height={75} className="h-16 w-auto rounded-md object-contain" />
              </Link>
            </div>
            <div className="mt-6 border-l-4 border-accent pl-4">
              <h2 className="text-2xl font-black">Portal do Pesquisador</h2>
              <p className="mt-1 font-bold text-accent">COCEN • UNICAMP</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Links Institucionais</h3>
            <div className="mt-5 grid gap-3 text-sm text-muted-foreground">
              <Link href="/">Sobre</Link>
              <Link href="/">Contato</Link>
              <Link href="/">Política de Privacidade</Link>
              <Link href="/">Acessibilidade</Link>
              <Link href="/centros">Centros e Núcleos</Link>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-5 shadow-sm">
            <div className="flex gap-4">
              <Image
                src="/assets/qr-site-cocen.jpg"
                alt="QR Code para acessar o site da COCEN"
                width={96}
                height={96}
                className="h-24 w-24 rounded-md border bg-white p-1"
              />
              <div>
                <h3 className="font-bold">Site da COCEN</h3>
                <p className="mt-2 font-semibold text-accent">Acesse também o site institucional</p>
                <p className="mt-1 text-sm text-muted-foreground">Escaneie o QR Code para abrir o site da COCEN.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#263033] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold">Localização</h3>
            <div className="mt-3 h-px w-24 bg-white/25" />
            <p className="mt-5 text-sm leading-7 text-white/85">
              COCEN
              <br />
              Coordenadoria de Centros e Núcleos Interdisciplinares de Pesquisa
              <br />
              Rua Saturnino de Brito, 323 - 2º Piso
              <br />
              Cidade Universitária &quot;Zeferino Vaz&quot;
              <br />
              Barão Geraldo - Campinas/SP
              <br />
              CEP: 13083-889
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">Siga-nos em nossas redes sociais</h3>
            <div className="mt-3 h-px w-32 bg-white/25" />
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, index) => (
                <span key={index} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                  <Icon className="h-5 w-5" />
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold">Contato</h3>
            <div className="mt-3 h-px w-16 bg-white/25" />
            <div className="mt-5 space-y-3 text-sm text-white/85">
              <p>+55 (19) 3521-5147</p>
              <p>+55 (19) 3521-4911</p>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-5 text-center">
            <p className="font-bold uppercase tracking-wider">Acesse:</p>
            <Image
              src="/assets/qr-portal-pesquisador-celular.jpg"
              alt="QR Code do Portal do Pesquisador COCEN"
              width={128}
              height={128}
              className="mx-auto mt-4 h-32 w-32 rounded-md bg-white p-1"
            />
            <p className="mt-4 font-bold">Portal do Pesquisador COCEN</p>
            <p className="mt-1 text-sm text-white/65">Acesso rápido pelo celular</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
