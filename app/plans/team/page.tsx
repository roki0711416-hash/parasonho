import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ConsultCtaButtons from "../../components/ConsultCtaButtons";
import PagePhotoSection from "../../components/PagePhotoSection";
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

export default function TeamPage() {
  return (
    <div className="ps-page min-h-screen">
      <SiteHeader />

      <main>
        <PagePhotoSection variant="hero" className="py-20 md:py-32">
          <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
            <p className="ps-eyebrow">TEAM EXPEDITION</p>
            <h1 className="ps-heading mt-6 text-3xl sm:text-5xl">ブラジルチーム遠征プログラム</h1>
            <p className="mt-4 text-lg font-bold text-[#F5B041] sm:text-xl">
              本場ブラジルで、チームとして世界を体感する。
            </p>
            <p className="ps-lead mx-auto mt-5 max-w-2xl text-sm sm:text-base">
              Para Sonhoでは、小学生チームから社会人クラブまで、ブラジル現地大会への参加、
              現地クラブとの交流、宿泊先や現地移動の手配まで一括でサポートします。
            </p>
            <ConsultCtaButtons
              variant="onDark"
              align="center"
              lineLabel="LINEで遠征相談する"
              className="mx-auto mt-9 max-w-sm sm:max-w-none"
            />
          </div>
        </PagePhotoSection>

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

        <PagePhotoSection variant="cta" className="py-24">
          <div className="mx-auto w-full max-w-2xl px-4 text-center sm:px-6">
            <h2 className="ps-heading text-2xl sm:text-3xl">チーム遠征の相談はこちら</h2>
            <p className="ps-lead mx-auto mt-4 max-w-xl text-sm sm:text-base">
              人数・時期・目的に合わせてプランをご提案します。
              LINEまたはフォームから、お気軽にご相談ください。
            </p>
            <ConsultCtaButtons
              variant="onDark"
              align="center"
              lineLabel="LINEで遠征相談する"
              showLineId
              className="mx-auto mt-10 max-w-sm sm:max-w-none"
            />
            <p className="mt-6">
              <Link href="/" className="text-sm text-white/60 underline underline-offset-4 hover:text-[#F5B041]">
                ← TOPページへ戻る
              </Link>
            </p>
          </div>
        </PagePhotoSection>
      </main>

      <SiteFooter />
    </div>
  );
}
