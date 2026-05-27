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
      "Perfect for local businesses, restaurants, doctors and freelancers who need a professional online presence fast.",
    features: [
      "Modern landing page or small website",
      "Fully mobile responsive design",
      "WhatsApp & contact form integration",
      "Basic SEO optimization",
      "Google Maps & social media links",
      "Fast delivery — 7 to 14 days",
      "1 month of post-launch support",
    ],
    ctaLabel: "Start your website",
    ctaHref: "/contact?plan=starter",
    bestFor: ["Local businesses", "Restaurants", "Doctors & clinics", "Freelancers"],
  },
  {
    slug: "professional",
    name: "Professional",
    price: "1000 DT",
    priceSuffix: "starting",
    description:
      "For businesses that need more than a website — a complete digital system with management tools and automation.",
    features: [
      "Advanced multi-page website",
      "Custom admin dashboard & CMS",
      "Authentication & user roles",
      "Business management tools",
      "Workflow & process automation",
      "API integrations",
      "SEO & performance optimization",
      "3 months of priority support",
    ],
    highlight: true,
    ctaLabel: "Book a free call",
    ctaHref: "/contact?plan=professional",
    bestFor: ["Growing businesses", "Startups", "Agencies", "E-commerce"],
  },
  {
    slug: "custom",
    name: "Custom",
    price: "Sur devis",
    description:
      "For SaaS platforms, AI systems, enterprise solutions and large-scale custom projects. Fully tailored.",
    features: [
      "Full product discovery & strategy",
      "SaaS & multi-tenant architecture",
      "AI & automation integrations",
      "Complex business systems",
      "Scalable cloud infrastructure",
      "Long-term partnership & SLAs",
    ],
    ctaLabel: "Request a quotation",
    ctaHref: "/contact?plan=custom",
    bestFor: ["SaaS platforms", "AI systems", "Enterprises", "Large projects"],
  },
];

export const pricingFaq = [
  {
    q: "Can you handle a project under 500 DT?",
    a: "Yes — for smaller scoped work like a single landing page, a quick redesign or minor features, we can quote honestly. Just reach out and describe your needs.",
  },
  {
    q: "What if my project is bigger than the Professional plan?",
    a: "That's where the Custom plan comes in. SaaS products, AI systems and large platforms are quoted after a free discovery call where we define the full scope together.",
  },
  {
    q: "How fast can you deliver?",
    a: "Starter projects typically take 7–14 days. Professional projects take 3–6 weeks. We always agree on a clear timeline before we start.",
  },
  {
    q: "Do you work with businesses outside Tunisia?",
    a: "Absolutely. We work with clients across Tunisia and internationally. Communication is in Arabic, French or English — whatever works best for you.",
  },
  {
    q: "Do you offer monthly retainers?",
    a: "Yes. After launch we offer ongoing maintenance, updates and support retainers to keep your platform running perfectly.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Absolutely. We sign NDAs and service agreements as needed before any sensitive discussions.",
  },
];
