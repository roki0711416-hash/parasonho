"use client";

import Link from "next/link";
import { Camera, Music2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import FloatingLineButton from "./FloatingLineButton";
import { CLUBS_PUBLISHED } from "../lib/clubs";
import { useI18n } from "../lib/i18n/I18nProvider";
import { localePath } from "../lib/i18n/locale-path";

const INSTAGRAM_URL = "https://www.instagram.com/para_sonho/";
const X_URL = "https://x.com/Para_Sonho";
const TIKTOK_URL = "https://www.tiktok.com/@para.sonho";
const YOUTUBE_URL = "https://www.youtube.com/channel/UCE_sb8Gl_vGjHHjiN3wNK-Q";

export default function SiteHeader() {
  const { locale, dict } = useI18n();
  const t = dict.common;
  const lp = (path = "") => localePath(locale, path);
  const isJapanese = locale === "ja";

  const aboutItems = [
    { href: lp("/about/company"), label: t.nav.company },
    { href: lp("/about/support"), label: t.nav.support },
    { href: lp("/about/staff"), label: t.nav.staff },
  ];

  const sectionItems = [
    { href: lp("/about/company"), label: isJapanese ? "Para Sonhoについて" : t.aboutParaSonho },
    { href: `${lp()}#programs`, label: isJapanese ? "留学プログラム" : t.nav.plans },
    ...(CLUBS_PUBLISHED ? [{ href: lp("/clubs"), label: t.nav.clubs }] : []),
    { href: lp("/about/support"), label: t.nav.support },
    { href: `${lp()}#faq`, label: t.nav.faq },
    { href: `${lp()}#contact`, label: isJapanese ? "お問い合わせ" : t.cta.formInquiry },
  ];

  const socialLinks = [
    { href: INSTAGRAM_URL, label: "Instagram", icon: <Camera className="h-4 w-4" /> },
    {
      href: X_URL,
      label: "X",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    { href: TIKTOK_URL, label: "TikTok", icon: <Music2 className="h-4 w-4" /> },
    {
      href: YOUTUBE_URL,
      label: "YouTube",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
          <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
        </svg>
      ),
    },
  ] as const;

  const [openDesktop, setOpenDesktop] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [openMobileAbout, setOpenMobileAbout] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const desktopRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!desktopRef.current) return;
      if (!desktopRef.current.contains(e.target as Node)) {
        setOpenDesktop(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header
      className={`sticky top-0 z-50 border-b transition ${
        scrolled
          ? "border-[rgba(10,61,44,0.1)] bg-white/95 shadow-sm backdrop-blur-xl"
          : "border-[rgba(10,61,44,0.08)] bg-white/90 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link href={lp()} aria-label={t.logoAlt} className="inline-flex shrink-0 items-center bg-transparent">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/parasonho-logo.png?v=2"
            alt={t.logoAlt}
            width={1851}
            height={452}
            fetchPriority="high"
            decoding="async"
            className="block h-auto w-[150px] max-w-[60vw] bg-transparent sm:w-[180px] md:w-[200px] lg:w-[210px]"
          />
        </Link>

        <nav className="hidden items-center gap-4 text-[13px] font-semibold lg:flex xl:gap-5">
          <div
            ref={desktopRef}
            className="group relative"
            onMouseEnter={() => setOpenDesktop(true)}
            onMouseLeave={() => setOpenDesktop(false)}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={openDesktop}
              onClick={() => setOpenDesktop((v) => !v)}
              className="inline-flex items-center gap-1 text-[#0A3D2C]/85 transition hover:text-[#D4A017]"
            >
              {isJapanese ? "Para Sonhoについて" : t.aboutParaSonho}
              <svg
                className={`h-3 w-3 transition-transform ${openDesktop ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.39a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div
              className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200 ${
                openDesktop ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
              }`}
              role="menu"
            >
              <div className="w-64 overflow-hidden rounded-2xl border border-[rgba(10,61,44,0.1)] bg-white text-[#0A3D2C] shadow-xl">
                <div className="border-b border-[rgba(10,61,44,0.08)] bg-[#F4F6F5] px-4 py-3 text-xs tracking-wide text-[#D4A017]">
                  {t.aboutMenuTitle}
                </div>
                <ul className="py-2">
                  {aboutItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        role="menuitem"
                        className="block px-4 py-2.5 text-sm transition hover:bg-[#F4F6F5] hover:text-[#D4A017]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {sectionItems
            .filter((item) => item.href !== lp("/about/company"))
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#0A3D2C]/85 transition hover:text-[#D4A017]"
              >
                {item.label}
              </Link>
            ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          <div className="md:hidden">
            <LanguageSwitcher compact />
          </div>
          <button
            type="button"
            aria-label={t.openMenu}
            aria-expanded={openMobile}
            onClick={() => setOpenMobile((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(10,61,44,0.12)] bg-[#F4F6F5] text-[#0A3D2C] md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              {openMobile ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden ${openMobile ? "block" : "hidden"} border-t border-[rgba(10,61,44,0.08)] bg-white`}>
        <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6">
          <button
            type="button"
            onClick={() => setOpenMobileAbout((v) => !v)}
            aria-expanded={openMobileAbout}
            className="flex w-full items-center justify-between rounded-xl bg-[#F4F6F5] px-4 py-3 text-left text-sm font-semibold text-[#0A3D2C]"
          >
            {isJapanese ? "Para Sonhoについて" : t.aboutParaSonho}
            <svg
              className={`h-4 w-4 transition-transform ${openMobileAbout ? "rotate-180" : ""}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.39a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openMobileAbout ? "mt-2 max-h-[600px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="overflow-hidden rounded-xl border border-[rgba(10,61,44,0.08)] bg-white">
              {aboutItems.map((item) => (
                <li key={item.href} className="border-t border-[rgba(10,61,44,0.08)] first:border-t-0">
                  <Link
                    href={item.href}
                    onClick={() => setOpenMobile(false)}
                    className="block px-4 py-3 text-sm transition hover:bg-[#F4F6F5] hover:text-[#D4A017]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <ul className="mt-4 space-y-1 text-sm">
            {sectionItems
              .filter((item) => item.href !== lp("/about/company"))
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpenMobile(false)}
                    className="block rounded-lg px-3 py-3 text-[#0A3D2C]/85 transition hover:bg-[#F4F6F5] hover:text-[#D4A017]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>

          <div className="mt-3 grid grid-cols-2 gap-2">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpenMobile(false)}
                className="flex items-center justify-center gap-2 rounded-full border border-[rgba(10,61,44,0.12)] px-3 py-3 text-sm font-semibold text-[#0A3D2C]/85 transition hover:border-[#D4A017]/50 hover:text-[#D4A017]"
              >
                {icon}
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
      <FloatingLineButton />
    </>
  );
}
