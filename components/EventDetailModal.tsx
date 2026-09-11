"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { EventCountdown } from "@/components/EventCountdown";
import {
  X,
  MapPin,
  Calendar,
  Users,
  FileText,
  Compass,
  Check,
  Phone,
  AlertCircle
} from "@/components/Icons";

export interface EventItem {
  id: string;
  titleKey: string;
  descriptionKey: string;
  startDate?: string | null;
  location: string;
  type: string;
  sections?: string[];
  status?: "confirmed" | "planning";
  plan?: string[];
  route?: string;
  gearList?: string[];
  contactPerson?: string;
  notes?: string;
}

interface EventDetailModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({ event, onClose }) => {
  const { language, t } = useLanguage();

  if (!event) return null;

  const localeMap: Record<string, string> = {
    en: "en-IE",
    ga: "ga-IE",
    es: "es-ES",
    pl: "pl-PL",
    de: "de-DE",
    ru: "ru-RU",
  };
  const activeLocale = localeMap[language] || "en-IE";

  const isPlanningMode = event.status === "planning" || !event.startDate || isNaN(Date.parse(event.startDate));

  const isBackwoods = event.id === "backwoods-day-2026";
  const isExpedition = event.id === "expedition-dundalk-bay-2026";
  const isInvestiture = event.id === "annual-investiture-2026";

  const translatedTitle = isBackwoods ? t("event1Title") : isExpedition ? t("event2Title") : isInvestiture ? t("event3Title") : event.titleKey;
  const translatedDesc = isBackwoods ? t("event1Desc") : isExpedition ? t("event2Desc") : isInvestiture ? t("event3Desc") : event.descriptionKey;
  const translatedLoc = isBackwoods ? t("event1Loc") : isExpedition ? t("event2Loc") : isInvestiture ? t("event3Loc") : event.location;
  const translatedType = event.type === "camp" ? t("typeCamp") : event.type === "water" ? t("typeWater") : event.type === "ceremony" ? t("typeCeremony") : event.type;

  const translatedSections = isBackwoods || isExpedition ? [t("secScouts"), t("secVenturers")] :
                             isInvestiture ? [t("secBeavers"), t("secCubs"), t("secScouts"), t("secVenturers")] :
                             (event.sections || []);

  const translatedPlan = isBackwoods ? [t("event1Plan1"), t("event1Plan2"), t("event1Plan3"), t("event1Plan4"), t("event1Plan5")] :
                         isExpedition ? [t("event2Plan1"), t("event2Plan2"), t("event2Plan3"), t("event2Plan4"), t("event2Plan5")] :
                         isInvestiture ? [t("event3Plan1"), t("event3Plan2"), t("event3Plan3"), t("event3Plan4")] :
                         event.plan;

  const translatedRoute = isBackwoods ? t("event1Route") : isExpedition ? t("event2Route") : isInvestiture ? t("event3Route") : event.route;

  const translatedGear = isBackwoods ? [t("event1Gear1"), t("event1Gear2"), t("event1Gear3"), t("event1Gear4"), t("event1Gear5")] :
                         isExpedition ? [t("event2Gear1"), t("event2Gear2"), t("event2Gear3"), t("event2Gear4"), t("event2Gear5")] :
                         isInvestiture ? [t("event3Gear1"), t("event3Gear2"), t("event3Gear3")] :
                         event.gearList;

  const translatedContact = isBackwoods || isExpedition ? t("eventContactSkipperFrank") : isInvestiture ? t("eventContactFiachra") : event.contactPerson;
  const translatedNotes = isBackwoods ? t("event1Notes") : isExpedition ? t("event2Notes") : isInvestiture ? t("event3Notes") : event.notes;

