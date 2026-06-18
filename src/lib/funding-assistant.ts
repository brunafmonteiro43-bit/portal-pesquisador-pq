export type FundingCallMatch = {
  id: string;
  agency: string;
  title: string;
  area: string;
  deadline: string;
  audience: string;
  estimatedValue: string;
  requirements: string[];
  demoLink: string;
  compatibility: "Alta" | "Média" | "Baixa";
  documents: string[];
};

const fundingCalls: Omit<FundingCallMatch, "compatibility">[] = [
  {
    id: "fapesp-inovacao-2026",
    agency: "FAPESP",
    title: "PIPE Pesquisa Inovativa em Pequenas Empresas",
    area: "Inovação, tecnologia, saúde, engenharia e ciências aplicadas",
    deadline: "14/07/2026",
    audience: "Pesquisadores com projetos aplicados e potencial de transferência tecnológica",
    estimatedValue: "Até R$ 1.500.000,00 por projeto",
    requirements: [
      "Plano de pesquisa com hipótese, metodologia e entregáveis",
      "Equipe executora com vínculo institucional ou parceiro elegível",
      "Demonstração de potencial inovador e viabilidade técnica"
    ],
    demoLink: "/fomento?edital=fapesp-inovacao-2026",
    documents: ["Projeto de pesquisa", "Plano de trabalho", "Cronograma físico-financeiro", "Currículo Lattes"]
  },
  {
    id: "fapesp-regular-saude-2026",
    agency: "FAPESP",
    title: "Auxílio à Pesquisa Regular 2026",
    area: "Saúde, ciências biológicas, humanas, exatas e interdisciplinar",
    deadline: "29/06/2026",
    audience: "Docentes e pesquisadores responsáveis por projetos acadêmicos",
    estimatedValue: "Valor conforme orçamento justificado",
    requirements: [
      "Projeto científico detalhado",
      "Orçamento por rubrica",
      "Comprovação de infraestrutura disponível"
    ],
    demoLink: "/fomento?edital=fapesp-regular-saude-2026",
    documents: ["Projeto científico", "Súmula curricular", "Orçamento por rubricas", "Anuência da unidade"]
  },
  {
    id: "cnpq-universal-2026",
    agency: "CNPq",
    title: "Chamada Universal CNPq",
    area: "Todas as áreas do conhecimento",
    deadline: "22/08/2026",
    audience: "Pesquisadores doutores com produção científica aderente ao tema",
    estimatedValue: "Faixas simuladas de R$ 80.000,00 a R$ 250.000,00",
    requirements: [
      "Projeto alinhado a uma das faixas da chamada",
      "Currículo Lattes atualizado",
      "Equipe e metas compatíveis com o orçamento"
    ],
    demoLink: "/fomento?edital=cnpq-universal-2026",
    documents: ["Projeto completo", "Plano de aplicação", "Currículos da equipe", "Declarações institucionais"]
  },
  {
    id: "finep-ambientes-inovacao",
    agency: "FINEP",
    title: "Ambientes de Inovação e Laboratórios Estratégicos",
    area: "Inovação, infraestrutura, energia, meio ambiente e tecnologia",
    deadline: "05/09/2026",
    audience: "Grupos de pesquisa com infraestrutura compartilhada e parcerias estratégicas",
    estimatedValue: "Até R$ 3.000.000,00 por proposta",
    requirements: [
      "Justificativa de impacto institucional",
      "Plano de uso compartilhado da infraestrutura",
      "Contrapartidas e governança do projeto"
    ],
    demoLink: "/fomento?edital=finep-ambientes-inovacao",
    documents: ["Plano de infraestrutura", "Carta de apoio", "Mapa de riscos", "Orçamento detalhado"]
  },
  {
    id: "capes-proequipamentos",
    agency: "CAPES",
    title: "Programa de Apoio à Pós-Graduação e Equipamentos",
    area: "Pós-graduação, pesquisa acadêmica e formação",
    deadline: "18/10/2026",
    audience: "Programas de pós-graduação e grupos vinculados a centros interdisciplinares",
    estimatedValue: "Até R$ 600.000,00 em itens financiáveis",
    requirements: [
      "Vinculação com programa de pós-graduação",
      "Justificativa de uso acadêmico",
      "Plano de manutenção e acesso"
    ],
    demoLink: "/fomento?edital=capes-proequipamentos",
    documents: ["Plano de uso", "Lista de equipamentos", "Ata ou anuência do programa", "Orçamentos"]
  },
  {
    id: "internacional-saude-digital",
    agency: "Internacional",
    title: "Cooperação Internacional em Saúde Digital",
    area: "Saúde, dados, IA, tecnologia e políticas públicas",
    deadline: "30/07/2026",
    audience: "Equipes com colaboração internacional ou intenção de cooperação formal",
    estimatedValue: "Até EUR 200.000,00 por consórcio",
    requirements: [
      "Parceria internacional identificada",
      "Plano de mobilidade ou intercâmbio",
      "Resultados esperados com impacto social"
    ],
    demoLink: "/fomento?edital=internacional-saude-digital",
    documents: ["Carta de parceria", "Projeto em inglês", "Plano de mobilidade", "Orçamento consolidado"]
  }
];

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function compatibilityFromScore(score: number): FundingCallMatch["compatibility"] {
  if (score >= 2) {
    return "Alta";
  }

  if (score >= 1) {
    return "Média";
  }

  return "Baixa";
}

