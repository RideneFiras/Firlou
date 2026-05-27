import type { Metadata } from "next";

import { PageHeader } from "@/components/marketing/page-header";
import { ServicesGrid } from "@/components/marketing/services-grid";
import { Process } from "@/components/marketing/process";
import { CtaSection } from "@/components/marketing/cta-section";
import { Section, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional websites, business management systems, SaaS platforms, automation and AI integrations — built by Firlou for businesses in Tunisia and beyond.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Services — Firlou Digital Studio",
    description:
      "From a professional website to a complete business platform. Firlou builds digital products that help your business grow faster.",
  },
};

// FAQ schema for the services page
const servicesFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of websites does Firlou build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build professional websites for all types of businesses: restaurants, clinics, real estate agencies, boutiques, startups and more. Every website is mobile-responsive, SEO-optimized and includes WhatsApp integration.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Starter projects (landing pages, small business websites) typically take 7–14 days. Professional projects with dashboards and automation take 3–6 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build custom business management systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build custom dashboards, CRM systems, booking platforms, clinic management systems, real estate portals and any business management tool your team needs.",
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqSchema) }}
      />

      <PageHeader
        eyebrow="Our services"
        title="Everything your business needs to succeed online"
        description="One trusted team covering design, frontend, backend, automation and AI — so you can move fast without juggling multiple vendors or agencies."
      />

      <Section>
        <SectionHeading
          eyebrow="What we build"
          title="Services built for real businesses"
          description="We don't sell generic templates. Every project is custom-built around your business, your clients and your goals."
        />
        <div className="mt-12">
          <ServicesGrid />
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <SectionHeading
          eyebrow="How we work"
          title="A transparent process, from first call to launch"
          description="You'll always know exactly where your project stands. No black boxes, no surprises — just clear communication and consistent delivery."
        />
        <div className="mt-12">
          <Process />
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
