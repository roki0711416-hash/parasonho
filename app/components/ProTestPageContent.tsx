"use client";

import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import JourneyTimeline from "./JourneyTimeline";
import Reveal from "./Reveal";
import ConsultCtaButtons from "./ConsultCtaButtons";
import PagePhotoSection from "./PagePhotoSection";
import { useI18n } from "../lib/i18n/I18nProvider";
import { localePath } from "../lib/i18n/locale-path";

export default function ProTestPageContent() {
  const { locale, dict } = useI18n();
  const p = dict.proTest;
  const c = dict.common;

  return (
    <div className="ps-page min-h-screen">
      <SiteHeader />

      <main>
        <PagePhotoSection variant="hero" className="py-20 md:py-32">
          <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
            <p className="ps-eyebrow">{p.heroEyebrow}</p>
            <h1 className="ps-heading mt-6 text-3xl sm:text-5xl">{p.heroTitle}</h1>
            <p className="mt-4 text-lg font-bold text-[#F5B041] sm:text-xl">{p.heroSubtitle}</p>
            <p className="ps-lead mx-auto mt-5 max-w-2xl text-sm sm:text-base">{p.heroLead}</p>
            <ConsultCtaButtons
              variant="onDark"
              align="center"
              lineLabel={p.heroCta}
              className="mx-auto mt-9 max-w-sm sm:max-w-none"
            />
          </div>
        </PagePhotoSection>

        <section id="journey" className="ps-bg-subtle ps-section">
          <div className="ps-container">
            <Reveal>
              <p className="ps-eyebrow">{p.journeyEyebrow}</p>
              <h2 className="ps-heading mt-4 max-w-2xl">
                {p.journeyTitle}
                <span className="ps-gold-text">{p.journeyTitleGold}</span>
                {p.journeyTitleEnd}
              </h2>
              <p className="ps-lead mt-5 max-w-xl text-sm sm:text-base">{p.journeyLead}</p>
            </Reveal>
            <JourneyTimeline steps={p.journey} />
          </div>
        </section>

        <section className="ps-section bg-white">
          <div className="ps-container">
            <Reveal>
              <p className="ps-eyebrow">{p.supportEyebrow}</p>
              <h2 className="ps-heading mt-4 max-w-2xl">{p.supportTitle}</h2>
              <p className="ps-lead mt-5 max-w-2xl text-sm sm:text-base">{p.supportLead}</p>
            </Reveal>

            <Reveal delay={80}>
              <div className="ps-card mt-12 overflow-hidden">
                <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-2 lg:gap-12">
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-black leading-snug text-[#14213D] sm:text-3xl">
                      {p.cardTitle1}
                      <br />
                      <span className="ps-gold-text">{p.cardTitle2}</span>
                    </h3>
                    <p className="ps-lead mt-4 text-sm sm:text-base">{p.cardLead}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <div className="rounded-2xl border border-[rgba(20,33,61,0.08)] bg-[#F8F9FB] px-5 py-4">
                        <p className="text-[10px] font-bold tracking-[0.15em] text-[#F5B041]">{p.periodLabel}</p>
                        <p className="mt-1 text-base font-bold text-[#14213D]">{p.periodValue}</p>
                      </div>
                      <div className="rounded-2xl border border-[rgba(20,33,61,0.08)] bg-[#F8F9FB] px-5 py-4">
                        <p className="text-[10px] font-bold tracking-[0.15em] text-[#F5B041]">{p.clubsLabel}</p>
                        <p className="mt-1 text-base font-bold text-[#14213D]">{p.clubsValue}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-xs leading-6 text-[#111111]/50">{p.note}</p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <ul className="space-y-3 text-sm">
                      {p.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 rounded-2xl border border-[rgba(20,33,61,0.08)] bg-[#F8F9FB] px-5 py-4"
                        >
                          <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F5B041]" />
                          <span className="leading-6 text-[#111111]/80">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <PagePhotoSection variant="cta" className="ps-section">
          <div className="ps-container">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="ps-eyebrow justify-center">{p.contactEyebrow}</p>
                <h2 className="ps-heading mt-5">
                  {p.contactTitle}
                  <span className="ps-gold-text">{p.contactTitleGold}</span>
                  {p.contactTitleEnd}
                </h2>
                <p className="ps-lead mx-auto mt-5 max-w-md text-sm sm:text-base">{p.contactLead}</p>
                <ConsultCtaButtons
                  variant="onDark"
                  align="center"
                  lineLabel={c.cta.lineConsult}
                  showLineId
                  className="mx-auto mt-9 max-w-sm sm:max-w-none"
                />
                <p className="mt-8">
                  <Link href={localePath(locale, "")} className="text-sm text-white/60 underline underline-offset-4 hover:text-[#F5B041]">
                    {c.backToTop}
                  </Link>
                </p>
              </div>
            </Reveal>
          </div>
        </PagePhotoSection>
      </main>

      <SiteFooter />
    </div>
  );
}
