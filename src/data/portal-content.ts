import type { LucideIcon } from "lucide-react";

export type Metric = {
  label: string;
  value: string;
  detail: string;
  trend?: string;
  icon?: LucideIcon;
};

export type GlossaryTerm = {
  term: string;
  slug: string;
  category: string;
  area: string;
  simpleExplanation: string;
  technicalExplanation: string;
  cocenExample: string;
  recommendedDocuments: string[];
  synonyms: string[];
};

export type DocumentModel = {
  title: string;
  slug: string;
  category: string;
  version: string;
  updatedAt: string;
  fileType: string;
  status: string;
  description: string;
  tags: string[];
  downloads: number;
};

export type FundingCall = {
  title: string;
  slug: string;
  agency: string;
  area: string;
  status: string;
  deadline: string;
  value: string;
  audience: string;
  link: string;
  closingSoon?: boolean;
  summary: string;
  categories: string[];
};

export type TrailStep = {
  title: string;
  whatToDo: string;
  responsible: string;
  documents: string[];
  estimatedTime: string;
  nextStep: string;
};

export type SupportTrail = {
  title: string;
  slug: string;
  category: string;
  summary: string;
  flow: string[];
  steps: TrailStep[];
};

export type PatentGuide = {
  title: string;
  slug: string;
  area: string;
  status: string;
  summary: string;
  details: string[];
};

export type CocenCenter = {
  name: string;
  area: string;
  description: string;
  site: string;
  contact: string;
  researchLines: string[];
};

export const dashboardMetrics: Metric[] = [
  { label: "Buscas no mês", value: "1.284", detail: "Glossário, editais e documentos", trend: "+18%" },
  { label: "Documentos acessados", value: "436", detail: "Modelos institucionais", trend: "+9%" },
  { label: "Dúvidas resolvidas", value: "82%", detail: "Sem abertura de chamado", trend: "+6%" },
  { label: "Fluxos administrativos", value: "14", detail: "Trilhas padronizadas", trend: "3 novas" }
];

export const adminMetrics: Metric[] = [
  { label: "Usuários ativos", value: "312", detail: "Últimos 30 dias" },
  { label: "Conteúdos publicados", value: "148", detail: "Base institucional" },
  { label: "Versões controladas", value: "64", detail: "Documentos e modelos" },
  { label: "Eventos auditados", value: "2.019", detail: "Ações rastreadas" }
];

export const moduleCards = [
  {
    key: "glossario",
    title: "Glossário Facilitado",
    href: "/glossario",
    count: "Termos administrativos, financeiros e jurídicos",
    description: "Termos técnicos explicados de forma simples e prática para pesquisadores."
  },
  {
    key: "templates",
    title: "Modelos e Documentos",
    href: "/templates",
    count: "Formulários, manuais e checklists",
    description: "Templates, formulários e documentos necessários para seus projetos."
  },
  {
    key: "fomento",
    title: "Fomento e Editais",
    href: "/fomento",
    count: "FAPESP, CNPq, CAPES, FINEP e empresas",
    description: "Oportunidades de financiamento e chamadas abertas para pesquisa."
  },
  {
    key: "trilhas",
    title: "Trilhas de Apoio",
    href: "/trilhas",
    count: "Fluxos administrativos visuais",
    description: "Guias passo a passo para processos administrativos e acadêmicos."
  },
  {
    key: "patentes",
    title: "Patentes e Inovação",
    href: "/patentes",
    count: "Sigilo, Inova Unicamp, INPI e royalties",
    description: "Proteção intelectual, transferência de tecnologia e inovação."
  },
  {
    key: "chat",
    title: "Atena",
    href: "/chat",
    count: "Respostas com base documental",
    description: "Inteligência para pesquisa, fomento, inovação e documentação acadêmica."
  }
];

export const quickActions = [
  { title: "Submeter um Projeto", href: "/trilhas", description: "Da ideia à submissão institucional." },
  { title: "Encontrar Editais", href: "/oportunidades", description: "Filtre oportunidades por agência e área." },
  { title: "Abrir Projeto Funcamp", href: "/trilhas", description: "Fluxo de abertura e documentação." },
  { title: "Fazer Prestação de Contas", href: "/trilhas", description: "Comprovantes, relatórios e prazos." },
  { title: "Registrar uma Patente", href: "/patentes", description: "Sigilo, comunicação e Inova Unicamp." },
  { title: "Formalizar uma Parceria", href: "/trilhas", description: "Minutas, jurídico e convênios." },
  { title: "Solicitar Recursos para Viagem", href: "/templates", description: "Modelos e checklists de solicitação." },
  { title: "Consultar Modelos e Formulários", href: "/templates", description: "Arquivos versionados e prontos para uso." }
];

