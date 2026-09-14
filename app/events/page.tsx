"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import eventsData from "@/data/events.json";
import { EventCountdown } from "@/components/EventCountdown";
import { EventCard } from "@/components/EventCard";
import { EventDetailModal, EventItem } from "@/components/EventDetailModal";
import {
  Calendar,
  Search,
} from "@/components/Icons";

export default function EventsPage() {
  const { language, t } = useLanguage();
  const [events] = useState<EventItem[]>(eventsData as EventItem[]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  // Filter logic
  const filteredEvents = events.filter((ev) => {
    const isPlanning = ev.status === "planning" || !ev.startDate || isNaN(Date.parse(ev.startDate));
    const matchesCategory =
      activeCategory === "all" ? true :
        activeCategory === "planning" ? isPlanning :
          (ev.type || "").toLowerCase() === activeCategory.toLowerCase();

    const titleText = (ev.id === "backwoods-day-2026" ? t("event1Title") :
      ev.id === "expedition-dundalk-bay-2026" ? t("event2Title") :
        ev.id === "annual-investiture-2026" ? t("event3Title") : ev.titleKey ? t(ev.titleKey) : "") || "";
    const descText = (ev.id === "backwoods-day-2026" ? t("event1Desc") :
      ev.id === "expedition-dundalk-bay-2026" ? t("event2Desc") :
        ev.id === "annual-investiture-2026" ? t("event3Desc") : ev.descriptionKey ? t(ev.descriptionKey) : "") || "";
    const locText = (ev.id === "backwoods-day-2026" ? t("event1Loc") :
      ev.id === "expedition-dundalk-bay-2026" ? t("event2Loc") :
        ev.id === "annual-investiture-2026" ? t("event3Loc") : ev.location ? t(ev.location) : "") || "";

    const matchesQuery =
      titleText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      locText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      descText.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesQuery;
  });

  const categories = [
    { id: "all", label: t("filterAll") },
    { id: "water", label: t("filterWater") },
    { id: "camp", label: t("filterCamp") },
    { id: "hike", label: t("filterHike") },
    { id: "ceremony", label: t("filterCeremony") },
    { id: "planning", label: t("filterPlanning") },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">

      {/* Header Banner */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
          <Calendar size={18} />
          <span>{t("navEvents")}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-[var(--on-surface)] tracking-tight">
          {t("eventsPageTitle")}
        </h1>
        <p className="text-base text-[var(--on-surface-variant)] max-w-2xl">
          {t("eventsPageSubtitle")}
        </p>
      </div>

      {/* Filter Chips & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-[var(--md-shape-xl)] bg-[var(--surface-container-low)] border border-[var(--outline-variant)]">

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`m3-chip ${activeCategory === cat.id ? "m3-chip-active" : ""}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Bar Input */}
        <div className="relative w-full md:w-72">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--on-surface-variant)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("searchEventsPlaceholder")}
            className="w-full pl-9 pr-4 py-2 rounded-full bg-[var(--surface-container-high)] border border-[var(--outline-variant)] text-xs text-[var(--on-surface)] focus:outline-none focus:border-[var(--primary)] transition-colors"
          />
        </div>

      </div>

      {/* Events Grid */}
      {filteredEvents.length === 0 ? (
        <div className="p-12 text-center rounded-[var(--md-shape-xl)] bg-[var(--surface-container)] border border-[var(--outline-variant)]">
          <p className="text-sm font-semibold text-[var(--on-surface-variant)]">
            {t("noEventsFound")}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((rawEvent) => (
            <EventCard
              key={rawEvent.id || Math.random().toString()}
              event={rawEvent}
              onSelectEvent={(ev) => setSelectedEvent(ev)}
            />
          ))}
        </div>
      )}

      {/* Modal View */}
      {selectedEvent && (
        <EventDetailModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}

    </div>
  );
}
