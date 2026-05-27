"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  ClipboardList,
  PenTool,
  Code2,
  FlaskConical,
  Rocket,
} from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { translations as T, t } from "@/lib/i18n/translations";

const icons = [PhoneCall, ClipboardList, PenTool, Code2, FlaskConical, Rocket];

export function Process() {
  const { locale } = useLanguage();

  const steps = T.process.steps.map((step, i) => ({
    icon: icons[i],
    title: t(step.title, locale),
    description: t(step.description, locale),
    duration: t(step.duration, locale),
  }));

  return (
    <div className="relative">
      {/* Vertical connector on mobile */}
      <div className="absolute left-6 top-8 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-primary/40 via-border/60 to-transparent sm:block lg:hidden" />

      <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isLast = i === steps.length - 1;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_16px_50px_-16px_hsl(var(--primary)/0.25)]"
            >
              {/* Step number accent */}
              <div className="pointer-events-none absolute right-5 top-5 font-display text-6xl font-bold text-border/40 select-none">
                {i + 1}
              </div>

              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-fuchsia-500 text-white shadow-lg shadow-brand-500/20">
                <Icon className="h-5 w-5" />
              </div>

              <div className="mb-2 flex items-center gap-2">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {step.duration}
                </span>
              </div>

              <h3 className="font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>

              {/* Connector arrow between steps (desktop only, not last) */}
              {!isLast && i % 3 !== 2 && (
                <div className="pointer-events-none absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                  <div className="h-px w-6 bg-gradient-to-r from-border to-transparent" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Bottom note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 text-center text-sm text-muted-foreground"
      >
        {t(T.process.note, locale)}
      </motion.p>
    </div>
  );
}