export const serviceCards = [
  {
    title: "Funcamp",
    href: "/trilhas",
    description: "Apoio para abertura, execução e acompanhamento de projetos com fundação de apoio.",
    links: ["Formulários", "Manuais e Normas", "Checklists"]
  },
  {
    title: "FAPESP",
    href: "/fomento",
    description: "Editais, modelos de projeto e orientações para submissão e prestação de contas.",
    links: ["Editais", "Modelos de Projeto", "Prestação de Contas"]
  },
  {
    title: "CNPq / CAPES / FINEP",
    href: "/oportunidades",
    description: "Chamadas, bolsas e guias de submissão para diferentes áreas de pesquisa.",
    links: ["Chamadas", "Bolsas", "Guias de Submissão"]
  },
  {
    title: "Convênios e Parcerias",
    href: "/trilhas",
    description: "Minutas, fluxos e documentos jurídicos para parcerias institucionais.",
    links: ["Minutas", "Fluxos", "Documentos Jurídicos"]
  },
  {
    title: "Patentes e Inovação",
    href: "/patentes",
    description: "Comunicação de invenção, sigilo, Inova Unicamp e transferência de tecnologia.",
    links: ["Comunicação de Invenção", "Inova Unicamp", "Guia de Sigilo"]
  },
  {
    title: "Glossário Facilitado",
    href: "/glossario",
    description: "Tradução institucional de termos administrativos, financeiros e jurídicos.",
    links: ["Termos Administrativos", "Termos Financeiros", "Termos Jurídicos"]
  }
];

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Funcamp",
    slug: "funcamp",
    category: "Fundação de apoio",
    area: "Projetos e convênios",
    simpleExplanation: "É a fundação que pode apoiar a administração financeira e operacional de projetos da Unicamp.",
    technicalExplanation:
      "Fundação de apoio credenciada que executa contratos, convênios e projetos conforme plano de trabalho, instrumento jurídico e regras do financiador.",
    cocenExample:
      "Um pesquisador aprovado em chamada externa pode abrir projeto pela Funcamp para executar compras, pagamentos e prestação de contas.",
    recommendedDocuments: ["Plano de trabalho", "Checklist de abertura de projeto", "Minuta de convênio"],
    synonyms: ["fundação de apoio", "projeto administrado", "convênio"]
  },
  {
    term: "Rubrica",
    slug: "rubrica",
    category: "Orçamento",
    area: "Financeiro",
    simpleExplanation: "É a categoria que indica onde uma despesa pode ser encaixada no orçamento do projeto.",
    technicalExplanation:
      "Classificação orçamentária vinculada ao plano aprovado, usada para registrar despesas como custeio, capital, diárias, passagens e serviços.",
    cocenExample:
      "Antes de comprar um equipamento, a equipe confere se há saldo e autorização na rubrica adequada.",
    recommendedDocuments: ["Checklist de compras", "Plano de aplicação", "Manual de prestação de contas"],
    synonyms: ["categoria de despesa", "elemento de despesa", "classificação orçamentária"]
  },
  {
    term: "Convênio",
    slug: "convenio",
    category: "Instrumento jurídico",
    area: "Parcerias",
    simpleExplanation: "É um acordo formal entre instituições para realizar um objetivo comum.",
    technicalExplanation:
      "Instrumento jurídico que estabelece responsabilidades, recursos, vigência, plano de trabalho e regras de execução entre partícipes.",
    cocenExample:
      "Um Centro pode formalizar convênio com órgão público para executar pesquisa aplicada com metas e entregas.",
    recommendedDocuments: ["Minuta de convênio", "Plano de trabalho", "Documentos do parceiro"],
    synonyms: ["acordo", "parceria", "instrumento jurídico"]
  },
  {
    term: "Prestação de Contas",
    slug: "prestacao-de-contas",
    category: "Financeiro",
    area: "Encerramento",
    simpleExplanation: "É a comprovação de que os recursos foram usados corretamente.",
    technicalExplanation:
      "Processo de apresentação de relatórios técnicos, comprovantes financeiros, notas fiscais, extratos e justificativas conforme regras do financiador.",
    cocenExample:
      "Ao fim de um projeto Funcamp, a equipe reúne documentos para comprovar despesas e resultados alcançados.",
    recommendedDocuments: ["Checklist de prestação de contas", "Relatório técnico", "Comprovantes financeiros"],
    synonyms: ["encerramento", "comprovação", "relatório financeiro"]
  },
  {
    term: "FAPESP",
    slug: "fapesp",
    category: "Agência de fomento",
    area: "Fomento à pesquisa",
    simpleExplanation: "É a agência paulista que financia bolsas, auxílios e projetos de pesquisa.",
    technicalExplanation:
      "Fundação de Amparo à Pesquisa do Estado de São Paulo, com linhas como Auxílio Regular, Projeto Temático e programas especiais.",
    cocenExample:
      "Um pesquisador consulta rubricas permitidas e modelos antes de submeter um Auxílio Regular.",
    recommendedDocuments: ["Modelo de projeto FAPESP", "Checklist de submissão", "Guia de prestação de contas"],
    synonyms: ["auxílio à pesquisa", "bolsa", "projeto temático"]
  },
  {
    term: "CNPq",
    slug: "cnpq",
    category: "Agência de fomento",
    area: "Pesquisa e bolsas",
    simpleExplanation: "É uma agência federal que apoia projetos, bolsas e produtividade em pesquisa.",
    technicalExplanation:
      "Conselho Nacional de Desenvolvimento Científico e Tecnológico, com chamadas de pesquisa, bolsas e apoio a grupos científicos.",
    cocenExample:
      "Antes de submeter uma chamada CNPq, o pesquisador confere elegibilidade e orçamento permitido.",
    recommendedDocuments: ["Guia de submissão CNPq", "Modelo de orçamento", "Checklist de elegibilidade"],
    synonyms: ["produtividade", "chamada universal", "bolsa PQ"]
  },
  {
    term: "CAPES",
    slug: "capes",
    category: "Agência de fomento",
    area: "Pós-graduação e bolsas",
    simpleExplanation: "É uma agência federal ligada à formação de pessoas, bolsas e apoio à pós-graduação.",
    technicalExplanation:
      "Coordenação de Aperfeiçoamento de Pessoal de Nível Superior, responsável por programas de bolsas, avaliação e internacionalização.",
    cocenExample:
      "Um edital CAPES pode exigir carta institucional, plano de atividades e comprovação de vínculo acadêmico.",
    recommendedDocuments: ["Carta institucional", "Modelo de plano de atividades", "Checklist de bolsas"],
    synonyms: ["pós-graduação", "bolsa CAPES", "programa institucional"]
  },
  {
    term: "Patente",
    slug: "patente",
    category: "Propriedade intelectual",
    area: "Inovação",
    simpleExplanation: "É uma forma de proteger uma invenção para evitar uso sem autorização.",
    technicalExplanation:
      "Título de propriedade temporário concedido pelo INPI para invenção que atenda requisitos de novidade, atividade inventiva e aplicação industrial.",
    cocenExample:
      "Antes de publicar artigo sobre tecnologia inédita, os inventores comunicam a Inova Unicamp para avaliar proteção.",
    recommendedDocuments: ["Comunicação de invenção", "Guia de sigilo", "Fluxo de patente"],
    synonyms: ["proteção intelectual", "INPI", "invenção"]
  },
  {
    term: "Inova Unicamp",
    slug: "inova-unicamp",
    category: "Inovação",
    area: "Transferência de tecnologia",
    simpleExplanation: "É a agência da Unicamp que apoia proteção intelectual, parcerias e transferência de tecnologia.",
    technicalExplanation:
      "Agência responsável por propriedade intelectual, inovação, empreendedorismo, contratos de licenciamento e interação universidade-empresa.",
    cocenExample:
      "A Inova orienta a equipe sobre sigilo, busca de anterioridade, depósito no INPI e negociação tecnológica.",
    recommendedDocuments: ["Comunicação de invenção", "Parecer de anterioridade", "Guia de transferência"],
    synonyms: ["agência de inovação", "transferência de tecnologia", "licenciamento"]
  },
  {
    term: "Termo de Outorga",
    slug: "termo-de-outorga",
    category: "Fomento",
    area: "Projetos financiados",
    simpleExplanation: "É o documento que formaliza a concessão do recurso aprovado por uma agência.",
    technicalExplanation:
      "Instrumento que define beneficiário, vigência, orçamento, obrigações, condições de uso dos recursos e prestação de contas.",
    cocenExample:
      "Após aprovação FAPESP, o pesquisador usa o termo de outorga para orientar execução e regras do projeto.",
    recommendedDocuments: ["Termo de outorga", "Plano de aplicação", "Manual do financiador"],
    synonyms: ["concessão", "outorga", "instrumento de fomento"]
  },
  {
    term: "Plano de Trabalho",
    slug: "plano-de-trabalho",
    category: "Projetos",
    area: "Submissão e execução",
    simpleExplanation: "É o documento que organiza objetivos, equipe, cronograma, orçamento e entregas de um projeto.",
    technicalExplanation:
      "Instrumento técnico-administrativo que descreve escopo, metas, etapas, indicadores, orçamento, responsabilidades e resultados esperados.",
    cocenExample:
      "Antes de formalizar uma parceria ou abrir projeto Funcamp, a equipe usa o plano de trabalho para alinhar escopo, prazos e recursos.",
    recommendedDocuments: ["Modelo de plano de trabalho", "Cronograma físico-financeiro", "Declaração de anuência"],
    synonyms: ["escopo", "cronograma", "metas", "proposta técnica"]
  },
  {
    term: "Contrapartida",
    slug: "contrapartida",
    category: "Orçamento",
    area: "Fomento e parcerias",
    simpleExplanation: "É o apoio financeiro, material ou institucional oferecido pela universidade ou parceiro ao projeto.",
    technicalExplanation:
      "Composição de recursos econômicos ou não econômicos exigidos em edital, convênio ou parceria para viabilizar a execução do objeto.",
    cocenExample:
      "Um edital pode exigir contrapartida de infraestrutura, horas técnicas ou equipamentos já disponíveis no Centro ou Núcleo.",
    recommendedDocuments: ["Declaração de contrapartida", "Plano de trabalho", "Memória de cálculo"],
    synonyms: ["aporte institucional", "apoio não financeiro", "infraestrutura"]
  },
  {
    term: "Diárias e Passagens",
    slug: "diarias-e-passagens",
    category: "Despesas",
    area: "Viagens e eventos",
    simpleExplanation: "São recursos usados para deslocamento, hospedagem e alimentação em atividades ligadas ao projeto.",
    technicalExplanation:
      "Despesas vinculadas a missão, coleta de campo, evento, reunião técnica ou atividade prevista no plano aprovado e nas normas do financiador.",
    cocenExample:
      "Para apresentar resultado em congresso, o pesquisador confere se o edital permite passagens e diárias na rubrica correta.",
    recommendedDocuments: ["Solicitação de recursos para viagem", "Comprovante de evento", "Relatório de participação"],
    synonyms: ["viagem", "missão", "evento", "deslocamento"]
  }
];

