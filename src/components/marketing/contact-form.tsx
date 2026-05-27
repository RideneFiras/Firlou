"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2, Send, MessageCircle } from "lucide-react";

import { submitLead } from "@/app/actions/lead";
import {
  budgetRanges,
  deadlineOptions,
  projectTypes,
  type LeadInput,
} from "@/lib/validations";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const planToProjectType: Record<string, (typeof projectTypes)[number]> = {
  starter: "Professional Website",
  professional: "Business Dashboard",
  custom: "SaaS Platform",
};

export function ContactForm() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");

  const [pending, setPending] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [serverMessage, setServerMessage] = React.useState<string | null>(null);
  const [errors, setErrors] = React.useState<Record<string, string[]>>({});
  const [projectType, setProjectType] = React.useState<string>(
    (plan && planToProjectType[plan]) || "Professional Website",
  );
  const [budget, setBudget] = React.useState<string>("Not sure yet — tell me");
  const [deadline, setDeadline] = React.useState<string>("No specific deadline");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setErrors({});
    setServerMessage(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      fullName: String(form.get("fullName") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      whatsapp: String(form.get("whatsapp") ?? ""),
      company: String(form.get("company") ?? ""),
      projectType,
      budget,
      deadline: deadline as (typeof deadlineOptions)[number],
      message: String(form.get("message") ?? ""),
      website: String(form.get("website") ?? ""),
    } as LeadInput;

    const result = await submitLead(payload);
    setPending(false);

    if (result.ok) {
      setDone(true);
      return;
    }
    setErrors(result.errors ?? {});
    setServerMessage(result.message);
  }

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border/60 bg-card p-10 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-display text-xl font-semibold">Request received!</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Thank you for reaching out. We'll review your project and get back to you
          within 24 hours with a clear plan and honest quote.
        </p>
        <p className="mt-5 text-sm text-muted-foreground">
          Need a faster response?{" "}
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium text-emerald-500 hover:underline"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Message us on WhatsApp
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8"
    >
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Full name */}
        <Field label="Full name" name="fullName" error={errors.fullName} required>
          <Input name="fullName" placeholder="Your full name" required />
        </Field>

        {/* Email */}
        <Field label="Email address" name="email" error={errors.email} required>
          <Input name="email" type="email" placeholder="you@company.com" required />
        </Field>

        {/* Phone */}
        <Field label="Phone number" name="phone" error={errors.phone}>
          <Input name="phone" type="tel" placeholder="+216 XX XXX XXX" />
        </Field>

        {/* WhatsApp */}
        <Field label="WhatsApp number" name="whatsapp" error={errors.whatsapp}>
          <div className="relative">
            <MessageCircle className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-500" />
            <Input
              name="whatsapp"
              type="tel"
              placeholder="+216 XX XXX XXX"
              className="pl-9"
            />
          </div>
        </Field>

        {/* Company */}
        <Field label="Company / Business name" name="company" error={errors.company}>
          <Input name="company" placeholder="Your company or brand name" />
        </Field>

        {/* Project type */}
        <Field label="What do you need?" name="projectType" error={errors.projectType} required>
          <Select value={projectType} onValueChange={setProjectType}>
            <SelectTrigger>
              <SelectValue placeholder="Select a project type" />
            </SelectTrigger>
            <SelectContent>
              {projectTypes.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        {/* Budget */}
        <Field label="Budget range" name="budget" error={errors.budget}>
          <Select value={budget} onValueChange={setBudget}>
            <SelectTrigger>
              <SelectValue placeholder="Select a budget" />
            </SelectTrigger>
            <SelectContent>
              {budgetRanges.map((b) => (
                <SelectItem key={b} value={b}>
                  {b}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        {/* Deadline */}
        <Field label="Desired deadline" name="deadline" error={errors.deadline}>
          <Select value={deadline} onValueChange={setDeadline}>
            <SelectTrigger>
              <SelectValue placeholder="When do you need it?" />
            </SelectTrigger>
            <SelectContent>
              {deadlineOptions.map((d) => (
                <SelectItem key={d} value={d}>
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>

      {/* Project description */}
      <div className="mt-5">
        <Field
          label="Tell us about your project"
          name="message"
          error={errors.message}
          required
        >
          <Textarea
            name="message"
            rows={5}
            placeholder="Describe your project, your goals, your target audience and any specific requirements…"
            required
          />
        </Field>
      </div>

      {serverMessage && (
        <p className="mt-4 text-sm text-destructive" role="alert">
          {serverMessage}
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          variant="gradient"
          size="lg"
          disabled={pending}
          className="w-full sm:w-auto"
        >
          {pending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          {pending ? "Sending…" : "Send my request"}
        </Button>

        <span className="text-xs text-muted-foreground">
          Or{" "}
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium text-emerald-500 hover:underline"
          >
            <MessageCircle className="h-3 w-3" />
            message us directly on WhatsApp
          </a>{" "}
          for a faster response.
        </span>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  required,
  children,
}: {
  label: string;
  name: string;
  error?: string[];
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={name}>
        {label}
        {required && <span className="ml-0.5 text-primary">*</span>}
      </Label>
      {children}
      {error?.[0] && <p className="text-xs text-destructive">{error[0]}</p>}
    </div>
  );
}
