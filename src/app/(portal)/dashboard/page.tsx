import { ArrowRight, ClipboardCheck, FileClock, FileText, Landmark, MessagesSquare, Route } from "lucide-react";
import Link from "next/link";
import { AtenaAvatar } from "@/components/modules/atena-avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const summaryCards = [
  { title: "Editais em aberto", value: "12", detail: "oportunidades", icon: Landmark },
  { title: "Pendências documentais", value: "8", detail: "itens", icon: ClipboardCheck },
  { title: "Documentos recentes", value: "15", detail: "itens", icon: FileText },
  { title: "Serviços solicitados", value: "3", detail: "em andamento", icon: FileClock }
];

const trailItems = [
  { title: "Prestação de Contas do Projeto", progress: 60 },
  { title: "Solicitação de Auxílio à Pesquisa", progress: 30 },
  { title: "Relatório Científico", progress: 80 }
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-7">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-accent">Ambiente do Pesquisador</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#20232b] md:text-4xl">Acompanhe sua rotina de pesquisa</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Centralize oportunidades, documentos, serviços e fluxos administrativos em uma experiência institucional da COCEN/UNICAMP.
            </p>
          </div>
          <Button asChild className="h-12 rounded-xl px-6 shadow-lg shadow-red-900/15">
            <Link href="/chat">
              Conversar com Atena <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.title} className="rounded-3xl border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black text-[#20232b]">{item.title}</p>
                    <p className="mt-5 text-5xl font-black tracking-tight text-accent">{item.value}</p>
                    <p className="mt-3 text-sm font-medium text-slate-500">{item.detail}</p>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="grid gap-7 xl:grid-cols-[1.45fr_0.9fr]">
        <Card className="rounded-[2rem] border-slate-200 bg-white shadow-sm">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-accent">Fluxos administrativos</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-[#20232b]">Trilhas em andamento</h2>
              </div>
              <span className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 sm:flex">
                <Route className="h-5 w-5" />
              </span>
            </div>

            <div className="mt-8 space-y-7">
              {trailItems.map((item) => (
                <div key={item.title}>
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <p className="font-bold text-[#20232b]">{item.title}</p>
                    <p className="text-sm font-black text-[#20232b]">{item.progress}%</p>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-accent shadow-[0_0_18px_rgba(194,24,61,0.3)]" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <Link href="/trilhas" className="mt-8 inline-flex items-center text-sm font-black text-accent hover:underline">
              Ver todas as trilhas <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>

        <Card className="rounded-[2rem] border-accent/20 bg-white shadow-sm">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-start gap-4">
              <AtenaAvatar className="h-16 w-16 shrink-0 shadow-none" />
              <div>
                <p className="text-2xl font-black tracking-tight text-[#20232b]">Atena</p>
                <p className="mt-1 text-sm font-bold text-accent">Assistente de Pesquisa e Inovação</p>
              </div>
            </div>

            <div className="mt-7 rounded-3xl border border-slate-100 bg-[#f8f9fb] p-5">
              <MessagesSquare className="mb-4 h-5 w-5 text-accent" />
              <p className="text-base leading-7 text-slate-700">
                Posso ajudar você a encontrar informações, documentos, editais e fluxos administrativos.
              </p>
            </div>

            <Button asChild className="mt-7 h-12 w-full rounded-xl shadow-lg shadow-red-900/15">
              <Link href="/chat">Conversar com Atena</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
