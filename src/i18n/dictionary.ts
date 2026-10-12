const es = {
  meta: {
    title: "ZENQAVOR — Estudio digital de diseño y desarrollo web",
    description:
      "Diseño y desarrollo web para negocios, profesionales y marcas que quieren crecer con una presencia digital sólida.",
  },
  nav: { home: "Inicio", services: "Servicios", projects: "Proyectos", process: "Proceso", contact: "Contacto" },
  header: { cta: "Hablemos", openMenu: "Abrir menú", closeMenu: "Cerrar menú", language: "Idioma", skip: "Saltar al contenido" },
  hero: {
    eyebrow: "Estudio digital",
    title: "Construimos experiencias digitales que impulsan marcas.",
    text: "Diseño y desarrollo web para negocios, profesionales y marcas que quieren crecer con una presencia digital sólida.",
    primary: "Explorar proyectos",
    secondary: "Iniciar un proyecto",
    tagline: "BUILD BEYOND LIMITS.",
  },
  services: {
    eyebrow: "Servicios",
    title: "Lo que construimos",
    intro: "Cuatro formas de trabajar juntos, cada una con un objetivo claro.",
    cta: "Consultar",
    items: [
      { title: "Diseño y desarrollo de sitios web", text: "Sitios responsivos y bien estructurados, adaptados a los objetivos de cada proyecto." },
      { title: "Landing pages", text: "Experiencias enfocadas en comunicar una propuesta de valor y motivar la acción." },
      { title: "Sitios para negocios y profesionales", text: "Presencias digitales claras para negocios locales, profesionales independientes y organizaciones." },
      { title: "Mejoras y mantenimiento web", text: "Mejoras en sitios existentes: usabilidad, rendimiento, contenido y tareas de mantenimiento acordadas." },
    ],
  },
  projects: {
    eyebrow: "Proyectos seleccionados",
    title: "Conceptos de diseño",
    intro: "Exploraciones visuales que muestran nuestra dirección de diseño. No representan trabajos para clientes reales.",
    badge: "Demo conceptual",
    objective: "Objetivo",
    items: [
      { title: "Atelier Norte", category: "Negocio de servicios local", objective: "Transmitir confianza y calidad premium, facilitando la reserva de una consulta." },
      { title: "Pulso", category: "Landing de fitness y estilo de vida", objective: "Comunicar energía con una estructura simple que guía hacia la inscripción." },
      { title: "Lumen Kit", category: "Producto digital / marca creativa", objective: "Presentar un producto digital con claridad, ritmo visual y foco en el valor." },
    ],
  },
  process: {
    eyebrow: "Proceso",
    title: "Cómo trabajamos",
    intro: "Un proceso claro, sin jerga innecesaria, de la primera conversación a la entrega.",
    steps: [
      { title: "Descubrimiento", text: "Entendemos tu negocio, tu público, tus objetivos y los requisitos del proyecto." },
      { title: "Diseño", text: "Definimos la dirección visual y la experiencia de quienes visitan el sitio." },
      { title: "Desarrollo", text: "Construimos, probamos y ajustamos el sitio hasta que funcione como debe." },
      { title: "Entrega", text: "Revisamos el resultado final, publicamos con tu aprobación y explicamos el traspaso." },
    ],
  },
  about: {
    eyebrow: "Sobre ZENQAVOR",
    text: "En ZENQAVOR combinamos diseño, tecnología y atención al detalle para crear experiencias digitales claras, rápidas y coherentes con cada marca.",
    values: [
      { title: "Diseño con propósito", text: "Cada decisión visual responde a un objetivo." },
      { title: "Implementación confiable", text: "Código cuidado, probado y fácil de mantener." },
      { title: "Colaboración transparente", text: "Comunicación clara en cada etapa." },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title: "Contanos sobre tu proyecto.",
    text: "Escribinos con una breve descripción de lo que necesitás y te respondemos para conversar los próximos pasos.",
    whatsapp: "Escribir por WhatsApp",
    email: "Enviar un email",
    unavailable: "Disponible próximamente",
    devNote: "Vista de desarrollo: configurá WhatsApp y email en src/config/site.ts para activar estos botones.",
  },
  footer: {
    description: "Estudio digital de diseño y desarrollo web.",
    privacy: "Privacidad",
    rights: "Todos los derechos reservados.",
  },
  privacy: {
    title: "Política de privacidad",
    metaDescription: "Borrador de la política de privacidad de ZENQAVOR.",
    draft: "Borrador — este documento no es definitivo ni constituye asesoramiento legal. Se completará cuando se definan las prácticas reales de datos.",
    sections: [
      { title: "Responsable", text: "Datos del responsable pendientes de completar." },
      { title: "Datos que recopilamos", text: "Actualmente este sitio no incluye formularios, analíticas ni cookies de seguimiento. Si escribís por WhatsApp o email, esos servicios gestionan tu mensaje según sus propias políticas." },
      { title: "Alojamiento", text: "Información del proveedor de alojamiento pendiente de completar." },
      { title: "Tus derechos", text: "Sección pendiente de completar según la normativa aplicable." },
    ],
    back: "Volver al inicio",
  },
  notFound: { title: "Página no encontrada", text: "La página que buscás no existe o fue movida.", back: "Volver al inicio" },
};

export type Dictionary = typeof es;

const en: Dictionary = {
  meta: {
    title: "ZENQAVOR — Digital studio for web design & development",
    description: "Web design and development for businesses, professionals, and brands looking for a stronger digital presence.",
  },
  nav: { home: "Home", services: "Services", projects: "Projects", process: "Process", contact: "Contact" },
  header: { cta: "Let's talk", openMenu: "Open menu", closeMenu: "Close menu", language: "Language", skip: "Skip to content" },
  hero: {
    eyebrow: "Digital studio",
    title: "We build digital experiences that move brands forward.",
    text: "Web design and development for businesses, professionals, and brands looking for a stronger digital presence.",
    primary: "Explore projects",
    secondary: "Start a project",
    tagline: "BUILD BEYOND LIMITS.",
  },
  services: {
    eyebrow: "Services",
    title: "What we build",
    intro: "Four ways to work together, each with a clear objective.",
    cta: "Ask about it",
    items: [
      { title: "Website design and development", text: "Responsive, well-structured websites tailored to each project's objectives." },
      { title: "Landing pages", text: "Focused experiences designed to communicate a value proposition and encourage action." },
      { title: "Business and professional websites", text: "Clear digital presences for local businesses, independent professionals, and organizations." },
      { title: "Website improvements and maintenance", text: "Improvements to existing websites: usability, performance, content, and agreed maintenance tasks." },
    ],
  },
  projects: {
    eyebrow: "Selected projects",
    title: "Design concepts",
    intro: "Visual explorations showing our design direction. They do not represent work for real clients.",
    badge: "Concept project",
    objective: "Objective",
    items: [
      { title: "Atelier Norte", category: "Local service business", objective: "Convey trust and premium quality while making it easy to book a consultation." },
      { title: "Pulso", category: "Fitness & lifestyle landing page", objective: "Communicate energy with a simple structure that guides visitors to sign up." },
      { title: "Lumen Kit", category: "Digital product / creative brand", objective: "Present a digital product with clarity, visual rhythm, and focus on value." },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "How we work",
    intro: "A clear process, without unnecessary jargon, from first conversation to delivery.",
    steps: [
      { title: "Discovery", text: "We understand your business, audience, goals, and project requirements." },
      { title: "Design", text: "We set the visual direction and the experience for your visitors." },
      { title: "Development", text: "We build, test, and refine the website until it works as it should." },
      { title: "Delivery", text: "We review the final result, publish once approved, and explain the handover." },
    ],
  },
  about: {
    eyebrow: "About ZENQAVOR",
    text: "At ZENQAVOR, we combine design, technology, and attention to detail to create digital experiences that are clear, fast, and aligned with each brand.",
    values: [
      { title: "Purposeful design", text: "Every visual decision serves a goal." },
      { title: "Reliable implementation", text: "Careful, tested, maintainable code." },
      { title: "Transparent collaboration", text: "Clear communication at every stage." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell us about your project.",
    text: "Send us a short description of what you need and we'll get back to you to discuss next steps.",
    whatsapp: "Message on WhatsApp",
    email: "Send an email",
    unavailable: "Available soon",
    devNote: "Development preview: set WhatsApp and email in src/config/site.ts to enable these buttons.",
  },
  footer: {
    description: "Digital studio for web design and development.",
    privacy: "Privacy",
    rights: "All rights reserved.",
  },
  privacy: {
    title: "Privacy policy",
    metaDescription: "Draft privacy policy for ZENQAVOR.",
    draft: "Draft — this document is not final and is not legal advice. It will be completed once actual data practices are defined.",
    sections: [
      { title: "Controller", text: "Controller details to be completed." },
      { title: "Data we collect", text: "This site currently has no forms, analytics, or tracking cookies. If you contact us via WhatsApp or email, those services handle your message under their own policies." },
      { title: "Hosting", text: "Hosting provider information to be completed." },
      { title: "Your rights", text: "Section to be completed according to applicable regulations." },
    ],
    back: "Back to home",
  },
  notFound: { title: "Page not found", text: "The page you're looking for doesn't exist or has been moved.", back: "Back to home" },
};

export const dictionaries = { es, en };
export type Locale = keyof typeof dictionaries;
export const defaultLocale: Locale = "es";
