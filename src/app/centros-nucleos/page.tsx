import { PublicPage } from "@/components/layout/public-page";

const items = [
  { title: "Centros interdisciplinares", meta: "COCEN", description: "Estruturas de pesquisa que articulam diferentes áreas do conhecimento em agendas estratégicas.", tags: ["Pesquisa"] },
  { title: "Núcleos de pesquisa", meta: "COCEN", description: "Ambientes acadêmicos voltados à colaboração, formação e produção científica.", tags: ["Interdisciplinar"] },
  { title: "Rede COCEN", meta: "Institucional", description: "Conjunto de centros e núcleos conectados à missão de pesquisa da UNICAMP.", tags: ["UNICAMP"] },
  { title: "Inovação e impacto", meta: "Atuação", description: "Iniciativas com potencial de impacto científico, social, cultural e tecnológico.", tags: ["Impacto"] },
  { title: "Apoio ao pesquisador", meta: "Serviço", description: "Orientações para localizar estruturas, documentos e caminhos de apoio institucional.", tags: ["Apoio"] },
  { title: "Consulta pública", meta: "Acesso", description: "Informações leves e abertas sobre a rede, sem exigir login no Ambiente do Pesquisador.", tags: ["Público"] }
];

export default function PublicCentrosNucleosPage() {
  return <PublicPage eyebrow="Rede institucional" title="Centros e Núcleos" description="Conheça a rede interdisciplinar da COCEN/UNICAMP em uma página pública, leve e institucional." items={items} />;
}
