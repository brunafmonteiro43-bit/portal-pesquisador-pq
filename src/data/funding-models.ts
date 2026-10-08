export const fundingModelResourceTypes = [
  "Todos os tipos",
  "Modelo/roteiro",
  "Formulário",
  "Guia/manual",
  "Portal oficial",
  "Documento de submissão",
  "Relatório/prestação de contas",
  "Documento institucional",
  "Documento para evento",
  "Edital de referência"
] as const;

export type FundingResourceType = Exclude<(typeof fundingModelResourceTypes)[number], "Todos os tipos">;

export const fundingModelResourceSections = [
  "Todas as seções",
  "Elaboração e submissão",
  "Apoio a eventos",
  "Execução e prestação de contas",
  "Documentos institucionais",
  "Fomento internacional",
  "Orientações gerais",
  "Ética, integridade e compliance em pesquisa"
] as const;

export type FundingResourceSection = Exclude<(typeof fundingModelResourceSections)[number], "Todas as seções">;

export const fundingModelProjectStages = [
  "Todas as etapas",
  "Planejamento e elaboração",
  "Submissão",
  "Eventos",
  "Execução e prestação de contas",
  "Documentação institucional",
  "Consulta e orientação",
  "Múltiplas etapas"
] as const;

export type FundingProjectStage = Exclude<(typeof fundingModelProjectStages)[number], "Todas as etapas">;

export const fundingModelCallStatuses = [
  "Todos os status",
  "Permanente",
  "Varia por chamada",
  "Chamada aberta",
  "Encerrada / histórica"
] as const;

export type FundingCallStatus = Exclude<(typeof fundingModelCallStatuses)[number], "Todos os status">;

export type COCENCenter = {
  id: string;
  name: string;
  researchLines: string[];
};

export const cocenCenters: COCENCenter[] = [
  {
    id: "CBMEG",
    name: "Centro de Biologia Molecular e Engenharia Genética",
    researchLines: [
      "Biologia molecular, genética e genômica",
      "Biotecnologia e bioinformática",
      "Medicina molecular e biologia vegetal"
    ]
  },
  {
    id: "CCSNano",
    name: "Centro de Componentes Semicondutores e Nanotecnologias",
    researchLines: [
      "Semicondutores e nanoeletrônica",
      "Nanofabricação, nanofotônica e nanomateriais"
    ]
  },
  {
    id: "CEB",
    name: "Centro de Engenharia Biomédica",
    researchLines: [
      "Engenharia biomédica e clínica",
      "Medicina nuclear, ressonância e radiodiagnóstico"
    ]
  },
  {
    id: "CEMIB",
    name: "Centro Multidisciplinar para Investigação Biológica",
    researchLines: [
      "Modelos biológicos e doenças",
      "Células-tronco, CRISPR e vacinas"
    ]
  },
  {
    id: "CIEBC",
    name: "CIEBC",
    researchLines: []
  },
  {
    id: "CEPAGRI",
    name: "Centro de Pesquisas Meteorológicas e Climáticas Aplicadas à Agricultura",
    researchLines: [
      "Meteorologia, clima e agricultura",
      "Sensoriamento remoto e mudanças climáticas"
    ]
  },
  {
    id: "CEPETRO",
    name: "Centro de Estudos de Petróleo",
    researchLines: [
      "Petróleo, reservatórios e perfuração",
      "Energia, CCUS e transição energética",
      "IA e ciência de dados aplicada à energia"
    ]
  },
  {
    id: "CESOP",
    name: "Centro de Estudos de Opinião Pública",
    researchLines: [
      "Opinião pública e comportamento político-social",
      "Políticas públicas e democracia"
    ]
  },
  {
    id: "CIDDIC",
    name: "Centro de Integração, Documentação e Difusão Cultural",
    researchLines: [
      "Musicologia e performance sinfônica",
      "Pedagogia musical e canto coral"
    ]
  },
  {
    id: "CLE",
    name: "Centro de Lógica, Epistemologia e História da Ciência",
    researchLines: [
      "Lógica e epistemologia",
      "História da ciência e filosofia"
    ]
  },
  {
    id: "CMU",
    name: "Centro de Memória-Unicamp",
    researchLines: [
      "Memória, cidade e história social/econômica",
      "Acervos e arquivos"
    ]
  },
  {
    id: "CPQBA",
    name: "Centro Pluridisciplinar de Pesquisas Químicas, Biológicas e Agrícolas",
    researchLines: [
      "Agrotecnologia e bioprocessos",
      "Farmacologia, toxicologia e microbiologia",
      "Química analítica/orgânica e produtos naturais"
    ]
  },
  {
    id: "LUME",
    name: "Núcleo Interdisciplinar de Pesquisas Teatrais",
    researchLines: [
      "Teatro, atuação e performance",
      "Dança, palhaçaria e corpo na arte"
    ]
  },
  {
    id: "NEAB",
    name: "Núcleo de Estudos Afro-Brasileiros",
    researchLines: []
  },
  {
    id: "NEPA",
    name: "Núcleo de Estudos e Pesquisas em Alimentação",
    researchLines: [
      "Saúde pública, alimentação e nutrição",
      "Tecnologias alimentares e abastecimento",
      "Segurança alimentar e agricultura familiar"
    ]
  },
  {
    id: "NEPAM",
    name: "Núcleo de Estudos e Pesquisas Ambientais",
    researchLines: [
      "Biodiversidade e conservação",
      "Serviços ecossistêmicos, clima e justiça ambiental",
      "Sustentabilidade"
    ]
  },
  {
    id: "NEPO",
    name: "Núcleo de Estudos de População Elza Berquó",
    researchLines: [
      "Demografia e políticas públicas",
      "Família, gênero e população",
      "População, ambiente, saúde e saúde reprodutiva"
    ]
  },
  {
    id: "NEPP",
    name: "Núcleo de Estudos de Políticas Públicas",
    researchLines: [
      "Políticas públicas, pobreza e proteção social",
      "Infância, adolescência, segurança, saúde e educação"
    ]
  },
  {
    id: "NICS",
    name: "Núcleo Interdisciplinar de Comunicação Sonora",
    researchLines: [
      "Informação musical e processamento digital de sinais",
      "Som interativo, música e cognição"
    ]
  },
  {
    id: "NIED",
    name: "Núcleo de Informática Aplicada à Educação",
    researchLines: [
      "Tecnologias digitais na educação",
      "Pensamento computacional, STEAM e robótica",
      "Software educacional, EaD, inclusão e IA"
    ]
  },
  {
    id: "NIPE",
    name: "Núcleo Interdisciplinar de Planejamento Energético",
    researchLines: [
      "Planejamento e política energética",
      "Energia, ambiente, sustentabilidade e bioenergia"
    ]
  },
  {
    id: "NUDECRI",
    name: "Núcleo de Desenvolvimento da Criatividade",
    researchLines: [
      "Linguagem urbana e cidades inteligentes",
      "Divulgação científica e tecnologias da linguagem",
      "Literatura, artes e comunicação"
    ]
  },
  {
    id: "PAGU",
    name: "Núcleo de Estudos de Gênero Pagu",
    researchLines: [
      "Gênero, sexualidade e desigualdades",
      "Violência, justiça e políticas públicas",
      "Cultura, mídia, trabalho e mobilidade"
    ]
  }
];

export type FundingModelResource = {
  id: string;
  title: string;
  agency: "FAPESP" | "CNPq" | "CAPES" | "FINEP" | "FAEPEX" | "UNICAMP" | "FUNCAMP" | "Governo de SP" | "Internacional";
  organization: string;
  description: string;
  category: "Elaboração" | "Submissão" | "Documentos institucionais" | "Execução e prestação" | "Orientações";
  scope: "Geral" | "Específico de modalidade" | "Específico de chamada/programa";
  sourceLabel: string;
  sourceUrl: string;
  tags: string[];
  resourceType: FundingResourceType;
  section: FundingResourceSection;
  projectStage: FundingProjectStage;
  centers: string[];
  researchLines: string[];
  eligibilitySummary: string;
  relevanceNote: string;
  callStatus: FundingCallStatus;
  deadline: string | null;
  lastCheckedAt: string | null;
  reviewStatus: "Pendente de validação institucional" | "Validado pela COCEN";
  reviewedBy: string | null;
};

