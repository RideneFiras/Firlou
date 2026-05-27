import type { Metadata } from "next";
import {
  Check,
  Zap,
  HeartHandshake,
  MessageCircle,
  Globe,
  Award,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import { PageHeader } from "@/components/marketing/page-header";
import { Stats } from "@/components/marketing/stats";
import { CtaSection } from "@/components/marketing/cta-section";
import { Section, SectionHeading, Reveal } from "@/components/section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Firlou is a premium Tunisian digital studio founded by two full-stack developers. We build modern websites, business systems and SaaS platforms for businesses in Tunisia and internationally.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Firlou — Premium Digital Studio from Tunisia",
    description:
      "Meet the team behind Firlou. Two developers from Tunis building premium digital products for businesses that want to grow.",
  },
};

const values = [
  {
    icon: Zap,
    title: "Fast without cutting corners",
    description:
      "We ship quickly because our process is sharp — not because we rush quality. You get speed AND craft.",
  },
  {
    icon: HeartHandshake,
    title: "Your business is our priority",
    description:
      "We don't just write code. We understand your goals, your clients and your market before we build anything.",
  },
  {
    icon: MessageCircle,
    title: "Direct, honest communication",
    description:
      "No account managers, no layers. You talk directly with the founders. Fast responses, clear updates.",
  },
  {
    icon: Globe,
    title: "Tunisian roots, global standards",
    description:
      "We're proud to be from Tunisia — and we deliver work that would compete with the best studios in Paris or London.",
  },
  {
    icon: Award,
    title: "Premium quality, every time",
    description:
      "We obsess over design, performance and code quality. Every project represents our studio's reputation.",
  },
  {
    icon: HeartHandshake,
    title: "Long-term partnerships",
    description:
      "Many of our clients have been with us for years. We build lasting relationships, not one-off transactions.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Firlou"
        title="Two developers. One mission: help businesses grow online."
        description="We're a premium digital studio from Tunis, building modern websites, business systems and digital products for companies that want to stand out."
      />

      {/* Story section */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-5 text-muted-foreground">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Our story
              </h2>
              <p>
                Firlou was founded by{" "}
                <span className="font-medium text-foreground">
                  {siteConfig.founders.join(" and ")}
                </span>
                , two full-stack developers from {siteConfig.city}. We saw too many
                Tunisian businesses with incredible potential being held back by outdated
                websites, no digital presence, or generic solutions that didn&apos;t fit
                their real needs.
              </p>
              <p>
                We started Firlou to change that. Our mission is simple: bring
                world-class digital quality to Tunisian businesses — the kind of design
                and engineering you&apos;d expect from a top studio in Berlin or San
                Francisco, delivered with the care and speed of a dedicated local team.
              </p>
              <p>
                Today we work with restaurants, clinics, startups, agencies and growing
                companies — building everything from professional websites to complete
                SaaS platforms and business automation systems.
              </p>
              <p className="font-medium text-foreground">
                We speak Arabic, French and English. We understand the Tunisian market.
                And we&apos;re passionate about helping your business succeed.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-brand-500/10 via-violet-500/5 to-fuchsia-500/10 p-8">
              <p className="mb-5 text-sm font-semibold text-primary">
                What makes us different
              </p>
              <ul className="space-y-4">
                {[
                  "We're based in Tunisia — we know your market",
                  "Full-stack: design, frontend, backend, everything",
                  "You work directly with the founders, always",
                  "7–14 day delivery for standard projects",
                  "Available in Arabic, French and English",
                  "Long-term support and partnerships",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Stats */}
      <Section className="pt-0">
        <Stats />
      </Section>

      {/* Values */}
      <Section className="bg-secondary/30">
        <SectionHeading
          eyebrow="Our values"
          title="The principles behind every project we ship"
          description="These aren't just words — they're the commitments that guide how we work with every client, every day."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <Reveal key={value.title} delay={i * 0.06}>
                <div className="flex gap-4 rounded-2xl border border-border/60 bg-card p-6 h-full hover:border-primary/30 transition-colors">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold">{value.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
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
