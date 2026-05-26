"use server";

import { Resend } from "resend";

import { leadSchema, type LeadInput } from "@/lib/validations";
import { siteConfig } from "@/config/site";

export type LeadActionState = {
  ok: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

const projectTypeMap: Record<string, string> = {
  Website: "WEBSITE",
  "Landing Page": "LANDING_PAGE",
  "SaaS MVP": "SAAS",
  Dashboard: "DASHBOARD",
  Automation: "AUTOMATION",
  "AI Integration": "AI_INTEGRATION",
  "API / Backend": "API_BACKEND",
  Other: "OTHER",
};

export async function submitLead(input: LeadInput): Promise<LeadActionState> {
  const parsed = leadSchema.safeParse(input);

  if (!parsed.success) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // Honeypot triggered — silently accept to fool bots.
  if (parsed.data.website) {
    return { ok: true, message: "Thanks! We'll be in touch shortly." };
  }

  const data = parsed.data;

  // Persist to the database when available. Lazy-imported so the marketing
  // site still builds/runs without a configured DATABASE_URL.
  try {
    if (process.env.DATABASE_URL) {
      const { prisma } = await import("@/lib/prisma");
      await prisma.lead.create({
        data: {
          fullName: data.fullName,
          email: data.email,
          phone: data.phone || null,
          company: data.company || null,
          projectType: (projectTypeMap[data.projectType] ?? "OTHER") as any,
          budget: data.budget,
          message: data.message,
          source: "website",
        },
      });
    }
  } catch (err) {
    console.error("[lead] db persist failed", err);
  }

  // Notify the team by email when Resend is configured.
  try {
    if (process.env.RESEND_API_KEY && process.env.LEAD_NOTIFICATION_EMAIL) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.FROM_EMAIL ?? "Firlou <noreply@firlou.tn>",
        to: process.env.LEAD_NOTIFICATION_EMAIL,
        replyTo: data.email,
        subject: `New lead: ${data.fullName} — ${data.projectType}`,
        text: [
          `Name: ${data.fullName}`,
          `Email: ${data.email}`,
          `Phone: ${data.phone || "—"}`,
          `Company: ${data.company || "—"}`,
          `Project type: ${data.projectType}`,
          `Budget: ${data.budget}`,
          "",
          data.message,
          "",
          `— Sent from ${siteConfig.url}`,
        ].join("\n"),
      });
    }
  } catch (err) {
    console.error("[lead] email notify failed", err);
  }

  return {
    ok: true,
    message: "Thanks! We've received your request and will reply within 24 hours.",
  };
}