type FundingResourceMetadata = Pick<FundingModelResource,
  "resourceType" | "section" | "projectStage" | "centers" | "researchLines" |
  "eligibilitySummary" | "relevanceNote" | "callStatus" | "deadline" |
  "lastCheckedAt" | "reviewStatus" | "reviewedBy"
>;
type BaseFundingModelResource = Omit<FundingModelResource, keyof FundingResourceMetadata>;




const fundingModelResourceBase: BaseFundingModelResource[] = [
  {
    id: "sp-codigo-etica-administracao-publica",
    title: "Código de Ética da Administração Pública Estadual",
    agency: "Governo de SP",
    organization: "Governo do Estado de São Paulo",
    description: "Código de Ética da Administração Pública Estadual, aprovado pelo Decreto nº 60.428/2014.",
    category: "Orientações",
    scope: "Geral",
    sourceLabel: "Assembleia Legislativa do Estado de São Paulo",
    sourceUrl: "https://www.al.sp.gov.br/repositorio/legislacao/decreto/2014/compilacao-decreto-60428-08.05.2014.html",
    tags: ["ética", "administração pública", "integridade"]
  },
  {
    id: "sp-cartilha-assedio-moral",
    title: "Prevenção e Combate ao Assédio Moral",
    agency: "Governo de SP",
    organization: "Controladoria Geral do Estado de São Paulo",
    description: "Cartilha para orientação e prevenção do assédio moral no serviço público.",
    category: "Orientações",
    scope: "Geral",
    sourceLabel: "Controladoria Geral do Estado de São Paulo",
    sourceUrl: "https://www.controladoriageral.sp.gov.br/cartilha-de-prevencao-e-combate-ao-assedio-moral/",
    tags: ["assédio moral", "ética", "ambiente de trabalho"]
  },
  {
    id: "unicamp-cip",
    title: "Comissão de Integridade em Pesquisa (CIP)",
    agency: "UNICAMP",
    organization: "Pró-Reitoria de Pesquisa — UNICAMP",
    description: "Informações sobre a Comissão de Integridade em Pesquisa e a Política Institucional de Boas Práticas e Integridade em Pesquisa.",
    category: "Orientações",
    scope: "Geral",
    sourceLabel: "PRP/UNICAMP",
    sourceUrl: "https://prp.unicamp.br/comissoes/comissao-de-integridade-em-pesquisa/",
    tags: ["integridade", "boas práticas", "má conduta"]
  },
  {
    id: "unicamp-politica-integridade-pesquisa",
    title: "Política Institucional de Boas Práticas e Integridade em Pesquisa",
    agency: "UNICAMP",
    organization: "Universidade Estadual de Campinas",
    description: "Norma institucional que estabelece princípios e diretrizes para boas práticas e integridade em pesquisa na Unicamp.",
    category: "Documentos institucionais",
    scope: "Geral",
    sourceLabel: "UNICAMP — Procuradoria Geral",
    sourceUrl: "https://www.pg.unicamp.br/norma/23868/0",
    tags: ["política institucional", "integridade", "pesquisa"]
  },
  {
    id: "unicamp-informacao-cip-001-2023",
    title: "Informação CIP 001/2023",
    agency: "UNICAMP",
    organization: "Pró-Reitoria de Pesquisa — UNICAMP",
    description: "Documento que descreve como a Unicamp atende ao disposto no Código de Boas Práticas Científicas da FAPESP.",
    category: "Documentos institucionais",
    scope: "Geral",
    sourceLabel: "PRP/UNICAMP",
    sourceUrl: "https://prp.unicamp.br/documento/informacao-cip-001-2023/",
    tags: ["CIP", "FAPESP", "boas práticas"]
  },
  {
    id: "unicamp-etica-pesquisa",
    title: "Ética em Pesquisa",
    agency: "UNICAMP",
    organization: "Pró-Reitoria de Pesquisa — UNICAMP",
    description: "Portal institucional com orientações e acesso aos comitês de ética em pesquisa com seres humanos e uso de animais.",
    category: "Orientações",
    scope: "Geral",
    sourceLabel: "PRP/UNICAMP",
    sourceUrl: "https://prp.unicamp.br/etica-em-pesquisa/",
    tags: ["ética", "CEP", "animais", "seres humanos"]
  },
  {
    id: "unicamp-cgdp",
    title: "Comissão de Gestão de Dados de Pesquisa (CGDP)",
    agency: "UNICAMP",
    organization: "Pró-Reitoria de Pesquisa — UNICAMP",
    description: "Informações sobre governança de dados de pesquisa e gestão do Repositório de Dados de Pesquisa da Unicamp (REDU).",
    category: "Orientações",
    scope: "Geral",
    sourceLabel: "PRP/UNICAMP",
    sourceUrl: "https://prp.unicamp.br/comissoes/gestao-de-dados-de-pesquisa/comissao/",
    tags: ["dados de pesquisa", "REDU", "ciência aberta"]
  },
  {
    id: "unicamp-redu",
    title: "Repositório de Dados de Pesquisa (REDU)",
    agency: "UNICAMP",
    organization: "Universidade Estadual de Campinas",
    description: "Repositório oficial para depósito, preservação e compartilhamento de dados e softwares resultantes de pesquisas da Unicamp.",
    category: "Orientações",
    scope: "Geral",
    sourceLabel: "Sistema de Bibliotecas — UNICAMP",
    sourceUrl: "https://www.sbu.unicamp.br/repositorio-de-dados-de-pesquisa/",
    tags: ["REDU", "dados", "reprodutibilidade"]
  },
  {
    id: "unicamp-privacidade",
    title: "Privacidade e Proteção de Dados",
    agency: "UNICAMP",
    organization: "Universidade Estadual de Campinas",
    description: "Portal institucional de privacidade e proteção de dados, relacionado à implementação da LGPD na Unicamp.",
    category: "Documentos institucionais",
    scope: "Geral",
    sourceLabel: "UNICAMP — Privacidade",
    sourceUrl: "https://www.privacidade.unicamp.br/",
    tags: ["LGPD", "privacidade", "proteção de dados"]
  },
  {
    id: "unicamp-politica-privacidade",
    title: "Política de Privacidade da UNICAMP",
    agency: "UNICAMP",
    organization: "Universidade Estadual de Campinas",
    description: "Norma institucional que estabelece diretrizes de privacidade e proteção de dados pessoais na Unicamp.",
    category: "Documentos institucionais",
    scope: "Geral",
    sourceLabel: "UNICAMP — Procuradoria Geral",
    sourceUrl: "https://www.pg.unicamp.br/norma/23852/0",
    tags: ["LGPD", "política de privacidade", "dados pessoais"]
  },
  {
    id: "unicamp-programa-integridade",
    title: "Programa de Integridade da UNICAMP",
    agency: "UNICAMP",
    organization: "Controladoria Geral — UNICAMP",
    description: "Programa institucional de integridade voltado à prevenção e ao enfrentamento da corrupção e de outras irregularidades.",
    category: "Orientações",
    scope: "Geral",
    sourceLabel: "Controladoria Geral — UNICAMP",
    sourceUrl: "https://controladoria.unicamp.br/integridade/",
    tags: ["integridade", "anticorrupção", "governança"]
  },
  {
    id: "unicamp-portal-transparencia",
    title: "Portal Transparência UNICAMP",
    agency: "UNICAMP",
    organization: "Universidade Estadual de Campinas",
    description: "Portal institucional para consulta e acompanhamento de informações e recursos públicos da Universidade.",
    category: "Orientações",
    scope: "Geral",
    sourceLabel: "UNICAMP — Transparência",
    sourceUrl: "https://transparencia.unicamp.br/",
    tags: ["transparência", "controle social", "recursos públicos"]
  },
  {
    id: "unicamp-dedh",
    title: "Diretoria Executiva de Direitos Humanos (DeDH)",
    agency: "UNICAMP",
    organization: "Universidade Estadual de Campinas",
    description: "Diretoria voltada à promoção dos direitos humanos, inclusão, diversidade, pluralidade e equidade na Universidade.",
    category: "Orientações",
    scope: "Geral",
    sourceLabel: "DeDH/UNICAMP",
    sourceUrl: "https://www.direitoshumanos.unicamp.br/",
    tags: ["direitos humanos", "inclusão", "equidade"]
  },
  {
    id: "funcamp-codigo-etica",
    title: "Código de Ética da FUNCAMP",
    agency: "FUNCAMP",
    organization: "Fundação de Desenvolvimento da UNICAMP",
    description: "Código de Ética da FUNCAMP, com princípios e valores que orientam a condução de suas atividades.",
    category: "Documentos institucionais",
    scope: "Geral",
    sourceLabel: "FUNCAMP",
    sourceUrl: "https://www.funcamp.unicamp.br/portal/Home/BaixarArquivo?CodigoDiretorio=51&TituloArquivo=C%C3%B3digo+de+%C3%89tica",
    tags: ["FUNCAMP", "ética", "conduta"]
  },
  {
    id: "funcamp-politica-compliance",
    title: "Política de Compliance da FUNCAMP",
    agency: "FUNCAMP",
    organization: "Fundação de Desenvolvimento da UNICAMP",
    description: "Política que define padrões de conduta e dissemina a cultura de conformidade e transparência na FUNCAMP.",
    category: "Documentos institucionais",
    scope: "Geral",
    sourceLabel: "FUNCAMP",
    sourceUrl: "https://www.funcamp.unicamp.br/portal/Home/BaixarArquivo?CodigoDiretorio=52&TituloArquivo=Pol%C3%ADtica+de+Compliance",
    tags: ["FUNCAMP", "compliance", "conformidade"]
  },
  {
    id: "fapesp-boas-praticas",
    title: "Boas Práticas Científicas",
    agency: "FAPESP",
    organization: "Fundação de Amparo à Pesquisa do Estado de São Paulo",
    description: "Referência da FAPESP para integridade ética da pesquisa, baseada em educação, prevenção e investigação.",
    category: "Orientações",
    scope: "Geral",
    sourceLabel: "FAPESP",
    sourceUrl: "https://fapesp.br/boaspraticas/",
    tags: ["boas práticas", "integridade", "pesquisa"]
  },
  {
    id: "fapesp-revista-boas-praticas",
    title: "Revista Boas Práticas",
    agency: "FAPESP",
    organization: "Revista Pesquisa FAPESP",
    description: "Publicações relacionadas a boas práticas científicas e integridade em pesquisa.",
    category: "Orientações",
    scope: "Geral",
    sourceLabel: "Pesquisa FAPESP",
    sourceUrl: "https://revistapesquisa.fapesp.br/category/impressa/boas-praticas/",
    tags: ["boas práticas", "integridade", "publicações"]
  },
  {
    id: "finep-codigo-etica",
    title: "Código de Ética, Conduta e Integridade da Finep",
    agency: "FINEP",
    organization: "Financiadora de Estudos e Projetos",
    description: "Documento que reúne princípios, valores e diretrizes de conduta, ética e integridade da Finep.",
    category: "Documentos institucionais",
    scope: "Geral",
    sourceLabel: "Finep",
    sourceUrl: "https://www.finep.gov.br/images/a-finep/codigo-de-etica-e-conduta/Codigo_de_Etica.pdf",
    tags: ["Finep", "ética", "integridade"]
  },
  {
    id: "cnpq-programa-integridade",
    title: "Programa de Integridade do CNPq",
    agency: "CNPq",
    organization: "Conselho Nacional de Desenvolvimento Científico e Tecnológico",
    description: "Programa estruturado para prevenção, detecção, punição e remediação de corrupção, fraude e desvios éticos e de conduta.",
    category: "Orientações",
    scope: "Geral",
    sourceLabel: "CNPq",
    sourceUrl: "https://www.gov.br/cnpq/pt-br/assuntos/noticias/cnpq-em-acao/copy_of_PlanodeIntegridade_vf.pdf",
    tags: ["CNPq", "integridade", "anticorrupção"]
  },

  {
    id: "fapesp-formularios",
    title: "Central de Formulários FAPESP",
    agency: "FAPESP",
    organization: "Fundação de Amparo à Pesquisa do Estado de São Paulo",
    description: "Reúne Súmula Curricular, reconsideração, alterações da concessão, relatórios, prestação de contas, documentos para Termo de Outorga e outros formulários oficiais.",
    category: "Orientações",
    scope: "Geral",
    sourceLabel: "FAPESP",
    sourceUrl: "https://fapesp.br/formularios/",
    tags: ["formulários", "termo de outorga", "relatórios"]
  },
  {
    id: "fapesp-auxilio-regular",
    title: "Auxílio à Pesquisa Regular — roteiro de projeto",
    agency: "FAPESP",
    organization: "Fundação de Amparo à Pesquisa do Estado de São Paulo",
    description: "Estrutura recomendada para elaboração do projeto científico, incluindo problema, resultados esperados, desafios, metodologia e cronograma.",
    category: "Elaboração",
    scope: "Específico de modalidade",
    sourceLabel: "FAPESP",
    sourceUrl: "https://fapesp.br/6052/auxilio-a-pesquisa-regular",
    tags: ["auxílio regular", "projeto", "cronograma"]
  },
  {
    id: "fapesp-projeto-tematico",
    title: "Projeto Temático — roteiro de projeto",
    agency: "FAPESP",
    organization: "Fundação de Amparo à Pesquisa do Estado de São Paulo",
    description: "Roteiro oficial para organização e apresentação de propostas na modalidade Projeto Temático.",
    category: "Elaboração",
    scope: "Específico de modalidade",
    sourceLabel: "FAPESP",
    sourceUrl: "https://fapesp.br/index.php/14193/roteiro-sugerido-para-formatacao-do-projeto-de-pesquisa-auxilio-a-pesquisa-projeto-tematico",
    tags: ["projeto temático", "proposta", "pesquisa"]
  },
  {
    id: "fapesp-jovem-pesquisador",
    title: "Jovem Pesquisador — roteiro de projeto",
    agency: "FAPESP",
    organization: "Fundação de Amparo à Pesquisa do Estado de São Paulo",
    description: "Estrutura oficial para preparação de propostas na modalidade Jovem Pesquisador.",
    category: "Elaboração",
    scope: "Específico de modalidade",
    sourceLabel: "FAPESP",
    sourceUrl: "https://fapesp.br/10410/roteiro-para-formatacao-do-projeto-de-pesquisa-auxilio-a-pesquisa-jovem-pesquisador",
    tags: ["jovem pesquisador", "projeto", "submissão"]
  },
  {
    id: "fapesp-pite",
    title: "PITE — roteiro de projeto",
    agency: "FAPESP",
    organization: "Fundação de Amparo à Pesquisa do Estado de São Paulo",
    description: "Roteiro específico para projetos do Programa de Apoio à Pesquisa em Parceria para Inovação Tecnológica.",
    category: "Elaboração",
    scope: "Específico de modalidade",
    sourceLabel: "FAPESP",
    sourceUrl: "https://fapesp.br/10368/roteiro-sugerido-para-formatacao-do-projeto-de-pesquisa-programa-de-apoio-a-pesquisa-em-parceria-para-inovacao-tecnologica",
    tags: ["PITE", "inovação", "parceria"]
  },
  {
    id: "fapesp-pipe",
    title: "PIPE — roteiro de projeto",
    agency: "FAPESP",
    organization: "Fundação de Amparo à Pesquisa do Estado de São Paulo",
    description: "Roteiro com objetivos, estado da arte, equipe, cronograma e demais itens específicos do PIPE.",
    category: "Elaboração",
    scope: "Específico de modalidade",
    sourceLabel: "FAPESP",
    sourceUrl: "https://fapesp.br/15090/anexo-1-roteiro-sugerido-para-formatacao-do-projeto-de-pesquisa",
    tags: ["PIPE", "inovação", "pequenas empresas"]
  },
  {
    id: "fapesp-politicas-publicas",
    title: "Pesquisa em Políticas Públicas — roteiro",
    agency: "FAPESP",
    organization: "Fundação de Amparo à Pesquisa do Estado de São Paulo",
    description: "Roteiro próprio para projetos de pesquisa voltados à implementação e avaliação de políticas públicas.",
    category: "Elaboração",
    scope: "Específico de modalidade",
    sourceLabel: "FAPESP",
    sourceUrl: "https://fapesp.br/10446/roteiro-sugerido-para-formatacao-do-projeto-de-pesquisa-programa-de-pesquisa-em-politicas-publicas",
    tags: ["políticas públicas", "projeto", "impacto"]
  },
  {
    id: "fapesp-sumula",
    title: "Súmula Curricular FAPESP",
    agency: "FAPESP",
    organization: "Fundação de Amparo à Pesquisa do Estado de São Paulo",
    description: "Orientação e modelo oficial para apresentação da trajetória acadêmica e científica em propostas FAPESP.",
    category: "Submissão",
    scope: "Geral",
    sourceLabel: "FAPESP",
    sourceUrl: "https://fapesp.br/sumula",
    tags: ["súmula curricular", "currículo", "submissão"]
  },
  {
    id: "fapesp-gestao-dados",
    title: "Plano de Gestão de Dados — orientações",
    agency: "FAPESP",
    organization: "Fundação de Amparo à Pesquisa do Estado de São Paulo",
    description: "Orientações para elaboração do Plano de Gestão de Dados. O formato pode variar conforme a área e a chamada.",
    category: "Elaboração",
    scope: "Geral",
    sourceLabel: "FAPESP",
    sourceUrl: "https://fapesp.br/index.php/gestaodedados",
    tags: ["gestão de dados", "PGD", "dados de pesquisa"]
  },
  {
    id: "fapesp-prestacao-contas",
    title: "Prestação de contas e uso de recursos",
    agency: "FAPESP",
    organization: "Fundação de Amparo à Pesquisa do Estado de São Paulo",
    description: "Formulários, orientações e procedimentos oficiais para uso de recursos e prestação de contas em projetos concedidos.",
    category: "Execução e prestação",
    scope: "Geral",
    sourceLabel: "FAPESP",
    sourceUrl: "https://fapesp.br/prestacaodecontas/",
    tags: ["prestação de contas", "recursos", "execução"]
  },

  {
    id: "cnpq-manuais-plataformas",
    title: "Manual de Submissão de Propostas e plataformas CNPq",
    agency: "CNPq",
    organization: "Conselho Nacional de Desenvolvimento Científico e Tecnológico",
    description: "Manuais oficiais para utilização das plataformas do CNPq e apoio à submissão de propostas.",
    category: "Submissão",
    scope: "Geral",
    sourceLabel: "CNPq",
    sourceUrl: "https://www.gov.br/cnpq/pt-br/centrais-de-conteudo/manuais-de-uso-das-plataformas-do-cnpq",
    tags: ["submissão", "plataforma", "manual"]
  },
  {
    id: "cnpq-chamadas-modelos",
    title: "Modelos de projeto vinculados às chamadas",
    agency: "CNPq",
    organization: "Conselho Nacional de Desenvolvimento Científico e Tecnológico",
    description: "No CNPq os modelos podem mudar conforme a chamada. Consulte sempre o edital vigente para localizar o Modelo de Projeto, Modelo Estruturado da Proposta e declarações exigidas.",
    category: "Elaboração",
    scope: "Específico de chamada/programa",
    sourceLabel: "CNPq",
    sourceUrl: "https://www.gov.br/cnpq/pt-br/chamadas",
    tags: ["chamadas", "modelo de projeto", "anexos"]
  },
  {
    id: "cnpq-chamada-25-2026",
    title: "Exemplo — Modelo de Projeto CNPq/MCTI nº 25/2026",
    agency: "CNPq",
    organization: "Conselho Nacional de Desenvolvimento Científico e Tecnológico",
    description: "Exemplo de chamada que disponibiliza modelo oficial de projeto em formatos editáveis e de consulta.",
    category: "Elaboração",
    scope: "Específico de chamada/programa",
    sourceLabel: "CNPq",
    sourceUrl: "https://www.gov.br/cnpq/pt-br/chamadas/todas-as-chamadas/chamadas-2026/chamada-no-25-2026/chamada-publica-cnpq-N-25-2026",
    tags: ["exemplo", "modelo de projeto", "2026"]
  },
  {
    id: "cnpq-chamada-18-2026",
    title: "Exemplo — Modelo Estruturado da Proposta, Chamada 18/2026",
    agency: "CNPq",
    organization: "Conselho Nacional de Desenvolvimento Científico e Tecnológico",
    description: "Exemplo com modelo estruturado da proposta e documentos complementares, como declaração de conflito de interesse e plano de ações afirmativas.",
    category: "Submissão",
    scope: "Específico de chamada/programa",
    sourceLabel: "CNPq",
    sourceUrl: "https://www.gov.br/cnpq/pt-br/chamadas/todas-as-chamadas/chamadas-2026/chamada-no-18-2026",
    tags: ["proposta", "declarações", "ações afirmativas"]
  },
  {
    id: "cnpq-pci",
    title: "Exemplo — Programa PCI, modelo de projeto",
    agency: "CNPq",
    organization: "Conselho Nacional de Desenvolvimento Científico e Tecnológico",
    description: "Exemplo de programa com Modelo de Projeto de Pesquisa específico da chamada.",
    category: "Elaboração",
    scope: "Específico de chamada/programa",
    sourceLabel: "CNPq",
    sourceUrl: "https://www.gov.br/cnpq/pt-br/chamadas/todas-as-chamadas/chamadas-2026/chamada-no-12-2026/chamada-publica-cnpq-N-12-2026",
    tags: ["PCI", "modelo de projeto", "chamada"]
  },
  {
    id: "cnpq-prestacao-contas",
    title: "Formulários de execução e prestação de contas CNPq",
    agency: "CNPq",
    organization: "Conselho Nacional de Desenvolvimento Científico e Tecnológico",
    description: "Formulários para diárias, serviços de pessoa física, notas fiscais, bolsas e outros procedimentos de execução e prestação de contas.",
    category: "Execução e prestação",
    scope: "Geral",
    sourceLabel: "CNPq",
    sourceUrl: "https://www.gov.br/cnpq/pt-br/acesso-a-informacao/bolsas-e-auxilios/prestacao-de-contas",
    tags: ["prestação de contas", "diárias", "formulários"]
  },

  {
    id: "capes-editais",
    title: "Central de Editais e Resultados CAPES",
    agency: "CAPES",
    organization: "Coordenação de Aperfeiçoamento de Pessoal de Nível Superior",
    description: "Referência para localizar os editais vigentes e identificar os modelos e documentos exigidos em cada programa.",
    category: "Orientações",
    scope: "Geral",
    sourceLabel: "CAPES",
    sourceUrl: "https://www.gov.br/capes/pt-br/assuntos/editais-e-resultados-capes",
    tags: ["editais", "programas", "documentos"]
  },
  {
    id: "capes-amsud",
    title: "MATH-AMSUD — modelos de projeto",
    agency: "CAPES",
    organization: "Coordenação de Aperfeiçoamento de Pessoal de Nível Superior",
    description: "Esta página reúne documentos do MATH-AMSUD. Para STIC-AMSUD ou CLIMAT-AMSUD, consulte a página própria de cada programa e o edital vigente.",
    category: "Submissão",
    scope: "Específico de chamada/programa",
    sourceLabel: "CAPES",
    sourceUrl: "https://www.gov.br/capes/pt-br/acesso-a-informacao/acoes-e-programas/bolsas/bolsas-e-auxilios-internacionais/bolsas-e-auxilios-internacionais/encontre-aqui/paises/multinacional/programa-math-amsud",
    tags: ["MATH-AMSUD", "internacional", "plano de trabalho"]
  },
  {
    id: "capes-augm",
    title: "CAPES/AUGM — modelos e documentos",
    agency: "CAPES",
    organization: "Coordenação de Aperfeiçoamento de Pessoal de Nível Superior",
    description: "Disponibiliza Plano de Trabalho, Modelo de Projeto de Pesquisa, Termo de Outorga e declarações do programa.",
    category: "Submissão",
    scope: "Específico de chamada/programa",
    sourceLabel: "CAPES",
    sourceUrl: "https://www.gov.br/capes/pt-br/acesso-a-informacao/acoes-e-programas/bolsas/bolsas-e-auxilios-internacionais/bolsas-e-auxilios-internacionais/encontre-aqui/paises/multinacional/programa-capes-augm",
    tags: ["AUGM", "projeto", "termo de outorga"]
  },
  {
    id: "capes-paep",
    title: "PAEP — documentos para submissão",
    agency: "CAPES",
    organization: "Coordenação de Aperfeiçoamento de Pessoal de Nível Superior",
    description: "Edital, manual de inscrição, Termo de Anuência do dirigente e demais documentos relacionados ao Programa de Apoio a Eventos no País.",
    category: "Submissão",
    scope: "Específico de modalidade",
    sourceLabel: "CAPES",
    sourceUrl: "https://www.gov.br/capes/pt-br/acesso-a-informacao/acoes-e-programas/bolsas/bolsas-no-pais/paep",
    tags: ["PAEP", "eventos", "anuência"]
  },
  {
    id: "capes-paep-eb",
    title: "PAEP Educação Básica — orçamento e anuências",
    agency: "CAPES",
    organization: "Coordenação de Aperfeiçoamento de Pessoal de Nível Superior",
    description: "Inclui Modelo de Orçamento Detalhado, Termo de Ciência do Palestrante e Termo de Anuência.",
    category: "Submissão",
    scope: "Específico de modalidade",
    sourceLabel: "CAPES",
    sourceUrl: "https://www.gov.br/capes/pt-br/acesso-a-informacao/acoes-e-programas/educacao-basica/programa-de-apoio-a-eventos-no-pais-para-a-educacao-basica-paep-eb",
    tags: ["PAEP-EB", "orçamento", "anuência"]
  },
  {
    id: "capes-proap",
    title: "PROAP — Plano de Trabalho",
    agency: "CAPES",
    organization: "Coordenação de Aperfeiçoamento de Pessoal de Nível Superior",
    description: "Modelo oficial e documentos de concessão relacionados ao Programa de Apoio à Pós-Graduação.",
    category: "Elaboração",
    scope: "Específico de modalidade",
    sourceLabel: "CAPES",
    sourceUrl: "https://www.gov.br/capes/pt-br/acesso-a-informacao/acoes-e-programas/bolsas/bolsas-no-pais/proap/dados-de-concessao",
    tags: ["PROAP", "plano de trabalho", "pós-graduação"]
  },
  {
    id: "capes-auxpe",
    title: "AUXPE — modelos e formulários",
    agency: "CAPES",
    organization: "Coordenação de Aperfeiçoamento de Pessoal de Nível Superior",
    description: "Termo de Solicitação e Concessão, solicitação de prazo e recursos, substituição de coordenador, relatórios e outros documentos.",
    category: "Execução e prestação",
    scope: "Específico de modalidade",
    sourceLabel: "CAPES",
    sourceUrl: "https://www.gov.br/capes/pt-br/acesso-a-informacao/prestacao-de-contas/auxilio-financeiro-a-projeto-educacional-ou-de-pesquisa-e-pos-graduacao-auxpe-1",
    tags: ["AUXPE", "relatórios", "execução"]
  },

  {
    id: "finep-fap",
    title: "Finep — Portal do Cliente, FAP e manuais",
    agency: "FINEP",
    organization: "Financiadora de Estudos e Projetos",
    description: "Portal de referência para acessar o Formulário de Apresentação de Proposta (FAP), manuais e orientações vinculados à modalidade e à chamada. O link leva à área geral e não representa um formulário único.",
    category: "Orientações",
    scope: "Geral",
    sourceLabel: "Finep",
    sourceUrl: "https://www.finep.gov.br/area-para-clientes-externo/subvencao-economica",
    tags: ["Finep", "portal do cliente", "FAP", "manuais"]
  },
  {
    id: "finep-anexos-chamadas",
    title: "Anexos específicos das chamadas Finep",
    agency: "FINEP",
    organization: "Financiadora de Estudos e Projetos",
    description: "As chamadas podem trazer lista de documentos, declarações, nível de maturidade tecnológica, minuta de Termo de Outorga e outros modelos específicos.",
    category: "Submissão",
    scope: "Específico de chamada/programa",
    sourceLabel: "Finep",
    sourceUrl: "https://www.finep.gov.br/chamadas-publicas/chamadaspublicas",
    tags: ["chamadas", "anexos", "termo de outorga"]
  },

  {
    id: "faepex-manual",
    title: "Manual FAEPEX",
    agency: "FAEPEX",
    organization: "Fundo de Apoio ao Ensino, Pesquisa e Extensão — Unicamp",
    description: "Manual com requisitos, procedimentos e orientações para submissão e gestão de auxílios FAEPEX.",
    category: "Orientações",
    scope: "Geral",
    sourceLabel: "PRP Unicamp",
    sourceUrl: "https://prp.unicamp.br/faepex/manual/objetivo-manual-faepex/",
    tags: ["FAEPEX", "manual", "Unicamp"]
  },
  {
    id: "faepex-linha-pesquisa",
    title: "FAEPEX — Linha Pesquisa",
    agency: "FAEPEX",
    organization: "Fundo de Apoio ao Ensino, Pesquisa e Extensão — Unicamp",
    description: "Documentos exigidos para Auxílio Pesquisa, trabalho de campo, publicação, início de carreira, reintegração e outras modalidades.",
    category: "Submissão",
    scope: "Específico de modalidade",
    sourceLabel: "PRP Unicamp",
    sourceUrl: "https://prp.unicamp.br/faepex/manual/linha-pesquisa/",
    tags: ["pesquisa", "auxílio", "modalidades"]
  },
  {
    id: "faepex-submissao",
    title: "FAEPEX — Submissão de Auxílio",
    agency: "FAEPEX",
    organization: "Fundo de Apoio ao Ensino, Pesquisa e Extensão — Unicamp",
    description: "Orientações para preenchimento e submissão de solicitações no Sistema FAEPEX.",
    category: "Submissão",
    scope: "Geral",
    sourceLabel: "PRP Unicamp",
    sourceUrl: "https://prp.unicamp.br/faepex/manual/submissao-de-auxilio/",
    tags: ["submissão", "sistema FAEPEX", "auxílio"]
  },
  {
    id: "faepex-relatorio",
    title: "FAEPEX — Relatório Técnico",
    agency: "FAEPEX",
    organization: "Fundo de Apoio ao Ensino, Pesquisa e Extensão — Unicamp",
    description: "Orientações para elaboração e entrega do relatório técnico de auxílios concedidos.",
    category: "Execução e prestação",
    scope: "Geral",
    sourceLabel: "PRP Unicamp",
    sourceUrl: "https://prp.unicamp.br/faepex/manual/relatorio-tecnico/",
    tags: ["relatório técnico", "prestação", "FAEPEX"]
  },
  {
    id: "faepex-valores",
    title: "FAEPEX — Tabela de Valores",
    agency: "FAEPEX",
    organization: "Fundo de Apoio ao Ensino, Pesquisa e Extensão — Unicamp",
    description: "Valores vigentes para modalidades, bolsas, diárias e demais itens previstos no programa.",
    category: "Orientações",
    scope: "Geral",
    sourceLabel: "PRP Unicamp",
    sourceUrl: "https://prp.unicamp.br/faepex/manual/tabela-de-valores/",
    tags: ["valores", "bolsas", "diárias"]
  },

  {
    id: "unicamp-grant-office-documentos",
    title: "Grant Office — documentos institucionais",
    agency: "UNICAMP",
    organization: "Pró-Reitoria de Pesquisa — Unicamp",
    description: "Lei de Criação, Estatuto e Regimento, CNPJ, documentos do Reitor, balanços, Política de Inovação e outros documentos que podem ser exigidos em propostas e contratos.",
    category: "Documentos institucionais",
    scope: "Geral",
    sourceLabel: "Grant Office / PRP",
    sourceUrl: "https://prp.unicamp.br/grant-office/submissao-e-gestao/documentos/",
    tags: ["documentos institucionais", "Unicamp", "Grant Office"]
  },
  {
    id: "unicamp-funcamp-elaboracao",
    title: "FUNCAMP — Elaboração de Projetos",
    agency: "UNICAMP",
    organization: "Fundação de Desenvolvimento da Unicamp",
    description: "Acesso a Modelo de Projeto, modelos de orçamento, simuladores de cálculo, legislação e modelos de minuta disponibilizados pela FUNCAMP.",
    category: "Elaboração",
    scope: "Geral",
    sourceLabel: "FUNCAMP",
    sourceUrl: "https://www.funcamp.unicamp.br/portal/Home/ElaboracaoProjeto",
    tags: ["FUNCAMP", "orçamento", "modelo de projeto"]
  },

  {
    id: "internacional-horizon",
    title: "Horizon Europe — templates e documentos",
    agency: "Internacional",
    organization: "European Commission",
    description: "O Funding & Tenders Portal disponibiliza templates das propostas, formulários de avaliação, Model Grant Agreement e documentos específicos de cada chamada.",
    category: "Submissão",
    scope: "Específico de chamada/programa",
    sourceLabel: "European Commission",
    sourceUrl: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/home",
    tags: ["Horizon Europe", "União Europeia", "templates"]
  },
  {
    id: "internacional-nih-forms",
    title: "NIH — Forms Directory",
    agency: "Internacional",
    organization: "National Institutes of Health",
    description: "Central com formulários e format pages, incluindo Biosketch, Other Support, formulários SF424 e materiais de candidatura.",
    category: "Submissão",
    scope: "Geral",
    sourceLabel: "NIH",
    sourceUrl: "https://grants.nih.gov/grants-process/write-application/forms-directory",
    tags: ["NIH", "Biosketch", "SF424"]
  },
  {
    id: "internacional-nih-guide",
    title: "NIH — Application Guide",
    agency: "Internacional",
    organization: "National Institutes of Health",
    description: "Guia oficial com instruções para preparação e preenchimento das propostas NIH.",
    category: "Orientações",
    scope: "Geral",
    sourceLabel: "NIH",
    sourceUrl: "https://www.grants.nih.gov/grants-process/write-application/how-to-apply-application-guide",
    tags: ["NIH", "guia", "candidatura"]
  },
  {
    id: "internacional-nsf",
    title: "NSF — Proposal Preparation Instructions",
    agency: "Internacional",
    organization: "U.S. National Science Foundation",
    description: "Orientações para Project Description, orçamento, Biosketch, Current and Pending Support, colaboradores, plano de dados e demais componentes da proposta.",
    category: "Elaboração",
    scope: "Geral",
    sourceLabel: "NSF",
    sourceUrl: "https://www.nsf.gov/policies/pappg/24-1/ch-2-proposal-preparation",
    tags: ["NSF", "proposal", "budget"]
  },
  {
    id: "internacional-ukri",
    title: "UKRI — Develop your application",
    agency: "Internacional",
    organization: "UK Research and Innovation",
    description: "Orientações para elaboração de propostas, currículo R4RI, custos e utilização do Funding Service.",
    category: "Elaboração",
    scope: "Geral",
    sourceLabel: "UKRI",
    sourceUrl: "https://www.ukri.org/apply-for-funding/develop-your-application/",
    tags: ["UKRI", "R4RI", "Reino Unido"]
  },
  {
    id: "internacional-wellcome",
    title: "Wellcome — Prepare to Apply",
    agency: "Internacional",
    organization: "Wellcome",
    description: "Orientações para escrever proposta, definir equipe e preparar justificativa orçamentária antes da candidatura.",
    category: "Elaboração",
    scope: "Geral",
    sourceLabel: "Wellcome",
    sourceUrl: "https://wellcome.org/research-funding/guidance/prepare-to-apply",
    tags: ["Wellcome", "proposta", "orçamento"]
  }];


