import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import JourneyTimeline, { type JourneyStep } from "../../components/JourneyTimeline";
import Reveal from "../../components/Reveal";
import ConsultCtaButtons from "../../components/ConsultCtaButtons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プロテスト（入団テスト）サポート｜ブラジルサッカー挑戦",
  description:
    "Para Sonho（パラソーニョ）のプロテストサポート。現地クラブの入団テスト（セレクション）からプロ契約まで、無料相談から契約交渉まで一貫して伴走します。",
  alternates: { canonical: "/plans/pro-test" },
  openGraph: {
    title: "プロテスト（入団テスト）サポート | Para Sonho",
    description: "現地クラブの入団テストからプロ契約まで、挑戦の流れを可視化したサポート体制。",
    url: "/plans/pro-test",
  },
};

const proTestJourney: JourneyStep[] = [
  { no: "01", title: "無料相談", desc: "LINEまたはフォームからお気軽にご相談ください。" },
  { no: "02", title: "面談", desc: "レベル・目標・希望クラブをヒアリングし、最適なルートを設計します。" },
  { no: "03", title: "クラブ選定", desc: "受験先クラブをネットワークから選定・調整します。" },
  { no: "04", title: "渡航準備", desc: "渡航に必要な手続き・準備をサポートします。" },
  { no: "05", title: "ブラジル到着", desc: "現地スタッフが空港送迎・生活立ち上げを支援します。" },
  { no: "06", title: "プロテスト参加", desc: "入団テスト（セレクション）への帯同・通訳サポート。" },
  { no: "07", title: "評価・契約交渉", desc: "テスト結果を踏まえ、契約交渉をサポートします。" },
  { no: "08", title: "プロ契約へ", desc: "プロ契約・上位カテゴリへのステップを後押しします。" },
];

export default function ProTestPage() {
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
            <p className="ps-eyebrow">PRO TEST / SELECTION</p>
            <h1 className="ps-heading mt-6 text-3xl text-white sm:text-5xl">
              プロテスト（入団テスト）サポート
            </h1>
            <p className="mt-4 text-lg font-bold text-[#F5B041] sm:text-xl">
              現地クラブの入団テストへ、本気の挑戦を。
            </p>
            <p className="ps-lead mx-auto mt-5 max-w-2xl text-sm sm:text-base">
              プロ契約・上位カテゴリ昇格をめざす選手向け。無料相談からプロ契約まで、
              挑戦の流れを可視化し、一貫して伴走します。
            </p>
            <ConsultCtaButtons
              variant="onDark"
              align="center"
              lineLabel="プロテストについて相談する"
              className="mx-auto mt-9 max-w-sm sm:max-w-none"
            />
          </div>
        </section>

        <section id="journey" className="ps-bg-subtle ps-section">
          <div className="ps-container">
            <Reveal>
              <p className="ps-eyebrow">PRO TEST JOURNEY</p>
              <h2 className="ps-heading mt-4 max-w-2xl">
                相談から<span className="ps-gold-text">プロ契約</span>まで
              </h2>
              <p className="ps-lead mt-5 max-w-xl text-sm sm:text-base">
                入団テストから契約交渉まで、挑戦の流れをステップでご案内します。
              </p>
            </Reveal>
            <JourneyTimeline steps={proTestJourney} />
          </div>
        </section>

        <section className="ps-section bg-white">
          <div className="ps-container">
            <Reveal>
              <p className="ps-eyebrow">SUPPORT</p>
              <h2 className="ps-heading mt-4 max-w-2xl">サポート内容</h2>
              <p className="ps-lead mt-5 max-w-2xl text-sm sm:text-base">
                現地クラブの入団テスト（プロテスト／セレクション）への挑戦をサポート。
                プロ契約・上位カテゴリ昇格を本気でめざす選手向けのサービスです。
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="ps-card mt-12 overflow-hidden">
                <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-2 lg:gap-12">
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-black leading-snug text-[#14213D] sm:text-3xl">
                      評価される環境を、
                      <br />
                      <span className="ps-gold-text">一緒に作る。</span>
                    </h3>
                    <p className="ps-lead mt-4 text-sm sm:text-base">
                      選手のレベルや希望に合わせて受験するクラブを選定。テスト同行・通訳・現地サポートまで一括で対応します。
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <div className="rounded-2xl border border-[rgba(20,33,61,0.08)] bg-[#F8F9FB] px-5 py-4">
                        <p className="text-[10px] font-bold tracking-[0.15em] text-[#F5B041]">期間</p>
                        <p className="mt-1 text-base font-bold text-[#14213D]">2週間〜</p>
                      </div>
                      <div className="rounded-2xl border border-[rgba(20,33,61,0.08)] bg-[#F8F9FB] px-5 py-4">
                        <p className="text-[10px] font-bold tracking-[0.15em] text-[#F5B041]">
                          受験クラブ数
                        </p>
                        <p className="mt-1 text-base font-bold text-[#14213D]">ご希望に応じて調整</p>
                      </div>
                    </div>
                    <p className="mt-4 text-xs leading-6 text-[#111111]/50">
                      ※ 受験するチーム数や現地の状況によって、期間・費用は変動します。
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <ul className="space-y-3 text-sm">
                      {[
                        "選手のレベル・希望に合った受験クラブの選定",
                        "入団テスト（プロテスト）への帯同・申込サポート",
                        "現地での通訳・移動・生活サポート",
                        "テスト結果を踏まえた次のステップのご提案",
                      ].map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 rounded-2xl border border-[rgba(20,33,61,0.08)] bg-[#F8F9FB] px-5 py-4"
                        >
                          <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F5B041]" />
                          <span className="leading-6 text-[#111111]/80">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="ps-bg-navy ps-section">
          <div className="ps-container">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="ps-eyebrow justify-center">CONTACT</p>
                <h2 className="ps-heading mt-5 text-white">
                  プロテストの相談は<span className="ps-gold-text">無料</span>です
                </h2>
                <p className="ps-lead mx-auto mt-5 max-w-md text-sm sm:text-base">
                  レベル・目標に合わせたプランをご提案します。お気軽にどうぞ。
                </p>
                <ConsultCtaButtons
                  variant="onDark"
                  align="center"
                  lineLabel="LINEで相談する"
                  showLineId
                  className="mx-auto mt-9 max-w-sm sm:max-w-none"
                />
                <p className="mt-8">
                  <Link
                    href="/"
                    className="text-sm text-white/60 underline underline-offset-4 hover:text-[#F5B041]"
                  >
                    ← TOPページへ戻る
                  </Link>
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
