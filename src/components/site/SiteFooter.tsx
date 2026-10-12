import { Link } from "@tanstack/react-router";
import { BrandMark } from "@/components/brand/BrandMark";
import { useI18n } from "@/i18n/I18nProvider";
import { emailHref, siteConfig, whatsappHref } from "@/config/site";
import { sectionIds } from "./SiteHeader";

export function SiteFooter() {
  const { t } = useI18n();
  const keys = ["services", "projects", "process", "contact"] as const;
  return (
    <footer className="border-t border-border py-12">
      <div className="container-site flex flex-col gap-10 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <BrandMark />
          <p className="mt-4 text-sm text-muted-foreground">{t.footer.description}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {keys.map((k) => (
            <Link key={k} to="/" hash={sectionIds[k]} className="text-muted-foreground hover:text-foreground">{t.nav[k]}</Link>
          ))}
          <Link to="/privacidad" className="text-muted-foreground hover:text-foreground">{t.footer.privacy}</Link>
          {whatsappHref && <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">WhatsApp</a>}
          {emailHref && <a href={emailHref} className="text-muted-foreground hover:text-foreground">{siteConfig.email}</a>}
          {siteConfig.social.map((s) => <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">{s.label}</a>)}
        </nav>
      </div>
      <p className="container-site mt-10 text-xs text-muted-foreground">© {new Date().getFullYear()} ZENQAVOR. {t.footer.rights}</p>
    </footer>
  );
}
