import { FaqBrowser } from "@/components/modules/faq-browser";
import { faqItems } from "@/data/portal-content";

export default function FaqPage() {
  return <FaqBrowser items={faqItems} />;
}
