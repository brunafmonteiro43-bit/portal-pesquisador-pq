import { PublicPage } from "@/components/layout/public-page";

const items = [
  { title: "FAPESP", meta: "Busca sugerida", description: "Encontre editais, orientações e termos relacionados a propostas FAPESP.", tags: ["Fomento"] },
  { title: "CAPES", meta: "Busca sugerida", description: "Consulte chamadas e documentos demonstrativos ligados à formação e cooperação.", tags: ["Editais"] },
  { title: "Patentes", meta: "Busca sugerida", description: "Acesse orientações públicas sobre proteção intelectual e comunicação de invenção.", tags: ["Inovação"] },
  { title: "Convênios", meta: "Busca sugerida", description: "Veja trilhas e termos associados a parcerias e instrumentos institucionais.", tags: ["Parcerias"] },
  { title: "Prestação de contas", meta: "Busca sugerida", description: "Localize checklists, conceitos e fluxos públicos de apoio administrativo.", tags: ["Financeiro"] },
  { title: "Centros e Núcleos", meta: "Busca sugerida", description: "Conheça a estrutura interdisciplinar de pesquisa da COCEN.", tags: ["COCEN"] }
];

export default function PublicBuscaPage() {
  return <PublicPage eyebrow="Busca pública" title="Busca no Portal Público" description="Página institucional de busca e sugestões para conteúdos abertos do Portal do Pesquisador." items={items} />;
}
