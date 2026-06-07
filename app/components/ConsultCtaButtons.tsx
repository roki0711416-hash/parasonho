import { GFORM_URL, LINE_ID, LINE_URL } from "../lib/contact";
import LineIcon from "./LineIcon";

type ConsultCtaVariant = "onDark" | "onLight";
type ConsultCtaSize = "default" | "compact";

interface ConsultCtaButtonsProps {
  /** 暗い背景（Hero等）か明るい背景か */
  variant?: ConsultCtaVariant;
  size?: ConsultCtaSize;
  lineLabel?: string;
  formLabel?: string;
  className?: string;
  align?: "start" | "center";
  showLineId?: boolean;
  showForm?: boolean;
}

const variantStyles = {
  onDark: {
    form: "ps-btn-ghost-light",
    lineId: "text-white/50",
  },
  onLight: {
    form: "ps-btn-ghost",
    lineId: "text-[#111111]/50",
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
  lineLabel = "LINEで無料相談する",
  formLabel = "相談フォームから問い合わせる",
  className = "",
  align = "start",
  showLineId = false,
  showForm = true,
}: ConsultCtaButtonsProps) {
  const v = variantStyles[variant];
  const s = sizeStyles[size];
  const alignClass =
    align === "center"
      ? "items-stretch sm:items-center sm:justify-center"
      : "items-stretch sm:items-center";

  return (
    <div className={className}>
      <div className={`flex flex-col ${s.wrapper} ${alignClass}`}>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`ps-btn-line inline-flex items-center justify-center gap-2 ${s.btn}`}
        >
          <LineIcon className="h-5 w-5 shrink-0" />
          {lineLabel}
        </a>
        {showForm && (
          <a
            href={GFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${v.form} inline-flex items-center justify-center ${s.btn}`}
          >
            {formLabel}
          </a>
        )}
      </div>
      {showLineId && <p className={`mt-4 text-center text-xs ${v.lineId}`}>LINE ID：{LINE_ID}</p>}
    </div>
  );
}
