"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

import { pricingPlans } from "@/lib/data/pricing";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function PricingCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {pricingPlans.map((plan, i) => (
        <motion.div
          key={plan.slug}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className={cn(
            "relative flex flex-col rounded-3xl border bg-card p-7 transition-all duration-300",
            plan.highlight
              ? "border-primary/50 shadow-[0_30px_80px_-30px_hsl(var(--primary)/0.45)] lg:-translate-y-3"
              : "border-border/60 hover:-translate-y-1 hover:border-primary/30",
          )}
        >
          {plan.highlight && (
            <>
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-primary/[0.07] to-transparent" />
              <Badge
                variant="gradient"
                className="absolute -top-3 left-1/2 -translate-x-1/2 border border-primary/30 bg-card px-3"
              >
                <Sparkles className="mr-1 h-3 w-3 text-primary" /> Most popular
              </Badge>
            </>
          )}

          <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
          <div className="mt-3 flex items-end gap-1.5">
            <span className="font-display text-4xl font-semibold tracking-tight">
              {plan.price}
            </span>
            {plan.priceSuffix && (
              <span className="pb-1.5 text-sm text-muted-foreground">
                {plan.priceSuffix}
              </span>
            )}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>

          <Button
            asChild
            variant={plan.highlight ? "gradient" : "outline"}
            size="lg"
            className="mt-6 w-full"
          >
            <Link href={plan.ctaHref}>{plan.ctaLabel}</Link>
          </Button>

          <ul className="mt-7 space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-foreground/90">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
