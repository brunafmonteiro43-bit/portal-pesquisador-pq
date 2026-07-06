import { PublicPage } from "@/components/layout/public-page";

const items = [
  { title: "Rubrica", meta: "Termo", description: "Classificação orçamentária usada para organizar despesas de projetos de pesquisa.", tags: ["Orçamento", "Fomento"] },
  { title: "Convênio", meta: "Termo", description: "Instrumento formal de cooperação institucional para execução de atividades acadêmicas e científicas.", tags: ["Funcamp", "Projeto"] },
  { title: "Prestação de contas", meta: "Termo", description: "Conjunto de documentos e comprovações exigidos ao final ou durante a execução financeira.", tags: ["Financeiro", "Prazos"] },
  { title: "Comunicação de invenção", meta: "Termo", description: "Registro inicial para avaliar proteção intelectual antes da divulgação pública de resultados.", tags: ["Patentes", "Inova"] },
  { title: "Chamada pública", meta: "Termo", description: "Edital com regras, prazos e critérios para submissão de propostas de financiamento.", tags: ["Editais", "Fomento"] },
  { title: "Centro/Núcleo", meta: "Termo", description: "Estrutura interdisciplinar vinculada à COCEN para pesquisa, inovação e extensão acadêmica.", tags: ["COCEN", "UNICAMP"] }
];

export default function PublicGlossarioPage() {
  return <PublicPage eyebrow="Consulta aberta" title="Glossário do Pesquisador" description="Termos essenciais da gestão da pesquisa universitária explicados em linguagem institucional e acessível." items={items} />;
}
