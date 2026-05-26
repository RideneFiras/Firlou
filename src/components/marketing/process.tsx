"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We dig into your goals, users and constraints to define the right scope — no fluff, no guesswork.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "We craft a premium design system and prototype the experience before a single line of production code.",
  },
  {
    icon: Code2,
    title: "Build",
    description:
      "We engineer with the modern Next.js stack — clean, tested, scalable and documented.",
  },
  {
    icon: Rocket,
    title: "Launch & grow",
    description:
      "We ship to production, measure, and iterate with you. Your product keeps getting better.",
  },
];

export function Process() {
  return (
    <div className="relative">
      <div className="absolute left-[27px] top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-primary/40 via-border to-transparent md:left-1/2 md:block" />
      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-border/60 bg-card p-6"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-fuchsia-500 text-white shadow-lg">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Step {i + 1}
              </span>
              <h3 className="mt-1 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
