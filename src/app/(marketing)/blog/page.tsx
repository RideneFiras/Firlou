import type { Metadata } from "next";

import { PageHeader } from "@/components/marketing/page-header";
import { Section } from "@/components/section";
import { BlogList } from "@/components/marketing/blog-list";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Insights on web development, SaaS, AI, design and digital strategy for businesses in Tunisia and beyond — from the Firlou studio.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Ideas on building modern digital products"
        description="Practical articles on web development, SaaS, AI and digital strategy — written by the team building these products every day."
      />

      <Section>
        <BlogList />
      </Section>
    </>
  );
}
