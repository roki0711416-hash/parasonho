import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "チーム遠征プログラム｜ブラジルサッカー遠征・交流試合",
  description:
    "Para Sonho（パラソーニョ）のチーム遠征プログラム。ジュニアから社会人クラブまで、ブラジル現地大会への参加・現地クラブとの交流試合・渡航サポートを一括でご提供します。",
  alternates: { canonical: "/plans/team" },
  openGraph: {
    title: "チーム遠征プログラム｜ブラジルサッカー遠征・交流試合 | Para Sonho",
    description: "ブラジル現地大会参加・クラブ交流試合・渡航サポートをワンストップで。",
    url: "/plans/team",
  },
};

const LINE_URL = "https://line.me/R/ti/p/@593loohp";

const LINE_ICON = (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
);

export default function TeamPage() {
  return (
    <div className="ps-page min-h-screen">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-[#14213D] py-20 md:py-32">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, #F5B041 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F5B041]/10 blur-3xl" />
          <div className="relative mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
            <p className="ps-eyebrow">TEAM EXPEDITION</p>
            <h1 className="ps-heading mt-6 text-3xl sm:text-5xl">ブラジルチーム遠征プログラム</h1>
            <p className="mt-4 text-lg font-bold text-[#F5B041] sm:text-xl">
              本場ブラジルで、チームとして世界を体感する。
            </p>
            <p className="ps-lead mx-auto mt-5 max-w-2xl text-sm sm:text-base">
              Para Sonhoでは、小学生チームから社会人クラブまで、ブラジル現地大会への参加、
              現地クラブとの交流、宿泊先や現地移動の手配まで一括でサポートします。
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ps-btn-line mt-9 inline-flex w-full items-center justify-center gap-2 sm:w-auto sm:min-w-[280px]"
            >
              {LINE_ICON}
              LINEで遠征相談する
            </a>
          </div>
        </section>

        <section className="ps-section ps-container">
          <p className="ps-eyebrow">SUPPORT</p>
          <h2 className="ps-heading mt-4">サポート内容</h2>
          <p className="ps-lead mt-4 max-w-2xl text-sm sm:text-base">
            遠征に必要なすべてをワンストップでサポートします。
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="ps-card border-t-4 border-[#F5B041] p-6">
              <h3 className="text-lg font-extrabold text-[#14213D]">大会参加</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[#111111]/70">
                <li>・ブラジル現地大会への出場</li>
                <li>・本場ブラジルクラブとの対戦</li>
                <li>・年代別カテゴリーに応じた大会相談</li>
              </ul>
            </article>
            <article className="ps-card border-t-4 border-[#F5B041] p-6">
              <h3 className="text-lg font-extrabold text-[#14213D]">渡航・生活サポート</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[#111111]/70">
                <li>・宿泊先の手配</li>
                <li>・空港送迎</li>
                <li>・現地移動サポート</li>
                <li>・通訳サポート</li>
                <li>・食事や生活面の相談</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="ps-section ps-bg-subtle">
          <div className="ps-container">
            <p className="ps-eyebrow">TARGET</p>
            <h2 className="ps-heading mt-4">対象</h2>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {["小学生チーム", "ジュニアユース", "中学生", "高校生", "大学生", "社会人クラブ"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-[rgba(20,33,61,0.08)] bg-white px-5 py-4 text-sm font-semibold text-[#14213D]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-xs font-extrabold text-white">
                      ✓
                    </span>
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#14213D] py-24">
          <div className="relative mx-auto w-full max-w-2xl px-4 text-center sm:px-6">
            <h2 className="ps-heading text-2xl sm:text-3xl">チーム遠征の相談はこちら</h2>
            <p className="ps-lead mx-auto mt-4 max-w-xl text-sm sm:text-base">
              人数・時期・目的に合わせてプランをご提案します。
              まずはお気軽にLINEでご相談ください。
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ps-btn-line mt-10 inline-flex w-full items-center justify-center gap-3 sm:w-auto sm:min-w-[320px]"
            >
              {LINE_ICON}
              LINEで遠征相談する
            </a>
            <p className="mt-4 text-xs text-white/50">LINE ID：@593loohp</p>
            <p className="mt-6">
              <Link href="/" className="text-sm text-white/60 underline underline-offset-4 hover:text-[#F5B041]">
                ← TOPページへ戻る
              </Link>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
