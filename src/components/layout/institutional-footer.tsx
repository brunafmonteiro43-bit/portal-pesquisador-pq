import { Facebook, Instagram, Linkedin, MapPin, Phone, QrCode, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function InstitutionalFooter() {
  return (
    <footer className="connection-pattern-dark mt-14 bg-[#252d30] text-white">
      <div className="relative border-b border-white/10 bg-[#2d3639]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:gap-8 sm:py-10 md:grid-cols-[1.25fr_0.9fr_1fr] lg:grid-cols-[1.35fr_0.8fr_1.05fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:gap-4 sm:p-4">
              <Link href="https://www.unicamp.br/" aria-label="Acessar site da UNICAMP">
                <Image src="/assets/logo-unicamp.png" alt="UNICAMP" width={82} height={82} className="h-12 w-auto object-contain sm:h-14" />
              </Link>
              <Link href="https://www.cocen.unicamp.br/" aria-label="Acessar site da COCEN">
                <Image src="/assets/logo-cocen.jpg" alt="COCEN" width={220} height={66} className="h-10 w-auto rounded-md bg-white object-contain p-1 sm:h-12" />
              </Link>
              <div className="min-w-[12rem] border-l-4 border-accent pl-4">
                <h2 className="text-xl font-black sm:text-2xl leading-tight">Portal do Pesquisador</h2>
                <p className="mt-1 text-sm font-bold text-white/75">Pesquisa • Inovação • Fomento</p>
                <p className="mt-0.5 text-xs font-black uppercase tracking-[0.18em] text-white/55">COCEN / UNICAMP</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-white/70">Links Institucionais</h3>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-white/82">
              <Link className="transition hover:text-white" href="/">Sobre o Portal</Link>
              <Link className="transition hover:text-white" href="/centros-nucleos">Centros e Núcleos</Link>
              <Link className="transition hover:text-white" href="/fomento-editais">Fomento e Editais</Link>
              <Link className="transition hover:text-white" href="/modelos">Modelos e Templates</Link>
              <Link className="transition hover:text-white" href="/patentes">Patentes</Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 sm:p-5">
            <div className="flex gap-4">
              <Image
                src="/assets/qr-portal-pesquisador-celular.jpg"
                alt="QR Code do Portal do Pesquisador COCEN"
                width={108}
                height={108}
                className="h-20 w-20 shrink-0 sm:h-24 sm:w-24 rounded-lg bg-white p-1"
              />
              <div>
                <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-white/65">
                  <QrCode className="h-4 w-4 text-accent" /> Acesse
                </div>
                <p className="mt-2 text-lg font-black">Portal do Pesquisador COCEN</p>
                <p className="mt-2 text-sm leading-6 text-white/70">Escaneie o QR Code para abrir o portal pelo celular.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-7 px-4 py-10 sm:gap-8 sm:py-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr]">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-bold"><MapPin className="h-5 w-5 text-accent" /> Localização</h3>
          <div className="mt-3 h-px w-24 bg-white/20" />
          <p className="mt-5 text-sm leading-7 text-white/80">
            COCEN — Coordenadoria de Centros e Núcleos Interdisciplinares de Pesquisa<br />
            Rua Saturnino de Brito, 323 - 2º Piso<br />
            Cidade Universitária &quot;Zeferino Vaz&quot; — Barão Geraldo - Campinas/SP<br />
            CEP: 13083-889
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold">Redes sociais</h3>
          <div className="mt-3 h-px w-24 bg-white/20" />
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, index) => (
              <span key={index} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 transition hover:bg-white/15">
                <Icon className="h-5 w-5" />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-lg font-bold"><Phone className="h-5 w-5 text-accent" /> Contato</h3>
          <div className="mt-3 h-px w-16 bg-white/20" />
          <div className="mt-5 space-y-3 text-sm text-white/80">
            <p>+55 (19) 3521-5147</p>
            <p>+55 (19) 3521-4911</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
