import { AppShell } from "@/components/layout/app-shell";
import { auth } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return <AppShell role={session?.user?.role ?? "RESEARCHER"}>{children}</AppShell>;
}
