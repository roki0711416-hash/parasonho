import { Camera, Music2 } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/para_sonho/";
const X_URL = "https://x.com/Para_Sonho";
const TIKTOK_URL = "https://www.tiktok.com/@para.sonho";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#e5e7eb] bg-[#fafaf7] px-4 py-12 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="rounded-2xl border border-[#e5e7eb] bg-white px-6 py-8 text-center sm:px-8">
          <p className="text-[10px] font-bold tracking-[0.25em] text-[#0a4f2a]">OFFICIAL SNS</p>
          <h2 className="mt-2 text-lg font-extrabold text-[#0b0f0d]">公式SNS</h2>
          <p className="mt-2 text-sm text-[#4b5563]">現地の様子や留学情報を発信しています。</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-5 py-2.5 text-sm font-semibold text-[#0a4f2a] transition hover:border-[#0a4f2a] hover:bg-[#fafaf7]"
            >
              <Camera className="h-4 w-4" />
              Instagram @para_sonho
            </a>
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-5 py-2.5 text-sm font-semibold text-[#0a4f2a] transition hover:border-[#0a4f2a] hover:bg-[#fafaf7]"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              X @Para_Sonho
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-5 py-2.5 text-sm font-semibold text-[#0a4f2a] transition hover:border-[#0a4f2a] hover:bg-[#fafaf7]"
            >
              <Music2 className="h-4 w-4" />
              TikTok @para.sonho
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-1">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-[#9ca3af]">GLOBAL FOOTBALL CHALLENGE</p>
          <p className="text-xs text-[#6b7280]">© {new Date().getFullYear()} Para Sonho / パラソーニョ</p>
        </div>
      </div>
    </footer>
  );
}
