"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Store,
  Stethoscope,
  Building2,
  Rocket,
  UtensilsCrossed,
  Briefcase,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/providers/language-provider";
import { translations as T, t } from "@/lib/i18n/translations";

const icons = [Rocket, Store, UtensilsCrossed, Stethoscope, Briefcase, Building2];

export function BuiltForBusinesses() {
  const { locale } = useLanguage();

  const businessTypes = T.built.types.map((type, i) => ({
    icon: icons[i],
    title: t(type.title, locale),
    description: t(type.description, locale),
  }));

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card px-6 py-14 sm:px-12 sm:py-16">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-[0.25] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute left-1/2 top-0 h-64 w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-brand-500/20 via-violet-500/15 to-fuchsia-500/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-widest text-primary"
        >
          {t(T.built.eyebrow, locale)}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
        >
          {t(T.built.title, locale)}{" "}
          <span className="gradient-text">{t(T.built.titleHighlight, locale)}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-4 text-base text-muted-foreground text-balance"
        >
          {t(T.built.subtitle, locale)}
        </motion.p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {businessTypes.map((type, i) => {
          const Icon = type.icon;
          return (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex items-start gap-4 rounded-2xl border border-border/50 bg-background/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card"
            >
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-fuchsia-500/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold">{type.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {type.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
      >
        <Button asChild variant="gradient" size="lg">
          <Link href="/contact">
            {t(T.built.ctaProject, locale)}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-emerald-500/40 bg-emerald-500/5 hover:bg-emerald-500/10"
        >
          <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle className="h-4 w-4 text-emerald-500" />
            {t(T.built.ctaWhatsapp, locale)}
          </a>
        </Button>
      </motion.div>
    </div>
  );
}
