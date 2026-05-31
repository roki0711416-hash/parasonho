export const metadata = {
  title: "準備中｜Para Sonho / パラソーニョ",
  description:
    "Para Sonho（パラソーニョ）は現在オープン準備中です。ブラジルサッカー留学・海外サッカー挑戦サポートを近日公開予定。",
  robots: { index: false, follow: false },
};

const LINE_URL = "https://line.me/R/ti/p/@593loohp";
const INSTAGRAM_URL = "https://www.instagram.com/para_sonho/";
const X_URL = "https://x.com/Para_Sonho";
const TIKTOK_URL = "https://www.tiktok.com/@para.sonho";

export default function ComingSoonPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b0f0d] via-[#0a3a1f] to-[#0a4f2a] px-6 text-center text-white">
      {/* 背景装飾 */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#0b6a37]/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#0a4f2a]/40 blur-3xl" />

      <div className="relative flex w-full max-w-xl flex-col items-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[10px] font-bold tracking-[0.25em] text-white/80">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ffcd00]" />
          GLOBAL FOOTBALL CHALLENGE
        </span>

        <h1 className="mt-8 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Coming Soon
        </h1>
        <p className="mt-3 text-base font-bold tracking-wide text-[#ffcd00] sm:text-lg">
          Para Sonho / パラソーニョ
        </p>

        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-white/75 sm:text-base">
          ただいまオープン準備中です。
          <br className="hidden sm:block" />
          本場ブラジルでのサッカー留学・海外挑戦をサポートするサービスを、
          まもなく公開いたします。
        </p>

        {/* CTA */}
        <div className="mt-10 flex w-full flex-col items-center gap-4">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#06C755] px-9 py-4 text-base font-extrabold text-white shadow-lg transition hover:bg-[#05b34c] sm:w-auto"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            LINEで先行相談する
          </a>
          <p className="text-xs text-white/60">LINE ID：@593loohp</p>
        </div>

        {/* SNS */}
        <div className="mt-10">
          <p className="text-[10px] font-bold tracking-[0.25em] text-white/50">FOLLOW US</p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:border-[#ffcd00] hover:text-[#ffcd00]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:border-[#ffcd00] hover:text-[#ffcd00]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:border-[#ffcd00] hover:text-[#ffcd00]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.2v12.93a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 1 1 .73-5.07v-3.26a5.84 5.84 0 0 0-.73-.05A5.85 5.85 0 1 0 15.4 16v-6.6a7.5 7.5 0 0 0 4.42 1.42v-3.2a4.28 4.28 0 0 1-3.22-1.8z" />
              </svg>
            </a>
          </div>
        </div>

        <p className="mt-12 text-[10px] tracking-wide text-white/40">
          © {new Date().getFullYear()} Para Sonho / パラソーニョ
        </p>
      </div>
    </div>
  );
}
