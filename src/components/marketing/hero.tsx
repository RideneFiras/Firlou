"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Star,
  CheckCircle2,
  Zap,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import { metrics } from "@/config/metrics";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/language-provider";
import { translations as T, t, ti } from "@/lib/i18n/translations";

export function Hero() {
  const { locale } = useLanguage();

  const trustBadges = [
    { icon: CheckCircle2, text: ti(T.hero.trust1, locale, metrics.tokens) },
    { icon: Star, text: ti(T.hero.trust2, locale, metrics.tokens) },
    { icon: Zap, text: ti(T.hero.trust3, locale, metrics.tokens) },
  ];

  const clientTypes: readonly string[] = T.hero.clients[locale];

  return (
    <section className="relative overflow-hidden">
      {/* Animated gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-[-20%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-brand-500/25 via-violet-500/20 to-fuchsia-500/15 blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.8, 0.55] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -left-32 top-1/3 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl"
          animate={{ x: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -right-32 top-1/2 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl"
          animate={{ x: [0, -20, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container-tight pb-20 pt-24 sm:pb-28 sm:pt-32">
        <div className="mx-auto max-w-3xl text-center">

          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500">
              <span className="animate-ping h-2 w-2 rounded-full bg-emerald-400 opacity-75" />
            </span>
            {t(T.hero.badge, locale)}
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {t(T.hero.title1, locale)}{" "}
            <span className="gradient-text">{t(T.hero.titleHighlight, locale)}</span>{" "}
            {t(T.hero.titleAnd, locale)}{" "}
            <span className="gradient-text">{t(T.hero.titleHighlight2, locale)}</span>{" "}
            {t(T.hero.titleEnd, locale)}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground text-balance sm:text-lg"
          >
            {t(T.hero.subtitle, locale)}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button asChild variant="gradient" size="xl" className="w-full sm:w-auto">
              <Link href="/contact">
                {t(T.hero.ctaStart, locale)}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="w-full border-emerald-500/40 bg-emerald-500/5 text-foreground hover:bg-emerald-500/10 hover:border-emerald-500/60 sm:w-auto"
            >
              <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4 text-emerald-500" />
                {t(T.hero.ctaWhatsapp, locale)}
              </a>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            {trustBadges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 rounded-full border border-border/50 bg-card/60 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur"
              >
                <Icon className="h-3.5 w-3.5 text-primary" />
                {text}
              </div>
            ))}
          </motion.div>

          {/* Client types */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-14"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground/70">
              {t(T.hero.clientsTitle, locale)}
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {clientTypes.map((type, i) => (
                <span
                  key={type}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground/60"
                >
                  {i > 0 && (
                    <span className="h-1 w-1 rounded-full bg-border" />
                  )}
                  {type}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
