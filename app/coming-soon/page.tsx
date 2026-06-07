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
    <div className="ps-page relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-6 text-center">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #14213D 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#F5B041]/8 blur-3xl" />

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
            LINEで先行相談する
          </a>
          <p className="text-xs text-[#111111]/45">LINE ID：@593loohp</p>
        </div>

        <div className="mt-10">
          <p className="ps-eyebrow text-[#111111]/35">FOLLOW US</p>
          <div className="mt-4 flex items-center justify-center gap-4">
            {[
              { href: INSTAGRAM_URL, label: "Instagram" },
              { href: X_URL, label: "X" },
              { href: TIKTOK_URL, label: "TikTok" },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(20,33,61,0.12)] bg-[#F8F9FB] text-[#14213D] transition hover:border-[#F5B041] hover:text-[#F5B041]"
              >
                {label.charAt(0)}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-12 text-[10px] tracking-wide text-[#111111]/30">
          © {new Date().getFullYear()} Para Sonho / パラソーニョ
        </p>
      </div>
    </div>
  );
}
