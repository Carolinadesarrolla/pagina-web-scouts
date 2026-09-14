"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { EventItem } from "@/components/EventDetailModal";
import { EventCountdown } from "@/components/EventCountdown";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Compass,
  Waves,
  Shield,
  FileText,
  Check,
  Award
} from "@/components/Icons";

export interface EventCardProps {
  event: EventItem;
  onSelectEvent: (event: EventItem) => void;
  featured?: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({
  event,
  onSelectEvent,
  featured = false,
}) => {
  const { language, t } = useLanguage();

  const localeMap: Record<string, string> = {
    en: "en-IE",
    ga: "ga-IE",
    es: "es-ES",
    pl: "pl-PL",
    de: "de-DE",
    ru: "ru-RU",
  };
  const activeLocale = localeMap[language] || "en-IE";

  // Helper to translate keys or return fallback string if key not found
  const getTranslation = (keyOrText?: string | null, fallbackKey = "untitledEvent"): string => {
    if (!keyOrText || keyOrText.trim() === "") {
      return t(fallbackKey);
    }
    const translated = t(keyOrText);
    if (translated && translated !== keyOrText && translated.trim() !== "") {
      return translated;
    }
    return keyOrText;
  };

  // Specific hardcoded map resolution for events with legacy IDs
  const isBackwoods = event?.id === "backwoods-day-2026";
  const isExpedition = event?.id === "expedition-dundalk-bay-2026";
  const isInvestiture = event?.id === "annual-investiture-2026";

  const title = isBackwoods
    ? t("event1Title")
    : isExpedition
    ? t("event2Title")
    : isInvestiture
    ? t("event3Title")
    : getTranslation(event?.titleKey, "untitledEvent");

  const description = isBackwoods
    ? t("event1Desc")
    : isExpedition
    ? t("event2Desc")
    : isInvestiture
    ? t("event3Desc")
    : getTranslation(event?.descriptionKey, "noDescriptionAvailable");

  const location = isBackwoods
    ? t("event1Loc")
    : isExpedition
    ? t("event2Loc")
    : isInvestiture
    ? t("event3Loc")
    : getTranslation(event?.location, "locationTBD");

  const isPlanningMode =
    !event ||
    event.status === "planning" ||
    !event.startDate ||
    isNaN(Date.parse(event.startDate));

  const formattedDate = !isPlanningMode && event?.startDate
    ? new Date(event.startDate).toLocaleDateString(activeLocale, {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : t("dateTBD");

  // Category Configuration
  const categoryType = (event?.type || "general").toLowerCase();
  const getCategoryConfig = (type: string) => {
    switch (type) {
      case "water":
        return {
          label: t("typeWater") || "Water",
          bgGradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
          borderColor: "border-cyan-500/30",
          iconColor: "text-cyan-500",
          badgeBg: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30",
          icon: Waves,
        };
      case "camp":
        return {
          label: t("typeCamp") || "Camp",
          bgGradient: "from-emerald-500/20 via-teal-600/10 to-transparent",
          borderColor: "border-emerald-500/30",
          iconColor: "text-emerald-500",
          badgeBg: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30",
          icon: Compass,
        };
      case "hike":
        return {
          label: t("filterHike") || "Hike",
          bgGradient: "from-amber-500/20 via-orange-600/10 to-transparent",
          borderColor: "border-amber-500/30",
          iconColor: "text-amber-500",
          badgeBg: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30",
          icon: MapPin,
        };
      case "ceremony":
        return {
          label: t("typeCeremony") || "Ceremony",
          bgGradient: "from-purple-500/20 via-indigo-600/10 to-transparent",
          borderColor: "border-purple-500/30",
          iconColor: "text-purple-500",
          badgeBg: "bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/30",
          icon: Shield,
        };
      default:
        return {
          label: t("filterAll") || "Activity",
          bgGradient: "from-[var(--primary)]/15 via-[var(--primary)]/5 to-transparent",
          borderColor: "border-[var(--outline-variant)]",
          iconColor: "text-[var(--primary)]",
          badgeBg: "bg-[var(--primary-container)] text-[var(--on-primary-container)] border border-[var(--primary)]/20",
          icon: Calendar,
        };
    }
  };

  const catConfig = getCategoryConfig(categoryType);
  const CategoryIcon = catConfig.icon;

  // Sections Resolution & Badge Color Mapping
  const rawSections =
    isBackwoods || isExpedition
      ? ["scouts", "venturers"]
      : isInvestiture
      ? ["beavers", "cubs", "scouts", "venturers"]
      : event?.sections || [];

  const getSectionBadgeStyle = (secKey: string) => {
    switch (secKey.toLowerCase()) {
      case "beavers":
        return "bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 border-emerald-500/30";
      case "cubs":
        return "bg-sky-500/20 text-sky-800 dark:text-sky-200 border-sky-500/30";
      case "scouts":
        return "bg-indigo-500/20 text-indigo-800 dark:text-indigo-200 border-indigo-500/30";
      case "venturers":
        return "bg-amber-500/20 text-amber-800 dark:text-amber-200 border-amber-500/30";
      default:
        return "bg-[var(--surface-container-high)] text-[var(--on-surface)] border-[var(--outline-variant)]";
    }
  };

  const getSectionLabel = (secKey: string) => {
    switch (secKey.toLowerCase()) {
      case "beavers":
        return t("secBeavers") || "Beavers";
      case "cubs":
        return t("secCubs") || "Cubs";
      case "scouts":
        return t("secScouts") || "Sea Scouts";
      case "venturers":
        return t("secVenturers") || "Venturers";
      default:
        return secKey;
    }
  };

  return (
    <article
      className={`group relative rounded-[var(--md-shape-xl)] bg-[var(--surface-container-low)] border border-[var(--outline-variant)] hover:border-[var(--primary)]/60 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between overflow-hidden h-full ${
        featured ? "ring-2 ring-[var(--primary)]/40" : ""
      }`}
      aria-label={`${title} - ${catConfig.label}`}
    >
      {/* Decorative Gradient Header Bar */}
      <div className={`h-2.5 w-full bg-gradient-to-r ${catConfig.bgGradient} opacity-90`} />

      {/* Main Content Area */}
      <div className="p-5 sm:p-6 flex flex-col space-y-4 flex-1">

        {/* Top Badges Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          {/* Category & Status Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 ${catConfig.badgeBg}`}>
              <CategoryIcon size={14} className="shrink-0" />
              <span>{catConfig.label}</span>
            </span>

            {isPlanningMode ? (
              <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30 text-[11px] font-bold uppercase tracking-wider inline-flex items-center gap-1">
                <FileText size={12} className="shrink-0 text-amber-600 dark:text-amber-400" />
                <span>{t("statusPlanning")}</span>
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 text-[11px] font-bold uppercase tracking-wider inline-flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t("statusConfirmed")}</span>
              </span>
            )}
          </div>

          {/* Date Badge */}
          <div className="text-xs font-bold text-[var(--primary)] flex items-center gap-1.5 shrink-0 bg-[var(--surface-container-high)] px-3 py-1 rounded-full border border-[var(--outline-variant)]/60">
            <Clock size={14} className="shrink-0" />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-black text-[var(--on-surface)] leading-tight tracking-tight group-hover:text-[var(--primary)] transition-colors line-clamp-2">
          {title}
        </h2>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[var(--on-surface-variant)] leading-relaxed font-normal line-clamp-3">
          {description}
        </p>

        {/* Location Row */}
        <div className="flex items-center gap-2 text-xs font-medium text-[var(--on-surface-variant)] pt-1">
          <MapPin size={16} className={`${catConfig.iconColor} shrink-0`} />
          <span className="truncate">{location}</span>
        </div>

        {/* Participating Sections Tags */}
        {rawSections.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--on-surface-variant)]/70 mr-1">
              {t("eventSections")}:
            </span>
            {rawSections.map((secKey) => (
              <span
                key={secKey}
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase border ${getSectionBadgeStyle(secKey)}`}
              >
                {getSectionLabel(secKey)}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Footer with Countdown & Details CTA */}
      <div className="p-5 sm:p-6 pt-0 space-y-4 mt-auto border-t border-[var(--outline-variant)]/40 bg-[var(--surface-container)]/30">
        <div className="pt-4">
          <EventCountdown startDateIso={event?.startDate} isPlanning={isPlanningMode} />
        </div>

        <button
          onClick={() => onSelectEvent(event)}
          className="m3-btn-primary w-full text-sm font-bold flex items-center justify-center gap-2 py-3 shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 transition-all"
          aria-label={`${t("eventDetailsBtn")}: ${title}`}
        >
          <span>{t("eventDetailsBtn")}</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </article>
  );
};
