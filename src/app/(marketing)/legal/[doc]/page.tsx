import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/marketing/page-header";
import { Section } from "@/components/section";
import { siteConfig } from "@/config/site";

const docs = {
  privacy: {
    title: "Privacy Policy",
    description: "How Firlou collects, uses and protects your information.",
    body: [
      "We collect only the information you provide through our contact form (name, email, phone, company and project details) and basic, privacy-respecting analytics.",
      "We use this information solely to respond to your enquiry and to improve our services. We never sell your data.",
      "You can request deletion of your data at any time by emailing us.",
    ],
  },
  terms: {
    title: "Terms of Service",
    description: "The terms that govern the use of this website and our services.",
    body: [
      "By using this website you agree to use it lawfully and not to misuse our forms or services.",
      "All content, branding and code on this site are the property of Firlou unless stated otherwise.",
      "Project engagements are governed by a separate written agreement signed before work begins.",
    ],
  },
} as const;

type DocKey = keyof typeof docs;

export function generateStaticParams() {
  return Object.keys(docs).map((doc) => ({ doc }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ doc: string }>;
}): Promise<Metadata> {
  const { doc } = await params;
  const entry = docs[doc as DocKey];
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: `/legal/${doc}` },
  };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ doc: string }>;
}) {
  const { doc } = await params;
  const entry = docs[doc as DocKey];
  if (!entry) notFound();

  return (
    <>
      <PageHeader eyebrow="Legal" title={entry.title} description={entry.description} />
      <Section>
        <div className="mx-auto max-w-2xl space-y-5 text-muted-foreground">
          {entry.body.map((para, i) => (
            <p key={i} className="leading-relaxed">
              {para}
            </p>
          ))}
          <p className="pt-4 text-sm">
            Questions? Email us at{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-primary hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
