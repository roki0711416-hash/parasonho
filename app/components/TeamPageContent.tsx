"use client";

import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import ConsultCtaButtons from "./ConsultCtaButtons";
import PagePhotoSection from "./PagePhotoSection";
import { useI18n } from "../lib/i18n/I18nProvider";
import { localePath } from "../lib/i18n/locale-path";

export default function TeamPageContent() {
  const { locale, dict } = useI18n();
  const t = dict.team;
  const c = dict.common;

  return (
    <div className="ps-page min-h-screen">
      <SiteHeader />

      <main>
        <PagePhotoSection variant="hero" className="py-20 md:py-32">
          <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
            <p className="ps-eyebrow">{t.heroEyebrow}</p>
            <h1 className="ps-heading mt-6 text-3xl sm:text-5xl">{t.heroTitle}</h1>
            <p className="mt-4 text-lg font-bold text-[#F5B041] sm:text-xl">{t.heroSubtitle}</p>
            <p className="ps-lead mx-auto mt-5 max-w-2xl text-sm sm:text-base">{t.heroLead}</p>
            <ConsultCtaButtons
              variant="onDark"
              align="center"
              lineLabel={t.heroCta}
              className="mx-auto mt-9 max-w-sm sm:max-w-none"
            />
          </div>
        </PagePhotoSection>

        <section className="ps-section ps-container">
          <p className="ps-eyebrow">{t.supportEyebrow}</p>
          <h2 className="ps-heading mt-4">{t.supportTitle}</h2>
          <p className="ps-lead mt-4 max-w-2xl text-sm sm:text-base">{t.supportLead}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="ps-card border-t-4 border-[#F5B041] p-6">
              <h3 className="text-lg font-extrabold text-[#14213D]">{t.tournamentTitle}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[#111111]/70">
                {t.tournamentPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
            <article className="ps-card border-t-4 border-[#F5B041] p-6">
              <h3 className="text-lg font-extrabold text-[#14213D]">{t.travelTitle}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[#111111]/70">
                {t.travelPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="ps-section ps-bg-subtle">
          <div className="ps-container">
            <p className="ps-eyebrow">{t.targetEyebrow}</p>
            <h2 className="ps-heading mt-4">{t.targetTitle}</h2>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {t.targets.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-[rgba(20,33,61,0.08)] bg-white px-5 py-4 text-sm font-semibold text-[#14213D]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F5B041]/15 text-xs font-extrabold text-[#C4842A]">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <PagePhotoSection variant="cta" className="py-24">
          <div className="mx-auto w-full max-w-2xl px-4 text-center sm:px-6">
            <h2 className="ps-heading text-2xl sm:text-3xl">{t.ctaTitle}</h2>
            <p className="ps-lead mx-auto mt-4 max-w-xl text-sm sm:text-base">{t.ctaLead}</p>
            <ConsultCtaButtons variant="onDark" align="center" showLineId className="mx-auto mt-10 max-w-sm sm:max-w-none" />
            <p className="mt-6">
              <Link href={localePath(locale, "")} className="text-sm text-white/60 underline underline-offset-4 hover:text-[#F5B041]">
                {c.backToTop}
              </Link>
            </p>
          </div>
        </PagePhotoSection>
      </main>

      <SiteFooter />
    </div>
  );
}
