import type { Metadata } from "next";
import { Check, Gauge, HeartHandshake, ShieldCheck, Zap } from "lucide-react";

import { siteConfig } from "@/config/site";
import { PageHeader } from "@/components/marketing/page-header";
import { Stats } from "@/components/marketing/stats";
import { CtaSection } from "@/components/marketing/cta-section";
import { Section, SectionHeading, Reveal } from "@/components/section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Firlou is a Tunisian digital studio founded by two full-stack developers building premium web and SaaS products for ambitious teams.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Zap,
    title: "Speed without shortcuts",
    description:
      "We ship fast because our process and stack are dialed in — never because we cut corners on quality.",
  },
  {
    icon: ShieldCheck,
    title: "Engineering you can trust",
    description:
      "Clean architecture, type-safety and tests. Code you (or your future team) can build on for years.",
  },
  {
    icon: Gauge,
    title: "Performance obsessed",
    description:
      "We treat speed and SEO as features. Most of our work hits near-perfect Lighthouse scores.",
  },
  {
    icon: HeartHandshake,
    title: "True partnership",
    description:
      "We act like co-founders, not order-takers. Your goals become ours from day one.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Firlou"
        title="Two developers, one obsession: building products that win"
        description="We're a small Tunisian studio with a big-agency standard — combining startup speed with premium craft."
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-4 text-muted-foreground">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Our story
              </h2>
              <p>
                Firlou was founded by {siteConfig.founders.join(" and ")}, two full-stack
                developers from {siteConfig.city}, who were tired of seeing local
                businesses settle for slow, generic websites and bloated software.
              </p>
              <p>
                We started Firlou to bring world-class digital craft to startups and
                businesses in Tunisia and beyond — the kind of design and engineering you'd
                expect from a top agency in Berlin or San Francisco, with the speed and
                care of a dedicated small team.
              </p>
              <p>
                Today we design and build everything from premium landing pages to
                full-scale SaaS platforms, AI products and internal business systems.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-brand-500/10 via-violet-500/5 to-fuchsia-500/10 p-8">
              <ul className="space-y-4">
                {[
                  "Full-stack: design, frontend, backend, infra",
                  "Modern Next.js, TypeScript & cloud-native stack",
                  "Based in Tunisia, working with clients worldwide",
                  "Long-term partnerships, not one-off gigs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <Stats />
      </Section>

      <Section className="bg-secondary/30">
        <SectionHeading
          eyebrow="What we value"
          title="The principles behind every project"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <Reveal key={value.title} delay={i * 0.06}>
                <div className="flex gap-4 rounded-2xl border border-border/60 bg-card p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold">{value.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
