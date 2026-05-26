"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
      {testimonials.map((t, i) => (
        <motion.figure
          key={t.author}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
          className="break-inside-avoid rounded-2xl border border-border/60 bg-card p-6"
        >
          <div className="flex gap-0.5">
            {Array.from({ length: t.rating }).map((_, idx) => (
              <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
            “{t.content}”
          </blockquote>
          <figcaption className="mt-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-fuchsia-500 text-sm font-semibold text-white">
              {t.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium">{t.author}</p>
              <p className="text-xs text-muted-foreground">
                {t.role} · {t.company}
              </p>
            </div>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
