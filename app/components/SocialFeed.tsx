"use client";

import { Camera, Music2 } from "lucide-react";
import type { ReactNode } from "react";
import { useI18n } from "../lib/i18n/I18nProvider";

export type SocialPlatform = "instagram" | "x" | "tiktok" | "youtube";

const INSTAGRAM_URL = "https://www.instagram.com/para_sonho/";
const X_URL = "https://x.com/Para_Sonho";
const TIKTOK_URL = "https://www.tiktok.com/@para.sonho";
const YOUTUBE_URL = "https://www.youtube.com/channel/UCE_sb8Gl_vGjHHjiN3wNK-Q";

const HANDLES: Record<SocialPlatform, string> = {
  instagram: "@para_sonho",
  x: "@Para_Sonho",
  tiktok: "@para.sonho",
  youtube: "Para Sonho",
};

const URLS: Record<SocialPlatform, string> = {
  instagram: INSTAGRAM_URL,
  x: X_URL,
  tiktok: TIKTOK_URL,
  youtube: YOUTUBE_URL,
};

const PLATFORM_ICONS: Record<SocialPlatform, ReactNode> = {
  instagram: <Camera className="h-7 w-7" strokeWidth={1.8} />,
  x: (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  tiktok: <Music2 className="h-7 w-7" strokeWidth={1.8} />,
  youtube: (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
    </svg>
  ),
};

const PLATFORM_GRADIENTS: Record<SocialPlatform, string> = {
  instagram: "from-[#f58529] via-[#dd2a7b] to-[#515bd4]",
  x: "from-[#0b0f0d] via-[#1f2937] to-[#0b0f0d]",
  tiktok: "from-[#25F4EE] via-[#0b0f0d] to-[#FE2C55]",
  youtube: "from-[#ff0000] via-[#c4302b] to-[#0b0f0d]",
};

const PLATFORM_TAGS: Record<SocialPlatform, string> = {
  instagram: "INSTAGRAM",
  x: "X / TWITTER",
  tiktok: "TIKTOK",
  youtube: "YOUTUBE",
};

const PLATFORM_LABELS: Record<SocialPlatform, string> = {
  instagram: "Instagram",
  x: "X (Twitter)",
  tiktok: "TikTok",
  youtube: "YouTube",
};

const PLATFORMS: SocialPlatform[] = ["instagram", "x", "tiktok", "youtube"];

function SocialCard({ platform }: { platform: SocialPlatform }) {
  const { dict } = useI18n();
  const meta = dict.home.sns.platforms[platform];

  return (
    <article className="ps-card flex flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b border-[rgba(20,33,61,0.08)] px-5 py-3.5">
        <p className="text-[10px] font-bold tracking-[0.2em] text-[#F5B041]">{PLATFORM_TAGS[platform]}</p>
        <span className="h-2 w-2 rounded-full bg-[#F5B041]" />
      </div>

      <div className="relative aspect-square w-full overflow-hidden">
        <div
          className={`flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br ${PLATFORM_GRADIENTS[platform]} px-4 text-center text-white`}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
            {PLATFORM_ICONS[platform]}
          </div>
          <p className="text-lg font-bold">{PLATFORM_LABELS[platform]}</p>
          <p className="text-xs text-white/80">{HANDLES[platform]}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4 px-6 py-6">
        <p className="text-xs leading-6 text-[#111111]/60 sm:text-sm">{meta.description}</p>
        <a
          href={URLS[platform]}
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

export default function SocialFeed() {
  const { dict } = useI18n();
  const s = dict.home.sns;

  return (
    <section id="sns" className="ps-section bg-white">
      <div className="ps-container">
        <p className="ps-eyebrow">{s.eyebrow}</p>
        <h2 className="ps-heading mt-4">
          {s.title}
          <span className="ps-gold-text">{s.titleGold}</span>
          {s.titleEnd}
        </h2>
        <p className="ps-lead mt-5 max-w-2xl text-sm sm:text-base">{s.lead}</p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLATFORMS.map((platform) => (
            <SocialCard key={platform} platform={platform} />
          ))}
        </div>
      </div>
    </section>
  );
}
