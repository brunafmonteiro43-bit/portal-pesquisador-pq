import {
  faqItems,
  fundingCalls,
  glossaryTerms,
  knowledgeSnippets,
  patentGuides,
  supportTrails,
  templates
} from "@/data/portal-content";

export type PortalSearchResult = {
  title: string;
  module: string;
  href: string;
  excerpt: string;
};

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function matches(query: string, ...values: string[]) {
  const normalizedQuery = normalize(query);
  return values.some((value) => normalize(value).includes(normalizedQuery));
}

export function searchPortalContent(query: string, module?: string): PortalSearchResult[] {
  const results: PortalSearchResult[] = [];
  const normalizedQuery = normalize(query);

  if (!module || module === "glossario") {
    glossaryTerms.forEach((item) => {
      if (
        matches(
          query,
          item.term,
          item.simpleExplanation,
          item.technicalExplanation,
          item.cocenExample,
          item.category,
          item.area,
          item.synonyms.join(" "),
          item.recommendedDocuments.join(" ")
        )
      ) {
        results.push({
          title: item.term,
          module: "Glossário Facilitado",
          href: "/glossario",
          excerpt: item.simpleExplanation
        });
      }
    });
  }

  if (!module || module === "templates") {
    templates.forEach((item) => {
      if (matches(query, item.title, item.description, item.tags.join(" "))) {
        results.push({
          title: item.title,
          module: "Modelos e Templates",
          href: "/modelos",
          excerpt: item.description
        });
      }
    });
  }

  if (!module || module === "fomento") {
    fundingCalls.forEach((item) => {
      if (
        matches(
          query,
          item.title,
          item.summary,
          item.agency,
          item.area,
          item.value,
          item.audience,
          item.categories.join(" "),
          item.requiredDocuments.join(" ")
        )
      ) {
        results.push({
          title: item.title,
          module: "Fomento e Editais",
          href: "/fomento-editais",
          excerpt: item.summary
        });
      }
    });
  }

  if (!module || module === "trilhas") {
    supportTrails.forEach((item) => {
      if (
        matches(
          query,
          item.title,
          item.summary,
          item.category,
          item.steps.map((step) => `${step.whatToDo} ${step.responsible} ${step.documents.join(" ")}`).join(" ")
        )
      ) {
        results.push({
          title: item.title,
          module: "Trilhas de Apoio",
          href: "/trilhas",
          excerpt: item.summary
        });
      }
    });
  }

  if (!module || module === "patentes") {
    patentGuides.forEach((item) => {
      if (matches(query, item.title, item.summary, item.area, item.details.join(" "))) {
        results.push({
          title: item.title,
          module: "Patentes e Inovação",
          href: "/patentes",
          excerpt: item.summary
        });
      }
    });
  }

  if (!module || module === "faq") {
    faqItems.forEach((item) => {
      if (matches(query, item.question, item.answer, item.category, item.tags.join(" "))) {
        results.push({
          title: item.question,
          module: "Central de Dúvidas",
          href: "/busca",
          excerpt: item.answer
        });
      }
    });
  }

  if (!module || module === "rag") {
    knowledgeSnippets.forEach((item) => {
      if (matches(query, item.title, item.content, item.module)) {
        results.push({
          title: item.title,
          module: "Base documental",
          href: "/login?callbackUrl=%2Fdashboard%2Fatena%3Fintent%3Dchat-atena&message=atena-chat",
          excerpt: item.content
        });
      }
    });
  }

  if (!module || module === "assistente") {
    results.push({
      title: normalizedQuery.includes("patente")
        ? "Perguntar sobre patente à Atena"
        : normalizedQuery.includes("rubrica")
          ? "Perguntar sobre rubrica à Atena"
          : "Perguntar à Atena",
      module: "Atena",
      href: "/login?callbackUrl=%2Fdashboard%2Fatena%3Fintent%3Dchat-atena&message=atena-chat",
      excerpt:
        "Receba resposta simples, passo a passo, documentos relacionados e fonte consultada com base nos conteúdos do portal."
    });
  }

  return results.slice(0, 12);
}
