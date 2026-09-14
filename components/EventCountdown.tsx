"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Clock, FileText } from "@/components/Icons";

interface EventCountdownProps {
  startDateIso?: string | null;
  isPlanning?: boolean;
  compact?: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

export const EventCountdown: React.FC<EventCountdownProps> = ({ startDateIso, isPlanning = false, compact = false }) => {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: false });
  const [mounted, setMounted] = useState(false);

  const isInvalidDate = !startDateIso || isNaN(Date.parse(startDateIso));
  const isPlanningMode = isPlanning || isInvalidDate;

  useEffect(() => {
    setMounted(true);
    if (isPlanningMode || !startDateIso) return;

    const calculateTimeLeft = (): TimeLeft => {
      const difference = +new Date(startDateIso) - +new Date();
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        expired: false,
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [startDateIso, isPlanningMode]);

  if (!mounted) {
    return <div className="h-12 bg-[var(--surface-container-high)] rounded-full animate-pulse" />;
  }

  if (isPlanningMode) {
    if (compact) {
      return (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-bold border border-amber-500/30">
          <FileText size={14} className="shrink-0" />
          <span className="whitespace-nowrap">{t("statusPlanning")}</span>
        </div>
      );
    }
    return (
      <div className="p-3.5 sm:p-4 rounded-[var(--md-shape-xl)] bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[var(--on-surface)] w-full">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center shrink-0">
            <FileText size={18} />
          </div>
          <div className="min-w-0 flex-1">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 truncate">
              {t("statusPlanning")}
            </span>
            <span className="block text-xs font-semibold leading-tight text-[var(--on-surface)]">
              {t("dateTBD")}
            </span>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider shrink-0 self-start sm:self-auto shadow-xs">
          {t("tbcLabel")}
        </span>
      </div>
    );
  }

  if (timeLeft.expired) {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
        <Clock size={16} className="shrink-0" />
        <span>{t("eventStarted")}</span>
      </div>
    );
  }

  if (compact) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--primary-container)] text-[var(--on-primary-container)] text-xs font-bold shadow-sm whitespace-nowrap">
        <Clock size={14} className="shrink-0" />
        <span>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </span>
      </div>
    );
  }

  return (
    <div className="p-3.5 sm:p-4 rounded-[var(--md-shape-xl)] bg-[var(--surface-container-high)] border border-[var(--outline-variant)] w-full">
      <div className="text-xs font-bold uppercase tracking-wider text-[var(--primary)] mb-3 flex items-center gap-2">
        <Clock size={16} className="shrink-0" />
        <span>{t("countdownTitle")}</span>
      </div>
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2 text-center">
        <div className="p-1.5 sm:p-2.5 rounded-[var(--md-shape-l)] bg-[var(--surface-container-highest)]">
          <span className="block text-lg sm:text-2xl font-black text-[var(--primary)] font-mono">
            {String(timeLeft.days).padStart(2, "0")}
          </span>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase text-[var(--on-surface-variant)] truncate block">
            {t("countdownDays")}
          </span>
        </div>
        <div className="p-1.5 sm:p-2.5 rounded-[var(--md-shape-l)] bg-[var(--surface-container-highest)]">
          <span className="block text-lg sm:text-2xl font-black text-[var(--primary)] font-mono">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase text-[var(--on-surface-variant)] truncate block">
            {t("countdownHours")}
          </span>
        </div>
        <div className="p-1.5 sm:p-2.5 rounded-[var(--md-shape-l)] bg-[var(--surface-container-highest)]">
          <span className="block text-lg sm:text-2xl font-black text-[var(--primary)] font-mono">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase text-[var(--on-surface-variant)] truncate block">
            {t("countdownMinutes")}
          </span>
        </div>
        <div className="p-1.5 sm:p-2.5 rounded-[var(--md-shape-l)] bg-[var(--surface-container-highest)]">
          <span className="block text-lg sm:text-2xl font-black text-[var(--primary)] font-mono">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase text-[var(--on-surface-variant)] truncate block">
            {t("countdownSeconds")}
          </span>
        </div>
      </div>
    </div>
  );
};
