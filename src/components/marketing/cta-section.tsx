"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Calendar, Star } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/language-provider";
import { translations as T, t } from "@/lib/i18n/translations";

export function CtaSection() {
  const { locale } = useLanguage();

  const socialProof = [
    { icon: Star, text: t(T.cta.social1, locale) },
    { icon: MessageCircle, text: t(T.cta.social2, locale) },
    { icon: Calendar, text: t(T.cta.social3, locale) },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border/60 bg-card px-6 py-16 text-center sm:px-12"
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-grid opacity-[0.25] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
            <div className="absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-brand-500/30 via-violet-500/20 to-fuchsia-500/20 blur-3xl" />
            <div className="absolute -bottom-20 left-0 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -bottom-20 right-0 h-40 w-40 rounded-full bg-brand-500/10 blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex flex-wrap items-center justify-center gap-3"
          >
            {socialProof.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 rounded-full border border-border/50 bg-card/80 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur"
              >
                <Icon className="h-3.5 w-3.5 text-primary" />
                {text}
              </div>
            ))}
          </motion.div>

          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {t(T.cta.title, locale)}{" "}
            <span className="gradient-text">{t(T.cta.titleHighlight, locale)}</span>{" "}
            {t(T.cta.titleEnd, locale)}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-balance">
            {t(T.cta.subtitle, locale)}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="gradient" size="xl">
              <Link href="/contact">
                {t(T.cta.ctaStart, locale)}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              className="border border-emerald-500/40 bg-emerald-500/10 text-foreground hover:bg-emerald-500/15 hover:border-emerald-500/60"
            >
              <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4 text-emerald-500" />
                {t(T.cta.ctaWhatsapp, locale)}
              </a>
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground/60">
            {t(T.cta.note, locale)}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
