export type PortfolioItem = {
  slug: string;
  title: string;
  category:
    | "SaaS"
    | "Dashboard"
    | "Landing Page"
    | "Web App"
    | "AI"
    | "Automation"
    | "Digital Presence"
    | "E-commerce";
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
      "Multi-tenant logistics SaaS with live fleet tracking, role-based dashboards and Stripe billing. Built from 0 to production in 8 weeks.",
    client: "Northwind Logistics",
    year: 2025,
    technologies: ["Next.js", "Prisma", "Postgres", "Stripe", "Mapbox"],
    cover:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    slug: "salam-restaurant",
    title: "Salam — Restaurant Platform",
    category: "Digital Presence",
    description:
      "Premium online presence for a restaurant chain — digital menu, WhatsApp ordering, online reservations and POS sync. Online orders tripled in 2 months.",
    client: "Salam Group",
    year: 2025,
    technologies: ["Next.js", "Tailwind", "Sanity", "Stripe"],
    cover:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    slug: "medisphere-dashboard",
    title: "MediSphere — Clinic Management",
    category: "Dashboard",
    description:
      "Complete clinic management system for doctors: patient records, appointment scheduling, billing, prescriptions and analytics. Saves 6 hours/doctor/week.",
    client: "MediSphere",
    year: 2024,
    technologies: ["Next.js", "TypeScript", "Postgres", "Prisma"],
    cover:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    slug: "estate-luxury",
    title: "Estate Luxury — Real Estate Portal",
    category: "Web App",
    description:
      "Premium real estate portal with map-based property search, agent dashboard, lead automation and luxury listing pages. Leads increased 4×.",
    client: "Estate Luxury",
    year: 2024,
    technologies: ["Next.js", "Mapbox", "Algolia", "Prisma"],
    cover:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    slug: "bookme-booking",
    title: "BookMe — Salon Booking System",
    category: "Web App",
    description:
      "Modern online booking platform for a beauty salon chain — appointment management, staff scheduling, client reminders via WhatsApp and analytics dashboard.",
    client: "BookMe Salons",
    year: 2025,
    technologies: ["Next.js", "Prisma", "Resend", "Postgres"],
    cover:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    slug: "lumen-ai-assistant",
    title: "Lumen — AI Sales Assistant",
    category: "AI",
    description:
      "An AI-powered sales assistant with company knowledge base, automated lead scoring and intelligent email drafting. Reduced sales team workload by 40%.",
    client: "Lumen Labs",
    year: 2025,
    technologies: ["Next.js", "OpenAI", "pgvector", "Resend"],
    cover:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    slug: "souk-marketplace",
    title: "Souk — Marketplace Platform",
    category: "E-commerce",
    description:
      "Multi-vendor marketplace for Tunisian artisans and small businesses — seller onboarding, product listings, secure payments and order management.",
    client: "Souk Digital",
    year: 2025,
    technologies: ["Next.js", "Stripe Connect", "Prisma", "Postgres"],
    cover:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "kanban-ops",
    title: "KanbanOps — Internal Tool",
    category: "Dashboard",
    description:
      "Internal operations platform used daily by a 40-person team — Kanban boards, process automations, reporting and team management.",
    client: "Confidential",
    year: 2024,
    technologies: ["Next.js", "tRPC", "Postgres"],
    cover:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "flowcast-automation",
    title: "Flowcast — Marketing Automation",
    category: "Automation",
    description:
      "Custom marketing automation suite — contact segmentation, email sequences, webhook triggers and a full analytics dashboard.",
    client: "Flowcast",
    year: 2024,
    technologies: ["Next.js", "BullMQ", "Postgres", "Resend"],
    cover:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "ovo-landing",
    title: "Ovo — Product Launch Page",
    category: "Landing Page",
    description:
      "High-conversion product launch site with animated hero, waitlist system and integrated analytics. Achieved Lighthouse 100/100 on all metrics.",
    client: "Ovo",
    year: 2025,
    technologies: ["Next.js", "Framer Motion", "Resend"],
    cover:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
  },
];

export const portfolioCategories = [
  "All",
  "Digital Presence",
  "Dashboard",
  "Web App",
  "SaaS",
  "E-commerce",
  "AI",
  "Automation",
  "Landing Page",
] as const;
