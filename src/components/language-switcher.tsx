"use client";

import * as React from "react";
import { Globe, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
import { locales, Locale } from "@/lib/i18n/translations";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const current = locales.find((l) => l.code === locale) ?? locales[0];

  // Close on outside click
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  function pick(code: Locale) {
    setLocale(code);
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Switch language"
        className={cn(
          "flex h-9 items-center gap-1.5 rounded-full border border-border/60 px-3 text-sm",
          "text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground",
          open && "border-primary/40 text-foreground",
        )}
      >
        <Globe className="h-3.5 w-3.5 shrink-0" />
        <span className="hidden sm:inline">{current.flag} {current.label}</span>
        <span className="sm:hidden">{current.flag}</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-11 z-50 min-w-[160px] overflow-hidden rounded-xl border border-border/60 bg-card shadow-xl">
          <div className="p-1">
            {locales.map((l) => (
              <button
                key={l.code}
                onClick={() => pick(l.code as Locale)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                  l.code === locale
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                <span className="text-base leading-none">{l.flag}</span>
                <span className="flex-1 text-left">{l.label}</span>
                {l.code === locale && (
                  <Check className="h-3.5 w-3.5 text-primary" />
                )}
              </button>
            ))}
          </div>
          {/* Direction hint for TN */}
          <div className="border-t border-border/40 px-3 py-2">
            <p className="text-[10px] text-muted-foreground/60">
              {locale === "tn" ? "الكتابة من اليمين لليسار" : "Language · Langue · اللغة"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