const allCenterIds = cocenCenters.map((center) => center.id);
const allResearchLines = Array.from(new Set(cocenCenters.flatMap((center) => center.researchLines)));

const innovationCenters = ["CBMEG", "CCSNano", "CEB", "CEMIB", "CPQBA", "CEPETRO", "NIPE", "NIED", "NEPA"];
const biomedicalCenters = ["CBMEG", "CEB", "CEMIB", "CPQBA", "NEPA", "NEPO", "NEPP", "PAGU"];
const policyCenters = ["CESOP", "NEPA", "NEPAM", "NEPO", "NEPP", "NIED", "NUDECRI", "PAGU", "CEPAGRI"];

const centersByResource: Record<string, string[]> = {
  "fapesp-pite": innovationCenters,
  "fapesp-pipe": innovationCenters,
  "fapesp-politicas-publicas": policyCenters,
  "cnpq-chamada-25-2026": ["NEPO", "PAGU", "NEPP"],
  "cnpq-chamada-18-2026": ["CESOP", "NEPA", "NEPO", "NEPP", "PAGU"],
  "cnpq-pci": [],
  "capes-amsud": ["CCSNano", "CEPAGRI", "CEPETRO", "CLE", "NICS", "NIED", "NIPE", "NEPAM"],
  "capes-paep-eb": ["NIED", "NEPP", "NEPO", "CESOP"],
  "finep-fap": innovationCenters,
  "finep-anexos-chamadas": innovationCenters,
  "internacional-nih-forms": biomedicalCenters,
  "internacional-nih-guide": biomedicalCenters,
  "internacional-wellcome": biomedicalCenters
};

