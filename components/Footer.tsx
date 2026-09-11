"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/siteConfig";
import { Anchor, MapPin, Mail, Phone, Waves } from "@/components/Icons";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-auto bg-[var(--surface-container-high)] text-[var(--on-surface)] border-t border-[var(--outline-variant)] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1: Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-[var(--primary-container)] flex items-center justify-center shadow-sm rounded-xl p-1">
                <Image
                  src="/logo.png"
                  alt="2nd Louth Sea Scouts Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="block font-bold text-lg leading-tight text-[var(--on-surface)]">
                  2nd Louth
                </span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
                  Blackrock Sea Scouts
                </span>
              </div>
            </div>
            <p className="text-xs text-[var(--on-surface-variant)] leading-relaxed">
              {t("footerDesc")}
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--primary)]">
              <Anchor size={16} />
              <span>{t("footerScoutingIreland")}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm uppercase tracking-wider text-[var(--primary)]">
              {t("footerQuickLinks")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[var(--primary)] transition-colors">
                  {t("navHome")}
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[var(--primary)] transition-colors">
                  {t("navEvents")}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[var(--primary)] transition-colors">
                  {t("navGallery")}
                </Link>
              </li>
              <li>
                <Link href="/leaders" className="hover:text-[var(--primary)] transition-colors">
                  {t("navLeaders")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--primary)] transition-colors">
                  {t("navContact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Sections Meeting Info */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm uppercase tracking-wider text-[var(--primary)]">
              {t("sectionsTitle")}
            </h3>
            <ul className="space-y-2 text-xs text-[var(--on-surface-variant)]">
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
                  <li key={sec.id} className="border-b border-[var(--outline-variant)]/50 pb-1.5">
                    <div className="font-bold text-[var(--on-surface)] flex justify-between">
                      <span>{t(sec.nameKey as any)}</span>
                      <span className="text-[var(--primary)]">{ageRangeKey ? t(ageRangeKey as any) : sec.ageRange}</span>
                    </div>
                    <div>{meetingTimeKey ? t(meetingTimeKey as any) : sec.meetingDay}</div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 4: Location & Contact */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm uppercase tracking-wider text-[var(--primary)]">
              {t("contactTitle")}
            </h3>
            <div className="space-y-2 text-xs text-[var(--on-surface-variant)]">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[var(--primary)] shrink-0 mt-0.5" />
                <span>{siteConfig.denAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[var(--primary)] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:underline break-all">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[var(--primary)] shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:underline">
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-[var(--outline-variant)] flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--on-surface-variant)] gap-4">
          <p>{t("footerCopyright")}</p>
          <div className="flex items-center gap-2">
            <Waves size={16} className="text-[var(--primary)]" />
            <span>{t("footerLocation")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
