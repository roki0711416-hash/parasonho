"use client";

import Link from "next/link";
import { Camera } from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import ConsultCtaButtons from "./ConsultCtaButtons";
import PagePhotoSection from "./PagePhotoSection";
import Photo from "./Photo";
import Reveal from "./Reveal";
import ClubFacilityGallery from "./ClubFacilityGallery";
import type { Club, ClubSectionKey } from "../lib/clubs";
import { useI18n } from "../lib/i18n/I18nProvider";
import { localePath } from "../lib/i18n/locale-path";

const SECTION_ORDER: ClubSectionKey[] = [
  "overview",
  "facilities",
  "training",
  "matches",
  "coaches",
  "life",
  "location",
];

interface ClubDetailPageContentProps {
  club: Club;
}

export default function ClubDetailPageContent({ club }: ClubDetailPageContentProps) {
  const { locale, dict } = useI18n();
  const t = dict.clubs;
  const c = dict.common;
  const lp = (path = "") => localePath(locale, path);
  const hasFacilityGallery = Boolean(club.facilityGallery?.length);

  const gridSections = SECTION_ORDER.filter((key) => !(key === "facilities" && hasFacilityGallery));

  return (
    <div className="ps-page min-h-screen">
      <SiteHeader />

      <main>
        <PagePhotoSection variant="hero" src={club.coverImage} alt={club.name} priority className="py-20 md:py-28">
          <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
            <p className="ps-eyebrow">{t.detailEyebrow}</p>
            <h1 className="ps-heading mt-6 text-3xl sm:text-5xl">{club.name}</h1>
            <p className="mt-5 text-sm text-white/75 sm:text-base">
              {t.labels.location}：{club.location}
            </p>
            <p className="mt-2 text-sm text-white/75 sm:text-base">
              {t.labels.ages}：{club.ages}
            </p>
            {club.instagram && (
              <p className="mt-4">
                <a
                  href={`https://www.instagram.com/${club.instagram}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-[#F5B041]"
                >
                  <Camera className="h-4 w-4" />
                  @{club.instagram}
                </a>
              </p>
            )}
          </div>
        </PagePhotoSection>

        <section className="ps-section ps-container">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <Link
              href={lp("/clubs")}
              className="text-sm font-semibold text-[#14213D]/60 transition hover:text-[#F5B041]"
            >
              {t.backToList}
            </Link>
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-[rgba(20,33,61,0.08)] bg-[#F8F9FB]">
              {club.logoImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={club.logoImage} alt={`${club.name} logo`} className="h-12 w-12 object-contain" />
              ) : (
                <span className="text-[10px] font-extrabold tracking-wide text-[#14213D]/45">LOGO</span>
              )}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {gridSections
              .filter((key) => key === "overview")
              .map((key) => (
                <Reveal key={key}>
                  <article className="ps-card h-full p-6 sm:p-7 lg:col-span-2">
                    <h2 className="text-lg font-extrabold text-[#14213D]">{t.sectionTitles[key]}</h2>
                    <p className="mt-4 text-sm leading-7 text-[#111111]/70">{club.sections[key]}</p>
                  </article>
                </Reveal>
              ))}
          </div>

          {hasFacilityGallery && (
            <Reveal>
              <article className="ps-card mt-6 p-6 sm:p-8">
                <h2 className="text-lg font-extrabold text-[#14213D]">{t.sectionTitles.facilities}</h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#111111]/70">{club.sections.facilities}</p>
                <ClubFacilityGallery photos={club.facilityGallery!} />
              </article>
            </Reveal>
          )}

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {gridSections
              .filter((key) => key !== "overview")
              .map((key, index) => (
                <Reveal key={key} delay={index * 40}>
                  <article className="ps-card h-full p-6 sm:p-7">
                    <h2 className="text-lg font-extrabold text-[#14213D]">{t.sectionTitles[key]}</h2>
                    <p className="mt-4 text-sm leading-7 text-[#111111]/70">{club.sections[key]}</p>
                  </article>
                </Reveal>
              ))}
          </div>
        </section>

        <section className="ps-section ps-bg-subtle">
          <div className="ps-container">
            <p className="ps-eyebrow">{t.galleryEyebrow}</p>
            <h2 className="ps-heading mt-4">{t.galleryTitle}</h2>
            <p className="ps-lead mt-4 max-w-2xl text-sm sm:text-base">{t.galleryLead}</p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {club.gallery.map((item) => (
                <div key={item.label} className="overflow-hidden rounded-2xl">
                  <div className="relative aspect-[4/3] w-full">
                    <Photo
                      src={item.src}
                      alt={item.alt}
                      placeholderLabel={item.label}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="h-full w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ps-section ps-container">
          <p className="ps-eyebrow">{t.supportEyebrow}</p>
          <h2 className="ps-heading mt-4">{t.supportTitle}</h2>
          <p className="ps-lead mt-4 max-w-2xl text-sm sm:text-base">{t.supportLead}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.supports.map((item) => (
              <div key={item.title} className="ps-card border-t-4 border-[#F5B041] p-6">
                <h3 className="text-base font-extrabold text-[#14213D]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#111111]/65">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <PagePhotoSection variant="cta" className="py-24">
          <div className="mx-auto w-full max-w-2xl px-4 text-center sm:px-6">
            <h2 className="ps-heading text-2xl sm:text-3xl">{t.detailCtaTitle}</h2>
            <p className="ps-lead mx-auto mt-4 max-w-xl text-sm sm:text-base">{t.detailCtaLead}</p>
            <ConsultCtaButtons
              variant="onDark"
              align="center"
              showLineId
              lineLabel={t.labels.contact}
              className="mx-auto mt-10 max-w-sm sm:max-w-none"
            />
            <p className="mt-6">
              <Link
                href={lp("/clubs")}
                className="text-sm text-white/60 underline underline-offset-4 hover:text-[#F5B041]"
              >
                {t.backToList}
              </Link>
              <span className="mx-3 text-white/30">/</span>
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
