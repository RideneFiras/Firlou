"use client";

import * as React from "react";
import { Locale, locales } from "@/lib/i18n/translations";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = React.createContext<LanguageContextValue>({
  locale: "en",
  setLocale: () => {},
});

export function useLanguage() {
  return React.useContext(LanguageContext);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>("en");
  const [mounted, setMounted] = React.useState(false);

  // Load from localStorage on mount
  React.useEffect(() => {
    const saved = localStorage.getItem("firlou-locale") as Locale | null;
    if (saved && locales.some((l) => l.code === saved)) {
      setLocaleState(saved);
      applyLocale(saved);
    }
    setMounted(true);
  }, []);

  const setLocale = React.useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("firlou-locale", newLocale);
    applyLocale(newLocale);
  }, []);

  if (!mounted) {
    // Render children without locale to avoid hydration mismatch
    return (
      <LanguageContext.Provider value={{ locale: "en", setLocale }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

function applyLocale(locale: Locale) {
  const found = locales.find((l) => l.code === locale);
  const dir = found?.dir ?? "ltr";
  document.documentElement.dir = dir;
  document.documentElement.lang = locale === "tn" ? "ar-TN" : locale;
}
