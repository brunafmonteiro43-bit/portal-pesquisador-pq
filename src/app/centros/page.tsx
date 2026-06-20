import { InstitutionalFooter } from "@/components/layout/institutional-footer";
import { PublicHeader } from "@/components/layout/public-header";
import { CentersBrowser } from "@/components/modules/centers-browser";
import { cocenCenters } from "@/data/portal-content";

export default function CentrosPublicPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PublicHeader />
      <main className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <CentersBrowser centers={cocenCenters} />
      </main>
      <InstitutionalFooter />
    </div>
  );
}