const researchLinesByResource: Record<string, string[]> = {
  "fapesp-pite": [
    "Biotecnologia e bioinformática",
    "Semicondutores e nanoeletrônica",
    "Nanofabricação, nanofotônica e nanomateriais",
    "Engenharia biomédica e clínica",
    "Agrotecnologia e bioprocessos",
    "Petróleo, reservatórios e perfuração",
    "Energia, CCUS e transição energética",
    "Planejamento e política energética",
    "Tecnologias digitais na educação"
  ],
  "fapesp-pipe": [
    "Biotecnologia e bioinformática",
    "Semicondutores e nanoeletrônica",
    "Nanofabricação, nanofotônica e nanomateriais",
    "Engenharia biomédica e clínica",
    "Agrotecnologia e bioprocessos",
    "Química analítica/orgânica e produtos naturais",
    "Petróleo, reservatórios e perfuração",
    "Energia, CCUS e transição energética",
    "Planejamento e política energética",
    "Tecnologias digitais na educação",
    "Tecnologias alimentares e abastecimento"
  ],
  "fapesp-politicas-publicas": [
    "Opinião pública e comportamento político-social",
    "Políticas públicas e democracia",
    "Meteorologia, clima e agricultura",
    "Saúde pública, alimentação e nutrição",
    "Biodiversidade e conservação",
    "Demografia e políticas públicas",
    "População, ambiente, saúde e saúde reprodutiva",
    "Políticas públicas, pobreza e proteção social",
    "Infância, adolescência, segurança, saúde e educação",
    "Tecnologias digitais na educação",
    "Linguagem urbana e cidades inteligentes",
    "Gênero, sexualidade e desigualdades",
    "Violência, justiça e políticas públicas"
  ],
  "cnpq-chamada-25-2026": [
    "População, ambiente, saúde e saúde reprodutiva",
    "Gênero, sexualidade e desigualdades",
    "Infância, adolescência, segurança, saúde e educação"
  ],
  "cnpq-chamada-18-2026": [
    "Opinião pública e comportamento político-social",
    "Políticas públicas e democracia",
    "Saúde pública, alimentação e nutrição",
    "Demografia e políticas públicas",
    "População, ambiente, saúde e saúde reprodutiva",
    "Políticas públicas, pobreza e proteção social",
    "Infância, adolescência, segurança, saúde e educação",
    "Gênero, sexualidade e desigualdades"
  ],
  "capes-amsud": [
    "Semicondutores e nanoeletrônica",
    "Nanofabricação, nanofotônica e nanomateriais",
    "Meteorologia, clima e agricultura",
    "Sensoriamento remoto e mudanças climáticas",
    "Petróleo, reservatórios e perfuração",
    "Energia, CCUS e transição energética",
    "IA e ciência de dados aplicada à energia",
    "Lógica e epistemologia",
    "Informação musical e processamento digital de sinais",
    "Som interativo, música e cognição",
    "Tecnologias digitais na educação",
    "Pensamento computacional, STEAM e robótica",
    "Planejamento e política energética",
    "Biodiversidade e conservação",
    "Serviços ecossistêmicos, clima e justiça ambiental"
  ],
  "capes-paep-eb": [
    "Tecnologias digitais na educação",
    "Pensamento computacional, STEAM e robótica",
    "Software educacional, EaD, inclusão e IA",
    "Políticas públicas, pobreza e proteção social",
    "Infância, adolescência, segurança, saúde e educação"
  ],
  "finep-fap": [
    "Biotecnologia e bioinformática",
    "Semicondutores e nanoeletrônica",
    "Nanofabricação, nanofotônica e nanomateriais",
    "Engenharia biomédica e clínica",
    "Agrotecnologia e bioprocessos",
    "Química analítica/orgânica e produtos naturais",
    "Petróleo, reservatórios e perfuração",
    "Energia, CCUS e transição energética",
    "Planejamento e política energética",
    "Tecnologias digitais na educação",
    "Tecnologias alimentares e abastecimento"
  ],
  "finep-anexos-chamadas": [
    "Biotecnologia e bioinformática",
    "Semicondutores e nanoeletrônica",
    "Nanofabricação, nanofotônica e nanomateriais",
    "Engenharia biomédica e clínica",
    "Agrotecnologia e bioprocessos",
    "Petróleo, reservatórios e perfuração",
    "Energia, CCUS e transição energética",
    "Planejamento e política energética",
    "Tecnologias digitais na educação",
    "Tecnologias alimentares e abastecimento"
  ],
  "internacional-nih-forms": [
    "Biologia molecular, genética e genômica",
    "Biotecnologia e bioinformática",
    "Medicina molecular e biologia vegetal",
    "Engenharia biomédica e clínica",
    "Medicina nuclear, ressonância e radiodiagnóstico",
    "Modelos biológicos e doenças",
    "Células-tronco, CRISPR e vacinas",
    "Farmacologia, toxicologia e microbiologia",
    "Saúde pública, alimentação e nutrição",
    "População, ambiente, saúde e saúde reprodutiva"
  ],
  "internacional-nih-guide": [
    "Biologia molecular, genética e genômica",
    "Biotecnologia e bioinformática",
    "Medicina molecular e biologia vegetal",
    "Engenharia biomédica e clínica",
    "Medicina nuclear, ressonância e radiodiagnóstico",
    "Modelos biológicos e doenças",
    "Células-tronco, CRISPR e vacinas",
    "Farmacologia, toxicologia e microbiologia",
    "Saúde pública, alimentação e nutrição",
    "População, ambiente, saúde e saúde reprodutiva"
  ],
  "internacional-wellcome": [
    "Biologia molecular, genética e genômica",
    "Biotecnologia e bioinformática",
    "Medicina molecular e biologia vegetal",
    "Engenharia biomédica e clínica",
    "Medicina nuclear, ressonância e radiodiagnóstico",
    "Modelos biológicos e doenças",
    "Células-tronco, CRISPR e vacinas",
    "Farmacologia, toxicologia e microbiologia",
    "Saúde pública, alimentação e nutrição",
    "População, ambiente, saúde e saúde reprodutiva"
  ],
  "cnpq-pci": []
};

