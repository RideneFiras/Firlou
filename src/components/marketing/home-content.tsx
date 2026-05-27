"use client";

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
import { WhyChooseUs } from "@/components/marketing/why-choose-us";
import { BuiltForBusinesses } from "@/components/marketing/built-for-businesses";
import { Section, SectionHeading, Reveal } from "@/components/section";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/language-provider";
import { translations as T, t } from "@/lib/i18n/translations";

export function HomeContent() {
  const { locale } = useLanguage();

  return (
    <>
      <Hero />

      {/* Stats bar */}
      <Section className="py-12 sm:py-16">
        <Stats />
      </Section>

      {/* Services */}
      <Section id="services" className="pt-0">
        <SectionHeading
          eyebrow={t(T.sections.whatWeDo, locale)}
          title={t(T.sections.servicesTitle, locale)}
          description={t(T.sections.servicesDesc, locale)}
        />
        <div className="mt-12">
          <ServicesGrid />
        </div>
        <Reveal className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              {t(T.sections.exploreServices, locale)} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </Section>

      {/* Built for businesses */}
      <Section className="pt-0">
        <BuiltForBusinesses />
      </Section>

      {/* Portfolio */}
      <Section className="bg-secondary/30">
        <SectionHeading
          eyebrow={t(T.sections.ourWork, locale)}
          title={t(T.sections.portfolioTitle, locale)}
          description={t(T.sections.portfolioDesc, locale)}
        />
        <div className="mt-12">
          <PortfolioGrid limit={3} />
        </div>
        <Reveal className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio">
              {t(T.sections.viewPortfolio, locale)} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </Section>

      {/* Why choose us */}
      <Section>
        <SectionHeading
          eyebrow={t(T.sections.whyFirlou, locale)}
          title={t(T.sections.whyTitle, locale)}
          description={t(T.sections.whyDesc, locale)}
        />
        <div className="mt-12">
          <WhyChooseUs />
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-secondary/30">
        <SectionHeading
          eyebrow={t(T.sections.howWeWork, locale)}
          title={t(T.sections.processTitle, locale)}
          description={t(T.sections.processDesc, locale)}
        />
        <div className="mt-12">
          <Process />
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading
          eyebrow={t(T.sections.clientResults, locale)}
          title={t(T.sections.testimonialsTitle, locale)}
          description={t(T.sections.testimonialsDesc, locale)}
        />
        <div className="mt-12">
          <Testimonials />
        </div>
      </Section>

      {/* Pricing */}
      <Section className="bg-secondary/30">
        <SectionHeading
          eyebrow={t(T.sections.pricing, locale)}
          title={t(T.sections.pricingTitle, locale)}
          description={t(T.sections.pricingDesc, locale)}
        />
        <div className="mt-12">
          <PricingCards />
        </div>
        <Reveal className="mt-10 text-center">
          <Button asChild variant="link" size="lg">
            <Link href="/pricing">
              {t(T.sections.seePricing, locale)} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </Section>

      <CtaSection />
    </>
  );
}
