"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

export function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((service, i) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
          >
            <article
              className={cn(
                "group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300",
                "hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.35)]",
              )}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-brand-500/20 to-fuchsia-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-secondary/50 text-primary transition-colors group-hover:border-primary/40">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="flex items-center gap-1.5 font-display text-lg font-semibold">
                {service.title}
                <ArrowUpRight className="h-4 w-4 -translate-x-1 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {service.description}
              </p>

              <ul className="mt-4 space-y-1.5">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          </motion.div>
        );
      })}
    </div>
  );
}
