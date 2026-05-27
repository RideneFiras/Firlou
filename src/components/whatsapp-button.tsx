"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(false);

  // Show tooltip after 4 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  // Auto-hide tooltip after 8 seconds
  React.useEffect(() => {
    if (!showTooltip) return;
    const timer = setTimeout(() => setShowTooltip(false), 8000);
    return () => clearTimeout(timer);
  }, [showTooltip]);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Tooltip / bubble */}
      <AnimatePresence>
        {showTooltip && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.92 }}
            transition={{ duration: 0.25 }}
            className="relative flex items-start gap-2 rounded-2xl border border-emerald-500/30 bg-card/95 p-3.5 pr-8 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          >
            <button
              onClick={() => {
                setShowTooltip(false);
                setDismissed(true);
              }}
              className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-3 w-3" />
            </button>
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
              <MessageCircle className="h-4 w-4 text-emerald-500" />
            </div>
            <div>
              <p className="text-sm font-semibold">Free consultation</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Chat with us on WhatsApp — we reply fast!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.a
        href={siteConfig.links.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Firlou on WhatsApp — free consultation"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setShowTooltip(false)}
        className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_10px_40px_-8px_rgba(16,185,129,0.65)] ring-1 ring-emerald-400/40"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-emerald-400/35" />
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Open WhatsApp — Free consultation</span>
      </motion.a>
    </div>
  );
}