export const templates: DocumentModel[] = [
  {
    title: "Plano de Trabalho",
    slug: "plano-trabalho",
    category: "Projetos",
    version: "v2.1",
    updatedAt: "12/06/2026",
    fileType: "DOCX",
    status: "Publicado",
    description: "Estrutura padronizada para objetivos, metas, cronograma, equipe, entregas e orçamento.",
    tags: ["projeto", "cronograma", "orçamento"],
    downloads: 128
  },
  {
    title: "Declaração de Anuência do Centro/Núcleo",
    slug: "anuencia-centro-nucleo",
    category: "Institucional",
    version: "v1.4",
    updatedAt: "03/06/2026",
    fileType: "DOCX",
    status: "Publicado",
    description: "Modelo para registrar ciência e anuência da direção em submissão de proposta.",
    tags: ["anuência", "direção", "submissão"],
    downloads: 96
  },
  {
    title: "Checklist de Prestação de Contas",
    slug: "checklist-prestacao-contas",
    category: "Financeiro",
    version: "v3.0",
    updatedAt: "28/05/2026",
    fileType: "PDF",
    status: "Revisão",
    description: "Lista de documentos e validações para encerramento financeiro de projeto.",
    tags: ["prestação de contas", "financeiro", "encerramento"],
    downloads: 74
  },
  {
    title: "Comunicação de Invenção",
    slug: "comunicacao-invencao",
    category: "Inovação",
    version: "v1.2",
    updatedAt: "20/05/2026",
    fileType: "PDF",
    status: "Publicado",
    description: "Formulário base para iniciar análise de potencial patenteável e titularidade.",
    tags: ["patente", "Inova Unicamp", "inventores"],
    downloads: 58
  },
  {
    title: "Solicitação de Recursos para Viagem",
    slug: "solicitacao-recursos-viagem",
    category: "Viagens",
    version: "v1.0",
    updatedAt: "15/05/2026",
    fileType: "XLSX",
    status: "Publicado",
    description: "Planilha e checklist para diárias, passagens, inscrição em eventos e justificativa acadêmica.",
    tags: ["viagem", "diárias", "passagens"],
    downloads: 42
  },
  {
    title: "Modelo de Orçamento por Rubrica",
    slug: "modelo-orcamento-rubrica",
    category: "Financeiro",
    version: "v1.3",
    updatedAt: "10/06/2026",
    fileType: "XLSX",
    status: "Publicado",
    description: "Planilha para organizar despesas por rubrica, justificativa técnica e fonte de recurso.",
    tags: ["rubrica", "orçamento", "fomento"],
    downloads: 117
  },
  {
    title: "Checklist de Submissão FAPESP",
    slug: "checklist-submissao-fapesp",
    category: "Fomento",
    version: "v2.0",
    updatedAt: "07/06/2026",
    fileType: "PDF",
    status: "Publicado",
    description: "Roteiro para conferir documentos, orçamento, equipe, anuências e campos obrigatórios antes do envio.",
    tags: ["FAPESP", "submissão", "edital"],
    downloads: 154
  },
  {
    title: "Minuta de Acordo de Cooperação",
    slug: "minuta-acordo-cooperacao",
    category: "Parcerias",
    version: "v1.1",
    updatedAt: "31/05/2026",
    fileType: "DOCX",
    status: "Publicado",
    description: "Modelo de referência para iniciar formalização de cooperação técnica e científica.",
    tags: ["convênio", "parceria", "jurídico"],
    downloads: 63
  }
];