const resourceTypeOverrides: Record<string, FundingResourceType> = {
  "fapesp-formularios": "Formulário",
  "fapesp-sumula": "Formulário",
  "fapesp-gestao-dados": "Guia/manual",
  "cnpq-manuais-plataformas": "Guia/manual",
  "cnpq-chamadas-modelos": "Portal oficial",
  "cnpq-chamada-25-2026": "Edital de referência",
  "cnpq-chamada-18-2026": "Edital de referência",
  "cnpq-pci": "Edital de referência",
  "capes-editais": "Portal oficial",
  "capes-paep": "Documento para evento",
  "capes-paep-eb": "Documento para evento",
  "capes-proap": "Documento de submissão",
  "capes-auxpe": "Relatório/prestação de contas",
  "finep-fap": "Portal oficial",
  "finep-anexos-chamadas": "Portal oficial",
  "faepex-manual": "Guia/manual",
  "faepex-relatorio": "Relatório/prestação de contas",
  "faepex-valores": "Guia/manual",
  "unicamp-grant-office-documentos": "Documento institucional",
  "unicamp-funcamp-elaboracao": "Modelo/roteiro",
  "internacional-horizon": "Portal oficial",
  "internacional-nih-forms": "Formulário",
  "internacional-nih-guide": "Guia/manual",
  "internacional-nsf": "Guia/manual",
  "internacional-ukri": "Guia/manual",
  "internacional-wellcome": "Guia/manual"
};

