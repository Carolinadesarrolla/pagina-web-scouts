"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import leadersData from "@/data/leaders.json";
import {
  Users,
  Shield,
  Anchor,
  Check,
  Award
} from "@/components/Icons";

export interface LeaderItem {
  id: string;
  name: string;
  role: "leader" | "patrol_leader" | "assistant_patrol_leader";
  title: string;
  section: string;
  patrolName?: string;
  bio: string;
  photo?: string;
  certifications?: string[];
}

export default function LeadersPage() {
  const { t } = useLanguage();
  const [leaders] = useState<LeaderItem[]>(leadersData as LeaderItem[]);
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredLeaders = leaders.filter((l) => {
    if (activeTab === "all") return true;
    return l.role === activeTab;
  });

  const tabs = [
    { id: "all", label: t("tabAllLeaders") },
    { id: "leader", label: t("tabAdultLeaders") },
    { id: "patrol_leader", label: t("tabPatrolLeaders") },
    { id: "assistant_patrol_leader", label: t("tabAssistantPatrolLeaders") },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header Banner */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
          <Users size={18} />
          <span>{t("navLeaders")}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-[var(--on-surface)] tracking-tight">
          {t("leadersTitle")}
        </h1>
        <p className="text-base text-[var(--on-surface-variant)] max-w-2xl">
          {t("leadersSubtitle")}
        </p>
      </div>

      {/* Role Filter Tabs */}
      <div className="flex flex-wrap gap-2 p-2 rounded-[var(--md-shape-xl)] bg-[var(--surface-container-low)] border border-[var(--outline-variant)]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`m3-chip ${activeTab === tab.id ? "m3-chip-active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Leaders Grid */}
      {filteredLeaders.length === 0 ? (
        <div className="p-12 text-center rounded-[var(--md-shape-xl)] bg-[var(--surface-container)] border border-[var(--outline-variant)]">
          <p className="text-sm font-semibold text-[var(--on-surface-variant)]">
            {t("noLeadersFound")}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLeaders.map((leader) => {
            const isPL = leader.role === "patrol_leader";
            const isAPL = leader.role === "assistant_patrol_leader";

            // Dynamic title translation
            const translatedTitle =
              leader.title === "Main Leader of Scouts (Skipper)" ? t("titleSkipper") :
              leader.title === "Scout Leader" ? t("titleScoutLeader") :
              leader.title === "Patrol Leader (PL)" ? t("titlePL") :
              leader.title === "Assistant Patrol Leader (APL)" ? t("titleAPL") :
              leader.title;

            // Dynamic patrol translation
            const translatedPatrol =
              leader.patrolName === "Otter Patrol" ? t("patrolOtter") :
              leader.patrolName === "Curlew Patrol" ? t("patrolCurlew") :
              leader.patrolName;

            // Dynamic bio translation
            const bioMap: Record<string, keyof typeof import("@/data/translations").translations.en> = {
              "leader-frank": "leaderFrankBio",
              "leader-fiachra": "leaderFiachraBio",
              "leader-aela": "leaderAelaBio",
              "leader-josh": "leaderJoshBio",
              "pl-taidgh-malone": "leaderTaidghBio",
              "pl-sophia": "leaderSophiaBio",
              "apl-alannah": "leaderAlannahBio",
              "apl-mateusz": "leaderMateuszBio",
            };
            const translatedBio = bioMap[leader.id] ? t(bioMap[leader.id]) : leader.bio;

            // Dynamic certification translation
            const certMap: Record<string, keyof typeof import("@/data/translations").translations.en> = {
              "Skipper": "certSkipper",
              "Sailing Instructor": "certSailingInstructor",
              "Scout Leader": "certScoutLeader",
              "Safety Officer": "certSafetyOfficer",
              "Event Coordinator": "certEventCoordinator",
              "Outdoor Skills Specialist": "certOutdoorSkills",
              "Patrol Leadership Warrant": "certPatrolWarrant",
              "Tea Master": "certTeaMaster",
              "Assistant Patrol Leader": "certAPL",
              "10 Years Service": "cert10Years",
            };

            return (
              <div
                key={leader.id}
                className="m3-card p-6 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Photo / Avatar */}
                  <div className="relative h-64 w-full rounded-[var(--md-shape-l)] overflow-hidden bg-[var(--surface-container-high)] border border-[var(--outline-variant)] shadow-inner">
                    {leader.photo ? (
                      <Image
                        src={leader.photo}
                        alt={leader.name}
                        fill
                        className="object-cover object-top hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--surface-container-highest)] text-[var(--on-surface-variant)] gap-3 p-4 text-center">
                        <div className="w-16 h-16 rounded-full bg-[var(--primary-container)] text-[var(--on-primary-container)] flex items-center justify-center font-black text-2xl shadow-md border border-[var(--primary)]">
                          {leader.name.charAt(0)}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
                          {translatedTitle}
                        </span>
                      </div>
                    )}
                    
                    {/* Badge Role Banner */}
                    <div className="absolute top-3 left-3">
                      <span className={`m3-badge ${isPL ? "bg-amber-500 text-white" : isAPL ? "bg-sky-500 text-white" : ""}`}>
                        {translatedTitle}
                      </span>
                    </div>
                  </div>

                  {/* Leader Info */}
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--on-surface)]">
                      {leader.name}
                    </h2>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)] mt-1">
                      {translatedTitle}
                    </p>
                  </div>

                  {/* Biography */}
                  <p className="text-xs text-[var(--on-surface-variant)] leading-relaxed">
                    {translatedBio}
                  </p>
                </div>

                {/* Certifications & Badges */}
                {leader.certifications && leader.certifications.length > 0 && (
                  <div className="pt-4 border-t border-[var(--outline-variant)] space-y-2">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[var(--primary)]">
                      {t("skillsLabel")}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {leader.certifications.map((cert, idx) => {
                        const certKey = certMap[cert];
                        const translatedCert = certKey ? t(certKey) : cert;
                        return (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md bg-[var(--surface-container-highest)] text-[var(--on-surface)] text-[10px] font-semibold flex items-center gap-1"
                          >
                            <Check size={12} className="text-[var(--primary)]" />
                            <span>{translatedCert}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
