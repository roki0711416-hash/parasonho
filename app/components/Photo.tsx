import Image from "next/image";
import type { ReactNode } from "react";

type Overlay = "none" | "dark" | "green" | "navy";

interface PhotoProps {
  /**
   * 画像のパス（例: "/images/hero/hero.jpg"）。
   * 未指定の場合はブラジルカラーの上品なプレースホルダーを表示します。
   * 写真を public/images 配下に置き、ここに src を指定すれば自動で差し替わります。
   */
  src?: string;
  alt: string;
  /** プレースホルダー時に中央に薄く表示するラベル（例: "練習風景"） */
  placeholderLabel?: string;
  /** 画像の上に重ねるブランドオーバーレイ */
  overlay?: Overlay;
  /** 優先読み込み（ヒーローなどLCP対象に true） */
  priority?: boolean;
  sizes?: string;
  /** 追加クラス（aspect比などは親で指定） */
  className?: string;
  /** next/image に渡す追加クラス（object-position 等） */
  imageClassName?: string;
  /** 画像の上に重ねるコンテンツ（キャプションなど） */
  children?: ReactNode;
}

const OVERLAY_CLASS: Record<Overlay, string> = {
  none: "",
  dark: "br-overlay-dark",
  green: "br-overlay-green",
  navy: "br-overlay-navy",
};

/**
 * 写真主役レイアウト用の汎用フォトコンポーネント。
 * - src があれば next/image で最適化表示
 * - src が無ければブラジルカラーのグラデーション＋ラベルを表示
 * いずれの場合も崩れず、写真追加後はそのまま本番に反映されます。
 */
export default function Photo({
  src,
  alt,
  placeholderLabel,
  overlay = "none",
  priority = false,
  sizes = "100vw",
  className = "",
  imageClassName = "object-cover object-center",
  children,
}: PhotoProps) {
  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={imageClassName}
        />
      ) : (
        <div className="br-photo-fallback absolute inset-0 flex items-center justify-center">
          <div className="relative z-10 flex flex-col items-center gap-2 px-4 text-center">
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 text-white/70"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
            {placeholderLabel && (
              <p className="text-[11px] font-bold tracking-[0.2em] text-white/80">
                {placeholderLabel}
              </p>
            )}
          </div>
        </div>
      )}

      {overlay !== "none" && (
        <div className={`absolute inset-0 ${OVERLAY_CLASS[overlay]}`} />
      )}

      {children && <div className="absolute inset-0">{children}</div>}
    </div>
  );
}
