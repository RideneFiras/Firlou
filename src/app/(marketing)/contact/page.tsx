import * as React from "react";
import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { PageHeader } from "@/components/marketing/page-header";
import { ContactForm } from "@/components/marketing/contact-form";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Firlou about your project. We reply within 24 hours with a clear plan and honest quote. Reach us by form, email or WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Fill in the form and we'll reply within 24 hours. Prefer to chat? We're one message away on WhatsApp."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            <ContactCard
              icon={MessageCircle}
              title="WhatsApp"
              value="Chat with us instantly"
              href={siteConfig.links.whatsapp}
              accent
            />
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
            <ContactCard icon={MapPin} title="Studio" value={siteConfig.city} />
          </div>

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
  accent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  href?: string;
  accent?: boolean;
}) {
  const inner = (
    <div
      className={`flex items-center gap-4 rounded-2xl border p-5 transition-colors ${
        accent
          ? "border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/50"
          : "border-border/60 bg-card hover:border-primary/30"
      }`}
    >
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl ${
          accent ? "bg-emerald-500/15 text-emerald-500" : "bg-primary/10 text-primary"
        }`}
      >
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
    <div className="h-[600px] animate-pulse rounded-2xl border border-border/60 bg-card" />
  );
}
