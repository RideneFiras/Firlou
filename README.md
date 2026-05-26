# Firlou

Premium digital studio platform for a Tunisian web & SaaS development studio — built as a modern, SEO-optimized, lead-generating mini-SaaS with a hidden admin console.

> We build modern digital systems that help businesses grow faster.

## Tech stack

- **Next.js 15** (App Router) + **TypeScript**
- **TailwindCSS** + custom design system (Shadcn-style primitives)
- **Framer Motion** for premium motion
- **NextAuth (Auth.js)** — credentials provider for the admin console
- **Prisma** + **PostgreSQL** schema (leads, projects, portfolio, blog, pricing, services, SEO)
- **Resend** for lead email notifications
- Dark / light mode, multilingual-ready architecture, Vercel-ready

## Features

### Public site
- Premium animated landing page (hero, services, portfolio, process, testimonials, pricing, CTA)
- Services, Portfolio (filterable), Pricing (3 tiers + FAQ), About, Contact, Blog/Insights
- Advanced lead capture form (server action → DB + email), WhatsApp floating button
- Full SEO: metadata, Open Graph, dynamic OG image, JSON-LD schema, `sitemap.xml`, `robots.txt`, manifest

### Hidden admin access
- Click the site **logo 5 times** within 1.2s to reveal a premium admin login modal
- Standalone login page also available at `/admin/login`
- Middleware-protected `/admin/**` routes, JWT sessions

### Admin dashboard
- Stats cards, leads-over-time chart, pipeline breakdown
- **Leads**: Kanban board + list view, 6 statuses (New → Contacted → Meeting → In Progress → Closed → Lost)
- **Projects**: progress tracking cards
- **Portfolio / Blog & SEO / Settings** management screens

## Getting started

```bash
npm install
cp .env.example .env       # fill in values
npm run db:generate        # optional — needs DATABASE_URL
npm run dev
```

Open http://localhost:3000.

### Admin access

Set `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `.env`. Then either:
- visit `/admin/login`, or
- click the logo 5× quickly on any public page.

The site runs fully without a database (lead form and admin use mock/in-memory data). Configure `DATABASE_URL` + `RESEND_API_KEY` to persist leads and send notifications.

## Project structure

```
src/
  app/
    (marketing)/        # public site (navbar/footer/whatsapp layout)
    admin/              # protected console + login
    api/auth/           # NextAuth route
    actions/            # server actions (lead submission)
    sitemap.ts robots.ts manifest.ts opengraph-image.tsx
  components/
    ui/                 # design-system primitives
    marketing/          # landing & page sections
    admin/              # dashboard, sidebar, leads board, hidden-access provider
  config/site.ts        # central site config
  lib/
    data/               # mock content (services, portfolio, posts, leads, ...)
    auth.ts prisma.ts utils.ts validations.ts
prisma/schema.prisma
```

## Deployment

Push to GitHub and import into Vercel. Add the environment variables from `.env.example`. The app is edge/serverless friendly out of the box.
