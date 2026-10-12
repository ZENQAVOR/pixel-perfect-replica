import { Link } from "@tanstack/react-router";
import { ArrowRight, Code2, LayoutTemplate, Briefcase, Wrench, MessageCircle, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { ZSymbol, Wordmark } from "@/components/brand/BrandMark";
import { buttonCls } from "@/components/ui-site/Button";
import { SectionHeading } from "./SectionHeading";
import { sectionIds } from "./SiteHeader";
import { useI18n } from "@/i18n/I18nProvider";
import { emailHref, whatsappHref } from "@/config/site";

export function HeroSection() {
  const { t } = useI18n();
  return (
    <section id={sectionIds.home} aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="absolute inset-0 -z-10 bg-hero" aria-hidden="true" />
      <div className="container-site grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6">
        <div className="order-2 lg:order-1">
          <p className="eyebrow animate-rise">{t.hero.eyebrow}</p>
          <h1 id="hero-title" className="mt-5 max-w-[16ch] text-[2.4rem] leading-[1.05] font-semibold text-gradient animate-rise [animation-delay:80ms] sm:text-5xl lg:text-6xl xl:text-7xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-[34rem] text-base leading-relaxed text-muted-foreground animate-rise [animation-delay:160ms] md:text-lg">{t.hero.text}</p>
          <div className="mt-9 flex flex-col gap-3 animate-rise [animation-delay:240ms] sm:flex-row">
            <Link to="/" hash={sectionIds.projects} className={buttonCls("primary")}>{t.hero.primary}<ArrowRight className="h-4 w-4" /></Link>
            <Link to="/" hash={sectionIds.contact} className={buttonCls("ghost")}>{t.hero.secondary}</Link>
          </div>
        </div>
        <div className="relative order-1 mx-auto w-full max-w-[25rem] sm:max-w-xl lg:order-2 lg:max-w-2xl" aria-hidden="true">
          <ZSymbol artwork className="relative w-full animate-float" />
          <div className="mt-2 flex flex-col items-center gap-2 text-center">
            <Wordmark className="text-lg text-steel md:text-xl" />
            <span className="text-[0.7rem] text-muted-foreground">{t.hero.tagline}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const serviceIcons = [Code2, LayoutTemplate, Briefcase, Wrench];

export function ServicesSection() {
  const { t } = useI18n();
  return (
    <section id={sectionIds.services} aria-labelledby="services-title" className="border-t border-border py-24 md:py-32">
      <div className="container-site">
        <SectionHeading id="services-title" eyebrow={t.services.eyebrow} title={t.services.title} intro={t.services.intro} />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {t.services.items.map((s, i) => {
            const Icon = serviceIcons[i % serviceIcons.length] ?? Code2;
            return (
              <li key={s.title} className="reveal group flex flex-col bg-surface p-7 transition-colors duration-300 hover:bg-surface-2 md:p-10">
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-steel transition-colors group-hover:text-foreground" aria-hidden="true" />
                  <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-8 text-xl font-semibold md:text-2xl">{s.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{s.text}</p>
                <Link to="/" hash={sectionIds.contact} className={buttonCls("link", "mt-6 self-start")}>
                  {t.services.cta}<ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function ProjectMockup({ variant }: { variant: number }) {
  if (variant === 0)
    return (
      <div className="concept concept-food flex h-full flex-col justify-between p-5 sm:p-7">
        <div className="flex items-center justify-between text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#f5e5c8]/70"><span>Casa / mesa</span><span>01</span></div>
        <div><p className="font-display text-3xl font-semibold tracking-tight text-[#fff8eb] sm:text-4xl">Brasa<br />lenta.</p><div className="mt-4 h-px w-16 bg-[#d88b52]" /><p className="mt-3 max-w-[13rem] text-xs leading-relaxed text-[#f5e5c8]/70">Cocina de estación, fuego y encuentros.</p></div>
        <div className="flex items-center justify-between text-xs text-[#f5e5c8]/80"><span>Concepto gastronómico</span><span className="rounded-full border border-[#f5e5c8]/30 px-3 py-1">Reservar</span></div>
      </div>
    );
  if (variant === 1)
    return (
      <div className="concept concept-build flex h-full flex-col justify-between p-5 sm:p-7">
        <div className="flex items-center justify-between text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#c9d8d2]/65"><span>Materia / espacio</span><span>02</span></div>
        <div><p className="font-display text-3xl font-semibold tracking-tight text-[#edf4f0] sm:text-4xl">Norte<br /><span className="text-[#9db8aa]">estudio.</span></p><p className="mt-4 max-w-[15rem] text-xs leading-relaxed text-[#c9d8d2]/70">Arquitectura que deja entrar la luz.</p></div>
        <div className="flex items-center gap-3 text-xs text-[#c9d8d2]/75"><span className="h-2 w-2 rounded-full bg-[#d6a66f]" /> Concepto de arquitectura</div>
      </div>
    );
  return (
    <div className="concept concept-tech flex h-full flex-col justify-between p-5 sm:p-7">
      <div className="flex items-center justify-between text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#b9dbd8]/65"><span>Herramientas / futuro</span><span>03</span></div>
      <div><p className="font-display text-3xl font-semibold tracking-tight text-[#ecffff] sm:text-4xl">Vector<br /><span className="text-[#7bd4ca]">systems.</span></p><p className="mt-4 max-w-[15rem] text-xs leading-relaxed text-[#b9dbd8]/70">Servicios digitales claros para equipos que avanzan.</p></div>
      <div className="flex items-center justify-between text-xs text-[#b9dbd8]/75"><span>Concepto tecnológico</span><span className="font-display text-[#7bd4ca]">[ explore ]</span></div>
    </div>
  );
}

export function ProjectsSection() {
  const { t } = useI18n();
  return (
    <section id={sectionIds.projects} aria-labelledby="projects-title" className="border-t border-border py-24 md:py-32">
      <div className="container-site">
        <SectionHeading id="projects-title" eyebrow={t.projects.eyebrow} title={t.projects.title} intro={t.projects.intro} />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((p, i) => (
            <li key={p.title} className={"reveal" + (i === 2 ? " md:col-span-2 lg:col-span-1" : "")}>
              <article className="project-card flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-card">
                <div className="relative aspect-[4/3] border-b border-border bg-background" role="img" aria-label={`${p.title} — ${t.projects.badge}`}>
                  <ProjectMockup variant={i} />
                  <span className="absolute left-4 top-4 rounded-full border border-input bg-background/80 px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-steel backdrop-blur">{t.projects.badge}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase text-muted-foreground">{p.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground"><span className="font-semibold text-steel">{t.projects.objective}: </span>{p.objective}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const { t } = useI18n();
  return (
    <section id={sectionIds.process} aria-labelledby="process-title" className="border-t border-border py-24 md:py-32">
      <div className="container-site">
        <SectionHeading id="process-title" eyebrow={t.process.eyebrow} title={t.process.title} intro={t.process.intro} />
        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {t.process.steps.map((s, i) => (
            <li key={s.title} className="reveal border-t border-input pt-6">
              <span className="font-display text-sm text-violet">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function AboutSection() {
  const { t } = useI18n();
  return (
    <section aria-labelledby="about-title" className="border-t border-border bg-surface py-24 md:py-32">
      <div className="container-site grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div className="reveal">
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 id="about-title" className="mt-5 text-2xl leading-snug font-medium text-gradient md:text-4xl">{t.about.text}</h2>
        </div>
        <ul className="grid gap-6">
          {t.about.values.map((v) => (
            <li key={v.title} className="reveal flex gap-4">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-steel" aria-hidden="true" />
              <div><h3 className="font-semibold">{v.title}</h3><p className="text-sm text-muted-foreground">{v.text}</p></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ContactAction({ href, icon, label, unavailable }: { href: string | null; icon: ReactNode; label: string; unavailable: string }) {
  if (!href)
    return (
      <span aria-disabled="true" className={buttonCls("ghost", "justify-between opacity-60")}>
        <span className="flex items-center gap-2">{icon}{label}</span>
        <span className="text-xs font-normal text-muted-foreground">{unavailable}</span>
      </span>
    );
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={buttonCls("primary", "justify-between")}>
      <span className="flex items-center gap-2">{icon}{label}</span><ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

export function ContactSection() {
  const { t } = useI18n();
  const missing = !whatsappHref || !emailHref;
  return (
    <section id={sectionIds.contact} aria-labelledby="contact-title" className="relative isolate overflow-hidden border-t border-border py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-hero opacity-70" aria-hidden="true" />
      <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
        <SectionHeading id="contact-title" eyebrow={t.contact.eyebrow} title={t.contact.title} intro={t.contact.text} />
        <div className="reveal flex flex-col gap-3 border-t border-input pt-6 md:pt-8">
          <ContactAction href={whatsappHref} icon={<MessageCircle className="h-4 w-4" aria-hidden="true" />} label={t.contact.whatsapp} unavailable={t.contact.unavailable} />
          <ContactAction href={emailHref} icon={<Mail className="h-4 w-4" aria-hidden="true" />} label={t.contact.email} unavailable={t.contact.unavailable} />
          {missing && import.meta.env.DEV && <p className="mt-2 text-xs text-muted-foreground">{t.contact.devNote}</p>}
        </div>
      </div>
    </section>
  );
}
