import { PublicPage } from "@/components/layout/public-page";

const items = [
  { title: "Submeter projeto", meta: "Trilha", description: "Passos gerais para estruturar proposta, documentação, orçamento e submissão.", tags: ["Projeto"] },
  { title: "Abrir projeto Funcamp", meta: "Trilha", description: "Fluxo demonstrativo para preparar documentos, aprovações e dados administrativos.", tags: ["Funcamp"] },
  { title: "Prestação de contas", meta: "Trilha", description: "Orientação pública sobre organização de comprovantes, relatórios e prazos.", tags: ["Financeiro"] },
  { title: "Patentes", meta: "Trilha", description: "Cuidados antes da publicação e caminho para comunicação de invenção.", tags: ["Inovação"] },
  { title: "Convênios", meta: "Trilha", description: "Noções gerais para parcerias, instrumentos e responsabilidades institucionais.", tags: ["Parcerias"] },
  { title: "Execução do projeto", meta: "Trilha", description: "Boas práticas para acompanhamento de etapas, entregas e indicadores.", tags: ["Gestão"] }
];

export default function PublicTrilhasPage() {
  return <PublicPage eyebrow="Apoio aberto" title="Trilhas de Apoio" description="Fluxos públicos e institucionais para orientar etapas frequentes da rotina de pesquisa." items={items} />;
}
