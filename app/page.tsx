"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/siteConfig";
import eventsData from "@/data/events.json";
import { EventCountdown } from "@/components/EventCountdown";
import { EventDetailModal, EventItem } from "@/components/EventDetailModal";
import {
  Anchor,
  Compass,
  Waves,
  Users,
  Shield,
  Calendar,
  ArrowRight,
  Check,
  MapPin
} from "@/components/Icons";

export default function HomePage() {
  const { t } = useLanguage();
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  // Find next upcoming event
  const nextEvent = (eventsData as EventItem[])[0];

  return (
    <div className="flex flex-col gap-16 pb-20">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-[var(--outline-variant)]">
        {/* Hero Background Image */}
        <Image
          src="/hero.jpeg"
          alt="Blackrock Sea Scouts Watersports"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105"
          priority
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-black/60 to-black/40" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6 my-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold uppercase tracking-wider shadow-lg animate-in fade-in slide-in-from-top-4">
            <Anchor size={16} className="text-[var(--primary-container)]" />
            <span>{t("heroBadge")}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none drop-shadow-md">
            {t("heroTitle")}
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-200 leading-relaxed font-medium drop-shadow-sm">
            {t("heroSubtitle")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/events" className="m3-btn-primary text-base px-8 py-4 shadow-xl">
              <Calendar size={20} />
              <span>{t("heroCtaPrimary")}</span>
            </Link>
            <Link href="/leaders" className="m3-btn-secondary text-base px-8 py-4 shadow-lg backdrop-blur-sm bg-white/90 text-zinc-900 hover:bg-white">
              <Users size={20} />
              <span>{t("heroCtaSecondary")}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. HIGHLIGHT EVENT COUNTDOWN BAR */}
      {nextEvent && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-24 z-20">
          <div className="m3-card p-6 sm:p-8 bg-[var(--surface-container-high)]/95 backdrop-blur-xl border border-[var(--outline-variant)] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
                <Compass size={16} />
                <span>{t("nextEventTitle")}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[var(--on-surface)]">
                {nextEvent.id === "backwoods-day-2026" ? t("event1Title") :
                  nextEvent.id === "expedition-dundalk-bay-2026" ? t("event2Title") :
                    nextEvent.id === "annual-investiture-2026" ? t("event3Title") : nextEvent.titleKey}
              </h2>
              <p className="text-xs text-[var(--on-surface-variant)] flex items-center justify-center md:justify-start gap-1.5">
                <MapPin size={14} className="text-[var(--primary)]" />
                <span>
                  {nextEvent.id === "backwoods-day-2026" ? t("event1Loc") :
                    nextEvent.id === "expedition-dundalk-bay-2026" ? t("event2Loc") :
                      nextEvent.id === "annual-investiture-2026" ? t("event3Loc") : nextEvent.location}
                </span>
              </p>
            </div>

            <div className="w-full md:w-auto">
              <EventCountdown
                startDateIso={nextEvent.startDate}
                isPlanning={nextEvent.status === "planning" || !nextEvent.startDate || isNaN(Date.parse(nextEvent.startDate))}
                compact
              />
            </div>

            <button
              onClick={() => setSelectedEvent(nextEvent)}
              className="m3-btn-primary text-sm whitespace-nowrap"
            >
              <span>{t("eventDetailsBtn")}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </section>
      )}

      {/* 3. ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
              <Waves size={18} />
              <span>{t("aboutTitle")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--on-surface)] leading-tight">
              {t("aboutSubtitle")}
            </h2>
            <p className="text-base text-[var(--on-surface-variant)] leading-relaxed">
              {t("aboutDesc")}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--on-surface)]">
                <Check size={18} className="text-[var(--primary)]" />
                <span>{t("isaSailing")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--on-surface)]">
                <Check size={18} className="text-[var(--primary)]" />
                <span>{t("coastalKayaking")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--on-surface)]">
                <Check size={18} className="text-[var(--primary)]" />
                <span>{t("overnightCamps")}</span>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-[var(--md-shape-xl)] overflow-hidden shadow-2xl border border-[var(--outline-variant)]">
            <Image
              src="/water/Water_1.jpg"
              alt="Sea Scouts Sailing"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. FOUR PILLARS OF SEA SCOUTING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-[var(--on-surface)]">
            {t("pillarsTitle")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="m3-card p-6 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-[var(--md-shape-l)] bg-[var(--primary-container)] text-[var(--on-primary-container)] flex items-center justify-center font-bold">
              <Compass size={24} />
            </div>
            <h3 className="text-lg font-bold text-[var(--on-surface)]">
              {t("pillar1Title")}
            </h3>
            <p className="text-xs text-[var(--on-surface-variant)] leading-relaxed">
              {t("pillar1Desc")}
            </p>
          </div>

          <div className="m3-card p-6 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-[var(--md-shape-l)] bg-[var(--secondary-container)] text-[var(--on-secondary-container)] flex items-center justify-center font-bold">
              <Anchor size={24} />
            </div>
            <h3 className="text-lg font-bold text-[var(--on-surface)]">
              {t("pillar2Title")}
            </h3>
            <p className="text-xs text-[var(--on-surface-variant)] leading-relaxed">
              {t("pillar2Desc")}
            </p>
          </div>

          <div className="m3-card p-6 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-[var(--md-shape-l)] bg-[var(--tertiary-container)] text-[var(--on-tertiary-container)] flex items-center justify-center font-bold">
              <Users size={24} />
            </div>
            <h3 className="text-lg font-bold text-[var(--on-surface)]">
              {t("pillar3Title")}
            </h3>
            <p className="text-xs text-[var(--on-surface-variant)] leading-relaxed">
              {t("pillar3Desc")}
            </p>
          </div>

          <div className="m3-card p-6 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-[var(--md-shape-l)] bg-[var(--surface-container-highest)] text-[var(--primary)] flex items-center justify-center font-bold">
              <Shield size={24} />
            </div>
            <h3 className="text-lg font-bold text-[var(--on-surface)]">
              {t("pillar4Title")}
            </h3>
            <p className="text-xs text-[var(--on-surface-variant)] leading-relaxed">
              {t("pillar4Desc")}
            </p>
          </div>
        </div>
      </section>

      {/* 5. SCOUT SECTIONS OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-[var(--on-surface)]">
            {t("sectionsTitle")}
          </h2>
          <p className="text-sm text-[var(--on-surface-variant)] mt-2">
            {t("sectionsSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Beavers */}
          <div className="m3-card p-6 flex flex-col justify-between border-t-4 border-emerald-500">
            <div>
              <span className="m3-badge mb-3 inline-block">
                {t("beaversAge")}
              </span>
              <h3 className="text-xl font-bold text-[var(--on-surface)] mb-2">
                {t("beaversTitle")}
              </h3>
              <p className="text-xs text-[var(--on-surface-variant)] leading-relaxed">
                {t("beaversDesc")}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[var(--outline-variant)] text-xs font-semibold text-[var(--primary)]">
              {t("beaversMeetingTime")}
            </div>
          </div>

          {/* Cubs */}
          <div className="m3-card p-6 flex flex-col justify-between border-t-4 border-sky-500">
            <div>
              <span className="m3-badge mb-3 inline-block">
                {t("cubsAge")}
              </span>
              <h3 className="text-xl font-bold text-[var(--on-surface)] mb-2">
                {t("cubsTitle")}
              </h3>
              <p className="text-xs text-[var(--on-surface-variant)] leading-relaxed">
                {t("cubsDesc")}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[var(--outline-variant)] text-xs font-semibold text-[var(--primary)]">
              {t("cubsMeetingTime")}
            </div>
          </div>

          {/* Sea Scouts */}
          <div className="m3-card p-6 flex flex-col justify-between border-t-4 border-[var(--primary)]">
            <div>
              <span className="m3-badge mb-3 inline-block">
                {t("scoutsAge")}
              </span>
              <h3 className="text-xl font-bold text-[var(--on-surface)] mb-2">
                {t("scoutsTitle")}
              </h3>
              <p className="text-xs text-[var(--on-surface-variant)] leading-relaxed">
                {t("scoutsDesc")}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[var(--outline-variant)] text-xs font-semibold text-[var(--primary)]">
              {t("scoutsMeetingTime")}
            </div>
          </div>

          {/* Venturers */}
          <div className="m3-card p-6 flex flex-col justify-between border-t-4 border-amber-500">
            <div>
              <span className="m3-badge mb-3 inline-block">
                {t("venturersAge")}
              </span>
              <h3 className="text-xl font-bold text-[var(--on-surface)] mb-2">
                {t("venturersTitle")}
              </h3>
              <p className="text-xs text-[var(--on-surface-variant)] leading-relaxed">
                {t("venturersDesc")}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[var(--outline-variant)] text-xs font-semibold text-[var(--primary)]">
              {t("venturersMeetingTime")}
            </div>
          </div>
        </div>
      </section>

      {/* 6. STATISTICS STRIP */}
      <section className="bg-[var(--surface-container-high)] py-16 border-y border-[var(--outline-variant)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-[var(--on-surface)] mb-10">
            {t("statsTitle")}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <span className="block text-4xl sm:text-5xl font-black text-[var(--primary)] font-mono">
                50+
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--on-surface-variant)]">
                {t("statMembers")}
              </span>
            </div>
            <div className="space-y-2">
              <span className="block text-4xl sm:text-5xl font-black text-[var(--primary)] font-mono">
                15+
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--on-surface-variant)]">
                {t("statVolunteers")}
              </span>
            </div>
            <div className="space-y-2">
              <span className="block text-4xl sm:text-5xl font-black text-[var(--primary)] font-mono">
                12
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--on-surface-variant)]">
                {t("statBoats")}
              </span>
            </div>
            <div className="space-y-2">
              <span className="block text-4xl sm:text-5xl font-black text-[var(--primary)] font-mono">
                49
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--on-surface-variant)]">
                {t("statYears")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedEvent && (
        <EventDetailModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}

    </div>
  );
}
