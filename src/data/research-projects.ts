export type ProjectDocument = {
  name: string;
  type: string;
  date: string;
  status: string;
};

export type ProjectInvoice = {
  number: string;
  category: string;
  value: string;
  status: string;
  date: string;
  note: string;
};

export type ProjectBudgetCategory = {
  name: string;
  planned: string;
  used: string;
  balance: string;
  percent: number;
};

export type ProjectHistoryEvent = {
  title: string;
  detail: string;
  date: string;
};

export type ResearchProject = {
  slug: string;
  name: string;
  fundingSource: string;
  status: string;
  mainDeadline: string;
  progress: number;
  documentsCount: number;
  invoicesCount: number;
  pendingCount: number;
  responsibleResearcher: string;
  center: string;
  executionPeriod: string;
  accountabilityDeadline: string;
  nextSteps: string[];
  documents: ProjectDocument[];
  invoices: ProjectInvoice[];
  budgetCategories: ProjectBudgetCategory[];
  accountabilityChecklist: { label: string; done: boolean }[];
  accountabilityPendingItems: string[];
  history: ProjectHistoryEvent[];
  atenaPrompts: string[];
};

export const researchProjects: ResearchProject[] = [
  {
    slug: "fapesp-pesquisa-interdisciplinar",
    name: "Projeto FAPESP — Pesquisa Interdisciplinar",
    fundingSource: "FAPESP",
    status: "Em execução",
    mainDeadline: "Relatório científico em 30/08/2026",
    progress: 65,
    documentsCount: 12,
    invoicesCount: 8,
    pendingCount: 2,
    responsibleResearcher: "Profa. Dra. Mariana Lemos",
    center: "Centro de Biologia Molecular e Engenharia Genética",
    executionPeriod: "01/03/2025 a 28/02/2027",
    accountabilityDeadline: "30/04/2027",
    nextSteps: [
      "Revisar duas notas fiscais sem rubrica vinculada",
      "Atualizar relatório técnico parcial",
      "Conferir saldo de material de consumo"
    ],
    documents: [
      { name: "Plano de trabalho", type: "Projeto", date: "14/02/2025", status: "Aprovado" },
      { name: "Termo de outorga", type: "Fomento", date: "01/03/2025", status: "Vigente" },
      { name: "Orçamento aprovado", type: "Financeiro", date: "05/03/2025", status: "Validado" },
      { name: "Relatório técnico parcial", type: "Relatório", date: "18/06/2026", status: "Em revisão" },
      { name: "Comprovantes de material", type: "Comprovante", date: "20/06/2026", status: "Organizado" },
      { name: "Previsão de prestação de contas", type: "Prestação de contas", date: "22/06/2026", status: "Rascunho" }
    ],
    invoices: [
      {
        number: "Nota fiscal 001",
        category: "Material de consumo",
        value: "R$ 1.240,00",
        status: "Validada",
        date: "12/05/2026",
        note: "Insumos laboratoriais classificados na rubrica correta."
      },
      {
        number: "Nota fiscal 002",
        category: "Serviço de terceiros",
        value: "R$ 850,00",
        status: "Em análise",
        date: "28/05/2026",
        note: "Aguardando descrição detalhada do serviço prestado."
      },
      {
        number: "Nota fiscal 003",
        category: "Inscrição em evento",
        value: "R$ 420,00",
        status: "Pendente de rubrica",
        date: "07/06/2026",
        note: "Necessário confirmar vínculo com divulgação científica."
      }
    ],
    budgetCategories: [
      { name: "Material de consumo", planned: "R$ 18.000,00", used: "R$ 11.700,00", balance: "R$ 6.300,00", percent: 65 },
      { name: "Serviços de terceiros", planned: "R$ 9.000,00", used: "R$ 4.950,00", balance: "R$ 4.050,00", percent: 55 },
      { name: "Diárias", planned: "R$ 6.000,00", used: "R$ 2.400,00", balance: "R$ 3.600,00", percent: 40 },
      { name: "Passagens", planned: "R$ 8.000,00", used: "R$ 4.800,00", balance: "R$ 3.200,00", percent: 60 },
      { name: "Equipamentos", planned: "R$ 24.000,00", used: "R$ 15.600,00", balance: "R$ 8.400,00", percent: 65 },
      { name: "Inscrição em evento", planned: "R$ 3.000,00", used: "R$ 1.260,00", balance: "R$ 1.740,00", percent: 42 },
      { name: "Bolsas", planned: "R$ 36.000,00", used: "R$ 25.200,00", balance: "R$ 10.800,00", percent: 70 }
    ],
    accountabilityChecklist: [
      { label: "Notas fiscais anexadas", done: true },
      { label: "Rubricas classificadas", done: false },
      { label: "Comprovantes organizados", done: true },
      { label: "Relatório técnico anexado", done: false },
      { label: "Pendências revisadas", done: false },
      { label: "Documentos prontos para envio", done: false }
    ],
    accountabilityPendingItems: [
      "2 notas fiscais sem rubrica",
      "1 comprovante sem descrição",
      "relatório técnico pendente"
    ],
    history: [
      { title: "Projeto criado", detail: "Cadastro demonstrativo iniciado no Ambiente do Pesquisador.", date: "01/03/2025" },
      { title: "Documento anexado", detail: "Termo de outorga adicionado ao projeto.", date: "04/03/2025" },
      { title: "Nota fiscal adicionada", detail: "Nota fiscal 001 vinculada a material de consumo.", date: "12/05/2026" },
      { title: "Rubrica atualizada", detail: "Saldo de equipamentos revisado após compra aprovada.", date: "15/05/2026" },
      { title: "Prestação de contas iniciada", detail: "Checklist preliminar criado para acompanhamento.", date: "20/06/2026" },
      { title: "Atena consultada", detail: "Sugestão de classificação para inscrição em evento.", date: "22/06/2026" }
    ],
    atenaPrompts: [
      "Perguntar sobre prestação de contas",
      "Ver documentos necessários",
      "Revisar pendências",
      "Explicar rubricas"
    ]
  },
  {
    slug: "funcamp-apoio-pesquisa",
    name: "Projeto Funcamp — Apoio à Pesquisa",
    fundingSource: "Funcamp",
    status: "Prestação de contas",
    mainDeadline: "Envio da prestação em 29/06/2026",
    progress: 75,
    documentsCount: 18,
    invoicesCount: 11,
    pendingCount: 3,
    responsibleResearcher: "Prof. Dr. Eduardo Nascimento",
    center: "Núcleo de Estudos e Pesquisas Ambientais",
    executionPeriod: "10/01/2025 a 30/06/2026",
    accountabilityDeadline: "29/06/2026",
    nextSteps: [
      "Organizar comprovantes finais por rubrica",
      "Anexar relatório técnico consolidado",
      "Revisar três pendências antes do envio"
    ],
    documents: [
      { name: "Plano de trabalho", type: "Projeto", date: "10/01/2025", status: "Aprovado" },
      { name: "Termo de abertura Funcamp", type: "Fomento", date: "14/01/2025", status: "Vigente" },
      { name: "Orçamento", type: "Financeiro", date: "20/01/2025", status: "Validado" },
      { name: "Relatório técnico", type: "Relatório", date: "18/06/2026", status: "Pendente" },
      { name: "Comprovantes", type: "Comprovante", date: "21/06/2026", status: "Em organização" },
      { name: "Prestação de contas", type: "Prestação de contas", date: "22/06/2026", status: "Em andamento" }
    ],
    invoices: [
      {
        number: "Nota fiscal 001",
        category: "Material de consumo",
        value: "R$ 1.240,00",
        status: "Validada",
        date: "05/04/2026",
        note: "Compra conferida com o orçamento aprovado."
      },
      {
        number: "Nota fiscal 002",
        category: "Serviço de terceiros",
        value: "R$ 850,00",
        status: "Em análise",
        date: "17/05/2026",
        note: "Aguardando confirmação de prestação do serviço."
      },
      {
        number: "Nota fiscal 003",
        category: "Inscrição em evento",
        value: "R$ 420,00",
        status: "Pendente de rubrica",
        date: "08/06/2026",
        note: "Classificação pendente para fechamento da prestação."
      }
    ],
    budgetCategories: [
      { name: "Material de consumo", planned: "R$ 12.000,00", used: "R$ 9.000,00", balance: "R$ 3.000,00", percent: 75 },
      { name: "Serviços de terceiros", planned: "R$ 15.000,00", used: "R$ 12.600,00", balance: "R$ 2.400,00", percent: 84 },
      { name: "Diárias", planned: "R$ 5.500,00", used: "R$ 3.300,00", balance: "R$ 2.200,00", percent: 60 },
      { name: "Passagens", planned: "R$ 7.500,00", used: "R$ 5.250,00", balance: "R$ 2.250,00", percent: 70 },
      { name: "Equipamentos", planned: "R$ 10.000,00", used: "R$ 6.800,00", balance: "R$ 3.200,00", percent: 68 },
      { name: "Inscrição em evento", planned: "R$ 2.000,00", used: "R$ 1.580,00", balance: "R$ 420,00", percent: 79 },
      { name: "Bolsas", planned: "R$ 28.000,00", used: "R$ 22.400,00", balance: "R$ 5.600,00", percent: 80 }
    ],
    accountabilityChecklist: [
      { label: "Notas fiscais anexadas", done: true },
      { label: "Rubricas classificadas", done: false },
      { label: "Comprovantes organizados", done: false },
      { label: "Relatório técnico anexado", done: false },
      { label: "Pendências revisadas", done: false },
      { label: "Documentos prontos para envio", done: false }
    ],
    accountabilityPendingItems: [
      "2 notas fiscais sem rubrica",
      "1 comprovante sem descrição",
      "relatório técnico pendente"
    ],
    history: [
      { title: "Projeto criado", detail: "Cadastro de apoio à pesquisa aberto.", date: "10/01/2025" },
      { title: "Documento anexado", detail: "Orçamento aprovado adicionado.", date: "20/01/2025" },
      { title: "Nota fiscal adicionada", detail: "Nota fiscal de serviço de terceiros registrada.", date: "17/05/2026" },
      { title: "Rubrica atualizada", detail: "Rubrica de bolsas revisada.", date: "03/06/2026" },
      { title: "Prestação de contas iniciada", detail: "Checklist assistido ativado.", date: "18/06/2026" },
      { title: "Atena consultada", detail: "Apoio para organizar comprovantes finais.", date: "21/06/2026" }
    ],
    atenaPrompts: [
      "Perguntar sobre prestação de contas",
      "Ver documentos necessários",
      "Revisar pendências",
      "Explicar rubricas"
    ]
  },
  {
    slug: "inovacao-patentes",
    name: "Projeto de Inovação e Patentes",
    fundingSource: "Inova Unicamp",
    status: "Em análise",
    mainDeadline: "Parecer preliminar em 15/08/2026",
    progress: 40,
    documentsCount: 6,
    invoicesCount: 2,
    pendingCount: 1,
    responsibleResearcher: "Profa. Dra. Helena Duarte",
    center: "Núcleo Interdisciplinar de Comunicação Sonora",
    executionPeriod: "01/05/2026 a 30/04/2027",
    accountabilityDeadline: "30/06/2027",
    nextSteps: [
      "Confirmar sigilo antes de divulgação externa",
      "Completar formulário de comunicação de invenção",
      "Validar rubrica de serviços especializados"
    ],
    documents: [
      { name: "Plano de trabalho", type: "Projeto", date: "02/05/2026", status: "Aprovado" },
      { name: "Termo de confidencialidade", type: "Jurídico", date: "06/05/2026", status: "Assinado" },
      { name: "Orçamento", type: "Financeiro", date: "10/05/2026", status: "Validado" },
      { name: "Relatório técnico", type: "Relatório", date: "14/06/2026", status: "Em elaboração" },
      { name: "Comprovantes", type: "Comprovante", date: "20/06/2026", status: "Parcial" },
      { name: "Previsão de prestação de contas", type: "Prestação de contas", date: "22/06/2026", status: "Rascunho" }
    ],
    invoices: [
      {
        number: "Nota fiscal 001",
        category: "Material de consumo",
        value: "R$ 1.240,00",
        status: "Validada",
        date: "19/05/2026",
        note: "Protótipos e insumos vinculados ao projeto."
      },
      {
        number: "Nota fiscal 002",
        category: "Serviço de terceiros",
        value: "R$ 850,00",
        status: "Em análise",
        date: "02/06/2026",
        note: "Aguardando validação de escopo técnico."
      },
      {
        number: "Nota fiscal 003",
        category: "Inscrição em evento",
        value: "R$ 420,00",
        status: "Pendente de rubrica",
        date: "12/06/2026",
        note: "Avaliar compatibilidade com divulgação de tecnologia."
      }
    ],
    budgetCategories: [
      { name: "Material de consumo", planned: "R$ 6.000,00", used: "R$ 2.400,00", balance: "R$ 3.600,00", percent: 40 },
      { name: "Serviços de terceiros", planned: "R$ 12.000,00", used: "R$ 3.600,00", balance: "R$ 8.400,00", percent: 30 },
      { name: "Diárias", planned: "R$ 3.000,00", used: "R$ 900,00", balance: "R$ 2.100,00", percent: 30 },
      { name: "Passagens", planned: "R$ 5.000,00", used: "R$ 1.500,00", balance: "R$ 3.500,00", percent: 30 },
      { name: "Equipamentos", planned: "R$ 30.000,00", used: "R$ 15.000,00", balance: "R$ 15.000,00", percent: 50 },
      { name: "Inscrição em evento", planned: "R$ 2.500,00", used: "R$ 420,00", balance: "R$ 2.080,00", percent: 17 },
      { name: "Bolsas", planned: "R$ 18.000,00", used: "R$ 7.200,00", balance: "R$ 10.800,00", percent: 40 }
    ],
    accountabilityChecklist: [
      { label: "Notas fiscais anexadas", done: true },
      { label: "Rubricas classificadas", done: false },
      { label: "Comprovantes organizados", done: true },
      { label: "Relatório técnico anexado", done: false },
      { label: "Pendências revisadas", done: false },
      { label: "Documentos prontos para envio", done: false }
    ],
    accountabilityPendingItems: [
      "2 notas fiscais sem rubrica",
      "1 comprovante sem descrição",
      "relatório técnico pendente"
    ],
    history: [
      { title: "Projeto criado", detail: "Proposta de inovação cadastrada.", date: "01/05/2026" },
      { title: "Documento anexado", detail: "Termo de confidencialidade incluído.", date: "06/05/2026" },
      { title: "Nota fiscal adicionada", detail: "Compra de insumos registrada.", date: "19/05/2026" },
      { title: "Rubrica atualizada", detail: "Serviços especializados enviados para análise.", date: "02/06/2026" },
      { title: "Prestação de contas iniciada", detail: "Checklist preliminar criado.", date: "20/06/2026" },
      { title: "Atena consultada", detail: "Orientação sobre sigilo e divulgação.", date: "22/06/2026" }
    ],
    atenaPrompts: [
      "Perguntar sobre prestação de contas",
      "Ver documentos necessários",
      "Revisar pendências",
      "Explicar rubricas"
    ]
  }
];
