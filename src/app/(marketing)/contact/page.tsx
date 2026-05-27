import * as React from "react";
import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone, Clock, CheckCircle2 } from "lucide-react";

import { siteConfig } from "@/config/site";
import { PageHeader } from "@/components/marketing/page-header";
import { ContactForm } from "@/components/marketing/contact-form";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start your project with Firlou. Fill the form or message us directly on WhatsApp — we reply within 2 hours. Free consultation for all new projects.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Firlou — Start Your Project Today",
    description:
      "Tell us about your project. We reply within 24 hours with a clear plan and honest quote. Free consultation available on WhatsApp.",
  },
};

const trustPoints = [
  { icon: Clock, text: "We reply within 24 hours" },
  { icon: CheckCircle2, text: "Free initial consultation" },
  { icon: MessageCircle, text: "Available on WhatsApp" },
  { icon: CheckCircle2, text: "No commitment required" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="Let's build something great for your business"
        description="Tell us about your project — we'll get back to you within 24 hours with a clear plan and an honest quote. No technical jargon, no surprises."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          {/* Left sidebar: contact info + trust */}
          <div className="space-y-4">
            {/* WhatsApp — most prominent */}
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 transition-colors hover:border-emerald-500/50 hover:bg-emerald-500/10 block"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-500">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">WhatsApp — fastest response</p>
                <p className="text-sm text-muted-foreground">
                  Message us directly — we reply in minutes
                </p>
                <p className="mt-1 text-xs font-medium text-emerald-500">
                  Free consultation available →
                </p>
              </div>
            </a>

            <ContactCard
              icon={Mail}
              title="Email"
              value={siteConfig.contactEmail}
              href={`mailto:${siteConfig.contactEmail}`}
            />
            <ContactCard
              icon={Phone}
              title="Phone"
              value={`+${siteConfig.whatsappNumber}`}
              href={`tel:+${siteConfig.whatsappNumber}`}
            />
            <ContactCard
              icon={MapPin}
              title="Based in"
              value={siteConfig.city}
            />

            {/* Trust points */}
            <div className="rounded-2xl border border-border/60 bg-card p-5">
              <p className="mb-4 text-sm font-semibold">What to expect</p>
              <ul className="space-y-3">
                {trustPoints.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Icon className="h-4 w-4 shrink-0 text-primary" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Booking */}
            <a
              href={siteConfig.links.calendly}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/30 block"
            >
              <div>
                <p className="text-sm font-semibold">Book a discovery call</p>
                <p className="text-xs text-muted-foreground">
                  30 min · Free · No commitment
                </p>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Book →
              </span>
            </a>
          </div>

          {/* Right: Contact form */}
          <React.Suspense fallback={<FormSkeleton />}>
            <ContactForm />
          </React.Suspense>
        </div>
      </Section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/30">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block">
        {inner}
      </a>
    );
  }
  return inner;
}

function FormSkeleton() {
  return (
    <div className="h-[700px] animate-pulse rounded-2xl border border-border/60 bg-card" />
  );
}
