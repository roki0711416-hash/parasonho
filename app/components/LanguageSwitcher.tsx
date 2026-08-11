"use client";

import { Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { localeNames, locales, type Locale } from "../lib/i18n/config";
import { switchLocalePath } from "../lib/i18n/locale-path";
import { useI18n } from "../lib/i18n/I18nProvider";

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, dict } = useI18n();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function selectLanguage(next: Locale) {
    setOpen(false);
    if (next === locale) return;
    const href = switchLocalePath(pathname, locale, next);
    router.push(href);
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={dict.common.selectLanguage}
        className={
          compact
            ? "inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(10,61,44,0.12)] bg-[#F4F6F5] text-[#0A3D2C] transition hover:border-[#D4A017]/50 hover:text-[#D4A017]"
            : "inline-flex items-center gap-1.5 rounded-full border border-[rgba(10,61,44,0.12)] px-3 py-2 text-sm font-semibold text-[#0A3D2C]/85 transition hover:border-[#D4A017]/50 hover:text-[#D4A017]"
        }
      >
        <Globe className="h-4 w-4 shrink-0" aria-hidden="true" />
        {!compact && <span className="max-w-[5rem] truncate">{localeNames[locale]}</span>}
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={dict.common.selectLanguage}
          className="absolute right-0 top-full z-[60] mt-2 max-h-72 w-52 overflow-y-auto rounded-2xl border border-[rgba(10,61,44,0.08)] bg-white py-2 shadow-xl"
        >
          {locales.map((code) => (
            <li key={code} role="option" aria-selected={code === locale}>
              <button
                type="button"
                onClick={() => selectLanguage(code)}
                className={`flex w-full px-4 py-2.5 text-left text-sm transition hover:bg-[#F4F6F5] ${
                  code === locale ? "font-bold text-[#0A3D2C]" : "text-[#111111]/75"
                }`}
              >
                {localeNames[code]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
