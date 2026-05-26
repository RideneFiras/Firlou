"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "40+", label: "Projects delivered" },
  { value: "8 wk", label: "Average SaaS MVP" },
  { value: "100", label: "Lighthouse scores" },
  { value: "98%", label: "Client retention" },
];

export function Stats() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="bg-card p-7 text-center"
        >
          <div className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            <span className="gradient-text">{stat.value}</span>
          </div>
          <p className="mt-1.5 text-sm text-muted-foreground">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
