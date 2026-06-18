"use client";

import { CalendarDays, ExternalLink, Loader2, Send, Sparkles, UserRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AtenaAvatar } from "@/components/modules/atena-avatar";
import { FavoriteButton } from "@/components/modules/favorite-button";
import { SectionHeader } from "@/components/modules/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import type { FundingCallMatch } from "@/lib/funding-assistant";

type Message = {
  role: "user" | "assistant";
  content: string;
  citations?: string[];
  opportunities?: FundingCallMatch[];
};

const suggestedQuestions = [
  "Quais editais estão abertos para inovação?",
  "Tenho um projeto na área de saúde, quais oportunidades combinam?",
  "Quais chamadas FAPESP estão próximas do prazo?",
  "O que é uma rubrica?",
  "Como abrir um projeto Funcamp?",
  "Como registrar uma patente?",
  "Quais documentos preciso para submeter um projeto?"
];

const fundingExamples = ["FAPESP", "CAPES", "CNPq", "FINEP", "Inovação", "Saúde"];

function compatibilityClass(compatibility: FundingCallMatch["compatibility"]) {
  if (compatibility === "Alta") {
    return "border-emerald-200 bg-emerald-50 text-emerald-700";
  }

  if (compatibility === "Média") {
    return "border-amber-200 bg-amber-50 text-amber-700";
  }

  return "border-slate-200 bg-slate-50 text-slate-600";
}

export function ChatPanel() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Olá! Eu sou a Atena, assistente inteligente do Portal do Pesquisador. Sou especializada em pesquisa, inovação, fomento, patentes, documentação institucional e apoio aos pesquisadores da Unicamp. Também posso buscar editais de fomento em uma base demonstrativa do portal."
    }
  ]);

  async function sendMessage(text = message) {
    const trimmed = text.trim();

    if (!trimmed) {
      return;
    }

    setMessages((current) => [...current, { role: "user", content: trimmed }]);
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed })
      });
      const data = (await response.json()) as { answer: string; citations?: string[]; opportunities?: FundingCallMatch[] };
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.answer,
          citations: data.citations,
          opportunities: data.opportunities
        }
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: "Não consegui consultar a base agora. Tente novamente em instantes."
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Atena – Assistente de Pesquisa e Inovação"
        title="Atena"
        description="Assistente inteligente do Portal do Pesquisador, especializada em pesquisa, inovação, fomento, patentes, documentação institucional e apoio aos pesquisadores da Unicamp."
      />

      <div className="grid gap-4 lg:grid-cols-[0.85fr_1.4fr]">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <AtenaAvatar className="h-11 w-11" />
              <span>
                <span className="block text-lg font-black">Atena</span>
                <span className="block text-xs font-semibold text-muted-foreground">Assistente de Pesquisa e Inovação</span>
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="rounded-xl border border-accent/15 bg-accent/5 p-4">
              <p className="flex items-center gap-2 text-sm font-bold text-foreground">
                <Sparkles className="h-4 w-4 text-accent" />
                Buscar editais de fomento
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-foreground">
                Consulte oportunidades simuladas por agência, área, prazo, público-alvo, valor estimado e documentos necessários.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {fundingExamples.map((example) => (
                  <Badge key={example} variant="secondary">
                    {example}
                  </Badge>
                ))}
              </div>
            </div>

            {suggestedQuestions.map((question) => (
              <button
                key={question}
                className="flex w-full items-center gap-3 rounded-md border p-3 text-left text-sm font-semibold transition-colors hover:border-accent hover:bg-accent/5"
                onClick={() => void sendMessage(question)}
              >
                <AtenaAvatar className="h-6 w-6 shrink-0 shadow-none" />
                {question}
              </button>
            ))}
          </CardContent>
        </Card>

        <Card className="min-h-[620px]">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <AtenaAvatar className="h-9 w-9 shadow-none" />
              Janela da Atena
            </CardTitle>
          </CardHeader>
          <CardContent className="flex min-h-[520px] flex-col gap-4">
            <div className="flex-1 space-y-3 overflow-y-auto rounded-md border bg-muted/30 p-3">
              {messages.map((item, index) => {
                const assistant = item.role === "assistant";
                return (
                  <div key={`${item.role}-${index}`} className="flex gap-3">
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-background text-accent">
                      {assistant ? <AtenaAvatar className="h-8 w-8 shadow-none" /> : <UserRound className="h-4 w-4" />}
                    </span>
                    <div className="max-w-3xl rounded-md border bg-card p-3 text-sm">
                      <p className="whitespace-pre-wrap leading-6">{item.content}</p>

                      {item.opportunities?.length ? (
                        <div className="mt-4 grid gap-3">
                          {item.opportunities.map((opportunity) => (
                            <div key={opportunity.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                <div>
                                  <div className="flex flex-wrap items-center gap-2">
                                    <Badge variant="secondary">{opportunity.agency}</Badge>
                                    <span
                                      className={`rounded-full border px-2.5 py-1 text-xs font-bold ${compatibilityClass(
                                        opportunity.compatibility
                                      )}`}
                                    >
                                      Compatibilidade {opportunity.compatibility}
                                    </span>
                                  </div>
                                  <h3 className="mt-3 text-base font-black text-foreground">{opportunity.title}</h3>
                                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{opportunity.area}</p>
                                </div>
                                <div className="flex shrink-0 items-center gap-2 rounded-lg bg-muted px-3 py-2 text-sm font-semibold">
                                  <CalendarDays className="h-4 w-4 text-accent" />
                                  {opportunity.deadline}
                                </div>
                              </div>

                              <div className="mt-4 grid gap-3 text-sm md:grid-cols-2">
                                <div>
                                  <p className="font-bold text-foreground">Público-alvo</p>
                                  <p className="mt-1 text-muted-foreground">{opportunity.audience}</p>
                                </div>
                                <div>
                                  <p className="font-bold text-foreground">Valor estimado</p>
                                  <p className="mt-1 text-muted-foreground">{opportunity.estimatedValue}</p>
                                </div>
                              </div>

                              <div className="mt-4">
                                <p className="font-bold text-foreground">Documentos necessários</p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {opportunity.documents.map((document) => (
                                    <Badge key={document} variant="secondary">
                                      {document}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div className="mt-4 rounded-lg bg-slate-50 p-3">
                                <p className="font-bold text-foreground">Requisitos principais</p>
                                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                                  {opportunity.requirements.slice(0, 2).map((requirement) => (
                                    <li key={requirement}>• {requirement}</li>
                                  ))}
                                </ul>
                              </div>

                              <div className="mt-4 flex flex-wrap gap-2">
                                <Button asChild size="sm">
                                  <Link href={opportunity.demoLink}>
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Ver detalhes
                                  </Link>
                                </Button>
                                <FavoriteButton
                                  className="h-9"
                                  inactiveLabel="Salvar nos favoritos"
                                  activeLabel="Salvo nos favoritos"
                                  item={{
                                    id: opportunity.id,
                                    type: "edital",
                                    title: opportunity.title,
                                    href: opportunity.demoLink
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}

                      {item.citations?.length ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.citations.map((citation) => (
                            <Badge key={citation} variant="secondary">
                              {citation}
                            </Badge>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-3 md:flex-row">
              <Textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Pergunte sobre editais, rubricas, patente, Funcamp, convênio..."
                onKeyDown={(event) => {
                  if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
                    void sendMessage();
                  }
                }}
              />
              <Button className="md:h-auto md:self-stretch" onClick={() => void sendMessage()} disabled={loading}>
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                Enviar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
