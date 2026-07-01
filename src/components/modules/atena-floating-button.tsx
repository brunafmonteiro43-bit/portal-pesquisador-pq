"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AtenaAvatar } from "@/components/modules/atena-avatar";

const atenaDashboardHref = "/dashboard/atena";
const atenaLoginHref = "/login?callbackUrl=%2Fdashboard%2Fatena%3Fintent%3Dchat-atena&message=atena-chat";

export function AtenaFloatingButton() {
  const pathname = usePathname();
  const href = pathname?.startsWith("/dashboard") ? atenaDashboardHref : atenaLoginHref;

  return (
    <Link
      href={href}
      className="group fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-white/80 bg-white/95 p-1.5 pr-2.5 sm:bottom-6 sm:right-6 sm:gap-3 sm:p-2 sm:pr-3 shadow-[0_18px_45px_rgba(15,23,42,0.18)] backdrop-blur transition-all hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_22px_55px_rgba(190,18,60,0.22)]"
      aria-label="Pergunte à Atena"
      title="Pergunte à Atena"
    >
      <AtenaAvatar className="h-10 w-10 sm:h-12 sm:w-12" />
      <span className="hidden pr-1 text-sm font-black text-foreground transition-colors group-hover:text-accent sm:block">
        Atena
      </span>
    </Link>
  );
}
