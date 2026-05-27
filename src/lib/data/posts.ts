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
    slug: "why-tunisian-businesses-need-a-modern-website-2026",
    title: "Why every Tunisian business needs a modern website in 2026",
    excerpt:
      "Local search, mobile-first audiences and AI-driven discoverability are changing the game for businesses in Tunisia. Here's what you need to do.",
    content: `
The Tunisian market is shifting fast. Customers search on Google, Maps, Instagram and even AI assistants before ever stepping into a physical location.

In 2026, not having a professional website is like not having a phone number — you're simply invisible.

**Why a modern website matters:**

1. Your website works 24/7 — it's your best salesperson that never sleeps.
2. 80%+ of searches happen on mobile — a mobile-first site is no longer optional.
3. Local SEO helps you appear when clients search "best restaurant in Tunis" or "doctor in Sfax".
4. A professional digital presence instantly builds trust with potential clients.
5. Social media is rented land — your website is owned real estate.

**The hidden cost of relying only on social media:**

Many businesses rely exclusively on Facebook or Instagram. This is risky — algorithms change, accounts get banned, and you don't own your audience.

A professional website combined with SEO and WhatsApp integration is the foundation of a solid digital presence in Tunisia.

**What we build for Tunisian businesses:**

At Firlou, we build websites starting at 500 DT that include mobile-responsive design, WhatsApp integration, SEO optimization and contact forms — everything you need to start generating leads online.

Ready to build your digital presence? Message us on WhatsApp or send us your project details.
    `.trim(),
    category: "Digital Strategy",
    tags: ["Tunisian business", "website", "digital presence", "SEO Tunisia", "local business"],
    author: "Firas",
    publishedAt: "2026-05-10",
    readTime: 6,
    cover:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
    metaTitle:
      "Why every Tunisian business needs a modern website in 2026 | Firlou",
    metaDescription:
      "Discover why a professional website is essential for Tunisian businesses in 2026. Local SEO, mobile-first design, WhatsApp integration — everything you need to attract more clients online.",
  },
  {
    slug: "digital-transformation-small-businesses-tunisia",
    title: "Digital transformation for small businesses in Tunisia: where to start",
    excerpt:
      "You don't need a huge budget to go digital. Here's a practical guide for Tunisian entrepreneurs and small businesses to transform their operations with the right tools.",
    content: `
Digital transformation doesn't mean replacing your entire business overnight. It means using smart digital tools to work faster, serve clients better and grow more efficiently.

**Step 1: Build your digital presence**

The first step is always a professional website. Before automation and AI, you need a solid foundation — a fast, mobile-friendly website that clearly explains what you offer and how to contact you.

**Step 2: Automate your client communications**

Tools like WhatsApp Business, automated email responses and online booking systems can save you hours every week. Instead of manually answering the same questions repeatedly, let automation do it for you.

**Step 3: Use a simple CRM or management system**

A basic client management system helps you track leads, follow up on projects and never miss an opportunity. You don't need expensive enterprise software — a custom-built lightweight system can be built for your exact needs.

**Step 4: Get visible on Google**

SEO (Search Engine Optimization) is how clients find you when they search online. With the right setup — Google Business Profile, local keywords, fast loading — you can appear at the top of search results for your city and sector.

**Real example: A Tunisian restaurant**

One of our clients, a restaurant in Tunis, went from zero online presence to:
- 3× more reservations through their website
- WhatsApp ordering system reducing phone calls by 60%
- Top 3 in local Google search results within 3 months

This was achieved with a budget of 800 DT and a 3-week build timeline.

**Ready to start your digital transformation?**

At Firlou, we guide businesses through every step — from a simple website to a complete digital business system. Contact us for a free consultation.
    `.trim(),
    category: "Digital Strategy",
    tags: ["digital transformation", "Tunisia", "small business", "automation", "web development"],
    author: "Achref",
    publishedAt: "2026-04-22",
    readTime: 7,
    cover:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    metaTitle:
      "Digital transformation for small businesses in Tunisia | Firlou",
    metaDescription:
      "A practical guide to digital transformation for Tunisian small businesses. Learn how to build your online presence, automate operations and grow with the right digital tools.",
  },
  {
    slug: "how-to-automate-your-business-in-tunisia",
    title: "How to automate your business operations in Tunisia",
    excerpt:
      "Business automation is no longer reserved for large corporations. Here are practical automation strategies for Tunisian businesses of any size.",
    content: `
Business automation means letting software handle repetitive tasks so you and your team can focus on growth.

**What can be automated?**

- Client inquiry responses (WhatsApp, email auto-replies)
- Appointment scheduling and reminders
- Invoice generation and payment tracking
- Social media posts scheduling
- Lead follow-up sequences
- Internal reporting and analytics
- Inventory tracking and alerts

**Real results from automation:**

One of our clients, a beauty salon in Tunis, automated their appointment booking system. The result: 70% fewer no-shows thanks to automated WhatsApp reminders, and 2 hours saved per day on manual scheduling.

**How much does business automation cost in Tunisia?**

At Firlou, automation projects start at 500 DT for simple workflows and go up to 2000 DT+ for complex multi-step systems. The investment typically pays for itself within 1–3 months.

**Where to start:**

1. Identify your most time-consuming repetitive tasks
2. Prioritize based on time saved vs. build cost
3. Start with one high-impact automation
4. Expand gradually

We offer a free consultation to help you identify which automation would have the biggest impact on your business.
    `.trim(),
    category: "Automation",
    tags: ["business automation", "Tunisia", "workflow", "efficiency", "small business"],
    author: "Firas",
    publishedAt: "2026-04-05",
    readTime: 5,
    cover:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1600&q=80",
    metaTitle:
      "How to automate your business operations in Tunisia | Firlou",
    metaDescription:
      "Practical business automation strategies for Tunisian companies. From WhatsApp auto-replies to appointment booking — learn how to save time and grow faster.",
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

We've used this process to ship 8+ SaaS products from Tunisia for clients locally and internationally.

**The key principles:**

1. Start with the core user journey — not every feature
2. Build for learning — optimize for validating assumptions fast
3. Use proven infrastructure (Next.js, Postgres, Stripe) to avoid reinventing wheels
4. Ship to real users by week 6 — iterate based on feedback

Interested in building your SaaS product? We offer a free 30-minute product strategy session.
    `.trim(),
    category: "Engineering",
    tags: ["SaaS", "MVP", "startup", "product development", "Tunisia"],
    author: "Achref",
    publishedAt: "2026-03-22",
    readTime: 9,
    cover:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
    metaTitle: "How we ship SaaS MVPs in 8 weeks | Firlou Tunisia",
    metaDescription:
      "Learn how Firlou builds and launches SaaS products in 8 weeks. Our proven process for taking a startup idea from zero to paying customers.",
  },
  {
    slug: "why-restaurants-need-digital-presence-tunisia",
    title: "Why restaurants in Tunisia need a digital presence in 2026",
    excerpt:
      "Customers search online before they dine. Here's how Tunisian restaurants can attract more clients with the right digital tools.",
    content: `
The restaurant industry in Tunisia is becoming increasingly digital. Customers check menus online, read reviews, make reservations through WhatsApp, and discover restaurants through Google Maps before ever setting foot inside.

**What a restaurant needs online:**

1. **A professional website** with your menu, photos, location and contact information
2. **WhatsApp ordering** — the most popular way Tunisians order food
3. **Online reservation system** to fill tables without phone calls
4. **Google Business Profile** optimization to appear in local searches
5. **Social media integration** to showcase your dishes and ambiance

**The numbers:**

- 70% of diners check a restaurant's online presence before visiting
- Restaurants with online menus get 30% more walk-ins
- WhatsApp-integrated ordering increases average order value by 20%

**Our restaurant package:**

We build complete restaurant digital presences starting at 600 DT — including website, digital menu, WhatsApp integration and Google optimization. Delivered in 10 business days.

Contact us to see examples of restaurant websites we've built in Tunisia.
    `.trim(),
    category: "Digital Strategy",
    tags: ["restaurant", "Tunisia", "digital presence", "WhatsApp", "online ordering"],
    author: "Firas",
    publishedAt: "2026-03-10",
    readTime: 5,
    cover:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
    metaTitle: "Why restaurants in Tunisia need a digital presence in 2026 | Firlou",
    metaDescription:
      "Discover why Tunisian restaurants need a professional website, WhatsApp integration and Google presence. Attract more clients and increase orders with the right digital tools.",
  },
  {
    slug: "ai-integrations-that-actually-help-businesses",
    title: "AI integrations that actually help businesses (not just buzzwords)",
    excerpt:
      "Three practical AI patterns we deploy in client products today: copilots, classifiers and retrieval-based assistants.",
    content: `
Everyone is talking about AI. Few are shipping real value with it.

Three patterns that consistently move the needle for our clients:

1. **In-product copilots** — small assistants that automate the repetitive 20% of user work.
2. **Smart classifiers** — categorizing leads, tickets or documents at scale.
3. **RAG assistants** — knowledge-base chat over your company's data.

We'll dive into when each one is worth shipping, and when it's overkill.

**Real example:** We built an AI assistant for a sales team in Tunisia that automatically qualifies leads, drafts email responses and extracts key information from client messages. The team now handles 3× more leads with the same headcount.

AI integration projects at Firlou start at 1500 DT for simple features and scale up based on complexity.
    `.trim(),
    category: "AI",
    tags: ["AI", "artificial intelligence", "business automation", "chatbot", "Tunisia"],
    author: "Firas",
    publishedAt: "2026-02-18",
    readTime: 7,
    cover:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
    metaTitle: "AI integrations that actually help businesses | Firlou",
    metaDescription:
      "Practical AI integration patterns for businesses: copilots, smart classifiers and AI assistants. Learn how Firlou implements AI features that create real business value.",
  },
];

export const postCategories = [
  "All",
  "Digital Strategy",
  "Engineering",
  "Automation",
  "AI",
  "Design",
] as const;

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