const projectStageOverrides: Record<string, FundingProjectStage> = {
  "fapesp-formularios": "Múltiplas etapas",
  "fapesp-prestacao-contas": "Execução e prestação de contas",
  "cnpq-prestacao-contas": "Execução e prestação de contas",
  "capes-paep": "Eventos",
  "capes-paep-eb": "Eventos",
  "capes-auxpe": "Execução e prestação de contas",
  "finep-fap": "Consulta e orientação",
  "finep-anexos-chamadas": "Submissão",
  "faepex-relatorio": "Execução e prestação de contas",
  "unicamp-grant-office-documentos": "Documentação institucional",
  "unicamp-funcamp-elaboracao": "Múltiplas etapas"
};

const sectionOverrides: Record<string, FundingResourceSection> = {
  "sp-codigo-etica-administracao-publica": "Ética, integridade e compliance em pesquisa",
  "sp-cartilha-assedio-moral": "Ética, integridade e compliance em pesquisa",
  "unicamp-cip": "Ética, integridade e compliance em pesquisa",
  "unicamp-politica-integridade-pesquisa": "Ética, integridade e compliance em pesquisa",
  "unicamp-informacao-cip-001-2023": "Ética, integridade e compliance em pesquisa",
  "unicamp-etica-pesquisa": "Ética, integridade e compliance em pesquisa",
  "unicamp-cgdp": "Ética, integridade e compliance em pesquisa",
  "unicamp-redu": "Ética, integridade e compliance em pesquisa",
  "unicamp-privacidade": "Ética, integridade e compliance em pesquisa",
  "unicamp-politica-privacidade": "Ética, integridade e compliance em pesquisa",
  "unicamp-programa-integridade": "Ética, integridade e compliance em pesquisa",
  "unicamp-portal-transparencia": "Ética, integridade e compliance em pesquisa",
  "unicamp-dedh": "Ética, integridade e compliance em pesquisa",
  "funcamp-codigo-etica": "Ética, integridade e compliance em pesquisa",
  "funcamp-politica-compliance": "Ética, integridade e compliance em pesquisa",
  "fapesp-boas-praticas": "Ética, integridade e compliance em pesquisa",
  "fapesp-revista-boas-praticas": "Ética, integridade e compliance em pesquisa",
  "finep-codigo-etica": "Ética, integridade e compliance em pesquisa",
  "cnpq-programa-integridade": "Ética, integridade e compliance em pesquisa",
  "capes-amsud": "Fomento internacional",
  "capes-augm": "Fomento internacional",
  "capes-paep": "Apoio a eventos",
  "capes-paep-eb": "Apoio a eventos",
  "finep-fap": "Orientações gerais",
  "finep-anexos-chamadas": "Elaboração e submissão",
  "unicamp-grant-office-documentos": "Documentos institucionais",
  "internacional-horizon": "Fomento internacional",
  "internacional-nih-forms": "Fomento internacional",
  "internacional-nih-guide": "Fomento internacional",
  "internacional-nsf": "Fomento internacional",
  "internacional-ukri": "Fomento internacional",
  "internacional-wellcome": "Fomento internacional"
};

