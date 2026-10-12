import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/brand/BrandMark";
import { buttonCls } from "@/components/ui-site/Button";
import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/dictionary";

export const sectionIds = { home: "inicio", services: "servicios", projects: "proyectos", process: "proceso", contact: "contacto" } as const;
type NavKey = keyof typeof sectionIds;
const navKeys: NavKey[] = ["home", "services", "projects", "process", "contact"];

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const opts: Locale[] = ["es", "en"];
  return (
    <div role="group" aria-label={t.header.language} className="flex rounded-full border border-input p-0.5 text-xs font-semibold">
      {opts.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          lang={l}
          aria-label={l === "es" ? "Español" : "English"}
          className={cn(
            "min-h-8 min-w-9 rounded-full px-2.5 uppercase transition-colors",
            locale === l ? "bg-surface-2 text-foreground" : "text-muted-foreground hover:text-foreground",
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

function MobileNavigation({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    ref.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div id="mobile-nav" ref={ref} className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
      <nav aria-label="Mobile" className="container-site flex flex-col py-4">
        {navKeys.map((k) => (
          <Link key={k} to="/" hash={sectionIds[k]} onClick={onClose} className="rounded-md py-3 text-lg font-medium text-foreground">
            {t.nav[k]}
          </Link>
        ))}
        <div className="mt-4 flex items-center justify-between gap-4">
          <LanguageSwitcher />
          <Link to="/" hash={sectionIds.contact} onClick={onClose} className={buttonCls("primary")}>{t.header.cta}</Link>
        </div>
      </nav>
    </div>
  );
}

export function SiteHeader() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300", scrolled || open ? "border-border bg-background/80 backdrop-blur-xl" : "border-transparent")}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-surface-2 focus:px-3 focus:py-2">{t.header.skip}</a>
      <div className="container-site flex h-16 items-center justify-between gap-6">
        <Link to="/" aria-label="ZENQAVOR — Inicio" className="shrink-0"><BrandMark /></Link>
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navKeys.map((k) => (
            <Link key={k} to="/" hash={sectionIds[k]} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{t.nav[k]}</Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link to="/" hash={sectionIds.contact} className={buttonCls("ghost", "min-h-9 px-4")}>{t.header.cta}</Link>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-input lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? t.header.closeMenu : t.header.openMenu}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <MobileNavigation open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
