import { CentersBrowser } from "@/components/modules/centers-browser";
import { cocenCenters } from "@/data/portal-content";

export default function CentrosPage() {
  return <CentersBrowser centers={cocenCenters} />;
}
