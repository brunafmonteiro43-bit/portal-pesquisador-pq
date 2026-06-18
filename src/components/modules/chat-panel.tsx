"use client";

import { Bot, Loader2, Send, Sparkles, UserRound } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "@/components/modules/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

type Message = {
  role: "user" | "assistant";
  content: string;
  citations?: string[];
};

const suggestedQuestions = [
  "O que é uma rubrica?",
  "Como abrir um projeto Funcamp?",
  "Como registrar uma patente?",
  "Quais documentos preciso para submeter um projeto?",
  "Como funciona um convênio?"
];

export function ChatPanel() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Olá! Eu sou o Assistente do Pesquisador COCEN. Posso ajudar com rubricas, Funcamp, editais, modelos, patentes, convênios e trilhas administrativas."
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
      const data = (await response.json()) as { answer: string; citations?: string[] };
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.answer,
          citations: data.citations
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
        eyebrow="Assistente institucional"
        title="Assistente do Pesquisador COCEN"
        description="Respostas com explicação simples, passo a passo, documentos relacionados e fonte consultada."
      />

      <div className="grid gap-4 lg:grid-cols-[0.85fr_1.4fr]">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-accent" /> Perguntas sugeridas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {suggestedQuestions.map((question) => (
              <button
                key={question}
                className="flex w-full items-center gap-3 rounded-md border p-3 text-left text-sm font-semibold hover:border-accent"
                onClick={() => void sendMessage(question)}
              >
                <Bot className="h-4 w-4 text-accent" />
                {question}
              </button>
            ))}
          </CardContent>
        </Card>

        <Card className="min-h-[620px]">
          <CardHeader>
            <CardTitle>Consulta à base COCEN</CardTitle>
          </CardHeader>
          <CardContent className="flex min-h-[520px] flex-col gap-4">
            <div className="flex-1 space-y-3 overflow-y-auto rounded-md border bg-muted/30 p-3">
              {messages.map((item, index) => {
                const assistant = item.role === "assistant";
                return (
                  <div key={`${item.role}-${index}`} className="flex gap-3">
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-background text-accent">
                      {assistant ? <Bot className="h-4 w-4" /> : <UserRound className="h-4 w-4" />}
                    </span>
                    <div className="max-w-3xl rounded-md border bg-card p-3 text-sm">
                      <p className="whitespace-pre-wrap leading-6">{item.content}</p>
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
                placeholder="Pergunte sobre rubricas, patente, edital, Funcamp, convênio..."
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
