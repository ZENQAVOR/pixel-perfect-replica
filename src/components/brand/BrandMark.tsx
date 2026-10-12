import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * TEMPORARY placeholder for the ZENQAVOR logo — not the final logo.
 * To replace: import the final SVG/PNG and render it inside <ZSymbol /> and/or
 * <Wordmark /> (keep `object-contain` + fixed height to preserve aspect ratio).
 */
export function ZSymbol({ className, glow = false }: { className?: string; glow?: boolean }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 100 100" className={cn("block", className)} aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id={`m${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="oklch(0.97 0.004 270)" />
          <stop offset="0.38" stopColor="oklch(0.8 0.013 270)" />
          <stop offset="0.6" stopColor="oklch(0.48 0.014 275)" />
          <stop offset="1" stopColor="oklch(0.9 0.01 270)" />
        </linearGradient>
        <linearGradient id={`v${id}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="oklch(0.66 0.19 285)" stopOpacity="0" />
          <stop offset="0.5" stopColor="oklch(0.66 0.19 285)" stopOpacity="0.9" />
          <stop offset="1" stopColor="oklch(0.66 0.19 285)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M6 4 H94 L90 20 L34 80 H96 L92 96 H4 L8 80 L64 20 H2 Z" fill={`url(#m${id})`} />
      <path d="M90 20 L34 80" stroke={`url(#v${id})`} strokeWidth={glow ? 1.6 : 1} fill="none" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return <span className={cn("font-display font-semibold tracking-[0.28em]", className)}>ZENQAVOR</span>;
}

export function BrandMark({ showSymbol = true, showWordmark = true, className }: { showSymbol?: boolean; showWordmark?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {showSymbol && <ZSymbol className="h-7 w-7" />}
      {showWordmark && <Wordmark className="text-sm" />}
    </span>
  );
}
