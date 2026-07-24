"use client";

import Link from "next/link";
import { Camera } from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import ConsultCtaButtons from "./ConsultCtaButtons";
import PagePhotoSection from "./PagePhotoSection";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { clubs } from "../lib/clubs";
import { useI18n } from "../lib/i18n/I18nProvider";
import { localePath } from "../lib/i18n/locale-path";

export default function ClubsPageContent() {
  const { locale, dict } = useI18n();
  const t = dict.clubs;
  const c = dict.common;
  const lp = (path = "") => localePath(locale, path);

  return (
    <div className="ps-page min-h-screen">
      <SiteHeader />

      <main>
        <PagePhotoSection variant="hero" priority className="py-20 md:py-28">
          <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
            <p className="ps-eyebrow">{t.heroEyebrow}</p>
            <h1 className="ps-heading mt-6 text-3xl sm:text-5xl">{t.heroTitle}</h1>
            <p className="ps-lead mx-auto mt-5 max-w-2xl text-sm sm:text-base">{t.heroLead}</p>
          </div>
        </PagePhotoSection>

        <section className="ps-section ps-container">
          <p className="ps-eyebrow">{t.listEyebrow}</p>
          <h2 className="ps-heading mt-4">{t.listTitle}</h2>
          <p className="ps-lead mt-4 max-w-2xl text-sm sm:text-base">{t.listLead}</p>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {clubs.map((club, index) => (
              <Reveal key={club.slug} delay={index * 80}>
                <article className="ps-card overflow-hidden">
                  <div className="relative aspect-[16/10] w-full">
                    <Photo
                      src={club.coverImage}
                      alt={club.name}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="h-full w-full"
                    />
                    <div className="absolute bottom-4 left-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/40 bg-white/95 shadow-lg backdrop-blur-sm">
                      {club.logoImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={club.logoImage} alt={`${club.name} logo`} className="h-12 w-12 object-contain" />
                      ) : (
                        <span className="px-1 text-center text-[10px] font-extrabold leading-tight tracking-wide text-[#14213D]/55">
                          LOGO
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl font-extrabold tracking-tight text-[#14213D] sm:text-2xl">{club.name}</h3>

                    <dl className="mt-5 space-y-3 text-sm">
                      <div className="flex gap-3">
                        <dt className="w-20 shrink-0 font-bold text-[#F5B041]">{t.labels.location}</dt>
                        <dd className="text-[#111111]/70">{club.location}</dd>
                      </div>
                      <div className="flex gap-3">
                        <dt className="w-20 shrink-0 font-bold text-[#F5B041]">{t.labels.ages}</dt>
                        <dd className="text-[#111111]/70">{club.ages}</dd>
                      </div>
                      {club.instagram && (
                        <div className="flex gap-3">
                          <dt className="w-20 shrink-0 font-bold text-[#F5B041]">{t.labels.instagram}</dt>
                          <dd>
                            <a
                              href={`https://www.instagram.com/${club.instagram}/`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-[#111111]/70 transition hover:text-[#F5B041]"
                            >
                              <Camera className="h-3.5 w-3.5" />
                              @{club.instagram}
                            </a>
                          </dd>
                        </div>
                      )}
                    </dl>

                    <div className="mt-6">
                      <p className="text-xs font-bold tracking-[0.18em] text-[#14213D]/45">{t.labels.features}</p>
                      <ul className="mt-3 space-y-2">
                        {club.features.map((feature) => (
                          <li key={feature} className="flex gap-2 text-sm leading-6 text-[#111111]/70">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F5B041]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={lp(`/clubs/${club.slug}`)}
                      className="ps-btn-gold mt-8 inline-flex w-full items-center justify-center sm:w-auto sm:min-w-[200px]"
                    >
                      {t.labels.viewDetail}
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="ps-section ps-bg-subtle">
          <div className="ps-container">
            <p className="ps-eyebrow">{t.supportEyebrow}</p>
            <h2 className="ps-heading mt-4">{t.supportTitle}</h2>
            <p className="ps-lead mt-4 max-w-2xl text-sm sm:text-base">{t.supportLead}</p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.supports.map((item) => (
                <Reveal key={item.title}>
                  <div className="ps-card h-full border-t-4 border-[#F5B041] p-6">
                    <h3 className="text-base font-extrabold text-[#14213D]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#111111]/65">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <PagePhotoSection variant="cta" className="py-24">
          <div className="mx-auto w-full max-w-2xl px-4 text-center sm:px-6">
            <h2 className="ps-heading text-2xl sm:text-3xl">{t.ctaTitle}</h2>
            <p className="ps-lead mx-auto mt-4 max-w-xl text-sm sm:text-base">{t.ctaLead}</p>
            <ConsultCtaButtons
              variant="onDark"
              align="center"
              showLineId
              className="mx-auto mt-10 max-w-sm sm:max-w-none"
            />
            <p className="mt-6">
              <Link href={lp()} className="text-sm text-white/60 underline underline-offset-4 hover:text-[#F5B041]">
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
