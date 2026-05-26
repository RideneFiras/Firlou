import type { Metadata } from "next";

import { PageHeader } from "@/components/marketing/page-header";
import { PricingCards } from "@/components/marketing/pricing-cards";
import { CtaSection } from "@/components/marketing/cta-section";
import { Section, SectionHeading } from "@/components/section";
import { pricingFaq } from "@/lib/data/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, flexible pricing for websites, dashboards, automation and SaaS. Starter from 500 DT, Professional from 1000 DT, and fully custom quotes.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Premium work, honest pricing"
        description="Clear starting points with full flexibility. Smaller scoped projects and large custom builds are both welcome."
      />

      <Section>
        <PricingCards />
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          Prices are indicative starting points in Tunisian Dinar (DT). Every project is
          unique — we provide a precise quote after a short discovery call. Projects below
          500 DT and enterprise-scale builds are both possible.
        </p>
      </Section>

      <Section className="bg-secondary/30">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything you might be wondering about working with us."
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-border/60 rounded-2xl border border-border/60 bg-card">
          {pricingFaq.map((item) => (
            <div key={item.q} className="p-6">
              <h3 className="font-medium">{item.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
