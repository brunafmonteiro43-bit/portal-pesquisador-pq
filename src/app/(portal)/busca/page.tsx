import { Suspense } from "react";
import { GlobalSearch } from "@/components/modules/global-search";
import { SectionHeader } from "@/components/modules/section-header";

export default function BuscaPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Busca pública"
        title="Resultados no Portal do Pesquisador"
        description="Pesquise conteúdos públicos: glossário, editais, modelos, trilhas, patentes, Centros e Núcleos e destaques institucionais."
      />
      <Suspense>
        <GlobalSearch placeholder="Digite FAPESP, rubrica, Funcamp, patentes, Centros e Núcleos..." />
      </Suspense>
    </div>
  );
}
