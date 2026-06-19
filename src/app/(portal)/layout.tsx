import { AppShell } from "@/components/layout/app-shell";
import { InstitutionalFooter } from "@/components/layout/institutional-footer";
import { PublicHeader } from "@/components/layout/public-header";
import { auth } from "@/lib/auth";
import { PortalFrame } from "./portal-frame";

export const dynamic = "force-dynamic";

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <PortalFrame
      appShell={<AppShell role={session?.user?.role ?? "RESEARCHER"}>{children}</AppShell>}
      publicShell={
        <div className="min-h-screen bg-background text-foreground">
          <PublicHeader compact />
          <main className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:py-10">{children}</main>
          <InstitutionalFooter />
        </div>
      }
    />
  );
}
