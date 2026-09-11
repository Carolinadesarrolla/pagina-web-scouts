"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, SupportedLanguage, TranslationDictionary } from "@/data/translations";

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: keyof TranslationDictionary) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // 1. Check localStorage preference
    const savedLang = localStorage.getItem("scout_language") as SupportedLanguage | null;
    if (savedLang && ["en", "ga", "es", "pl", "de", "ru"].includes(savedLang)) {
      setLanguageState(savedLang);
      return;
    }

    // 2. Auto-detect browser language
    if (typeof navigator !== "undefined" && navigator.language) {
      const browserLang = navigator.language.toLowerCase().substring(0, 2);
      if (["en", "ga", "es", "pl", "de", "ru"].includes(browserLang)) {
        setLanguageState(browserLang as SupportedLanguage);
        return;
      }
    }

    // 3. Fallback to English
    setLanguageState("en");
  }, []);

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("scout_language", lang);
    }
  };

  const t = (key: keyof TranslationDictionary): string => {
    const activeDict = translations[language] || translations.en;
    return activeDict[key] || translations.en[key] || String(key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
