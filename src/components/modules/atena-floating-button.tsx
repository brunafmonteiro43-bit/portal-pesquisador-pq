import Link from "next/link";
import { AtenaAvatar } from "@/components/modules/atena-avatar";

export function AtenaFloatingButton() {
  return (
    <Link
      href="/login?callbackUrl=%2Fchat%3Fintent%3Dchat-atena&message=atena-chat"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-white/80 bg-white/95 p-2 pr-3 shadow-[0_18px_45px_rgba(15,23,42,0.18)] backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_22px_55px_rgba(133,18,43,0.22)]"
      aria-label="Pergunte à Atena"
      title="Pergunte à Atena"
    >
      <AtenaAvatar className="h-12 w-12" />
      <span className="hidden pr-1 text-sm font-black text-foreground transition-colors group-hover:text-accent sm:block">
        Atena
      </span>
    </Link>
  );
}