export function isFundingSearchQuestion(question: string) {
  const normalized = normalizeText(question);
  const hasFundingIntent = [
    "edital",
    "editais",
    "fomento",
    "chamada",
    "chamadas",
    "oportunidade",
    "oportunidades",
    "financiamento",
    "fapesp",
    "cnpq",
    "capes",
    "finep"
  ].some((term) => normalized.includes(term));
  const hasMatchIntent = ["aberto", "prazo", "area", "saude", "inovacao", "combina", "proximo", "proximas", "quais"].some((term) =>
    normalized.includes(term)
  );

  return hasFundingIntent && hasMatchIntent;
}

export function findFundingMatches(question: string) {
  const normalized = normalizeText(question);
  const scored = fundingCalls
    .map((call) => {
      const searchable = normalizeText(
        `${call.agency} ${call.title} ${call.area} ${call.audience} ${call.requirements.join(" ")} ${call.documents.join(" ")}`
      );
      const scoreTerms = ["inovacao", "saude", "fapesp", "cnpq", "capes", "finep", "internacional", "patente", "tecnologia", "ambiente"]
        .filter((term) => normalized.includes(term))
        .reduce((score, term) => score + (searchable.includes(term) ? 2 : 0), 0);
      const genericScore = ["edital", "fomento", "chamada", "oportunidade", "prazo", "projeto"].reduce(
        (score, term) => score + (normalized.includes(term) && searchable.includes(term) ? 1 : 0),
        0
      );

      return {
        ...call,
        compatibility: compatibilityFromScore(scoreTerms + genericScore)
      };
    })
    .sort((a, b) => {
      const order = { Alta: 3, Média: 2, Baixa: 1 };
      return order[b.compatibility] - order[a.compatibility];
    });

  return scored.slice(0, 4);
}

export function answerFundingSearch(question: string) {
  const matches = findFundingMatches(question);
  const topAreas = Array.from(new Set(matches.flatMap((match) => match.area.split(", ").slice(0, 2)))).slice(0, 4);

  return {
    answer:
      `Encontrei ${matches.length} oportunidades demonstrativas compatíveis com sua pergunta.\n\n` +
      `Critério usado: agência, área de pesquisa, proximidade de prazo, público-alvo e documentos exigidos.\n\n` +
      `Áreas relacionadas: ${topAreas.join(", ")}.\n\n` +
      "Use os cartões abaixo para ver detalhes ou salvar a oportunidade nos favoritos. Esta é uma base simulada para apresentação institucional, sem consulta externa em tempo real.",
    citations: ["Base simulada de editais COCEN", "Central de Oportunidades"],
    opportunities: matches
  };
}
