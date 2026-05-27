"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/language-provider";
import { translations as T, t } from "@/lib/i18n/translations";

export function Stats() {
  const { locale } = useLanguage();

  const stats = [
    { value: T.stats.s1.value, label: t(T.stats.s1, locale), sub: t(T.stats.s1.sub, locale) },
    { value: T.stats.s2.value, label: t(T.stats.s2, locale), sub: t(T.stats.s2.sub, locale) },
    { value: T.stats.s3.value, label: t(T.stats.s3, locale), sub: t(T.stats.s3.sub, locale) },
    { value: T.stats.s4.value, label: t(T.stats.s4, locale), sub: t(T.stats.s4.sub, locale) },
  ];

  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.07 }}
          className="flex flex-col items-center bg-card px-4 py-7 text-center"
        >
          <div className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            <span className="gradient-text">{stat.value}</span>
          </div>
          <p className="mt-1.5 text-sm font-medium">{stat.label}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">{stat.sub}</p>
        </motion.div>
      ))}
    </div>
  );
}
