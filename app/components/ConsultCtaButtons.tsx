"use client";

import { GFORM_URL } from "../lib/contact";
import { useI18n } from "../lib/i18n/I18nProvider";

type ConsultCtaVariant = "onDark" | "onLight";
type ConsultCtaSize = "default" | "compact";

interface ConsultCtaButtonsProps {
  variant?: ConsultCtaVariant;
  size?: ConsultCtaSize;
  formLabel?: string;
  className?: string;
  align?: "start" | "center";
  stacked?: boolean;
  /** @deprecated LINE導線は右下フローティングに統一。互換のため残す */
  lineLabel?: string;
  /** @deprecated */
  showLineId?: boolean;
  /** @deprecated */
  showForm?: boolean;
}

const variantStyles = {
  onDark: {
    form: "ps-btn-ghost-light",
  },
  onLight: {
    form: "ps-btn-ghost",
  },
} as const;

const sizeStyles = {
  default: {
    wrapper: "gap-3 sm:flex-row sm:items-center sm:gap-4",
    btn: "w-full text-base sm:w-auto sm:min-w-[240px]",
  },
  compact: {
    wrapper: "gap-2 sm:flex-row sm:items-center sm:gap-4",
    btn: "w-full py-3.5 text-sm sm:w-auto sm:min-w-[240px] sm:py-[1.05rem] sm:text-base",
  },
} as const;

export default function ConsultCtaButtons({
  variant = "onLight",
  size = "default",
  formLabel,
  className = "",
  align = "start",
  stacked = false,
}: ConsultCtaButtonsProps) {
  const { dict } = useI18n();
  const cta = dict.common.cta;
  const resolvedFormLabel = formLabel ?? cta.formInquiry;

  const v = variantStyles[variant];
  const s = sizeStyles[size];
  const alignClass =
    align === "center"
      ? "items-stretch sm:items-center sm:justify-center"
      : "items-stretch sm:items-center";
  const layoutClass = stacked ? "flex flex-col gap-3" : `flex flex-col ${s.wrapper}`;

  return (
    <div className={className}>
      <div className={`${layoutClass} ${alignClass}`}>
        <a
          href={GFORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${v.form} inline-flex items-center justify-center ${s.btn}`}
        >
          {resolvedFormLabel}
        </a>
      </div>
    </div>
  );
}
