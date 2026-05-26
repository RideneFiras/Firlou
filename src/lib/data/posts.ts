export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  readTime: number;
  cover: string;
  metaTitle?: string;
  metaDescription?: string;
};

export const posts: BlogPost[] = [
  {
    slug: "why-tunisian-businesses-need-a-modern-website",
    title:
      "Why every Tunisian business will need a modern web presence in 2026",
    excerpt:
      "Local search, mobile-first audiences and AI-driven discoverability are changing the game. Here's what to do about it.",
    content: `
The Tunisian market is shifting fast. Customers are searching on Google, Maps, Instagram and even ChatGPT before
ever stepping into a physical location.

In this article we cover:

1. How modern websites act as your 24/7 sales rep.
2. Why mobile-first design is no longer optional.
3. The SEO foundations every local business should implement this year.
4. The hidden cost of relying only on social media.

A premium digital presence is no longer a "nice to have" — it's the bare minimum to compete.
    `.trim(),
    category: "Digital Strategy",
    tags: ["SEO", "Tunisia", "Local business"],
    author: "Firas",
    publishedAt: "2026-04-12",
    readTime: 6,
    cover:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
    metaTitle:
      "Why every Tunisian business needs a modern website in 2026 | Firlou",
    metaDescription:
      "Local SEO, mobile-first design and AI-driven search are reshaping Tunisian markets. Here's the modern playbook to win online.",
  },
  {
    slug: "saas-mvp-in-8-weeks",
    title: "How we ship SaaS MVPs in 8 weeks (without cutting corners)",
    excerpt:
      "Our proven 4-phase process to take a SaaS idea from validated concept to paying customers in two months.",
    content: `
Most SaaS MVPs fail because they're either too small to test the real problem, or too big to ship before the founder burns out.

Our 4-phase process:

**Phase 1 — Strategy & Architecture (Week 1):** Domain modeling, user flows, tech choices.
**Phase 2 — Core Build (Weeks 2–5):** Auth, billing, the 3 must-have flows.
**Phase 3 — Polish & QA (Weeks 6–7):** Performance, design system, edge cases.
**Phase 4 — Launch & Iterate (Week 8):** Onboarding, analytics, first customers.

We share the exact checklists and tooling we use.
    `.trim(),
    category: "Engineering",
    tags: ["SaaS", "MVP", "Process"],
    author: "Achref",
    publishedAt: "2026-03-22",
    readTime: 9,
    cover:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "ai-integrations-that-actually-help-businesses",
    title: "AI integrations that actually help businesses (not just buzzwords)",
    excerpt:
      "Three practical patterns we deploy in client products today: copilots, classifiers and retrieval-based assistants.",
    content: `
Everyone is talking about AI. Few are shipping real value with it.

Three patterns that consistently move the needle for our clients:

1. **In-product copilots** — small assistants that automate the repetitive 20% of user work.
2. **Smart classifiers** — categorizing leads, tickets or documents at scale.
3. **RAG assistants** — knowledge-base chat over your company's data.

We'll dive into when each one is worth shipping, and when it's overkill.
    `.trim(),
    category: "AI",
    tags: ["AI", "LLM", "Product"],
    author: "Firas",
    publishedAt: "2026-02-18",
    readTime: 7,
    cover:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "design-systems-for-small-teams",
    title: "Design systems for small teams: lean but powerful",
    excerpt:
      "A design system doesn't need to be huge to be effective. Here's how we build minimal ones for fast-moving teams.",
    content: `
Design systems often get over-engineered. For small teams, you don't need 200 components — you need 20 that are excellent.

We share our internal design system blueprint and the components every product should ship with on day one.
    `.trim(),
    category: "Design",
    tags: ["Design system", "UI", "Frontend"],
    author: "Achref",
    publishedAt: "2026-01-30",
    readTime: 5,
    cover:
      "https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=1600&q=80",
  },
];

export const postCategories = [
  "All",
  "Digital Strategy",
  "Engineering",
  "AI",
  "Design",
] as const;

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
