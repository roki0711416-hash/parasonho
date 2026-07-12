"use client";

import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import ConsultCtaButtons from "./ConsultCtaButtons";
import PagePhotoSection from "./PagePhotoSection";
import { useI18n } from "../lib/i18n/I18nProvider";
import { localePath } from "../lib/i18n/locale-path";

export default function ServicePageContent() {
  const { locale, dict } = useI18n();
  const s = dict.service;
  const c = dict.common;

  return (
    <div className="ps-page min-h-screen">
      <SiteHeader />

      <main>
        <PagePhotoSection variant="hero" className="py-24 md:py-40">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6">
            <p className="ps-eyebrow">{s.heroEyebrow}</p>
            <h1 className="ps-heading mt-4 text-3xl sm:text-5xl md:text-6xl">
              {s.heroTitle1}
              <br />
              <span className="text-[#F5B041]">{s.heroTitle2}</span>
            </h1>
            <p className="ps-lead mx-auto mt-8 max-w-3xl text-sm sm:text-base md:text-lg">{s.heroLead}</p>
            <ConsultCtaButtons variant="onDark" align="center" className="mx-auto mt-12 max-w-sm sm:max-w-none" />
          </div>
        </PagePhotoSection>

        <section className="ps-section ps-container">
          <p className="ps-eyebrow">{s.mainEyebrow}</p>
          <h2 className="ps-heading mt-4">{s.mainTitle}</h2>
          <p className="ps-lead mt-4 max-w-2xl text-sm sm:text-base">{s.mainLead}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {s.services.map((service) => (
              <article key={service.title} className="ps-card border-l-4 border-[#F5B041] p-6">
                <h3 className="text-lg font-bold text-[#14213D]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#111111]/65">{service.description}</p>
                <ul className="mt-4 space-y-2 border-t border-[rgba(20,33,61,0.08)] pt-4 text-sm">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-[#111111]/85">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-xs font-bold text-white">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="ps-section ps-bg-subtle">
          <div className="ps-container">
            <p className="ps-eyebrow">{s.flowEyebrow}</p>
            <h2 className="ps-heading mt-4">{s.flowTitle}</h2>
            <p className="ps-lead mt-4 max-w-2xl text-sm sm:text-base">{s.flowLead}</p>
            <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
              {s.steps.map((step) => (
                <div key={step.number} className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#F5B041] bg-white font-extrabold text-[#14213D]">
                    {step.number}
                  </div>
                  <h4 className="mt-4 text-center text-sm font-bold text-[#14213D]">{step.title}</h4>
                  <p className="mt-2 text-center text-xs leading-6 text-[#111111]/55">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ps-section ps-container">
          <div className="ps-card p-8 sm:p-10">
            <p className="ps-eyebrow">{s.parentsEyebrow}</p>
            <h2 className="ps-heading mt-4 text-2xl">{s.parentsTitle}</h2>
            <p className="ps-lead mt-4 text-sm sm:text-base">{s.parentsLead}</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {s.parentSupports.map((support) => (
                <li
                  key={support}
                  className="flex items-center gap-3 rounded-xl border border-[rgba(20,33,61,0.08)] bg-[#F8F9FB] px-4 py-3 text-sm font-semibold text-[#14213D]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-xs font-extrabold text-white">
                    ✓
                  </span>
                  {support}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <PagePhotoSection variant="cta" className="py-24">
          <div className="mx-auto w-full max-w-2xl px-4 text-center sm:px-6">
            <h2 className="ps-heading text-2xl sm:text-3xl">{s.ctaTitle}</h2>
            <p className="ps-lead mx-auto mt-4 max-w-xl text-sm sm:text-base">{s.ctaLead}</p>
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
