import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import JourneyTimeline, { type JourneyStep } from "../../components/JourneyTimeline";
import Reveal from "../../components/Reveal";
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

const LINE_URL = "https://line.me/R/ti/p/@593loohp";
const GFORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScwxBEWIxBWeQpoHuQi-BV0OaWao-pDAPg9AhhzIr1sEPcsmA/viewform?usp=dialog";

const LineIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
);

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
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ps-btn-line mt-9 inline-flex w-full items-center justify-center gap-2 sm:w-auto sm:min-w-[280px]"
            >
              <LineIcon />
              プロテストについて相談する
            </a>
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
                <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ps-btn-line w-full text-base sm:w-auto sm:min-w-[260px]"
                  >
                    <LineIcon />
                    LINEで相談する
                  </a>
                  <a
                    href={GFORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ps-btn-ghost-light w-full text-base sm:w-auto"
                  >
                    相談フォームから問い合わせる
                  </a>
                </div>
                <p className="mt-5 text-xs text-white/50">LINE ID：@593loohp</p>
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
