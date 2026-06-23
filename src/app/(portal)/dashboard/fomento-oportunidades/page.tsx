import { OpportunitiesBrowser } from "@/components/modules/opportunities-browser";
import { fundingCalls } from "@/data/portal-content";

export default function FomentoOportunidadesPage() {
  return <OpportunitiesBrowser calls={fundingCalls} />;
}
