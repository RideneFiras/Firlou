import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Hero } from "@/components/marketing/hero";
import { ServicesGrid } from "@/components/marketing/services-grid";
import { PortfolioGrid } from "@/components/marketing/portfolio-grid";
import { Process } from "@/components/marketing/process";
import { Testimonials } from "@/components/marketing/testimonials";
import { PricingCards } from "@/components/marketing/pricing-cards";
import { Stats } from "@/components/marketing/stats";
import { CtaSection } from "@/components/marketing/cta-section";
import { Section, SectionHeading, Reveal } from "@/components/section";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section>
        <Stats />
      </Section>

      <Section id="services" className="pt-0">
        <SectionHeading
          eyebrow="What we do"
          title="A full-stack studio for modern products"
          description="From a single landing page to a complete SaaS platform — we cover the entire stack so you only deal with one focused team."
        />
        <div className="mt-12">
          <ServicesGrid />
        </div>
        <Reveal className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              Explore all services <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </Section>

      <Section className="bg-secondary/30">
        <SectionHeading
          eyebrow="Selected work"
          title="Products we're proud of"
          description="A glimpse of the platforms, dashboards and websites we've shipped for our clients."
        />
        <div className="mt-12">
          <PortfolioGrid limit={3} />
        </div>
        <Reveal className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio">
              View full portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How we work"
          title="A simple, transparent process"
          description="No black boxes. You always know where your project stands and what comes next."
        />
        <div className="mt-12">
          <Process />
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <SectionHeading
          eyebrow="Loved by clients"
          title="Results that speak for themselves"
          description="We measure our success by the growth and trust of the teams we work with."
        />
        <div className="mt-12">
          <Testimonials />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent, flexible pricing"
          description="Clear starting points — and full flexibility for projects above or below them."
        />
        <div className="mt-12">
          <PricingCards />
        </div>
        <Reveal className="mt-10 text-center">
          <Button asChild variant="link" size="lg">
            <Link href="/pricing">
              See full pricing details <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </Section>

      <CtaSection />
    </>
  );
}
