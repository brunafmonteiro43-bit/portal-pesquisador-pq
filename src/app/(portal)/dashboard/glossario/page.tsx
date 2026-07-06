import { GlossaryBrowser } from "@/components/modules/glossary-browser";
import { glossaryTerms } from "@/data/portal-content";

export default function GlossarioPage() {
  return <GlossaryBrowser terms={glossaryTerms} />;
}
