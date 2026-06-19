import Link from "next/link";
import { AtenaAvatar } from "@/components/modules/atena-avatar";

export function AtenaFloatingButton({ isAuthenticated = false }: { isAuthenticated?: boolean }) {
  const href = isAuthenticated
    ? "/chat?intent=chat-atena"
    : "/login?callbackUrl=%2Fchat%3Fintent%3Dchat-atena&message=atena-chat";
  const title = isAuthenticated ? "Conversar com a Atena" : "Faça login para conversar com a Atena.";

  return (
    <Link
      href={href}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-white/80 bg-white/95 p-2 pr-3 shadow-[0_18px_45px_rgba(15,23,42,0.18)] backdrop-blur transition-all hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_22px_55px_rgba(190,18,60,0.22)]"
      aria-label={title}
      title={title}
    >
      <AtenaAvatar className="h-12 w-12" />
      <span className="hidden pr-1 text-sm font-black text-foreground transition-colors group-hover:text-accent sm:block">
        Atena
      </span>
    </Link>
  );
}
