"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/siteConfig";
import { Mail, Check, AlertCircle, Phone, MapPin, Clock } from "@/components/Icons";

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    section: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // MANUAL TOGGLE FLAG CHECK FROM siteConfig
  const isFormEnabled = siteConfig.ENABLE_CONTACT_FORM;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", section: "", subject: "", message: "" });
    }, 1200);
  };

  // IF FORM IS DISABLED MANUALLY IN CODE:
  if (!isFormEnabled) {
    return (
      <div className="p-8 rounded-[var(--md-shape-xl)] bg-[var(--surface-container)] border border-[var(--outline-variant)] shadow-sm">
        <div className="flex items-center gap-3 text-amber-500 mb-4">
          <AlertCircle size={28} />
          <h3 className="text-xl font-bold text-[var(--on-surface)]">
            {t("formDisabledNoticeTitle")}
          </h3>
        </div>
        <p className="text-sm text-[var(--on-surface-variant)] leading-relaxed mb-6">
          {t("formDisabledNoticeDesc")}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-[var(--md-shape-l)] bg-[var(--surface-container-high)]">
            <span className="block text-xs font-bold uppercase tracking-wider text-[var(--primary)] mb-1 flex items-center gap-1.5">
              <Mail size={16} />
              <span>{t("emailLabel")}</span>
            </span>
            <a href={`mailto:${siteConfig.email}`} className="text-sm font-semibold text-[var(--on-surface)] hover:underline">
              {siteConfig.email}
            </a>
          </div>

          <div className="p-4 rounded-[var(--md-shape-l)] bg-[var(--surface-container-high)]">
            <span className="block text-xs font-bold uppercase tracking-wider text-[var(--primary)] mb-1 flex items-center gap-1.5">
              <Phone size={16} />
              <span>{t("phoneLabel")}</span>
            </span>
            <a href={`tel:${siteConfig.phone}`} className="text-sm font-semibold text-[var(--on-surface)] hover:underline">
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    );
  }

  // IF FORM IS ENABLED:
  return (
    <div className="p-8 rounded-[var(--md-shape-xl)] bg-[var(--surface-container-low)] border border-[var(--outline-variant)] shadow-lg">
      <h3 className="text-2xl font-bold text-[var(--on-surface)] mb-2">
        {t("formTitle")}
      </h3>
      <p className="text-xs text-[var(--on-surface-variant)] mb-6">
        {t("formSubtitleDesc")}
      </p>

      {submitted ? (
        <div className="p-6 rounded-[var(--md-shape-l)] bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 animate-in fade-in">
          <div className="flex items-center gap-3 font-bold text-lg mb-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">
              <Check size={20} />
            </div>
            <span>{t("formSuccessTitle")}</span>
          </div>
          <p className="text-sm">
            {t("formSuccessMsg")}
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 px-4 py-2 rounded-full bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
          >
            {t("formSendAnother")}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--on-surface-variant)] mb-1.5">
                {t("formNameLabel")} *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t("formNamePlaceholder")}
                className="w-full px-4 py-3 rounded-[var(--md-shape-m)] bg-[var(--surface-container-high)] border border-[var(--outline-variant)] text-sm text-[var(--on-surface)] focus:outline-none focus:border-[var(--primary)] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--on-surface-variant)] mb-1.5">
                {t("formEmailLabel")} *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t("formEmailPlaceholder")}
                className="w-full px-4 py-3 rounded-[var(--md-shape-m)] bg-[var(--surface-container-high)] border border-[var(--outline-variant)] text-sm text-[var(--on-surface)] focus:outline-none focus:border-[var(--primary)] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--on-surface-variant)] mb-1.5">
                {t("formSectionLabel")}
              </label>
              <select
                value={formData.section}
                onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                className="w-full px-4 py-3 rounded-[var(--md-shape-m)] bg-[var(--surface-container-high)] border border-[var(--outline-variant)] text-sm text-[var(--on-surface)] focus:outline-none focus:border-[var(--primary)] transition-colors"
              >
                <option value="">{t("formSectionSelect")}</option>
                <option value="beavers">{t("optBeavers")}</option>
                <option value="cubs">{t("optCubs")}</option>
                <option value="scouts">{t("optScouts")}</option>
                <option value="venturers">{t("optVenturers")}</option>
                <option value="leadership">{t("optLeadership")}</option>
                <option value="general">{t("optGeneral")}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--on-surface-variant)] mb-1.5">
                {t("formSubjectLabel")}
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder={t("formSubjectPlaceholder")}
                className="w-full px-4 py-3 rounded-[var(--md-shape-m)] bg-[var(--surface-container-high)] border border-[var(--outline-variant)] text-sm text-[var(--on-surface)] focus:outline-none focus:border-[var(--primary)] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--on-surface-variant)] mb-1.5">
              {t("formMessageLabel")} *
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t("formMessagePlaceholder")}
              className="w-full px-4 py-3 rounded-[var(--md-shape-m)] bg-[var(--surface-container-high)] border border-[var(--outline-variant)] text-sm text-[var(--on-surface)] focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="m3-btn-primary w-full sm:w-auto"
          >
            {submitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                <span>{t("formSubmitting")}</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Mail size={18} />
                <span>{t("formSubmitBtn")}</span>
              </span>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
