"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
      {testimonials.map((t, i) => (
        <motion.figure
          key={t.author}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
          className="break-inside-avoid overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_12px_40px_-12px_hsl(var(--primary)/0.2)]"
        >
          {/* Quote icon */}
          <div className="mb-3 flex items-center justify-between">
            <div className="flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star key={idx} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <Quote className="h-5 w-5 text-primary/30" />
          </div>

          {/* Content */}
          <blockquote className="text-sm leading-relaxed text-foreground/85">
            &ldquo;{t.content}&rdquo;
          </blockquote>

          {/* Author */}
          <figcaption className="mt-5 flex items-center gap-3 border-t border-border/40 pt-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-fuchsia-500 text-sm font-semibold text-white shadow-sm">
              {t.author.charAt(0)}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{t.author}</p>
              <p className="truncate text-xs text-muted-foreground">
                {t.role} · {t.company}
              </p>
            </div>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
