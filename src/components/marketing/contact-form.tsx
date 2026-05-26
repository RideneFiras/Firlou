"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { submitLead } from "@/app/actions/lead";
import {
  budgetRanges,
  projectTypes,
  type LeadInput,
} from "@/lib/validations";
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
  starter: "Landing Page",
  professional: "Dashboard",
  custom: "SaaS MVP",
};

export function ContactForm() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");

  const [pending, setPending] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [serverMessage, setServerMessage] = React.useState<string | null>(null);
  const [errors, setErrors] = React.useState<Record<string, string[]>>({});
  const [projectType, setProjectType] = React.useState<string>(
    (plan && planToProjectType[plan]) || "Website",
  );
  const [budget, setBudget] = React.useState<string>("Not sure yet");

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
      company: String(form.get("company") ?? ""),
      projectType,
      budget,
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
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="font-display text-xl font-semibold">Request received</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out. We'll get back to you within 24 hours with next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8"
    >
      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="fullName" error={errors.fullName} required>
          <Input name="fullName" placeholder="Your name" required />
        </Field>
        <Field label="Email" name="email" error={errors.email} required>
          <Input name="email" type="email" placeholder="you@company.com" required />
        </Field>
        <Field label="Phone" name="phone" error={errors.phone}>
          <Input name="phone" type="tel" placeholder="+216 ..." />
        </Field>
        <Field label="Company" name="company" error={errors.company}>
          <Input name="company" placeholder="Company / brand" />
        </Field>

        <Field label="Project type" name="projectType" error={errors.projectType}>
          <Select value={projectType} onValueChange={setProjectType}>
            <SelectTrigger>
              <SelectValue placeholder="Select a type" />
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

        <Field label="Budget" name="budget" error={errors.budget}>
          <Select value={budget} onValueChange={setBudget}>
            <SelectTrigger>
              <SelectValue placeholder="Select a range" />
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
      </div>

      <div className="mt-5">
        <Field label="Project description" name="message" error={errors.message} required>
          <Textarea
            name="message"
            placeholder="Tell us about your project, goals and timeline..."
            required
          />
        </Field>
      </div>

      {serverMessage && (
        <p className="mt-4 text-sm text-destructive" role="alert">
          {serverMessage}
        </p>
      )}

      <Button
        type="submit"
        variant="gradient"
        size="lg"
        disabled={pending}
        className="mt-6 w-full sm:w-auto"
      >
        {pending ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        {pending ? "Sending…" : "Send request"}
      </Button>
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