const statusOverrides: Record<string, { callStatus?: FundingCallStatus; deadline?: string | null }> = {
  "cnpq-chamada-25-2026": { callStatus: "Encerrada / histórica", deadline: "2026-08-12" },
  "cnpq-chamada-18-2026": { callStatus: "Encerrada / histórica", deadline: null },
  "cnpq-pci": { callStatus: "Encerrada / histórica", deadline: "2026-06-27" },
  "capes-paep": { callStatus: "Chamada aberta", deadline: "2026-10-20" },
  "cnpq-chamadas-modelos": { callStatus: "Permanente", deadline: null },
  "capes-editais": { callStatus: "Permanente", deadline: null }
};

const eligibilityByResource: Record<string, string> = {
  "fapesp-pite": "Exige aderência à modalidade de parceria para inovação tecnológica e participação de empresa nos termos da chamada.",
  "fapesp-pipe": "Destina-se a pesquisa desenvolvida em pequena empresa elegível; não é uma linha padrão para projetos conduzidos somente pelo centro.",
  "cnpq-chamada-25-2026": "Chamada temática sobre endometriose e saúde menstrual; prazo encerrado em 12/08/2026. Manter apenas como referência histórica.",
  "cnpq-chamada-18-2026": "Chamada específica para avaliação de políticas, programas, projetos e ações em saúde; não deve ser apresentada como edital vigente.",
  "cnpq-pci": "Programa com público-alvo e instituições vinculadas específicos; o prazo de 2026 terminou. Manter apenas como exemplo histórico.",
  "capes-amsud": "Aderência depende do tema (matemática, TIC ou clima), da cooperação internacional e das regras do edital vigente.",
  "capes-paep": "Apoio a eventos no país; não é um modelo de projeto de pesquisa. O prazo exibido refere-se ao edital consultado para eventos de 2027.",
  "capes-paep-eb": "Apoio a eventos ligados à educação básica e à formação de professores; confira o edital específico.",
  "capes-proap": "O apoio é destinado a programas de pós-graduação elegíveis; o centro/núcleo, isoladamente, não é o beneficiário.",
  "capes-auxpe": "Documentos para gestão de auxílio concedido; a aplicação depende do instrumento e das regras da CAPES.",
  "finep-fap": "A área reúne materiais e formulários de acordo com a modalidade. Confirme o documento exato na chamada ou no instrumento de concessão.",
  "finep-anexos-chamadas": "Os anexos e requisitos variam por chamada e podem exigir empresa, ICT parceira ou condições específicas de inovação.",
  "internacional-horizon": "A elegibilidade de instituição brasileira, a necessidade de consórcio e as regras de participação variam por chamada.",
  "internacional-nih-forms": "Use somente quando o programa aceitar a participação de instituição/parceiro brasileiro e o tema for compatível.",
  "internacional-nih-guide": "Use somente quando o programa aceitar a participação de instituição/parceiro brasileiro e o tema for compatível.",
  "internacional-nsf": "A participação de instituição brasileira depende do programa e das regras específicas da chamada.",
  "internacional-ukri": "A elegibilidade de instituições brasileiras e a necessidade de parceiro no Reino Unido dependem da chamada.",
  "internacional-wellcome": "A elegibilidade institucional e temática deve ser confirmada nas regras atuais da oportunidade."
};