export const fundingCalls: FundingCall[] = [
  {
    title: "FAPESP - Chamada Regular 2026",
    slug: "fapesp-chamada-regular-2026",
    agency: "FAPESP",
    area: "Todas as áreas",
    status: "Aberto",
    deadline: "14/07/2026",
    value: "Conforme orçamento aprovado",
    audience: "Pesquisadores com vínculo institucional",
    link: "/fomento",
    closingSoon: true,
    summary: "Submissão de propostas para projetos de pesquisa regular.",
    categories: ["Material de consumo", "Serviços", "Equipamentos"]
  },
  {
    title: "CNPq - Chamada Universal",
    slug: "cnpq-chamada-universal",
    agency: "CNPq",
    area: "Pesquisa científica e tecnológica",
    status: "Próximo",
    deadline: "Previsão no segundo semestre",
    value: "Faixas por porte de projeto",
    audience: "Grupos de pesquisa",
    link: "/fomento",
    summary: "Financiamento de projetos de pesquisa científica, tecnológica e de inovação.",
    categories: ["Custeio", "Capital", "Bolsas"]
  },
  {
    title: "CAPES - Apoio à Pós-graduação",
    slug: "capes-apoio-pos-graduacao",
    agency: "CAPES",
    area: "Pós-graduação",
    status: "Aberto",
    deadline: "29/06/2026",
    value: "Bolsas e custeio institucional",
    audience: "Programas e pesquisadores vinculados",
    link: "/fomento",
    closingSoon: true,
    summary: "Apoio à formação, internacionalização e consolidação de programas vinculados à pesquisa.",
    categories: ["Mobilidade", "Bolsas", "Eventos"]
  },
  {
    title: "FINEP - Subvenção Econômica",
    slug: "finep-subvencao-economica",
    agency: "FINEP",
    area: "Inovação tecnológica",
    status: "Aberto",
    deadline: "02/08/2026",
    value: "Até R$ 2 milhões por proposta",
    audience: "Projetos com potencial de inovação",
    link: "/fomento",
    summary: "Apoio a projetos inovadores com potencial de transferência tecnológica e parceria externa.",
    categories: ["Inovação", "Empresa parceira", "Prototipagem"]
  },
  {
    title: "Empresas Parceiras - Pesquisa Aplicada",
    slug: "empresas-parceiras",
    agency: "Empresas",
    area: "Pesquisa aplicada",
    status: "Em prospecção",
    deadline: "Calendário negociado",
    value: "Conforme acordo de parceria",
    audience: "Centros, Núcleos e grupos de pesquisa",
    link: "/oportunidades",
    summary: "Oportunidades de cooperação com empresas para pesquisa aplicada, serviços e inovação.",
    categories: ["Parceria", "Convênio", "Propriedade intelectual"]
  },
  {
    title: "Programa Internacional de Cooperação",
    slug: "programa-internacional-cooperacao",
    agency: "Internacional",
    area: "Interdisciplinar",
    status: "Próximo",
    deadline: "Setembro/2026",
    value: "Mobilidade e custeio",
    audience: "Pesquisadores em rede internacional",
    link: "/oportunidades",
    summary: "Apoio a redes, missões e projetos colaborativos com instituições estrangeiras.",
    categories: ["Internacionalização", "Mobilidade", "Redes"]
  },
  {
    title: "FAPESP - Equipamentos Multiusuários",
    slug: "fapesp-equipamentos-multiusuarios",
    agency: "FAPESP",
    area: "Infraestrutura de pesquisa",
    status: "Aberto",
    deadline: "18/08/2026",
    value: "Conforme porte do equipamento",
    audience: "Centros, Núcleos e unidades com uso compartilhado",
    link: "/fomento",
    summary: "Chamada demonstrativa para aquisição e compartilhamento de equipamentos estratégicos de pesquisa.",
    categories: ["Equipamentos", "Infraestrutura", "Uso compartilhado"]
  },
  {
    title: "CAPES - Programa de Internacionalização",
    slug: "capes-programa-internacionalizacao",
    agency: "CAPES",
    area: "Internacionalização",
    status: "Próximo",
    deadline: "Outubro/2026",
    value: "Bolsas, missões e custeio",
    audience: "Grupos com cooperação internacional ativa",
    link: "/fomento",
    summary: "Apoio a mobilidade, redes internacionais e fortalecimento de projetos conjuntos.",
    categories: ["Bolsas", "Mobilidade", "Cooperação"]
  },
  {
    title: "CNPq - Bolsas de Produtividade",
    slug: "cnpq-bolsas-produtividade",
    agency: "CNPq",
    area: "Todas as áreas",
    status: "Monitorado",
    deadline: "Calendário anual",
    value: "Conforme modalidade",
    audience: "Pesquisadores com produção científica consolidada",
    link: "/fomento",
    summary: "Acompanhamento demonstrativo de chamada para produtividade em pesquisa e desenvolvimento tecnológico.",
    categories: ["Bolsas", "Produtividade", "Currículo"]
  }
];

