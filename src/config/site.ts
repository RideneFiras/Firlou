export const siteConfig = {
  name: "Firlou",
  tagline: "Premium digital studio building modern web & SaaS products.",
  description:
    "Firlou is a Tunisian digital development studio crafting fast, elegant websites, SaaS MVPs, dashboards, AI integrations and automation systems for ambitious teams.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://firlou.tn",
  ogImage: "/og.png",
  locale: "en",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "21600000000",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@firlou.tn",
  founders: ["Firas", "Achref"],
  city: "Tunis, Tunisia",
  links: {
    whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "21600000000"}`,
    github: "https://github.com/firlou",
    linkedin: "https://www.linkedin.com/company/firlou",
    twitter: "https://twitter.com/firlou_studio",
    instagram: "https://instagram.com/firlou.studio",
    calendly: "https://cal.com/firlou/intro",
  },
  nav: [
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Insights" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ] as const,
  keywords: [
    "digital studio Tunisia",
    "web development Tunisia",
    "SaaS development",
    "Next.js agency",
    "custom dashboards",
    "AI integrations",
    "automation systems",
    "modern websites Tunisia",
    "landing page agency",
    "Firlou",
  ],
};

export type SiteConfig = typeof siteConfig;
