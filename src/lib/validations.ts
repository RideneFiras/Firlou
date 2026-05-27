import { z } from "zod";

export const projectTypes = [
  "Professional Website",
  "Landing Page",
  "Digital Presence",
  "Restaurant Platform",
  "Medical / Clinic System",
  "E-commerce",
  "Business Dashboard",
  "SaaS Platform",
  "Business Automation",
  "AI Integration",
  "Booking System",
  "Internal Business Platform",
  "Other",
] as const;

export const budgetRanges = [
  "< 500 DT",
  "500 DT",
  "500 – 1 000 DT",
  "1 000 – 2 000 DT",
  "2 000 – 5 000 DT",
  "5 000+ DT",
  "Not sure yet — tell me",
] as const;

export const deadlineOptions = [
  "As soon as possible",
  "Within 2 weeks",
  "Within 1 month",
  "Within 2 months",
  "Within 3 months",
  "No specific deadline",
] as const;

export const leadSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name").max(120),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().max(40).optional().or(z.literal("")),
  whatsapp: z.string().max(40).optional().or(z.literal("")),
  company: z.string().max(120).optional().or(z.literal("")),
  projectType: z.enum(projectTypes),
  budget: z.enum(budgetRanges),
  deadline: z.enum(deadlineOptions).optional(),
  message: z
    .string()
    .min(10, "Tell us a little more about your project")
    .max(4000),
  // honeypot — must stay empty
  website: z.string().max(0).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