export const supportTrails: SupportTrail[] = [
  {
    title: "Submeter Projeto",
    slug: "submeter-projeto",
    category: "Projetos",
    summary: "Fluxo para organizar proposta, documentos, anuência e submissão institucional.",
    flow: ["Ideia", "Edital", "Plano de Trabalho", "Anuência", "Submissão", "Acompanhamento"],
    steps: [
      {
        title: "Enquadrar a chamada",
        whatToDo: "Conferir agência, elegibilidade, área de pesquisa, orçamento permitido e prazo.",
        responsible: "Pesquisador(a)",
        documents: ["Edital", "Resumo da proposta", "Currículo atualizado"],
        estimatedTime: "1 dia útil",
        nextStep: "Preparar plano de trabalho"
      },
      {
        title: "Preparar documentação",
        whatToDo: "Organizar plano de trabalho, orçamento, equipe, cartas e anexos exigidos.",
        responsible: "Pesquisador(a) e secretaria",
        documents: ["Plano de trabalho", "Orçamento", "Declaração de anuência"],
        estimatedTime: "3 dias úteis",
        nextStep: "Solicitar validação institucional"
      },
      {
        title: "Submeter e registrar",
        whatToDo: "Enviar a proposta no sistema da agência e registrar protocolo.",
        responsible: "Pesquisador(a)",
        documents: ["Comprovante de submissão", "Versão final da proposta"],
        estimatedTime: "Até o prazo do edital",
        nextStep: "Acompanhar resultado"
      }
    ]
  },
  {
    title: "Abrir Projeto Funcamp",
    slug: "abrir-projeto-funcamp",
    category: "Funcamp",
    summary: "Fluxo para formalizar projeto com fundação de apoio após aprovação ou contratação.",
    flow: ["Aprovação", "Plano", "Documentos", "Análise", "Assinatura", "Execução"],
    steps: [
      {
        title: "Confirmar instrumento",
        whatToDo: "Verificar se será contrato, convênio, acordo de parceria ou prestação de serviço.",
        responsible: "Pesquisador(a) e COCEN",
        documents: ["Aprovação do financiador", "Minuta ou termo de referência"],
        estimatedTime: "2 dias úteis",
        nextStep: "Montar pacote de abertura"
      },
      {
        title: "Montar pacote de abertura",
        whatToDo: "Reunir plano de trabalho, orçamento detalhado, equipe, anuência e documentos institucionais.",
        responsible: "Secretaria do Centro/Núcleo",
        documents: ["Plano de trabalho", "Orçamento", "Anuência da direção"],
        estimatedTime: "5 dias úteis",
        nextStep: "Encaminhar para análise"
      },
      {
        title: "Formalizar execução",
        whatToDo: "Acompanhar ajustes, assinatura e liberação para execução financeira.",
        responsible: "COCEN e Funcamp",
        documents: ["Instrumento assinado", "Cadastro do projeto"],
        estimatedTime: "Conforme análise jurídica",
        nextStep: "Iniciar execução"
      }
    ]
  },
  {
    title: "Prestar Contas",
    slug: "prestar-contas",
    category: "Financeiro",
    summary: "Fluxo para organizar comprovantes, relatórios e validações de encerramento.",
    flow: ["Execução", "Comprovantes", "Relatório", "Validação", "Envio", "Encerramento"],
    steps: [
      {
        title: "Conferir pendências",
        whatToDo: "Levantar compras, saldos, notas fiscais, relatórios e entregas previstas.",
        responsible: "Equipe do projeto",
        documents: ["Extrato financeiro", "Notas fiscais", "Relatório técnico"],
        estimatedTime: "3 dias úteis",
        nextStep: "Validar documentos"
      },
      {
        title: "Validar documentos",
        whatToDo: "Checar aderência às rubricas, datas, comprovantes e exigências do financiador.",
        responsible: "Secretaria e financeiro",
        documents: ["Checklist de prestação de contas", "Comprovantes", "Justificativas"],
        estimatedTime: "5 dias úteis",
        nextStep: "Enviar prestação"
      },
      {
        title: "Enviar prestação",
        whatToDo: "Registrar a prestação no sistema exigido e guardar protocolo institucional.",
        responsible: "Pesquisador(a) ou setor responsável",
        documents: ["Protocolo", "Relatório final", "Arquivos enviados"],
        estimatedTime: "Até o prazo do financiador",
        nextStep: "Acompanhar análise"
      }
    ]
  },
  {
    title: "Registrar Patente",
    slug: "registrar-patente",
    category: "Inovação",
    summary: "Fluxo para proteger resultados antes de publicação, evento ou divulgação pública.",
    flow: ["Ideia", "Sigilo", "Comunicação", "Inova", "INPI", "Transferência"],
    steps: [
      {
        title: "Preservar sigilo",
        whatToDo: "Evitar divulgação pública até a avaliação de proteção e registrar evidências técnicas.",
        responsible: "Inventores",
        documents: ["Resumo técnico", "Registro de experimentos", "Lista de inventores"],
        estimatedTime: "Imediato",
        nextStep: "Comunicar invenção"
      },
      {
        title: "Comunicar invenção",
        whatToDo: "Preencher formulário com autores, financiamento, aplicações e divulgações previstas.",
        responsible: "Pesquisador(a)",
        documents: ["Comunicação de invenção", "Declaração de inventores"],
        estimatedTime: "3 dias úteis",
        nextStep: "Enviar para análise da Inova Unicamp"
      },
      {
        title: "Avaliar depósito",
        whatToDo: "Aguardar análise técnica, busca de anterioridade e orientação sobre depósito no INPI.",
        responsible: "Inova Unicamp",
        documents: ["Parecer de anterioridade", "Minuta de patente"],
        estimatedTime: "Conforme complexidade",
        nextStep: "Depositar ou ajustar estratégia"
      }
    ]
  },
  {
    title: "Formalizar Parceria",
    slug: "formalizar-parceria",
    category: "Parcerias",
    summary: "Fluxo para estruturar cooperação com instituição pública, privada ou terceiro setor.",
    flow: ["Contato", "Escopo", "Minuta", "Jurídico", "Assinatura", "Execução"],
    steps: [
      {
        title: "Definir escopo",
        whatToDo: "Registrar objeto, responsabilidades, recursos, prazos e resultados esperados.",
        responsible: "Pesquisador(a) e parceiro",
        documents: ["Memorando de entendimento", "Termo de referência"],
        estimatedTime: "5 dias úteis",
        nextStep: "Avaliar instrumento jurídico"
      },
      {
        title: "Avaliar instrumento",
        whatToDo: "Identificar se será convênio, acordo de parceria, contrato ou prestação de serviço.",
        responsible: "COCEN e área jurídica",
        documents: ["Minuta", "Plano de trabalho", "Documentos do parceiro"],
        estimatedTime: "Conforme análise",
        nextStep: "Formalizar aprovação"
      },
      {
        title: "Formalizar parceria",
        whatToDo: "Coletar aprovações, assinaturas e registros institucionais.",
        responsible: "COCEN",
        documents: ["Instrumento assinado", "Publicação quando aplicável"],
        estimatedTime: "Conforme fluxo institucional",
        nextStep: "Executar e acompanhar"
      }
    ]
  },
  {
    title: "Solicitar Recursos para Viagem",
    slug: "solicitar-recursos-viagem",
    category: "Viagens",
    summary: "Fluxo para planejar solicitação de passagens, diárias, inscrição em eventos e prestação posterior.",
    flow: ["Evento", "Justificativa", "Orçamento", "Autorização", "Execução", "Comprovação"],
    steps: [
      {
        title: "Registrar a finalidade",
        whatToDo: "Descrever vínculo da viagem com projeto, edital, coleta de campo, missão técnica ou apresentação de resultado.",
        responsible: "Pesquisador(a)",
        documents: ["Comprovante do evento", "Carta de aceite", "Justificativa técnica"],
        estimatedTime: "1 dia útil",
        nextStep: "Montar previsão de custos"
      },
      {
        title: "Montar previsão de custos",
        whatToDo: "Organizar passagens, diárias, inscrição e rubrica aplicável conforme regras do financiador.",
        responsible: "Pesquisador(a) e secretaria",
        documents: ["Planilha de viagem", "Orçamento estimado", "Plano aprovado"],
        estimatedTime: "2 dias úteis",
        nextStep: "Solicitar autorização"
      },
      {
        title: "Comprovar participação",
        whatToDo: "Reunir comprovantes de deslocamento, certificado, relatório e recibos quando aplicável.",
        responsible: "Pesquisador(a)",
        documents: ["Certificado", "Relatório de viagem", "Comprovantes"],
        estimatedTime: "Até 5 dias após retorno",
        nextStep: "Arquivar no processo do projeto"
      }
    ]
  },
  {
    title: "Solicitar Anuência Institucional",
    slug: "solicitar-anuencia-institucional",
    category: "Institucional",
    summary: "Fluxo para obter ciência e anuência do Centro ou Núcleo antes da submissão de proposta.",
    flow: ["Proposta", "Documentos", "Direção", "Ajustes", "Anuência", "Submissão"],
    steps: [
      {
        title: "Preparar informações da proposta",
        whatToDo: "Separar resumo, edital, equipe, orçamento, infraestrutura necessária e prazo de submissão.",
        responsible: "Pesquisador(a)",
        documents: ["Resumo da proposta", "Edital", "Orçamento preliminar"],
        estimatedTime: "1 dia útil",
        nextStep: "Encaminhar para direção"
      },
      {
        title: "Avaliar impactos institucionais",
        whatToDo: "Verificar uso de infraestrutura, contrapartidas, responsabilidades e aderência ao escopo do Centro ou Núcleo.",
        responsible: "Direção do Centro/Núcleo",
        documents: ["Plano de trabalho", "Declaração de infraestrutura", "Minuta de anuência"],
        estimatedTime: "3 dias úteis",
        nextStep: "Emitir anuência"
      },
      {
        title: "Arquivar anuência",
        whatToDo: "Salvar versão assinada e anexar ao processo de submissão ou sistema da agência.",
        responsible: "Secretaria",
        documents: ["Anuência assinada", "Comprovante de submissão"],
        estimatedTime: "Mesmo dia",
        nextStep: "Submeter proposta"
      }
    ]
  }
];

