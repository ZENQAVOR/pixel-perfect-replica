import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { buttonCls } from "@/components/ui-site/Button";
import { useI18n } from "@/i18n/I18nProvider";
import { dictionaries } from "@/i18n/dictionary";

const p = dictionaries.es.privacy;

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: `${p.title} — ZENQAVOR` },
      { name: "description", content: p.metaDescription },
      { property: "og:title", content: `${p.title} — ZENQAVOR` },
      { property: "og:description", content: p.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  const { t } = useI18n();
  return (
    <>
      <SiteHeader />
      <main id="main" className="container-site max-w-3xl pt-32 pb-24">
        <h1 className="text-4xl font-semibold text-gradient md:text-5xl">{t.privacy.title}</h1>
        <p role="note" className="mt-6 rounded-xl border border-violet/40 bg-surface p-4 text-sm text-steel">{t.privacy.draft}</p>
        {t.privacy.sections.map((s) => (
          <section key={s.title} className="mt-10">
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
          </section>
        ))}
        <Link to="/" className={buttonCls("ghost", "mt-12")}>{t.privacy.back}</Link>
      </main>
      <SiteFooter />
    </>
  );
}
