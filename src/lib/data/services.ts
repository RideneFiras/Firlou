import {
  Globe,
  LayoutDashboard,
  Workflow,
  Sparkles,
  Rocket,
  Building2,
  Server,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  badge?: string;
};

export const services: Service[] = [
  {
    slug: "digital-presence",
    title: "Digital Presence",
    description:
      "Modern websites and optimized digital experiences that help your business look professional, attract clients and get discovered online.",
    icon: Globe,
    features: ["Professional website", "SEO optimization", "Google-ready setup"],
    badge: "Most requested",
  },
  {
    slug: "web-development",
    title: "Custom Websites",
    description:
      "Tailor-made websites built to reflect your brand, convert visitors into clients and perform perfectly on every device.",
    icon: MonitorSmartphone,
    features: ["Mobile-first design", "WhatsApp integration", "Fast loading"],
  },
  {
    slug: "saas-mvp",
    title: "Startup & SaaS Development",
    description:
      "We turn your business idea into a fully working product. From MVP to investor-ready platform, we handle the entire build.",
    icon: Rocket,
    features: ["Rapid launch", "Subscription billing", "Scalable architecture"],
  },
  {
    slug: "admin-dashboards",
    title: "Business Management Systems",
    description:
      "Custom dashboards and management tools built around how your business actually works — track everything from one place.",
    icon: LayoutDashboard,
    features: ["Real-time data", "Role-based access", "Reports & exports"],
  },
  {
    slug: "automation-systems",
    title: "Workflow & Business Automation",
    description:
      "Stop wasting time on repetitive tasks. We automate your business processes so your team can focus on what matters.",
    icon: Workflow,
    features: ["CRM automation", "Email & notifications", "Custom workflows"],
  },
  {
    slug: "ai-integration",
    title: "AI-Powered Features",
    description:
      "Add intelligent features to your business: smart chatbots, automated assistants, content generation and data analysis.",
    icon: Sparkles,
    features: ["AI chatbots", "Smart automation", "Data insights"],
    badge: "New",
  },
  {
    slug: "internal-platforms",
    title: "Internal Business Platforms",
    description:
      "Custom platforms built for your team — inventory management, CRM, booking systems, HR tools and more.",
    icon: Building2,
    features: ["Tailored to your ops", "Secure access control", "Fully customizable"],
  },
  {
    slug: "api-backend",
    title: "Custom Business Systems",
    description:
      "Robust digital infrastructure that powers your business behind the scenes — APIs, databases, integrations and automation engines.",
    icon: Server,
    features: ["API integrations", "Secure data systems", "Third-party connections"],
  },
];
