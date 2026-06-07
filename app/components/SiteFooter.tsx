import Link from "next/link";
import { Camera, Music2 } from "lucide-react";
import ConsultCtaButtons from "./ConsultCtaButtons";
import PhotoBackdrop from "./PhotoBackdrop";
import { FIELD_IMAGE } from "../lib/images";

const INSTAGRAM_URL = "https://www.instagram.com/para_sonho/";
const X_URL = "https://x.com/Para_Sonho";
const TIKTOK_URL = "https://www.tiktok.com/@para.sonho";
const YOUTUBE_URL = "https://www.youtube.com/channel/UCE_sb8Gl_vGjHHjiN3wNK-Q";

const aboutLinks = [
  { href: "/about/company", label: "会社概要" },
  { href: "/about/support", label: "サポート内容" },
  { href: "/about/staff", label: "スタッフ紹介" },
];

const siteLinks = [
  { href: "/#plans", label: "留学プラン" },
  { href: "/plans/pro-test", label: "プロテスト" },
  { href: "/#faq", label: "よくある質問" },
];

interface SiteFooterProps {
  /** TOPページのみ true。フッター上部のCTAバナーを表示する */
  showChallengeCta?: boolean;
}

export default function SiteFooter({ showChallengeCta = false }: SiteFooterProps) {
  return (
    <footer className="border-t border-[rgba(20,33,61,0.08)] bg-white">
      {showChallengeCta && (
        <div className="relative min-h-[420px] overflow-hidden sm:min-h-[480px]">
          <PhotoBackdrop
            src={FIELD_IMAGE}
            alt="夕暮れのサッカー場"
            variant="footer"
            imageClassName="object-cover object-center"
          />
          <div className="ps-container relative z-10 py-20 text-center ps-on-photo sm:py-24">
            <p className="ps-eyebrow justify-center">START YOUR CHALLENGE</p>
            <h2 className="ps-heading mx-auto mt-5 max-w-3xl text-white">
              世界への挑戦は、
              <br className="sm:hidden" />
              <span className="ps-gold-text">ここから始まる。</span>
            </h2>
            <p className="ps-lead mx-auto mt-5 max-w-xl text-sm sm:text-base">
              年齢・レベルは問いません。まずは気軽に、あなたの挑戦を聞かせてください。
            </p>
            <ConsultCtaButtons variant="onDark" align="center" showLineId className="mx-auto mt-10 max-w-sm sm:max-w-none" />
          </div>
        </div>
      )}

      <div className="ps-container py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-lg font-black tracking-tight text-[#14213D]">Para Sonho / パラソーニョ</p>
            <p className="ps-lead mt-3 max-w-sm text-sm">
              本場ブラジルを舞台に、サッカー留学・海外サッカー挑戦をサポート。現地クラブ練習・生活・通訳・遠征までワンストップで。
            </p>
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
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(20,33,61,0.12)] text-[#14213D]/70 transition hover:border-[#F5B041]/50 hover:text-[#F5B041]"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <nav>
            <p className="text-[10px] font-bold tracking-[0.25em] text-[#F5B041]">CONTENTS</p>
            <ul className="mt-4 space-y-3 text-sm">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#111111]/70 transition hover:text-[#14213D]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <p className="text-[10px] font-bold tracking-[0.25em] text-[#F5B041]">ABOUT</p>
            <ul className="mt-4 space-y-3 text-sm">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#111111]/70 transition hover:text-[#14213D]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[rgba(20,33,61,0.08)] pt-8 sm:flex-row">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-[#111111]/35">
            GLOBAL FOOTBALL CHALLENGE
          </p>
          <p className="text-xs text-[#111111]/50" suppressHydrationWarning>
            © {new Date().getFullYear()} Para Sonho / パラソーニョ
          </p>
        </div>
      </div>
    </footer>
  );
}
