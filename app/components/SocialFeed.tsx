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

export type SocialPlatform = "instagram" | "x" | "tiktok" | "youtube";

export interface SocialFeedItem {
  platform: SocialPlatform;
  handle: string;
  profileUrl: string;
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
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
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
  youtube: {
    label: "YouTube",
    tag: "YOUTUBE",
    cta: "YouTubeを見る",
    gradient: "from-[#ff0000] via-[#c4302b] to-[#0b0f0d]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
      </svg>
    ),
    description: "現地の練習・試合・密着映像を動画でじ覧いただけます。",
  },
};

function SocialCard({ item }: { item: SocialFeedItem }) {
  const meta = PLATFORM_META[item.platform];

  return (
    <article className="ps-card flex flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b border-[rgba(20,33,61,0.08)] px-5 py-3.5">
        <p className="text-[10px] font-bold tracking-[0.2em] text-[#F5B041]">{meta.tag}</p>
        <span className="h-2 w-2 rounded-full bg-[#F5B041]" />
      </div>

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
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
              {meta.icon}
            </div>
            <p className="text-lg font-bold">{meta.label}</p>
            <p className="text-xs text-white/80">{item.handle}</p>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4 px-6 py-6">
        <p className="text-xs leading-6 text-[#111111]/60 sm:text-sm">{meta.description}</p>
        <a
          href={item.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#14213D]/15 px-5 py-3 text-sm font-bold text-[#14213D] transition hover:border-[#F5B041] hover:bg-[#F5B041] hover:text-white"
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
    <section id="sns" className="ps-section bg-white">
      <div className="ps-container">
        <p className="ps-eyebrow">SNS</p>
        <h2 className="ps-heading mt-4">
          現地の様子を<span className="ps-gold-text">SNS</span>で発信中
        </h2>
        <p className="ps-lead mt-5 max-w-2xl text-sm sm:text-base">
          現地の日常・練習・選手の取り組みを、それぞれのSNSでリアルタイムにお届けしています。
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <SocialCard key={item.platform} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
