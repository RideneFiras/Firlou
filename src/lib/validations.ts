import { z } from "zod";

export const projectTypes = [
  "Website",
  "Landing Page",
  "SaaS MVP",
  "Dashboard",
  "Automation",
  "AI Integration",
  "API / Backend",
  "Other",
] as const;

export const budgetRanges = [
  "< 500 DT",
  "500-1000 DT",
  "1000-2000 DT",
  "2000-4000 DT",
  "5000+ DT",
  "Not sure yet",
] as const;

export const leadSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name").max(120),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().max(40).optional().or(z.literal("")),
  company: z.string().max(120).optional().or(z.literal("")),
  projectType: z.enum(projectTypes),
  budget: z.enum(budgetRanges),
  message: z
    .string()
    .min(10, "Tell us a little more about your project")
    .max(4000),
  // honeypot — must stay empty
  website: z.string().max(0).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
