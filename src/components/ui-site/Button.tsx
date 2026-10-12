import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const siteButton = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-glow",
        ghost: "border border-input bg-surface/40 text-foreground backdrop-blur hover:border-violet/60 hover:bg-surface-2",
        link: "min-h-0 px-0 text-steel hover:text-foreground",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

export type SiteButtonVariant = VariantProps<typeof siteButton>["variant"];
export const buttonCls = (variant?: SiteButtonVariant, className?: string) => cn(siteButton({ variant }), className);
