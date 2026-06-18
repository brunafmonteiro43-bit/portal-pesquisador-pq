import { OpportunitiesBrowser } from "@/components/modules/opportunities-browser";
import { fundingCalls } from "@/data/portal-content";

export default function OportunidadesPage() {
  return <OpportunitiesBrowser calls={fundingCalls} />;
}
