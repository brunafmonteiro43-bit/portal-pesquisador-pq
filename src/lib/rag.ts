import OpenAI from "openai";
import { knowledgeSnippets } from "@/data/portal-content";

function scoreSnippet(question: string, content: string) {
  const terms = question
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .split(/\W+/)
    .filter((term) => term.length > 2);

  const normalizedContent = content
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");

  return terms.reduce((score, term) => score + (normalizedContent.includes(term) ? 1 : 0), 0);
}

export async function answerWithRag(question: string) {
  const citations = knowledgeSnippets
    .map((snippet) => ({
      ...snippet,
      score: scoreSnippet(question, `${snippet.title} ${snippet.content}`)
    }))
    .filter((snippet) => snippet.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);

  const context = citations.map((item) => `Fonte: ${item.title}\n${item.content}`).join("\n\n");

  if (!process.env.OPENAI_API_KEY || citations.length === 0) {
    const relatedDocs = citations.length
      ? citations.map((item) => item.title).join(", ")
      : "Glossário Facilitado, Modelos e Documentos e Trilhas de Apoio";

    return {
      answer:
        citations.length > 0
          ? `Resposta simples: ${citations[0].content}\n\nPasso a passo:\n1. Confira o termo ou processo relacionado no portal.\n2. Verifique os documentos recomendados antes de iniciar a solicitação.\n3. Em caso de prazo ou submissão, registre o comprovante e acompanhe a trilha correspondente.\n\nDocumentos relacionados: ${relatedDocs}.\n\nFonte consultada: ${citations.map((item) => item.title).join(", ")}.`
          : "Resposta simples: não encontrei uma referência direta na base demonstrativa.\n\nPasso a passo:\n1. Tente pesquisar pelo termo principal, como rubrica, patente, Funcamp ou convênio.\n2. Consulte o Glossário Facilitado e as Trilhas de Apoio.\n3. Procure a equipe da COCEN caso precise confirmar uma orientação institucional.\n\nDocumentos relacionados: Glossário Facilitado e Modelos e Documentos.\n\nFonte consultada: base demonstrativa local.",
      citations: citations.map((item) => item.title)
    };
  }

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const completion = await client.chat.completions.create({
    model: process.env.RAG_CHAT_MODEL ?? "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Responda como Atena, assistente de pesquisa e inovação da COCEN/Unicamp. Use apenas o contexto fornecido. Estruture em: Resposta simples, Passo a passo, Documentos relacionados e Fonte consultada."
      },
      {
        role: "user",
        content: `Pergunta: ${question}\n\nContexto:\n${context}`
      }
    ],
    temperature: 0.2
  });

  return {
    answer: completion.choices[0]?.message.content ?? "Nao foi possivel gerar resposta.",
    citations: citations.map((item) => item.title)
  };
}
