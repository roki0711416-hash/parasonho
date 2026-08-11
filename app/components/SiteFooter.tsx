"use client";

import Link from "next/link";
import { Camera, Music2 } from "lucide-react";
import { CLUBS_PUBLISHED } from "../lib/clubs";
import { useI18n } from "../lib/i18n/I18nProvider";
import { localePath } from "../lib/i18n/locale-path";

const INSTAGRAM_URL = "https://www.instagram.com/para_sonho/";
const X_URL = "https://x.com/Para_Sonho";
const TIKTOK_URL = "https://www.tiktok.com/@para.sonho";
const YOUTUBE_URL = "https://www.youtube.com/channel/UCE_sb8Gl_vGjHHjiN3wNK-Q";

interface SiteFooterProps {
  /** @deprecated CTAはHomePage側で表示。互換のため残置 */
  showChallengeCta?: boolean;
  challengeImageSrc?: string;
  challengeImageClassName?: string;
}

export default function SiteFooter(_props: SiteFooterProps = {}) {
  const { locale, dict } = useI18n();
  const t = dict.common;
  const lp = (path = "") => localePath(locale, path);

  const aboutLinks = [
    { href: lp("/about/company"), label: t.nav.company },
    { href: lp("/about/support"), label: t.nav.support },
    { href: lp("/about/staff"), label: t.nav.staff },
  ];

  const siteLinks = [
    { href: `${lp()}#programs`, label: t.nav.plans },
    ...(CLUBS_PUBLISHED ? [{ href: lp("/clubs"), label: t.nav.clubs }] : []),
    { href: lp("/about/support"), label: t.nav.support },
    { href: `${lp()}#faq`, label: t.nav.faq },
    { href: `${lp()}#contact`, label: locale === "ja" ? "お問い合わせ" : t.cta.formInquiry },
  ];

  return (
    <footer className="border-t border-[rgba(10,61,44,0.08)] bg-white">
      <div className="ps-container py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-lg font-black tracking-tight text-[#0A3D2C]">{t.brand}</p>
            <p className="ps-lead mt-3 max-w-sm text-sm">{t.footer.description}</p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { href: INSTAGRAM_URL, label: "Instagram", icon: <Camera className="h-5 w-5" /> },
                {
                  href: X_URL,
                  label: "X",
                  icon: (
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                { href: TIKTOK_URL, label: "TikTok", icon: <Music2 className="h-5 w-5" /> },
                {
                  href: YOUTUBE_URL,
                  label: "YouTube",
                  icon: (
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
                      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
                    </svg>
                  ),
                },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(10,61,44,0.12)] text-[#0A3D2C]/70 transition hover:border-[#D4A017]/50 hover:text-[#D4A017]"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <nav>
            <p className="text-[10px] font-bold tracking-[0.25em] text-[#D4A017]">{t.contents}</p>
            <ul className="mt-4 space-y-3 text-sm">
              {siteLinks.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link href={link.href} className="text-[#111111]/70 transition hover:text-[#0A3D2C]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <p className="text-[10px] font-bold tracking-[0.25em] text-[#D4A017]">{t.about}</p>
            <ul className="mt-4 space-y-3 text-sm">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#111111]/70 transition hover:text-[#0A3D2C]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[rgba(10,61,44,0.08)] pt-8 sm:flex-row">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-[#111111]/35">{t.globalTagline}</p>
          <p className="text-xs text-[#111111]/50" suppressHydrationWarning>
            © {new Date().getFullYear()} {t.brand}
          </p>
        </div>
      </div>
    </footer>
  );
}
