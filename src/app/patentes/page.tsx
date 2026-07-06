import { PublicPage } from "@/components/layout/public-page";

const items = [
  { title: "Antes de publicar", meta: "Orientação", description: "Evite divulgar resultados potencialmente protegíveis antes da avaliação institucional.", tags: ["Sigilo"] },
  { title: "Comunicação de invenção", meta: "Etapa", description: "Registro inicial com informações técnicas para análise de proteção intelectual.", tags: ["Inova Unicamp"] },
  { title: "Busca de anterioridade", meta: "Prática", description: "Pesquisa de documentos e tecnologias já existentes para avaliar novidade.", tags: ["INPI"] },
  { title: "Titularidade", meta: "Conceito", description: "Entenda vínculos institucionais e participação de inventores nos resultados.", tags: ["UNICAMP"] },
  { title: "Transferência de tecnologia", meta: "Impacto", description: "Caminhos para licenciamento, parceria e aplicação de resultados de pesquisa.", tags: ["Inovação"] },
  { title: "Apoio especializado", meta: "Atena", description: "No ambiente interno, a Atena ajuda a localizar orientações e próximos passos.", tags: ["Atena"] }
];

export default function PublicPatentesPage() {
  return <PublicPage eyebrow="Inovação" title="Patentes e Proteção Intelectual" description="Orientações públicas sobre proteção de descobertas, comunicação de invenção e articulação com a Inova Unicamp." items={items} />;
}
