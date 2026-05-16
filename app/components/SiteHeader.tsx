"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const aboutItems: Array<{ href: string; label: string }> = [
  { href: "/about/company", label: "会社概要" },
  { href: "/about/support", label: "サポート内容" },
  { href: "/about/staff", label: "スタッフ紹介" },
];

const LINE_URL = "https://line.me/R/ti/p/@593loohp";

const sectionItems: Array<{ href: string; label: string; external?: boolean }> = [
  { href: "/#service", label: "サービス内容" },
  { href: "/#plans", label: "留学プラン" },
  { href: "/#team", label: "チーム遠征" },
  { href: "/#faq", label: "よくある質問" },
  { href: LINE_URL, label: "LINE相談", external: true },
];

export default function SiteHeader() {
  const [openDesktop, setOpenDesktop] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [openMobileAbout, setOpenMobileAbout] = useState(false);
  const desktopRef = useRef<HTMLDivElement | null>(null);

  // 外側クリックで閉じる
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

  return (
    <header className="sticky top-0 z-50 border-b border-[#d6e9c9] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="font-bold tracking-wide">
          <span className="text-xl text-[#0b6a37]">Para Sonho</span>
          <span className="ml-2 text-sm font-medium text-[#4e8a3d]">/ パラソーニョ</span>
        </Link>

        {/* PCナビ */}
        <nav className="hidden items-center gap-5 text-sm md:flex">
          {/* Para Sonhoとは ドロップダウン */}
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
              className="inline-flex items-center gap-1 transition hover:text-[#0b6a37]"
            >
              Para Sonhoとは
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
                openDesktop ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-1"
              }`}
              role="menu"
            >
              <div className="w-64 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f0d] text-white shadow-2xl">
                <div className="border-b border-white/10 px-4 py-3 text-xs tracking-wide text-[#ffcd00]">
                  ABOUT PARA SONHO
                </div>
                <ul className="py-2">
                  {aboutItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        role="menuitem"
                        className="block px-4 py-2.5 text-sm transition hover:bg-white/10 hover:text-[#ffcd00]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {sectionItems.map((item) =>
            item.external ? (
              <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#06C755] transition hover:text-[#05b34c] font-semibold">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href} className="transition hover:text-[#0b6a37]">
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#06C755] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:scale-[1.02] hover:bg-[#05b34c] md:inline-flex"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
            LINEで無料相談
          </a>

          {/* モバイル メニューボタン */}
          <button
            type="button"
            aria-label="メニューを開く"
            aria-expanded={openMobile}
            onClick={() => setOpenMobile((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d6e9c9] bg-white text-[#0b6a37] md:hidden"
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

      {/* モバイル メニュー */}
      <div
        className={`md:hidden ${openMobile ? "block" : "hidden"} border-t border-[#d6e9c9] bg-white`}
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6">
          <button
            type="button"
            onClick={() => setOpenMobileAbout((v) => !v)}
            aria-expanded={openMobileAbout}
            className="flex w-full items-center justify-between rounded-xl bg-[#0b0f0d] px-4 py-3 text-left text-sm font-semibold text-white"
          >
            Para Sonhoとは
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
            <ul className="overflow-hidden rounded-xl bg-[#0b0f0d] text-white">
              {aboutItems.map((item) => (
                <li key={item.href} className="border-t border-white/10 first:border-t-0">
                  <Link
                    href={item.href}
                    onClick={() => setOpenMobile(false)}
                    className="block px-4 py-3 text-sm transition hover:bg-white/10 hover:text-[#ffcd00]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <ul className="mt-4 space-y-1 text-sm">
            {sectionItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpenMobile(false)}
                  className="block rounded-lg px-3 py-2 transition hover:bg-[#f3faed]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpenMobile(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#06C755] px-4 py-4 text-base font-bold text-white shadow-md transition hover:bg-[#05b34c]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
            LINEで無料相談
          </a>
        </div>
      </div>
    </header>
  );
}
