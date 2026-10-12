/**
 * Public site configuration. Fill these in with the real values.
 * Empty values keep the related contact actions disabled (never fake links).
 * Do NOT put secrets here — this file ships to the browser.
 */
export const siteConfig = {
  /** WhatsApp number, digits only, with country code. e.g. "5491100000000" */
  whatsappNumber: "",
  /** Public contact email address. */
  email: "",
  /** Public social links. Only filled entries are shown. */
  social: [] as { label: string; href: string }[],
  /** Production domain once known, e.g. "https://zenqavor.com" (used for canonical URLs). */
  siteUrl: "",
};

export const whatsappHref = siteConfig.whatsappNumber
  ? `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}`
  : null;
export const emailHref = siteConfig.email ? `mailto:${siteConfig.email}` : null;
