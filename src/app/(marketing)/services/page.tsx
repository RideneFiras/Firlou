import type { Metadata } from "next";

import { PageHeader } from "@/components/marketing/page-header";
import { ServicesGrid } from "@/components/marketing/services-grid";
import { Process } from "@/components/marketing/process";
import { CtaSection } from "@/components/marketing/cta-section";
import { Section, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom web development, SaaS MVPs, dashboards, automation systems, AI integrations, landing pages, internal platforms and backend APIs — built by Firlou.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything you need to build and grow a digital product"
        description="One focused team covering design, frontend, backend, automation and AI — so you can move fast without juggling five vendors."
      />

      <Section>
        <ServicesGrid />
      </Section>

      <Section className="bg-secondary/30">
        <SectionHeading
          eyebrow="How we work"
          title="A process built for momentum"
          description="Clear phases, frequent demos, and full visibility from kickoff to launch."
        />
        <div className="mt-12">
          <Process />
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
