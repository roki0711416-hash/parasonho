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
    <div className="ps-dark relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0E1322] px-6 text-center">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #F5B041 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#F5B041]/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#F5B041]/5 blur-3xl" />

      <div className="relative flex w-full max-w-xl flex-col items-center">
        <span className="ps-eyebrow">GLOBAL FOOTBALL CHALLENGE</span>

        <h1 className="ps-heading mt-8 text-3xl sm:text-5xl">Coming Soon</h1>
        <p className="mt-3 text-base font-bold tracking-wide text-[#F5B041] sm:text-lg">
          Para Sonho / パラソーニョ
        </p>

        <p className="ps-lead mx-auto mt-6 max-w-md text-sm sm:text-base">
          ただいまオープン準備中です。
          <br className="hidden sm:block" />
          本場ブラジルでのサッカー留学・海外挑戦をサポートするサービスを、
          まもなく公開いたします。
        </p>

        <div className="mt-10 flex w-full flex-col items-center gap-4">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ps-btn-line inline-flex w-full items-center justify-center gap-2 sm:w-auto"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            LINEで先行相談する
          </a>
          <p className="text-xs text-[#E9E1D1]/50">LINE ID：@593loohp</p>
        </div>

        <div className="mt-10">
          <p className="ps-eyebrow text-[#E9E1D1]/40">FOLLOW US</p>
          <div className="mt-4 flex items-center justify-center gap-4">
            {[
              { href: INSTAGRAM_URL, label: "Instagram", icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              )},
              { href: X_URL, label: "X", icon: (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              )},
              { href: TIKTOK_URL, label: "TikTok", icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.2v12.93a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 1 1 .73-5.07v-3.26a5.84 5.84 0 0 0-.73-.05A5.85 5.85 0 1 0 15.4 16v-6.6a7.5 7.5 0 0 0 4.42 1.42v-3.2a4.28 4.28 0 0 1-3.22-1.8z" />
                </svg>
              )},
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(245,176,65,0.25)] bg-[#1B2338] text-[#E9E1D1] transition hover:border-[#F5B041] hover:text-[#F5B041]"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-12 text-[10px] tracking-wide text-[#E9E1D1]/30">
          © {new Date().getFullYear()} Para Sonho / パラソーニョ
        </p>
      </div>
    </div>
  );
}
