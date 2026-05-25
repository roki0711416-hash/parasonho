import { Camera, Music2 } from "lucide-react";
import type { ReactNode } from "react";

/**
 * SNS埋め込みカード共通コンポーネント
 *
 * 現状は「ブランドカード + プロフィールリンク」で実装。
 * 将来的に各SNSの公式埋め込み（oEmbed / blockquote+script）や
 * Graph API / X API / TikTok API 連携に差し替える際は、
 * このコンポーネント内の <Placeholder /> 部分のみを
 * 埋め込み iframe / クライアントコンポーネントに置き換える想定。
 */

export type SocialPlatform = "instagram" | "x" | "tiktok";

export interface SocialFeedItem {
  platform: SocialPlatform;
  handle: string; // 表示用 (@para_sonho など)
  profileUrl: string; // 公式プロフィールURL
  /**
   * 将来差し替え用:
   * - Instagram: 投稿の oEmbed HTML / iframe URL
   * - X: tweet ID から生成する blockquote
   * - TikTok: 投稿の oEmbed iframe URL
   */
  embedUrl?: string;
}

const PLATFORM_META: Record<
  SocialPlatform,
  {
    label: string;
    tag: string;
    cta: string;
    gradient: string;
    icon: ReactNode;
    description: string;
  }
> = {
  instagram: {
    label: "Instagram",
    tag: "INSTAGRAM",
    cta: "Instagramを見る",
    gradient: "from-[#f58529] via-[#dd2a7b] to-[#515bd4]",
    icon: <Camera className="h-7 w-7" strokeWidth={1.8} />,
    description: "写真・リール・ストーリーで現地の空気感をお届け。",
  },
  x: {
    label: "X (旧Twitter)",
    tag: "X / TWITTER",
    cta: "Xを見る",
    gradient: "from-[#0b0f0d] via-[#1f2937] to-[#0b0f0d]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    description: "最新のお知らせや募集情報を素早く発信。",
  },
  tiktok: {
    label: "TikTok",
    tag: "TIKTOK",
    cta: "TikTokを見る",
    gradient: "from-[#25F4EE] via-[#0b0f0d] to-[#FE2C55]",
    icon: <Music2 className="h-7 w-7" strokeWidth={1.8} />,
    description: "ピッチ上のプレーや現地の日常をショート動画で公開。",
  },
};

function SocialCard({ item }: { item: SocialFeedItem }) {
  const meta = PLATFORM_META[item.platform];

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#0a4f2a] hover:shadow-md">
      <div className="flex items-center justify-between border-b border-[#e5e7eb] px-4 py-3">
        <p className="text-[10px] font-bold tracking-[0.2em] text-[#0a4f2a]">
          {meta.tag}
        </p>
        <span className="h-1.5 w-1.5 rounded-full bg-[#ffcd00]" />
      </div>

      {/* 埋め込み枠（将来は iframe / blockquote を差し込む） */}
      <div className="relative aspect-square w-full overflow-hidden">
        {item.embedUrl ? (
          <iframe
            src={item.embedUrl}
            title={`${meta.label} embed`}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            allow="encrypted-media"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <div
            className={`flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br ${meta.gradient} px-4 text-center text-white`}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
              {meta.icon}
            </div>
            <p className="text-base font-bold">{meta.label}</p>
            <p className="text-xs text-white/80">{item.handle}</p>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4 px-5 py-5">
        <p className="text-xs leading-6 text-[#4b5563]">{meta.description}</p>
        <a
          href={item.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#0a4f2a] px-5 py-2.5 text-sm font-bold text-[#0a4f2a] transition hover:bg-[#0a4f2a] hover:text-white"
        >
          {meta.cta}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

interface SocialFeedProps {
  items: SocialFeedItem[];
}

export default function SocialFeed({ items }: SocialFeedProps) {
  return (
    <section className="bg-[#fafaf7] py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="eyebrow">SNS</p>
        <h2 className="section-title mt-2">現地の様子をSNSで発信中</h2>
        <p className="section-subtitle">
          現地の日常・練習・選手の取り組みを、それぞれのSNSでリアルタイムにお届けしています。
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <SocialCard key={item.platform} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
