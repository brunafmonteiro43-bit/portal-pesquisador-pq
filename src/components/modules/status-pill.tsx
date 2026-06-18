import { Badge } from "@/components/ui/badge";

export function StatusPill({ status }: { status: string }) {
  const normalized = status.toLowerCase();
  const variant = normalized.includes("aberto") || normalized.includes("publicado") ? "accent" : "secondary";

  return <Badge variant={variant}>{status}</Badge>;
}
