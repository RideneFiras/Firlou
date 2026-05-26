export type PortfolioItem = {
  slug: string;
  title: string;
  category:
    | "SaaS"
    | "Dashboard"
    | "Landing Page"
    | "Web App"
    | "AI"
    | "Automation";
  description: string;
  client: string;
  year: number;
  technologies: string[];
  cover: string;
  liveUrl?: string;
  featured?: boolean;
};

export const portfolio: PortfolioItem[] = [
  {
    slug: "northwind-saas",
    title: "Northwind — Logistics SaaS",
    category: "SaaS",
    description:
      "Multi-tenant logistics SaaS with live fleet tracking, role-based dashboards and Stripe billing.",
    client: "Northwind Logistics",
    year: 2025,
    technologies: ["Next.js", "Prisma", "Postgres", "Stripe", "Mapbox"],
    cover:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    slug: "salam-restaurant",
    title: "Salam — Restaurant Ordering",
    category: "Web App",
    description:
      "Premium ordering platform for a high-end restaurant chain, with online menu, reservations and POS sync.",
    client: "Salam Group",
    year: 2025,
    technologies: ["Next.js", "Tailwind", "Sanity", "Stripe"],
    cover:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    slug: "medisphere-dashboard",
    title: "MediSphere — Clinic Dashboard",
    category: "Dashboard",
    description:
      "All-in-one clinic dashboard for doctors: patients, appointments, billing, prescriptions and analytics.",
    client: "MediSphere",
    year: 2024,
    technologies: ["Next.js", "TypeScript", "Postgres", "Tremor"],
    cover:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    slug: "estate-luxury",
    title: "Estate Luxury — Real Estate Portal",
    category: "Web App",
    description:
      "Premium real estate platform with map search, agent dashboard and lead automation.",
    client: "Estate Luxury",
    year: 2024,
    technologies: ["Next.js", "Mapbox", "Algolia", "Prisma"],
    cover:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "kanban-ops",
    title: "KanbanOps — Internal Tool",
    category: "Dashboard",
    description:
      "Internal operations tool used daily by a 40-person team — Kanban boards, automations and reports.",
    client: "Confidential",
    year: 2024,
    technologies: ["Next.js", "tRPC", "Postgres"],
    cover:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "lumen-ai-assistant",
    title: "Lumen — AI Sales Assistant",
    category: "AI",
    description:
      "An AI sales assistant with RAG over the company's knowledge base, lead scoring and email drafting.",
    client: "Lumen Labs",
    year: 2025,
    technologies: ["Next.js", "OpenAI", "pgvector", "Resend"],
    cover:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    slug: "ovo-landing",
    title: "Ovo — Product Launch Landing",
    category: "Landing Page",
    description:
      "High-conversion product launch site with animated hero, waitlist and analytics. Lighthouse 100/100.",
    client: "Ovo",
    year: 2025,
    technologies: ["Next.js", "Framer Motion", "Resend"],
    cover:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "flowcast-automation",
    title: "Flowcast — Marketing Automation",
    category: "Automation",
    description:
      "Custom marketing automation suite — segmentation, sequences, webhooks and analytics dashboard.",
    client: "Flowcast",
    year: 2024,
    technologies: ["Next.js", "BullMQ", "Postgres", "Resend"],
    cover:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  },
];

export const portfolioCategories = [
  "All",
  "SaaS",
  "Dashboard",
  "Landing Page",
  "Web App",
  "AI",
  "Automation",
] as const;
