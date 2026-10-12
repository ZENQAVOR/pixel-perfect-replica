import { cn } from "@/lib/utils";
import zArtwork from "@/assets/zenqavor-z.png.asset.json";

/** The supplied artwork is shared by every brand placement without redrawing the Z. */
export function ZSymbol({ className, artwork = false }: { className?: string; artwork?: boolean }) {
  return (
    <span className={cn("block", artwork ? "brand-artwork" : "brand-symbol", className)} aria-hidden="true">
      <img src={zArtwork.url} alt="" width={825} height={549} decoding="async" fetchPriority={artwork ? "high" : "auto"} />
    </span>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return <span className={cn("font-display font-semibold", className)}>ZENQAVOR</span>;
}

export function BrandMark({ showSymbol = true, showWordmark = true, className }: { showSymbol?: boolean; showWordmark?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {showSymbol && <ZSymbol className="h-7 w-7" />}
      {showWordmark && <Wordmark className="text-sm" />}
    </span>
  );
}
