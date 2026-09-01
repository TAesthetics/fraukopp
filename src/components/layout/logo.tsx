import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link
      to="/"
      className={cn("flex items-baseline gap-1.5 no-underline text-fg", className)}
      aria-label="Frau Kopp Startseite"
    >
      <span className="font-display italic text-[1.35rem] leading-none tracking-tight">Frau</span>
      <span className="font-sans font-semibold tracking-[0.08em] text-leaf text-[1.2rem] leading-none">
        KOPP
      </span>
      {compact ? null : (
        <span className="sr-only">Schwarzwälder Kräuter-Manufaktur</span>
      )}
    </Link>
  );
}
