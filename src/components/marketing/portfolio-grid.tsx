"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import {
  portfolio,
  portfolioCategories,
  type PortfolioItem,
} from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

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
                "rounded-full border px-4 py-1.5 text-sm transition-all",
                category === cat
                  ? "border-primary/50 bg-primary text-primary-foreground"
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
          {items.map((project) => (
            <motion.article
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
                <Badge
                  variant="secondary"
                  className="absolute left-3 top-3 bg-background/80 backdrop-blur"
                >
                  {project.category}
                </Badge>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-base font-semibold">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border/60 bg-secondary/40 px-2 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