export const patentGuides: PatentGuide[] = [
  {
    title: "Sigilo antes da publicação",
    slug: "sigilo-antes-publicacao",
    area: "Proteção",
    status: "Publicado",
    summary: "Antes de artigo, resumo, defesa ou evento, avalie se a divulgação pode comprometer a novidade da invenção.",
    details: [
      "Evite apresentar detalhes técnicos publicamente antes da análise.",
      "Registre datas, autores, financiamento e evidências do desenvolvimento.",
      "Consulte a Inova Unicamp quando houver potencial de aplicação tecnológica."
    ]
  },
  {
    title: "Comunicação de invenção",
    slug: "comunicacao-invencao",
    area: "Triagem",
    status: "Publicado",
    summary: "Documento inicial para informar inventores, titularidade, financiamento, aplicação e possíveis divulgações.",
    details: [
      "Inclua todos os inventores e vínculos institucionais.",
      "Descreva problema técnico, solução e diferencial.",
      "Informe se houve apoio de agência, empresa ou convênio."
    ]
  },
  {
    title: "Inova Unicamp",
    slug: "inova-unicamp",
    area: "Avaliação",
    status: "Publicado",
    summary: "A Inova Unicamp avalia proteção, busca de anterioridade, estratégia de depósito e potencial de transferência.",
    details: [
      "A análise pode solicitar ajustes técnicos ou documentos complementares.",
      "A busca de anterioridade compara a invenção com bases públicas.",
      "O parecer orienta depósito, sigilo, licenciamento ou outra estratégia."
    ]
  },
  {
    title: "INPI",
    slug: "inpi",
    area: "Depósito",
    status: "Publicado",
    summary: "Quando a proteção é recomendada, a documentação técnica segue para depósito no Instituto Nacional da Propriedade Industrial.",
    details: [
      "O depósito registra prioridade e inicia o processo formal.",
      "A redação técnica deve ser revisada antes do envio.",
      "Depois do depósito, a equipe acompanha exigências e prazos."
    ]
  },
  {
    title: "Transferência de tecnologia",
    slug: "transferencia-tecnologia",
    area: "Transferência",
    status: "Publicado",
    summary: "Resultados protegidos podem gerar licenciamento, parceria, transferência de tecnologia e repartição de royalties.",
    details: [
      "A estratégia depende de maturidade tecnológica e interesse de mercado.",
      "A negociação deve respeitar regras institucionais e contratos existentes.",
      "Royalties seguem políticas de repartição aplicáveis à universidade."
    ]
  },
  {
    title: "Busca de anterioridade",
    slug: "busca-de-anterioridade",
    area: "Avaliação",
    status: "Publicado",
    summary: "Etapa de verificação para comparar a invenção com documentos, artigos, patentes e tecnologias já divulgadas.",
    details: [
      "Ajuda a avaliar novidade e atividade inventiva.",
      "Pode indicar ajustes na redação técnica antes do depósito.",
      "Deve ser feita antes de decisões sobre publicação, depósito ou parceria."
    ]
  },
  {
    title: "Acordo de confidencialidade",
    slug: "acordo-confidencialidade",
    area: "Sigilo",
    status: "Publicado",
    summary: "Instrumento usado quando informações técnicas precisam ser compartilhadas com parceiros antes da proteção.",
    details: [
      "Evita divulgação indevida de resultados com potencial de patente.",
      "Deve ser avaliado antes de reuniões técnicas com empresas ou parceiros externos.",
      "Não substitui a comunicação de invenção à Inova Unicamp."
    ]
  }
];

