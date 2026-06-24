import { PublicPage } from "@/components/layout/public-page";

const items = [
  { title: "FAPESP — chamada regular", meta: "Edital", description: "Oportunidade demonstrativa para projetos de pesquisa com acompanhamento de prazos e requisitos.", tags: ["FAPESP", "Aberto"] },
  { title: "CAPES — cooperação acadêmica", meta: "Chamada", description: "Exemplo de chamada voltada à formação, redes de pesquisa e internacionalização.", tags: ["CAPES"] },
  { title: "FINEP — inovação", meta: "Oportunidade", description: "Linha demonstrativa para projetos de inovação, infraestrutura e desenvolvimento tecnológico.", tags: ["FINEP", "Inovação"] },
  { title: "Prestação de contas", meta: "Prazo", description: "Avisos públicos para atenção a relatórios, comprovantes e entregas administrativas.", tags: ["Prazos"] },
  { title: "Cooperação internacional", meta: "Previsto", description: "Chamadas de intercâmbio científico e redes de colaboração internacional.", tags: ["Internacional"] },
  { title: "Bolsas e auxílios", meta: "Categoria", description: "Visão geral de modalidades de apoio à pesquisa, eventos e formação acadêmica.", tags: ["Bolsas"] }
];

export default function PublicFomentoEditaisPage() {
  return <PublicPage eyebrow="Fomento aberto" title="Fomento e Oportunidades" description="Editais, chamadas, prazos e oportunidades demonstrativas para orientar a comunidade de pesquisa." items={items} />;
}
