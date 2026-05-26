export type PricingPlan = {
  slug: "starter" | "professional" | "custom";
  name: string;
  price: string;
  priceSuffix?: string;
  description: string;
  features: string[];
  highlight?: boolean;
  ctaLabel: string;
  ctaHref: string;
  bestFor: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    slug: "starter",
    name: "Starter",
    price: "500 DT",
    priceSuffix: "starting",
    description:
      "For landing pages, portfolios and small business websites that need to feel premium from day one.",
    features: [
      "Modern responsive website (up to 5 pages)",
      "Premium UI design system",
      "SEO foundations + sitemap + Open Graph",
      "Contact form + WhatsApp integration",
      "Deployment on Vercel",
      "1 month of post-launch support",
    ],
    ctaLabel: "Start a small project",
    ctaHref: "/contact?plan=starter",
    bestFor: ["Landing pages", "Portfolios", "Small websites"],
  },
  {
    slug: "professional",
    name: "Professional",
    price: "1000 DT",
    priceSuffix: "starting",
    description:
      "For advanced websites, custom dashboards and automation. Our most popular package.",
    features: [
      "Custom design tailored to your brand",
      "Admin dashboard / CMS",
      "Authentication & user roles",
      "Database + API design",
      "Workflow automation",
      "Performance & SEO optimization",
      "3 months of priority support",
    ],
    highlight: true,
    ctaLabel: "Book a strategy call",
    ctaHref: "/contact?plan=professional",
    bestFor: ["Custom dashboards", "Automation", "Advanced websites"],
  },
  {
    slug: "custom",
    name: "Custom",
    price: "Let's talk",
    description:
      "For SaaS products, AI systems, large platforms and enterprise software. Tailored from end to end.",
    features: [
      "Discovery + product strategy",
      "Full-stack SaaS architecture",
      "AI / LLM integrations",
      "Stripe billing & multi-tenancy",
      "Scalable infrastructure",
      "Long-term partnership & SLAs",
    ],
    ctaLabel: "Request a quotation",
    ctaHref: "/contact?plan=custom",
    bestFor: ["SaaS platforms", "AI systems", "Enterprise software"],
  },
];

export const pricingFaq = [
  {
    q: "Can you handle a project under 500 DT?",
    a: "Yes — we sometimes take on smaller scoped work like single landing sections, small fixes or quick redesigns. Get in touch and we'll quote honestly.",
  },
  {
    q: "What if my project is bigger than the Professional plan?",
    a: "That's where Custom comes in. SaaS products, AI systems and enterprise software are quoted after a free discovery call.",
  },
  {
    q: "Do you offer monthly retainers?",
    a: "Yes. After launch we offer ongoing maintenance, evolution and support retainers tailored to your stage.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Absolutely. We sign NDAs and MSAs as needed before any sensitive discussions.",
  },
];