const relevanceByResource: Record<string, string> = {
  "fapesp-formularios": "Reúne documentos para diferentes etapas do projeto; não substitui o roteiro específico da modalidade.",
  "fapesp-auxilio-regular": "Roteiro amplo para estruturar pesquisa acadêmica em diferentes áreas, sujeito às instruções atuais da FAPESP.",
  "fapesp-projeto-tematico": "Referência para propostas de maior escopo e colaboração; confirme se a modalidade é adequada ao projeto.",
  "fapesp-pite": "Mais aderente quando há parceria com empresa e desenvolvimento de inovação tecnológica.",
  "fapesp-pipe": "Relevante para inovação realizada em pequena empresa; não deve ser sugerido como recurso universal aos centros.",
  "fapesp-politicas-publicas": "Mais aderente a estudos de implementação ou avaliação de políticas públicas e seus efeitos sociais.",
  "cnpq-chamada-25-2026": "Exemplo histórico de modelo temático sobre saúde menstrual; não é oportunidade aberta.",
  "cnpq-chamada-18-2026": "Exemplo histórico de proposta para avaliação de políticas e ações em saúde; consulte a lista atual de chamadas.",
  "cnpq-pci": "Exemplo histórico de modalidade específica; não é um modelo genérico para todos os centros.",
  "capes-paep": "Recurso para organização de eventos acadêmicos, separado da elaboração de projetos de pesquisa.",
  "capes-paep-eb": "Recurso específico para eventos de educação básica e formação de professores.",
  "capes-proap": "Só é pertinente quando a proposta tramita por um programa de pós-graduação elegível.",
  "finep-fap": "Ponto de entrada para localizar FAP e manuais; o formulário correto depende da modalidade e da chamada.",
  "finep-anexos-chamadas": "Use para localizar anexos vinculados à chamada Finep específica, não como um template universal.",
  "faepex-linha-pesquisa": "Mostra modalidades distintas do FAEPEX; selecione a linha compatível antes de preparar a submissão.",
  "unicamp-funcamp-elaboracao": "Complementa o portal com modelos de projeto, orçamento e minutas já oferecidos pela FUNCAMP.",
  "internacional-horizon": "Referência internacional transversal; a elegibilidade brasileira e as exigências de consórcio variam por chamada.",
  "internacional-nih-forms": "Útil para propostas biomédicas/de saúde quando a chamada permitir participação brasileira.",
  "internacional-nih-guide": "Guia de candidatura para programas NIH elegíveis; não presumir elegibilidade automática da Unicamp.",
  "internacional-nsf": "Guia internacional de referência; confirme programa, elegibilidade e avisos complementares atuais.",
  "internacional-ukri": "Referência para oportunidades UKRI quando a chamada aceitar a instituição e a colaboração proposta.",
  "internacional-wellcome": "Referência para oportunidades de pesquisa elegíveis; confirme tema, instituição e regras da oportunidade."
};

function inferResourceType(resource: BaseFundingModelResource): FundingResourceType {
  if (resourceTypeOverrides[resource.id]) return resourceTypeOverrides[resource.id];
  if (resource.id.includes("prestacao") || resource.id.includes("relatorio") || resource.id.includes("ddr")) {
    return "Relatório/prestação de contas";
  }
  if (resource.id.includes("paep")) return "Documento para evento";
  if (resource.id.includes("chamada") || resource.id.includes("pci")) return "Edital de referência";
  if (resource.id.includes("formularios") || resource.id.includes("sumula")) return "Formulário";
  if (resource.id.includes("manual")) return "Guia/manual";
  if (resource.category === "Documentos institucionais") return "Documento institucional";
  if (resource.category === "Elaboração") return "Modelo/roteiro";
  if (resource.category === "Submissão") return "Documento de submissão";
  if (resource.category === "Orientações") return "Guia/manual";
  return "Portal oficial";
}

function inferSection(resource: BaseFundingModelResource): FundingResourceSection {
  if (sectionOverrides[resource.id]) return sectionOverrides[resource.id];
  if (resource.agency === "Internacional") return "Fomento internacional";
  if (resource.id.includes("paep")) return "Apoio a eventos";
  if (resource.category === "Execução e prestação") return "Execução e prestação de contas";
  if (resource.category === "Documentos institucionais") return "Documentos institucionais";
  if (resource.category === "Elaboração" || resource.category === "Submissão") return "Elaboração e submissão";
  return "Orientações gerais";
}

function inferProjectStage(resource: BaseFundingModelResource): FundingProjectStage {
  if (projectStageOverrides[resource.id]) return projectStageOverrides[resource.id];
  if (resource.id.includes("paep")) return "Eventos";
  if (resource.category === "Execução e prestação") return "Execução e prestação de contas";
  if (resource.category === "Documentos institucionais") return "Documentação institucional";
  if (resource.category === "Elaboração") return "Planejamento e elaboração";
  if (resource.category === "Submissão") return "Submissão";
  if (resource.category === "Orientações") return "Consulta e orientação";
  return "Múltiplas etapas";
}

export const fundingModelResources: FundingModelResource[] = fundingModelResourceBase.map((resource) => {
  const centers = centersByResource[resource.id] ?? allCenterIds;
  const centersWithLines = cocenCenters.filter((center) => centers.includes(center.id));
  const defaultResearchLines =
    centers.length === allCenterIds.length
      ? allResearchLines
      : Array.from(new Set(centersWithLines.flatMap((center) => center.researchLines)));
  const status = statusOverrides[resource.id] ?? {};
  const isInternational = resource.agency === "Internacional";

  return {
    ...resource,
    resourceType: inferResourceType(resource),
    section: inferSection(resource),
    projectStage: inferProjectStage(resource),
    centers,
    researchLines: researchLinesByResource[resource.id] ?? defaultResearchLines,
    eligibilitySummary:
      eligibilityByResource[resource.id] ??
      (isInternational
        ? "A elegibilidade de instituições brasileiras, parcerias e custos depende das regras da chamada. Confirme antes de planejar a candidatura."
        : "A indicação temática não confirma elegibilidade. Verifique público-alvo, instituição proponente, modalidade, custos e prazo na fonte oficial."),
    relevanceNote:
      relevanceByResource[resource.id] ??
      (resource.scope === "Geral"
        ? "Referência transversal para apoiar uma ou mais etapas do projeto; confira quais documentos se aplicam ao seu caso."
        : "Recurso associado tematicamente aos centros e temas indicados. A adequação final depende do escopo e das regras vigentes."),
    callStatus: status.callStatus ?? (resource.scope === "Geral" ? "Permanente" : "Varia por chamada"),
    deadline: status.deadline ?? null,
    lastCheckedAt: null,
    reviewStatus: "Pendente de validação institucional",
    reviewedBy: null
  };
});

export const fundingModelAgencies = [
  "Todos",
  "FAPESP",
  "CNPq",
  "CAPES",
  "FINEP",
  "FAEPEX",
  "UNICAMP",
  "FUNCAMP",
  "Governo de SP",
  "Internacional"
] as const;

export const fundingModelCategories = [
  "Todas",
  "Elaboração",
  "Submissão",
  "Documentos institucionais",
  "Execução e prestação",
  "Orientações"
] as const;