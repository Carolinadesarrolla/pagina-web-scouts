"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/siteConfig";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Users,
  ExternalLink,
  Shield,
  Check,
  Info,
  MessageSquare
} from "@/components/Icons";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header Banner */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
          <Mail size={18} />
          <span>{t("navContact")}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-[var(--on-surface)] tracking-tight">
          {t("contactTitle")}
        </h1>
        <p className="text-base text-[var(--on-surface-variant)] max-w-2xl">
          {t("contactSubtitle")}
        </p>
      </div>

      {/* Main Grid: Left Group Info & Right Contact Action Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Official Info & Schedules */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Official Address & Info Card */}
          <div className="m3-card p-6 space-y-6">
            <h2 className="text-xl font-bold text-[var(--on-surface)] border-b border-[var(--outline-variant)] pb-3">
              {t("contactInfoTitle")}
            </h2>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[var(--primary-container)] text-[var(--on-primary-container)] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block font-bold text-[var(--on-surface)]">
                    {t("addressLabel")}
                  </span>
                  <span className="text-[var(--on-surface-variant)] leading-relaxed">
                    {siteConfig.denAddress}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[var(--secondary-container)] text-[var(--on-secondary-container)] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block font-bold text-[var(--on-surface)]">
                    {t("emailLabel")}
                  </span>
                  <a href={`mailto:${siteConfig.email}`} className="text-[var(--primary)] font-semibold hover:underline break-all">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[var(--tertiary-container)] text-[var(--on-tertiary-container)] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block font-bold text-[var(--on-surface)]">
                    {t("phoneLabel")}
                  </span>
                  <a href={`tel:${siteConfig.phone}`} className="text-[var(--primary)] font-semibold hover:underline">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Section Meeting Times Schedule */}
          <div className="m3-card p-6 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--primary)] flex items-center gap-2">
              <Clock size={18} />
              <span>{t("meetingTimesTitle")}</span>
            </h3>

            <div className="space-y-3">
              {siteConfig.sections.map((sec) => {
                const meetingTimeKey =
                  sec.id === "beavers" ? "beaversMeetingTime" :
                  sec.id === "cubs" ? "cubsMeetingTime" :
                  sec.id === "scouts" ? "scoutsMeetingTime" :
                  sec.id === "venturers" ? "venturersMeetingTime" : null;

                const ageRangeKey =
                  sec.id === "beavers" ? "beaversAge" :
                  sec.id === "cubs" ? "cubsAge" :
                  sec.id === "scouts" ? "scoutsAge" :
                  sec.id === "venturers" ? "venturersAge" : null;

                return (
                  <div key={sec.id} className="p-3 rounded-[var(--md-shape-m)] bg-[var(--surface-container-high)] flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold block text-[var(--on-surface)]">
                        {t(sec.nameKey as any)} ({ageRangeKey ? t(ageRangeKey as any) : sec.ageRange})
                      </span>
                      <span className="text-[var(--on-surface-variant)]">
                        {meetingTimeKey ? t(meetingTimeKey as any) : sec.meetingDay}
                      </span>
                    </div>
                    <span className="m3-badge">
                      {t("denBadge")}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Column: Direct Contact & Registration Forms */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Card 1: Youth Membership Registration Form */}
          <div className="m3-card p-6 sm:p-8 space-y-5 border-l-4 border-l-[var(--primary)] shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--primary-container)] text-[var(--on-primary-container)] flex items-center justify-center shrink-0 shadow-md">
                <Users size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[var(--on-surface)]">
                  {t("youthFormTitle")}
                </h2>
                <p className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wider">
                  2nd Louth Sea Scouts
                </p>
              </div>
            </div>

            <p className="text-sm text-[var(--on-surface-variant)] leading-relaxed">
              {t("youthFormDesc")}
            </p>

            {/* Disclaimer Box */}
            <div className="p-4 rounded-[var(--md-shape-l)] bg-[var(--tertiary-container)]/40 border border-[var(--tertiary)]/30 text-xs text-[var(--on-surface)] leading-relaxed space-y-1">
              <span className="font-bold text-[var(--primary)] uppercase tracking-wider text-[11px] flex items-center gap-1.5 mb-0.5">
                <Info size={14} />
                <span>{t("tbcLabel")} / Info:</span>
              </span>
              <span>{t("youthFormDisclaimer")}</span>
            </div>

            <div className="pt-2">
              <a
                href={siteConfig.youthFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="m3-button m3-button-primary flex items-center justify-center gap-2 py-3 px-6 text-sm font-bold shadow-md hover:scale-[1.02] transition-transform w-full sm:w-auto"
              >
                <span>{t("youthFormButton")}</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Card 2: Volunteer Leader Inquiry Form */}
          <div className="m3-card p-6 sm:p-8 space-y-5 border-l-4 border-l-[var(--tertiary)] shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--tertiary-container)] text-[var(--on-tertiary-container)] flex items-center justify-center shrink-0">
                <Shield size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--on-surface)]">
                  {t("volunteerFormTitle")}
                </h3>
                <p className="text-xs font-semibold text-[var(--tertiary)] uppercase tracking-wider">
                  Adult Volunteer Leaders
                </p>
              </div>
            </div>

            <p className="text-sm text-[var(--on-surface-variant)] leading-relaxed">
              {t("volunteerFormDesc")}
            </p>

            <div className="pt-1">
              <a
                href={siteConfig.volunteerFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="m3-button m3-button-outlined flex items-center justify-center gap-2 py-3 px-6 text-sm font-bold hover:bg-[var(--surface-container-high)] transition-all w-full sm:w-auto"
              >
                <span>{t("volunteerFormButton")}</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Card 3: Email Contact Direct Card */}
          <div className="m3-card p-6 space-y-3 bg-[var(--surface-container-low)] border border-[var(--outline-variant)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--secondary-container)] text-[var(--on-secondary-container)] flex items-center justify-center shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-base font-bold text-[var(--on-surface)]">
                  {t("emailLabel")}
                </h4>
                <p className="text-xs text-[var(--on-surface-variant)]">
                  {t("emailInquiryDesc")}
                </p>
              </div>
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block p-3 rounded-[var(--md-shape-m)] bg-[var(--surface-container-highest)] text-sm font-bold text-[var(--primary)] hover:underline break-all text-center"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Card 4: Skipper Frank Direct Contact (Call / WhatsApp) */}
          <div className="m3-card p-6 sm:p-8 space-y-6 border-l-4 border-l-amber-500 shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 shadow-md">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--on-surface)]">
                  {t("contactFrankTitle")}
                </h3>
                <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                  Skipper Frank • +353 868 22 55 22
                </p>
              </div>
            </div>

            <p className="text-sm text-[var(--on-surface-variant)] leading-relaxed">
              {t("contactFrankDesc")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="https://wa.me/353868225522"
                target="_blank"
                rel="noopener noreferrer"
                className="m3-button bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 py-3 px-6 text-sm font-bold shadow-md hover:scale-[1.02] transition-transform rounded-full"
              >
                <MessageSquare size={18} />
                <span>{t("whatsappFrankButton")}</span>
              </a>
              <a
                href="tel:+353868225522"
                className="m3-button m3-button-outlined flex items-center justify-center gap-2 py-3 px-6 text-sm font-bold hover:bg-[var(--surface-container-high)] transition-all"
              >
                <Phone size={18} />
                <span>{t("callFrankButton")}</span>
              </a>
            </div>
          </div>

          {/* Card 5: In-Person Visit */}
          <div className="m3-card p-6 space-y-4 bg-[var(--surface-container-low)] border border-[var(--outline-variant)]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--secondary-container)] text-[var(--on-secondary-container)] flex items-center justify-center shrink-0">
                <Users size={20} />
              </div>
              <div>
                <h4 className="text-base font-bold text-[var(--on-surface)]">
                  {t("contactInPersonTitle")}
                </h4>
                <p className="text-xs font-medium text-[var(--on-surface-variant)]">
                  St Francis National School, Blackrock, Co. Louth
                </p>
              </div>
            </div>

            <p className="text-xs text-[var(--on-surface-variant)] leading-relaxed">
              {t("contactInPersonDesc")}
            </p>

            <div className="p-3 rounded-[var(--md-shape-m)] bg-[var(--surface-container-highest)] text-xs text-[var(--on-surface)] font-semibold flex items-center justify-between">
              <span>{t("secScouts")}: {t("scoutsMeetingTime")}</span>
              <span className="m3-badge bg-[var(--primary-container)] text-[var(--on-primary-container)]">
                {t("denBadge")}
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
