// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for every headline number on the site.
//
// • "Derived" values are computed from your data files. Add a
//   portfolio item / testimonial / service / blog post and the
//   numbers shown across the site update automatically.
// • "Editorial" values are claims that can't be derived from data
//   (e.g. retention rate). Change them ONCE here and they update
//   everywhere they appear.
// ─────────────────────────────────────────────────────────────

import { portfolio } from "@/lib/data/portfolio";
import { services } from "@/lib/data/services";
import { testimonials } from "@/lib/data/testimonials";
import { posts } from "@/lib/data/posts";

// ── Derived counts ───────────────────────────────────────────
const projectsShowcased = portfolio.length;
const clientsShowcased = new Set(
  portfolio.map((p) => p.client.trim().toLowerCase()),
).size;
const servicesCount = services.length;
const technologiesCount = new Set(
  portfolio.flatMap((p) => p.technologies),
).size;
const testimonialsCount = testimonials.length;
const postsCount = posts.length;
const avgRatingRaw = testimonials.length
  ? testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  : 5;
const avgRating = Math.round(avgRatingRaw * 10) / 10;

// ── Editorial claims (set once) ──────────────────────────────
// Clients we've worked with but don't publicly showcase. The public
// "businesses served" figure = this + the clients in your portfolio,
// so it grows every time you add a showcased project.
const UNLISTED_CLIENTS = 30;
const clientRetention = 98; // %
const deliveryDays = "7–14";
const responseTime = "2 hours";

const clientsServed = UNLISTED_CLIENTS + clientsShowcased;

// ── Display helpers ──────────────────────────────────────────
const formatRating = (n: number) =>
  Number.isInteger(n) ? `${n}★` : `${n.toFixed(1)}★`;

export const metrics = {
  // derived
  projectsShowcased,
  clientsShowcased,
  servicesCount,
  technologiesCount,
  testimonialsCount,
  postsCount,
  avgRating,

  // editorial
  clientsServed,
  clientRetention,
  deliveryDays,
  responseTime,

  // display-ready strings
  clientsServedDisplay: `${clientsServed}+`,
  retentionDisplay: `${clientRetention}%`,
  satisfactionDisplay: formatRating(avgRating),

  // token map used to interpolate translated strings (see `ti` in i18n)
  get tokens() {
    return {
      clients: String(clientsServed),
      projects: String(projectsShowcased),
      services: String(servicesCount),
      technologies: String(technologiesCount),
      testimonials: String(testimonialsCount),
      posts: String(postsCount),
      retention: String(clientRetention),
      delivery: deliveryDays,
      rating: Number.isInteger(avgRating) ? String(avgRating) : avgRating.toFixed(1),
    };
  },
};

export type Metrics = typeof metrics;
