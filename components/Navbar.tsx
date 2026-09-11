"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme, ColorTheme } from "@/context/ThemeContext";
import { SupportedLanguage } from "@/data/translations";
import {
  Globe,
  Palette,
  Sun,
  Moon,
  Menu,
  X,
  Check,
  Anchor
} from "@/components/Icons";

const languages: { code: SupportedLanguage; label: string; flagSvg: string }[] = [
  { code: "en", label: "English", flagSvg: "/gb.svg" },
  { code: "ga", label: "Gaeilge", flagSvg: "/ie.svg" },
  { code: "es", label: "Español", flagSvg: "/es.svg" },
  { code: "pl", label: "Polski", flagSvg: "/pl.svg" },
  { code: "de", label: "Deutsch", flagSvg: "/de.svg" },
  { code: "ru", label: "Русский", flagSvg: "/ru.svg" },
];

const colorThemes: { id: ColorTheme; labelKey: string; previewHex: string }[] = [
  { id: "sea", labelKey: "themeSea", previewHex: "#006a67" },
  { id: "coral", labelKey: "themeCoral", previewHex: "#a93722" },
  { id: "blue", labelKey: "themeBlue", previewHex: "#0061a4" },
  { id: "red", labelKey: "themeRed", previewHex: "#b3261e" },
  { id: "orange", labelKey: "themeOrange", previewHex: "#8b5000" },
  { id: "yellow", labelKey: "themeYellow", previewHex: "#755b00" },
  { id: "lavender", labelKey: "themeLavender", previewHex: "#6b528a" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme, mode, toggleMode } = useTheme();

  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: t("navHome") },
    { href: "/events", label: t("navEvents") },
    { href: "/gallery", label: t("navGallery") },
    { href: "/leaders", label: t("navLeaders") },
    { href: "/contact", label: t("navContact") },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[var(--surface-container-low)]/90 border-b border-[var(--outline-variant)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo & Group Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 bg-[var(--primary-container)] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform rounded-xl p-1">
            <Image
              src="/logo.png"
              alt="2nd Louth Sea Scouts Logo"
              width={44}
              height={44}
              className="object-contain"
              priority
            />
          </div>
          <div>
            <span className="block font-bold text-lg leading-tight tracking-tight text-[var(--on-surface)] group-hover:text-[var(--primary)] transition-colors">
              2nd Louth
            </span>
            <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
              Blackrock Sea Scouts
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-[var(--md-shape-m)] text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[var(--primary-container)] text-[var(--on-primary-container)] font-semibold"
                    : "text-[var(--on-surface-variant)] hover:bg-[var(--surface-container-high)] hover:text-[var(--on-surface)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Controls: Language Selector, Theme Picker, Light/Dark Switch */}
        <div className="flex items-center gap-2">
          
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setLangMenuOpen(!langMenuOpen);
                setThemeMenuOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-[var(--outline-variant)] text-xs font-semibold text-[var(--on-surface)] hover:bg-[var(--surface-container-high)] transition-all"
              aria-label={t("selectLanguage")}
            >
              {(() => {
                const activeLang = languages.find((l) => l.code === language);
                return activeLang ? (
                  <img
                    src={activeLang.flagSvg}
                    alt={`${activeLang.label} flag`}
                    className="w-4 h-3 object-cover rounded-[2px] border border-black/10 shrink-0"
                  />
                ) : (
                  <Globe size={16} className="text-[var(--primary)]" />
                );
              })()}
              <span className="uppercase">{language}</span>
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-[var(--md-shape-l)] bg-[var(--surface-container-high)] border border-[var(--outline-variant)] shadow-xl p-2 z-50 animate-in fade-in zoom-in-95">
                <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--on-surface-variant)]">
                  {t("selectLanguage")}
                </div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-[var(--md-shape-m)] text-sm font-medium text-left transition-colors ${
                      language === lang.code
                        ? "bg-[var(--primary-container)] text-[var(--on-primary-container)] font-bold"
                        : "hover:bg-[var(--surface-container-highest)] text-[var(--on-surface)]"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <img
                        src={lang.flagSvg}
                        alt={`${lang.label} flag`}
                        className="w-5 h-3.5 object-cover rounded-[2px] border border-black/15 shadow-2xs shrink-0"
                      />
                      <span>{lang.label}</span>
                    </span>
                    {language === lang.code && <Check size={16} />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Color Theme Selector Menu */}
          <div className="relative">
            <button
              onClick={() => {
                setThemeMenuOpen(!themeMenuOpen);
                setLangMenuOpen(false);
              }}
              className="p-2 rounded-full border border-[var(--outline-variant)] text-[var(--on-surface)] hover:bg-[var(--surface-container-high)] transition-all"
              aria-label={t("selectTheme")}
              title={t("selectTheme")}
            >
              <Palette size={18} className="text-[var(--primary)]" />
            </button>

            {themeMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-[var(--md-shape-l)] bg-[var(--surface-container-high)] border border-[var(--outline-variant)] shadow-xl p-3 z-50 animate-in fade-in zoom-in-95">
                <div className="px-1 mb-2 text-xs font-bold uppercase tracking-wider text-[var(--on-surface-variant)]">
                  {t("selectTheme")}
                </div>
                <div className="space-y-1">
                  {colorThemes.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setTheme(item.id);
                        setThemeMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-[var(--md-shape-m)] text-xs font-semibold text-left transition-colors ${
                        theme === item.id
                          ? "bg-[var(--primary-container)] text-[var(--on-primary-container)]"
                          : "hover:bg-[var(--surface-container-highest)] text-[var(--on-surface)]"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span
                          className="w-4 h-4 rounded-full border border-black/20 shadow-sm"
                          style={{ backgroundColor: item.previewHex }}
                        />
                        <span>{t(item.labelKey as any)}</span>
                      </span>
                      {theme === item.id && <Check size={14} />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleMode}
            className="p-2 rounded-full border border-[var(--outline-variant)] text-[var(--on-surface)] hover:bg-[var(--surface-container-high)] transition-all"
            aria-label={t("toggleDarkMode")}
            title={t("toggleDarkMode")}
          >
            {mode === "light" ? (
              <Moon size={18} className="text-[var(--primary)]" />
            ) : (
              <Sun size={18} className="text-amber-400" />
            )}
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-[var(--on-surface)] hover:bg-[var(--surface-container-high)] transition-all ml-1"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--outline-variant)] bg-[var(--surface-container)] p-4 animate-in slide-in-from-top-4">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-[var(--md-shape-l)] text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-[var(--primary-container)] text-[var(--on-primary-container)]"
                      : "text-[var(--on-surface-variant)] hover:bg-[var(--surface-container-high)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