export const cocenCenters: CocenCenter[] = [
  {
    name: "Centro de Pesquisa em Obesidade e Comorbidades",
    area: "Saúde",
    description: "Pesquisa interdisciplinar sobre metabolismo, obesidade, diabetes e doenças associadas.",
    site: "https://www.unicamp.br/",
    contact: "cpoc@unicamp.br",
    researchLines: ["Metabolismo", "Nutrição", "Doenças crônicas"]
  },
  {
    name: "Núcleo Interdisciplinar de Planejamento Energético",
    area: "Energia",
    description: "Estudos sobre transição energética, políticas públicas, eficiência e sustentabilidade.",
    site: "https://www.unicamp.br/",
    contact: "nipe@unicamp.br",
    researchLines: ["Energia renovável", "Política energética", "Sustentabilidade"]
  },
  {
    name: "Centro de Tecnologia da Informação Renato Archer",
    area: "Tecnologia",
    description: "Projetos em computação, automação, dados, inteligência artificial e infraestrutura digital.",
    site: "https://www.unicamp.br/",
    contact: "cti@unicamp.br",
    researchLines: ["IA", "Sistemas", "Dados científicos"]
  },
  {
    name: "Núcleo de Estudos de População",
    area: "Ciências Sociais",
    description: "Produção de conhecimento sobre população, políticas públicas, território e desigualdades.",
    site: "https://www.unicamp.br/",
    contact: "nepo@unicamp.br",
    researchLines: ["Demografia", "Políticas públicas", "Território"]
  },
  {
    name: "Centro de Estudos Ambientais",
    area: "Meio Ambiente",
    description: "Pesquisa aplicada sobre clima, biodiversidade, recursos naturais e gestão ambiental.",
    site: "https://www.unicamp.br/",
    contact: "ambiental@unicamp.br",
    researchLines: ["Clima", "Biodiversidade", "Gestão ambiental"]
  },
  {
    name: "Núcleo de Estudos de Gênero",
    area: "Humanidades",
    description: "Pesquisa em gênero, cultura, direitos, memória e relações sociais.",
    site: "https://www.unicamp.br/",
    contact: "pagu@unicamp.br",
    researchLines: ["Gênero", "Cultura", "Direitos"]
  },
  {
    name: "Laboratório de Estudos Interdisciplinares",
    area: "Interdisciplinar",
    description: "Articulação de redes de pesquisa entre Centros, Núcleos, unidades e parceiros externos.",
    site: "https://www.unicamp.br/",
    contact: "interdisciplinar@unicamp.br",
    researchLines: ["Redes", "Métodos integrados", "Impacto social"]
  }
];