  const formattedDate = !isPlanningMode && event.startDate
    ? new Date(event.startDate).toLocaleDateString(activeLocale, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : t("dateTBD");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[var(--md-shape-xl)] bg-[var(--surface-container-low)] border border-[var(--outline-variant)] shadow-2xl p-6 sm:p-8 my-8 text-[var(--on-surface)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-[var(--surface-container-high)] text-[var(--on-surface)] hover:bg-[var(--surface-container-highest)] transition-colors"
          aria-label={t("closeModal")}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="m3-badge">
              {translatedType}
            </span>
            <div className="flex gap-1">
              {translatedSections.map((sec) => (
                <span key={sec} className="px-2 py-0.5 rounded-full bg-[var(--primary-container)] text-[var(--on-primary-container)] text-[10px] font-bold uppercase">
                  {sec}
                </span>
              ))}
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--on-surface)] leading-tight">
            {translatedTitle}
          </h2>
          <p className="text-sm text-[var(--on-surface-variant)] mt-2">
            {translatedDesc}
          </p>
        </div>

        {/* Live Countdown Timer */}
        <div className="mb-6">
          <EventCountdown startDateIso={event.startDate} />
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-[var(--md-shape-l)] bg-[var(--surface-container)] flex items-start gap-3">
            <Calendar size={20} className="text-[var(--primary)] shrink-0 mt-0.5" />
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-[var(--on-surface-variant)]">
                {t("countdownTitle")}
              </span>
              <span className="text-sm font-semibold text-[var(--on-surface)]">
                {formattedDate}
              </span>
            </div>
          </div>

          <div className="p-4 rounded-[var(--md-shape-l)] bg-[var(--surface-container)] flex items-start gap-3">
            <MapPin size={20} className="text-[var(--primary)] shrink-0 mt-0.5" />
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-[var(--on-surface-variant)]">
                {t("eventLocation")}
              </span>
              <span className="text-sm font-semibold text-[var(--on-surface)]">
                {translatedLoc}
              </span>
            </div>
          </div>
        </div>

        {/* Plan / Timeline Schedule */}
        {translatedPlan && translatedPlan.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--primary)] mb-3 flex items-center gap-2">
              <FileText size={18} />
              <span>{t("eventPlan")}</span>
            </h3>
            <ul className="space-y-2 text-sm bg-[var(--surface-container)] p-4 rounded-[var(--md-shape-l)]">
              {translatedPlan.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[var(--primary-container)] text-[var(--on-primary-container)] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-[var(--on-surface)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Route / Access Instructions */}
        {translatedRoute && (
          <div className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--primary)] mb-2 flex items-center gap-2">
              <Compass size={18} />
              <span>{t("eventRoute")}</span>
            </h3>
            <p className="text-sm bg-[var(--surface-container)] p-4 rounded-[var(--md-shape-l)] text-[var(--on-surface)] leading-relaxed">
              {translatedRoute}
            </p>
          </div>
        )}

        {/* Required Gear Checklist */}
        {translatedGear && translatedGear.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--primary)] mb-3 flex items-center gap-2">
              <Check size={18} />
              <span>{t("eventGearRequired")}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-[var(--surface-container)] p-4 rounded-[var(--md-shape-l)]">
              {translatedGear.map((gear, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[var(--on-surface)]">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Check size={12} />
                  </div>
                  <span>{gear}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Leader Contact & Important Notes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-[var(--md-shape-l)] bg-[var(--surface-container-high)]">
            <span className="block text-xs font-bold uppercase tracking-wider text-[var(--primary)] mb-1 flex items-center gap-1.5">
              <Phone size={14} />
              <span>{t("eventLeaderContact")}</span>
            </span>
            <span className="text-sm font-semibold text-[var(--on-surface)]">
              {translatedContact}
            </span>
          </div>

          <div className="p-4 rounded-[var(--md-shape-l)] bg-[var(--surface-container-high)]">
            <span className="block text-xs font-bold uppercase tracking-wider text-[var(--primary)] mb-1 flex items-center gap-1.5">
              <AlertCircle size={14} />
              <span>{t("eventNotes")}</span>
            </span>
            <span className="text-sm text-[var(--on-surface-variant)]">
              {translatedNotes}
            </span>
          </div>
        </div>

        {/* Footer Button */}
        <div className="mt-8 pt-4 border-t border-[var(--outline-variant)] flex justify-end">
          <button
            onClick={onClose}
            className="m3-btn-primary"
          >
            {t("closeModal")}
          </button>
        </div>

      </div>
    </div>
  );
};
