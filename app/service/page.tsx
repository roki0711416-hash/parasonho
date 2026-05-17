import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "サービス内容 | Para Sonho / パラソーニョ",
  description:
    "ブラジルサッカー留学に必要な練習先調整、現地生活、通訳、移動、緊急時対応まで。選手と保護者が安心できるワンストップサポート。",
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

export default function ServicePage() {
  const services = [
    {
      title: "現地クラブ・練習先マッチング",
      description:
        "選手の年齢・レベル・目的に合わせて、現地クラブや練習環境を調整します。",
      points: [
        "現地クラブ練習参加の調整",
        "トレーニング環境の案内",
        "練習試合や交流機会の相談",
        "選手レベルに応じた提案",
      ],
    },
    {
      title: "現地生活立ち上げ支援",
      description:
        "初めてのブラジル生活でも安心できるよう、滞在開始時の生活面をサポートします。",
      points: [
        "宿泊先の案内",
        "生活ルールの説明",
        "周辺環境の案内",
        "買い物や日常生活のサポート",
      ],
    },
    {
      title: "通訳/コミュニケーション補助",
      description:
        "言語面の不安を減らし、現地での活動に集中できるようサポートします。",
      points: [
        "ポルトガル語コミュニケーション補助",
        "クラブ関係者とのやり取り補助",
        "生活面での簡単な通訳",
        "保護者との連絡補助",
      ],
    },
    {
      title: "滞在中の相談・緊急時対応",
      description:
        "現地滞在中の不安やトラブルに対応できるよう、相談体制を整えます。",
      points: [
        "LINEでの相談対応",
        "体調不良時のサポート",
        "緊急時の現地対応",
        "保護者への状況共有",
      ],
    },
  ];

  const steps = [
    { number: 1, title: "無料相談", description: "LINEでお気軽にご連絡ください" },
    { number: 2, title: "ヒアリング", description: "目的・期間・希望をお伺いします" },
    { number: 3, title: "プラン提案", description: "最適なサポートプランをご提案" },
    { number: 4, title: "渡航準備", description: "書類やオリエンテーション対応" },
    { number: 5, title: "現地サポート", description: "滞在中は24時間体制で対応" },
    { number: 6, title: "帰国・継続相談", description: "帰国後の進路相談も可能" },
  ];

  const parentSupports = [
    "現地到着連絡",
    "滞在中の状況共有",
    "緊急時の連絡体制",
    "保護者同意書/免責書類の整備",
  ];

  return (
    <div className="min-h-screen bg-[#f8fff6] text-[#123524]">
      <SiteHeader />

      <main>
        {/* ヒーローセクション */}
        <section className="relative overflow-hidden border-b border-[#d6e9c9] bg-gradient-to-b from-[#0b6a37] to-[#137744] py-24 text-white md:py-40">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#ffcd00]/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6">
            <p className="mb-6 inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-1.5 text-xs tracking-widest text-white/80 uppercase">
              Support Service
            </p>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              ブラジル挑戦を、
              <br />
              <span className="text-[#ffcd00]">現地サポートで支える。</span>
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-sm leading-8 text-white/85 sm:text-base md:text-lg">
              Para Sonhoでは、<br className="md:hidden" />
              ブラジルサッカー留学に必要な<br />
              練習先調整・生活サポート・通訳・移動・緊急時対応まで、<br />
              選手と保護者が安心して挑戦できる環境を整えます。
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#06C755] px-9 py-5 text-base font-extrabold text-white shadow-lg transition hover:bg-[#05b34c] sm:w-auto sm:min-w-[300px]"
            >
              {LINE_ICON}
              LINEで無料相談
            </a>
          </div>
        </section>

        {/* サービス一覧 */}
        <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="section-title">主要サービス</h2>
          <p className="section-subtitle">
            選手に必要なサポートを、総合的にご提供します。
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="card flex flex-col border-l-4 border-[#0b6a37]"
              >
                <h3 className="text-lg font-bold text-[#0d6938]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#2d5d43]">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2 border-t border-[#d6e9c9] pt-4 text-sm">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-[#2d5d43]">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0b6a37] text-xs font-bold text-white">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* サポートの流れ */}
        <section className="bg-white py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <h2 className="section-title">サポートの流れ</h2>
            <p className="section-subtitle">
              相談から帰国後まで、一連のサポートプロセスをご説明します。
            </p>
            <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
              {steps.map((step, idx) => (
                <div key={step.number} className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-3 border-[#0b6a37] bg-[#f0fdf4] font-extrabold text-[#0b6a37]">
                    {step.number}
                  </div>
                  <h4 className="mt-4 text-center text-sm font-bold text-[#0d6938]">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-center text-xs text-[#456c54]">
                    {step.description}
                  </p>
                  {idx < steps.length - 1 && (
                    <div className="mt-4 hidden h-8 w-0.5 bg-[#d6e9c9] lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 保護者向け安心サポート */}
        <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
          <div className="rounded-3xl border border-[#d6e9c9] bg-gradient-to-br from-[#f9fff4] to-[#f0fdf4] p-8 sm:p-10">
            <h2 className="text-2xl font-extrabold text-[#0b6a37]">
              保護者の方にも安心していただけるサポート体制
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#2d5d43]">
              お子さんがブラジルで活動している間、保護者の皆様の不安を軽減するための体制を整えています。
              以下のサポートにより、遠く離れていても状況把握と緊急時対応が可能です。
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {parentSupports.map((support) => (
                <li
                  key={support}
                  className="flex items-center gap-3 rounded-xl border border-[#c4ddb8] bg-white px-4 py-3 text-sm font-semibold text-[#0d6938]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0b6a37] text-xs font-extrabold text-white">
                    ✓
                  </span>
                  {support}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-b from-[#0e6537] to-[#0a5a2e] py-20 text-white">
          <div className="mx-auto w-full max-w-2xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              まずはLINEでお気軽にご相談ください。
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
              期間・レベル・目的に応じたプランを、無料でご提案いたします。<br />
              不安なことやご質問があれば、お気軽にお問い合わせください。
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#06C755] px-8 py-5 text-lg font-extrabold text-white shadow-lg transition hover:bg-[#05b34c] sm:w-auto sm:min-w-[320px]"
            >
              {LINE_ICON}
              LINEで無料相談
            </a>
            <p className="mt-4 text-xs text-white/60">LINE ID：@593loohp</p>
            <p className="mt-6">
              <Link
                href="/"
                className="text-sm text-white/70 underline underline-offset-4 hover:text-white"
              >
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
