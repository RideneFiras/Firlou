"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  return (
    <motion.a
      href={siteConfig.links.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Firlou on WhatsApp"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_10px_40px_-8px_rgba(16,185,129,0.6)] ring-1 ring-emerald-400/40 transition-transform"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-emerald-400/40" />
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">Open WhatsApp</span>
    </motion.a>
  );
}
