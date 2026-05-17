import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "チーム遠征プログラム | Para Sonho / パラソーニョ",
  description:
    "小学生チームから社会人クラブまで、ブラジル現地大会への参加・現地クラブとの交流・渡航サポートを一括でご提供します。",
};

const LINE_URL = "https://line.me/R/ti/p/@593loohp";

const LINE_ICON = (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
);

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#f8fff6] text-[#123524]">
      <SiteHeader />

      <main>
        {/* ヒーロー */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0b6a37] via-[#0e7d42] to-[#137744] py-20 text-white md:py-32">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#ffcd00]/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
            <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
              ブラジルチーム遠征プログラム
            </h1>
            <p className="mt-4 text-lg font-bold text-[#ffcd00] sm:text-xl">
              本場ブラジルで、チームとして世界を体感する。
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
              Para Sonhoでは、小学生チームから社会人クラブまで、ブラジル現地大会への参加、
              現地クラブとの交流、宿泊先や現地移動の手配まで一括でサポートします。
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#06C755] px-8 py-4 text-base font-extrabold text-white shadow-lg transition hover:bg-[#05b34c] sm:w-auto sm:min-w-[280px]"
            >
              {LINE_ICON}
              LINEで遠征相談する
            </a>
          </div>
        </section>

        {/* 3本柱 */}
        <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="section-title">サポート内容</h2>
          <p className="section-subtitle">遠征に必要なすべてをワンストップでサポートします。</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="card flex flex-col border-t-4 border-[#0b6a37]">
              <h3 className="text-lg font-extrabold text-[#0d6938]">大会参加</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[#2d5d43]">
                <li>・ブラジル現地大会への出場</li>
                <li>・本場ブラジルクラブとの対戦</li>
                <li>・年代別カテゴリーに応じた大会相談</li>
              </ul>
            </article>

            <article className="card flex flex-col border-t-4 border-[#0b6a37]">
              <h3 className="text-lg font-extrabold text-[#0d6938]">現地クラブ交流</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[#2d5d43]">
                <li>・現地クラブとの交流試合</li>
                <li>・合同トレーニング</li>
                <li>・ブラジルサッカー文化の体験</li>
              </ul>
            </article>

            <article className="card flex flex-col border-t-4 border-[#0b6a37]">
              <h3 className="text-lg font-extrabold text-[#0d6938]">渡航・生活サポート</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[#2d5d43]">
                <li>・宿泊先の手配</li>
                <li>・空港送迎</li>
                <li>・現地移動サポート</li>
                <li>・通訳サポート</li>
                <li>・食事や生活面の相談</li>
              </ul>
            </article>
          </div>
        </section>

        {/* 対象 */}
        <section className="bg-white py-14">
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
            <h2 className="section-title">対象</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "小学生チーム",
                "ジュニアユース",
                "中学生",
                "高校生",
                "大学生",
                "社会人クラブ",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[#d6e9c9] bg-[#f4fbf0] px-5 py-4 text-sm font-semibold"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0b6a37] text-xs font-extrabold text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-b from-[#0e6537] to-[#0a5a2e] py-20 text-white">
          <div className="mx-auto w-full max-w-2xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-extrabold sm:text-3xl">チーム遠征の相談はこちら</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
              人数・時期・目的に合わせてプランをご提案します。<br />
              まずはお気軽にLINEでご相談ください。
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#06C755] px-8 py-5 text-lg font-extrabold text-white shadow-lg transition hover:bg-[#05b34c] sm:w-auto sm:min-w-[320px]"
            >
              {LINE_ICON}
              LINEで遠征相談する
            </a>
            <p className="mt-4 text-xs text-white/60">LINE ID：@593loohp</p>
            <p className="mt-6">
              <Link href="/" className="text-sm text-white/70 underline underline-offset-4 hover:text-white">
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