export const faqItems = [
  {
    question: "Posso submeter projeto antes da anuência do Centro/Núcleo?",
    answer:
      "A anuência deve ser obtida antes do envio institucional quando o edital exigir vínculo, infraestrutura, contrapartida ou ciência da direção.",
    category: "Submissão",
    tags: ["anuência", "projeto", "centro"]
  },
  {
    question: "Como saber se uma despesa cabe na rubrica correta?",
    answer:
      "Verifique o edital, o plano aprovado e a classificação da despesa. Quando houver dúvida, registre justificativa técnica antes da compra.",
    category: "Financeiro",
    tags: ["rubrica", "orçamento", "compra"]
  },
  {
    question: "O que fazer antes de divulgar uma invenção?",
    answer:
      "Evite divulgação pública até a triagem de proteção. Registre autores, financiamento e evidências técnicas para avaliação pela Inova Unicamp.",
    category: "Patentes",
    tags: ["patente", "divulgação", "Inova Unicamp"]
  },
  {
    question: "Onde encontro modelos de documentos para edital?",
    answer:
      "Os modelos ficam em Modelos e Documentos, separados por tipo de processo, agência, finalidade, versão e data de atualização.",
    category: "Documentos",
    tags: ["modelo", "edital", "arquivo"]
  },
  {
    question: "Como funciona um convênio?",
    answer:
      "Convênio formaliza cooperação entre instituições, com plano de trabalho, responsabilidades, vigência e prestação de contas.",
    category: "Parcerias",
    tags: ["convênio", "parceria", "jurídico"]
  }
];

export const featuredDeadlines = [
  { title: "FAPESP - Chamada Regular 2026", detail: "14/07/2026", status: "Edital" },
  { title: "Prestação de Contas - Projetos Funcamp", detail: "29/06/2026", status: "Prazo" },
  { title: "Novo Portal de Patentes UNICAMP", detail: "09/06/2026", status: "Notícia" }
];

export const mostAccessedDocuments = [
  "Abertura de Projeto Funcamp",
  "Prestação de Contas",
  "Comunicação de Invenção",
  "Rubricas FAPESP",
  "Plano de Trabalho"
];

export const cocenAnnouncements = [
  "Atualização dos modelos de anuência para submissões com Centros e Núcleos.",
  "Nova trilha de apoio para comunicação de invenção e avaliação de sigilo.",
  "Revisão dos checklists de prestação de contas para projetos com fundação de apoio."
];

export const researchCycle = ["Ideia", "Financiamento", "Execução", "Inovação", "Prestação de Contas"];

export const caseExamples = [
  {
    title: "Projeto FAPESP aprovado",
    description: "Pesquisador localizou edital, usou modelo de plano de trabalho e registrou anuência institucional.",
    result: "Submissão organizada e aprovada"
  },
  {
    title: "Registro de patente",
    description: "Equipe preservou sigilo, comunicou invenção e encaminhou análise para a Inova Unicamp.",
    result: "Depósito no INPI orientado"
  },
  {
    title: "Prestação de contas concluída",
    description: "Checklist reuniu comprovantes, relatórios e protocolo dentro do prazo do financiador.",
    result: "Encerramento sem pendências"
  },
  {
    title: "Parceria universidade-empresa",
    description: "Fluxo apoiou escopo, minuta, análise jurídica e formalização da cooperação.",
    result: "Parceria executada com governança"
  }
];

export const knowledgeSnippets = [
  {
    title: "Fonte - Rubricas e despesas",
    module: "Financeiro",
    content:
      "Rubricas organizam despesas autorizadas por edital e plano de trabalho. A classificação deve considerar finalidade, natureza do gasto, saldo disponível e documentação exigida."
  },
  {
    title: "Fonte - Patentes e divulgação",
    module: "Inovação",
    content:
      "Divulgação pública antes da análise pode comprometer a novidade. A comunicação de invenção deve ocorrer antes de artigos, eventos, resumos públicos ou conversas sem acordo de confidencialidade."
  },
  {
    title: "Fonte - Abertura de Projeto Funcamp",
    module: "Funcamp",
    content:
      "A abertura de projeto Funcamp exige plano de trabalho, orçamento, anuência institucional, instrumento jurídico e documentos do financiador."
  },
  {
    title: "Fonte - Convênios e parcerias",
    module: "Parcerias",
    content:
      "Convênios e parcerias devem indicar objeto, responsabilidades, vigência, recursos, propriedade intelectual quando houver e forma de prestação de contas."
  }
];

export const auditEvents = [
  { id: "1", action: "Termo atualizado", detail: "Rubrica revisada no Glossário Facilitado", when: "há 12 min" },
  { id: "2", action: "Documento versionado", detail: "Comunicação de invenção publicada na versão v1.2", when: "há 38 min" },
  { id: "3", action: "Edital cadastrado", detail: "FINEP adicionada ao painel de Fomento e Editais", when: "há 1 h" }
];

export const adminQueues = [
  { title: "Gestão de termos", count: "10 termos", detail: "Glossário Facilitado com explicações simples e técnicas" },
  { title: "Gestão de documentos", count: "5 versões", detail: "Modelos com data, arquivo, status e histórico" },
  { title: "Gestão de editais", count: "6 oportunidades", detail: "Agências, valores, prazos e áreas de pesquisa" },
  { title: "Gestão de trilhas", count: "5 fluxos", detail: "Etapas com responsáveis e documentos necessários" },
  { title: "Gestão de FAQs", count: "5 perguntas", detail: "Dúvidas frequentes sugeridas pelo Assistente" },
  { title: "Upload e RAG", count: "12 arquivos", detail: "Base documental para respostas com fonte consultada" }
];
