"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";

import {
  portfolio,
  portfolioCategories,
  type PortfolioItem,
} from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const categoryColors: Record<string, string> = {
  "Digital Presence": "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  SaaS: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  Dashboard: "bg-violet-500/15 text-violet-400 border-violet-500/20",
  "Web App": "bg-sky-500/15 text-sky-400 border-sky-500/20",
  AI: "bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/20",
  Automation: "bg-orange-500/15 text-orange-400 border-orange-500/20",
  "E-commerce": "bg-pink-500/15 text-pink-400 border-pink-500/20",
  "Landing Page": "bg-amber-500/15 text-amber-400 border-amber-500/20",
};

export function PortfolioGrid({
  limit,
  withFilters = false,
}: {
  limit?: number;
  withFilters?: boolean;
}) {
  const [category, setCategory] = React.useState<string>("All");

  const items = React.useMemo(() => {
    let list: PortfolioItem[] = limit
      ? portfolio.filter((p) => p.featured).slice(0, limit)
      : portfolio;
    if (withFilters && category !== "All") {
      list = portfolio.filter((p) => p.category === category);
    }
    return list;
  }, [category, limit, withFilters]);

  return (
    <div>
      {withFilters && (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200",
                category === cat
                  ? "border-primary/50 bg-primary/10 text-primary shadow-sm"
                  : "border-border/60 text-muted-foreground hover:border-primary/30 hover:text-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((project, i) => (
            <motion.article
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.25)]"
            >
              {/* Cover image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Category badge */}
                <span
                  className={cn(
                    "absolute left-3 top-3 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold backdrop-blur-sm",
                    categoryColors[project.category] ??
                      "bg-background/80 text-foreground border-border/60",
                  )}
                >
                  {project.category}
                </span>

                {/* Arrow icon on hover */}
                <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>

                {/* Client name overlay at bottom */}
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xs font-medium text-white/70">{project.client}</p>
                </div>
              </div>

              {/* Card content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-base font-semibold leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {project.year}
                  </div>
                </div>

                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border/60 bg-secondary/40 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="rounded-md border border-border/60 bg-secondary/40 px-2 py-0.5 text-[11px] text-muted-foreground">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {withFilters && items.length === 0 && (
        <div className="py-20 text-center text-muted-foreground">
          No projects in this category yet.
        </div>
      )}
    </div>
  );
}
