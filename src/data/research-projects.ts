export const researchProjects = [
  {
    slug: "fapesp-pesquisa-interdisciplinar",
    name: "Projeto FAPESP — Pesquisa Interdisciplinar",
    agency: "FAPESP",
    status: "Em execução",
    mainDeadline: "14/07/2026",
    progress: 65,
    documents: 12,
    invoices: 8,
    pending: 2,
    researcher: "Dra. Ana Ribeiro",
    center: "Centro/Núcleo interdisciplinar vinculado à COCEN",
    period: "Jan/2026 a Dez/2027",
    accountabilityDeadline: "30/01/2028",
    nextSteps: ["Validar duas notas fiscais", "Anexar relatório técnico parcial", "Revisar rubrica de serviços"],
    summaryCards: [
      { label: "Documentos anexados", value: "12" },
      { label: "Notas fiscais", value: "8" },
      { label: "Pendências", value: "2" },
      { label: "Prazos próximos", value: "3" },
      { label: "Rubricas utilizadas", value: "5" }
    ]
  },
  {
    slug: "funcamp-apoio-pesquisa",
    name: "Projeto Funcamp — Apoio à Pesquisa",
    agency: "Funcamp",
    status: "Prestação de contas",
    mainDeadline: "29/06/2026",
    progress: 75,
    documents: 18,
    invoices: 11,
    pending: 3,
    researcher: "Dr. Marcelo Santos",
    center: "Núcleo interdisciplinar de apoio à pesquisa",
    period: "Mar/2025 a Jun/2026",
    accountabilityDeadline: "29/06/2026",
    nextSteps: ["Classificar notas sem rubrica", "Organizar comprovantes", "Finalizar relatório técnico"],
    summaryCards: [
      { label: "Documentos anexados", value: "18" },
      { label: "Notas fiscais", value: "11" },
      { label: "Pendências", value: "3" },
      { label: "Prazos próximos", value: "2" },
      { label: "Rubricas utilizadas", value: "6" }
    ]
  },
  {
    slug: "inovacao-patentes",
    name: "Projeto de Inovação e Patentes",
    agency: "Inova Unicamp",
    status: "Em análise",
    mainDeadline: "02/08/2026",
    progress: 40,
    documents: 6,
    invoices: 2,
    pending: 1,
    researcher: "Dra. Luiza Carvalho",
    center: "Centro de inovação e desenvolvimento tecnológico",
    period: "Mai/2026 a Mai/2028",
    accountabilityDeadline: "30/06/2028",
    nextSteps: ["Complementar comunicação de invenção", "Revisar termo de sigilo", "Validar orçamento de prototipagem"],
    summaryCards: [
      { label: "Documentos anexados", value: "6" },
      { label: "Notas fiscais", value: "2" },
      { label: "Pendências", value: "1" },
      { label: "Prazos próximos", value: "1" },
      { label: "Rubricas utilizadas", value: "3" }
    ]
  }
];

export const projectDocuments = [
  { name: "Plano de trabalho", type: "PDF", date: "12/02/2026", status: "Aprovado" },
  { name: "Termo de outorga", type: "PDF", date: "18/02/2026", status: "Vigente" },
  { name: "Orçamento", type: "Planilha", date: "20/02/2026", status: "Atualizado" },
  { name: "Relatório técnico", type: "DOCX", date: "10/06/2026", status: "Pendente" },
  { name: "Comprovantes", type: "ZIP", date: "15/06/2026", status: "Em conferência" },
  { name: "Prestação de contas", type: "Checklist", date: "21/06/2026", status: "Em andamento" }
];

export const projectInvoices = [
  { name: "Nota fiscal 001", category: "Material de consumo", value: "R$ 1.240,00", status: "Validada", date: "03/04/2026", note: "Material laboratorial classificado." },
  { name: "Nota fiscal 002", category: "Serviço de terceiros", value: "R$ 850,00", status: "Em análise", date: "19/05/2026", note: "Aguardando validação documental." },
  { name: "Nota fiscal 003", category: "Inscrição em evento", value: "R$ 420,00", status: "Pendente de rubrica", date: "06/06/2026", note: "Necessário vincular rubrica correta." }
];

export const projectBudgets = [
  { category: "Material de consumo", planned: "R$ 12.000,00", used: "R$ 7.800,00", balance: "R$ 4.200,00", percent: 65 },
  { category: "Serviços de terceiros", planned: "R$ 8.000,00", used: "R$ 3.400,00", balance: "R$ 4.600,00", percent: 43 },
  { category: "Diárias", planned: "R$ 5.000,00", used: "R$ 1.600,00", balance: "R$ 3.400,00", percent: 32 },
  { category: "Passagens", planned: "R$ 6.500,00", used: "R$ 2.100,00", balance: "R$ 4.400,00", percent: 32 },
  { category: "Equipamentos", planned: "R$ 18.000,00", used: "R$ 10.000,00", balance: "R$ 8.000,00", percent: 56 },
  { category: "Inscrição em evento", planned: "R$ 3.000,00", used: "R$ 420,00", balance: "R$ 2.580,00", percent: 14 },
  { category: "Bolsas", planned: "R$ 24.000,00", used: "R$ 12.000,00", balance: "R$ 12.000,00", percent: 50 }
];

export const accountabilityChecklist = [
  { label: "Notas fiscais anexadas", done: true },
  { label: "Rubricas classificadas", done: false },
  { label: "Comprovantes organizados", done: true },
  { label: "Relatório técnico anexado", done: false },
  { label: "Pendências revisadas", done: false },
  { label: "Documentos prontos para envio", done: false }
];

export const projectHistory = [
  "Projeto criado",
  "Documento anexado",
  "Nota fiscal adicionada",
  "Rubrica atualizada",
  "Prestação de contas iniciada",
  "Atena consultada"
];
