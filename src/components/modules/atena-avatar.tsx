import { cn } from "@/lib/utils";

export function AtenaAvatar({ className, title = "Atena" }: { className?: string; title?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(190,18,60,0.16)]",
        className
      )}
      aria-label={title}
      role="img"
    >
      <svg viewBox="0 0 96 96" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="48" cy="48" r="42" fill="url(#atena-bg)" />
        <circle cx="48" cy="48" r="34" stroke="#E8D6DA" strokeWidth="2" />
        <path
          d="M30 64V38L48 28L66 38V64"
          stroke="#2B2F36"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36 62V46M48 62V42M60 62V46"
          stroke="#B20D30"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path d="M28 66H68" stroke="#2B2F36" strokeWidth="3.5" strokeLinecap="round" />
        <path
          d="M24 46L36 34M72 46L60 34M34 72L48 62L62 72"
          stroke="#B20D30"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="46" r="5.5" fill="#B20D30" stroke="white" strokeWidth="3" />
        <circle cx="72" cy="46" r="5.5" fill="#B20D30" stroke="white" strokeWidth="3" />
        <circle cx="48" cy="28" r="6.5" fill="#C8102E" stroke="white" strokeWidth="3" />
        <circle cx="34" cy="72" r="5" fill="#2B2F36" stroke="white" strokeWidth="3" />
        <circle cx="62" cy="72" r="5" fill="#2B2F36" stroke="white" strokeWidth="3" />
        <circle cx="48" cy="48" r="44" stroke="#F7E5E9" strokeWidth="2" />
        <defs>
          <radialGradient id="atena-bg" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(36 26) rotate(58) scale(64)">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.62" stopColor="#F8EEF0" />
            <stop offset="1" stopColor="#E8EAED" />
          </radialGradient>
        </defs>
      </svg>
    </span>
  );
}
