import { PublicPage } from "@/components/layout/public-page";

const items = [
  { title: "Plano de trabalho", meta: "Modelo", description: "Estrutura demonstrativa para objetivos, etapas, equipe, cronograma e entregas do projeto.", tags: ["Projeto", "Submissão"] },
  { title: "Declarações institucionais", meta: "Categoria", description: "Modelos orientativos para declarações de anuência, participação e vínculo institucional.", tags: ["Institucional"] },
  { title: "Prestação de contas", meta: "Checklist", description: "Lista pública de documentos normalmente solicitados para comprovações e relatórios.", tags: ["Financeiro"] },
  { title: "Relatório técnico", meta: "Template", description: "Sugestão de organização para resultados, indicadores, produtos e impactos do projeto.", tags: ["Resultados"] },
  { title: "Projeto Funcamp", meta: "Fluxo", description: "Materiais demonstrativos para abertura e acompanhamento administrativo de projetos.", tags: ["Funcamp"] },
  { title: "Patentes", meta: "Orientação", description: "Documentos de apoio para registrar informações antes da comunicação de invenção.", tags: ["Inovação"] }
];

export default function PublicModelosPage() {
  return <PublicPage eyebrow="Documentos públicos" title="Modelos e Templates" description="Categorias de documentos e modelos demonstrativos para orientar pesquisadores antes do acesso ao ambiente interno." items={items} />;
}
