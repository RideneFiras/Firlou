"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Cpu,
  Smartphone,
  Layers,
  Palette,
  MessageSquare,
  LifeBuoy,
  ShieldCheck,
} from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { translations as T, t } from "@/lib/i18n/translations";

const icons = [Zap, Cpu, Smartphone, Layers, Palette, MessageSquare, LifeBuoy, ShieldCheck];

export function WhyChooseUs() {
  const { locale } = useLanguage();

  const reasons = T.why.reasons.map((r, i) => ({
    icon: icons[i],
    title: t(r.title, locale),
    description: t(r.description, locale),
  }));

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {reasons.map((reason, i) => {
        const Icon = reason.icon;
        return (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_16px_50px_-16px_hsl(var(--primary)/0.3)]"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-brand-500/15 to-fuchsia-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-secondary/50 text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
              <Icon className="h-5 w-5" />
            </div>

            <h3 className="font-display text-base font-semibold">{reason.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {reason.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
