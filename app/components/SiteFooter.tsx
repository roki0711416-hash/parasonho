import Link from "next/link";
import Image from "next/image";
import { Camera, Music2 } from "lucide-react";

const LINE_URL = "https://line.me/R/ti/p/@593loohp";
const GFORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScwxBEWIxBWeQpoHuQi-BV0OaWao-pDAPg9AhhzIr1sEPcsmA/viewform?usp=dialog";
const INSTAGRAM_URL = "https://www.instagram.com/para_sonho/";
const X_URL = "https://x.com/Para_Sonho";
const TIKTOK_URL = "https://www.tiktok.com/@para.sonho";
const YOUTUBE_URL = "https://www.youtube.com/channel/UCE_sb8Gl_vGjHHjiN3wNK-Q";

const LineIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
);

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

export default function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(20,33,61,0.08)] bg-white">
      <div className="relative min-h-[420px] overflow-hidden sm:min-h-[480px]">
        <Image
          src="/images/75b4a5130_generated_599a3079.png"
          alt="夕暮れのサッカー場"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/95 via-[#14213D]/75 to-[#14213D]/55" />
        <div className="ps-container relative z-10 py-20 text-center sm:py-24">
          <p className="ps-eyebrow justify-center">START YOUR CHALLENGE</p>
          <h2 className="ps-heading mx-auto mt-5 max-w-3xl text-white">
            世界への挑戦は、
            <br className="sm:hidden" />
            <span className="ps-gold-text">ここから始まる。</span>
          </h2>
          <p className="ps-lead mx-auto mt-5 max-w-xl text-sm sm:text-base">
            年齢・レベルは問いません。まずは気軽に、あなたの挑戦を聞かせてください。
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ps-btn-line w-full text-base sm:w-auto sm:min-w-[260px]"
            >
              <LineIcon className="h-5 w-5" />
              LINEで無料相談する
            </a>
            <a
              href={GFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ps-btn-ghost-light w-full text-base sm:w-auto"
            >
              相談フォームから問い合わせる
            </a>
          </div>
          <p className="mt-5 text-xs text-white/50">LINE ID：@593loohp</p>
        </div>
      </div>

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
