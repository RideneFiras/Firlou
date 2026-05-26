import type { Metadata } from "next";

import { PageHeader } from "@/components/marketing/page-header";
import { PortfolioGrid } from "@/components/marketing/portfolio-grid";
import { CtaSection } from "@/components/marketing/cta-section";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected work from Firlou — SaaS platforms, dashboards, web apps, AI products, automation systems and high-converting landing pages.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Work we're proud to put our name on"
        description="A selection of products, platforms and websites we've designed and engineered for clients across industries."
      />

      <Section>
        <PortfolioGrid withFilters />
      </Section>

      <CtaSection />
    </>
  );
}
