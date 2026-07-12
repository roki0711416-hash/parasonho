"use client";

import { LINE_URL } from "../lib/contact";
import LineIcon from "./LineIcon";
import { useI18n } from "../lib/i18n/I18nProvider";

export default function FloatingLineButton() {
  const { dict } = useI18n();

  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="br-line-fab fixed bottom-5 right-4 z-50 flex items-center gap-2 rounded-full bg-[#22C55E] px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:scale-[1.03] hover:bg-[#16A34A] sm:bottom-6 sm:right-6 md:hidden"
      aria-label={dict.common.cta.lineFreeFull}
    >
      <LineIcon className="h-5 w-5" />
      {dict.common.cta.floatingFree}
    </a>
  );
}
