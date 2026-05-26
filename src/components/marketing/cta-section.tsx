"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function CtaSection() {
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
            <div className="absolute inset-0 bg-grid opacity-[0.3] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
            <div className="absolute left-1/2 top-0 h-64 w-[640px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-brand-500/30 via-violet-500/20 to-fuchsia-500/20 blur-3xl" />
          </div>

          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Have a project in mind? Let's build something{" "}
            <span className="gradient-text">remarkable.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-balance">
            Tell us about your idea and we'll get back within 24 hours with a clear plan
            and an honest quote.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="gradient" size="xl">
              <Link href="/contact">
                Request a project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp us
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
