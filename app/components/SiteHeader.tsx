"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const aboutItems: Array<{ href: string; label: string }> = [
  { href: "/about/company", label: "会社概要" },
  { href: "/about/parasonho", label: "Para Sonhoについて" },
  { href: "/about/message", label: "代表メッセージ" },
  { href: "/about/support", label: "サポート内容" },
  { href: "/about/santos", label: "ブラジル・サントス紹介" },
  { href: "/about/flow", label: "留学の流れ" },
  { href: "/about/faq", label: "よくある質問" },
  { href: "/about/staff", label: "スタッフ紹介" },
];

const sectionItems: Array<{ href: string; label: string }> = [
  { href: "/#service", label: "サービス内容" },
  { href: "/#plans", label: "留学プラン" },
  { href: "/#features", label: "サントス留学の特徴" },
  { href: "/#pricing", label: "料金イメージ" },
  { href: "/#faq", label: "よくある質問" },
  { href: "/#contact", label: "お問い合わせ" },
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

          {sectionItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#0b6a37]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="hidden rounded-full bg-[#ffcd00] px-4 py-2 text-sm font-bold text-[#0e512e] shadow-sm transition hover:scale-[1.02] hover:bg-[#ffd735] md:inline-block"
          >
            無料相談する
          </Link>

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

          <Link
            href="/#contact"
            onClick={() => setOpenMobile(false)}
            className="mt-4 block rounded-full bg-[#ffcd00] px-4 py-3 text-center text-sm font-bold text-[#0e512e] shadow-sm transition hover:bg-[#ffd735]"
          >
            無料相談する
          </Link>
        </div>
      </div>
    </header>
  );
}
