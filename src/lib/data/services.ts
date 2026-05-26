import {
  Code2,
  Layers,
  LayoutDashboard,
  Workflow,
  Sparkles,
  Rocket,
  Building2,
  Server,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Custom websites engineered for speed, conversion and long-term scalability — built with the modern Next.js stack.",
    icon: Code2,
    features: ["Next.js + TypeScript", "Headless CMS-ready", "CRO-driven UX"],
  },
  {
    slug: "saas-mvp",
    title: "SaaS MVP",
    description:
      "Ship your product to market in weeks, not months. We turn ideas into investor-ready SaaS platforms.",
    icon: Rocket,
    features: ["From zero to launch", "Stripe & subscriptions", "Multi-tenant architecture"],
  },
  {
    slug: "admin-dashboards",
    title: "Admin Dashboards",
    description:
      "Powerful, role-aware dashboards with real-time analytics, custom workflows and pristine UX.",
    icon: LayoutDashboard,
    features: ["Realtime data", "Granular RBAC", "Beautiful charts"],
  },
  {
    slug: "automation-systems",
    title: "Automation Systems",
    description:
      "Eliminate repetitive work. We design automation pipelines that connect your apps and free your team.",
    icon: Workflow,
    features: ["n8n / Zapier / custom", "CRM + emails", "Internal tooling"],
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    description:
      "Plug generative AI into your product. Chatbots, copilots, content engines, vector search and beyond.",
    icon: Sparkles,
    features: ["LLM-powered features", "RAG pipelines", "Custom agents"],
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    description:
      "High-converting landing pages, designed to look premium and engineered to load in under a second.",
    icon: Layers,
    features: ["A/B-ready", "SEO optimized", "Pixel-perfect motion"],
  },
  {
    slug: "internal-platforms",
    title: "Internal Business Platforms",
    description:
      "Operational platforms that fit your business — inventory, CRM, ERP-lite, project management and more.",
    icon: Building2,
    features: ["Tailored to your ops", "Secure access control", "Reports & exports"],
  },
  {
    slug: "api-backend",
    title: "API & Backend Development",
    description:
      "Robust APIs, scalable backends and clean data models — the engine room of your digital product.",
    icon: Server,
    features: ["REST / tRPC / GraphQL", "Postgres + Prisma", "Production-grade auth"],
  },
];
