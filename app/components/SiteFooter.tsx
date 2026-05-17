import { Camera, Music2, PlayCircle } from "lucide-react";

const INSTAGRAM_URL = "https://instagram.com/parasonho_official";
const TIKTOK_URL = "https://www.tiktok.com/@parasonho_official";
const YOUTUBE_URL = "https://www.youtube.com/@parasonho_official";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#d6e9c9] bg-white px-4 py-10 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="rounded-2xl border border-[#d6e9c9] bg-[#f9fff4] px-6 py-7 text-center sm:px-8">
          <h2 className="text-lg font-extrabold text-[#0b6a37]">公式SNS</h2>
          <p className="mt-2 text-sm text-[#4f735f]">ブラジル現地の様子や留学情報を発信しています。</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#d6e9c9] bg-white px-4 py-2 text-sm font-semibold text-[#0b6a37] transition hover:border-[#0b6a37] hover:bg-[#f3faed]"
            >
              <Camera className="h-4 w-4" />
              Instagram
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#d6e9c9] bg-white px-4 py-2 text-sm font-semibold text-[#0b6a37] transition hover:border-[#0b6a37] hover:bg-[#f3faed]"
            >
              <Music2 className="h-4 w-4" />
              TikTok
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#d6e9c9] bg-white px-4 py-2 text-sm font-semibold text-[#0b6a37] transition hover:border-[#0b6a37] hover:bg-[#f3faed]"
            >
              <PlayCircle className="h-4 w-4" />
              YouTube
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-[#4f735f]">© {new Date().getFullYear()} Para Sonho / パラソーニョ</p>
      </div>
    </footer>
  );
}
