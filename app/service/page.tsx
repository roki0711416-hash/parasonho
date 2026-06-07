import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ConsultCtaButtons from "../components/ConsultCtaButtons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "サービス内容｜ブラジルサッカー留学のサポート一覧",
  description:
    "Para Sonho（パラソーニョ）のサービス内容。ブラジルでのサッカー留学に必要な現地クラブ練習調整、生活サポート、通訳、送迎、緊急時対応までワンストップでご提供。",
  alternates: { canonical: "/service" },
  openGraph: {
    title: "サービス内容｜ブラジルサッカー留学のサポート一覧 | Para Sonho",
    description:
      "現地クラブ練習・生活サポート・通訳・送迎・緊急時対応まで、サッカー留学に必要なすべてをワンストップでご提供。",
    url: "/service",
  },
};

export default function ServicePage() {
  const services = [
    {
      title: "現地クラブ・練習先マッチング",
      description: "選手の年齢・レベル・目的に合わせて、現地クラブや練習環境を調整します。",
      points: [
        "現地クラブ練習参加の調整",
        "トレーニング環境の案内",
        "練習試合や交流機会の相談",
        "選手レベルに応じた提案",
      ],
    },
    {
      title: "現地生活立ち上げ支援",
      description: "初めての海外生活でも安心できるよう、滞在開始時の生活面をサポートします。",
      points: ["宿泊先の案内", "生活ルールの説明", "周辺環境の案内", "買い物や日常生活のサポート"],
    },
    {
      title: "通訳/コミュニケーション補助",
      description: "言語面の不安を減らし、現地での活動に集中できるようサポートします。",
      points: [
        "ポルトガル語コミュニケーション補助",
        "クラブ関係者とのやり取り補助",
        "生活面での簡単な通訳",
        "保護者との連絡補助",
      ],
    },
    {
      title: "滞在中の相談・緊急時対応",
      description: "現地滞在中の不安やトラブルに対応できるよう、相談体制を整えます。",
      points: ["LINEでの相談対応", "体調不良時のサポート", "緊急時の現地対応", "保護者への状況共有"],
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
    <div className="ps-page min-h-screen">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-[#14213D] py-24 md:py-40">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, #F5B041 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#F5B041]/10 blur-3xl" />
          <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6">
            <p className="ps-eyebrow">Support Service</p>
            <h1 className="ps-heading mt-4 text-3xl sm:text-5xl md:text-6xl">
              世界への挑戦を、
              <br />
              <span className="text-[#F5B041]">現地サポートで支える。</span>
            </h1>
            <p className="ps-lead mx-auto mt-8 max-w-3xl text-sm sm:text-base md:text-lg">
              Para Sonhoでは、サッカー留学に必要な練習先調整・生活サポート・通訳・移動・緊急時対応まで、
              選手と保護者が安心して挑戦できる環境を整えます。
            </p>
            <ConsultCtaButtons
              variant="onLight"
              align="center"
              lineLabel="LINEで無料相談"
              className="mx-auto mt-12 max-w-sm sm:max-w-none"
            />
          </div>
        </section>

        <section className="ps-section ps-container">
          <p className="ps-eyebrow">MAIN SERVICE</p>
          <h2 className="ps-heading mt-4">主要サービス</h2>
          <p className="ps-lead mt-4 max-w-2xl text-sm sm:text-base">
            選手に必要なサポートを、総合的にご提供します。
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="ps-card border-l-4 border-[#F5B041] p-6">
                <h3 className="text-lg font-bold text-[#14213D]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#111111]/65">{service.description}</p>
                <ul className="mt-4 space-y-2 border-t border-[rgba(20,33,61,0.08)] pt-4 text-sm">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-[#111111]/85">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-xs font-bold text-white">
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

        <section className="ps-section ps-bg-subtle">
          <div className="ps-container">
            <p className="ps-eyebrow">FLOW</p>
            <h2 className="ps-heading mt-4">サポートの流れ</h2>
            <p className="ps-lead mt-4 max-w-2xl text-sm sm:text-base">
              相談から帰国後まで、一連のサポートプロセスをご説明します。
            </p>
            <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#F5B041] bg-white font-extrabold text-[#14213D]">
                    {step.number}
                  </div>
                  <h4 className="mt-4 text-center text-sm font-bold text-[#14213D]">{step.title}</h4>
                  <p className="mt-2 text-center text-xs leading-6 text-[#111111]/55">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ps-section ps-container">
          <div className="ps-card p-8 sm:p-10">
            <p className="ps-eyebrow">FOR PARENTS</p>
            <h2 className="ps-heading mt-4 text-2xl">保護者の方にも安心していただけるサポート体制</h2>
            <p className="ps-lead mt-4 text-sm sm:text-base">
              お子さんが海外で活動している間、保護者の皆様の不安を軽減するための体制を整えています。
              以下のサポートにより、遠く離れていても状況把握と緊急時対応が可能です。
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {parentSupports.map((support) => (
                <li
                  key={support}
                  className="flex items-center gap-3 rounded-xl border border-[rgba(20,33,61,0.08)] bg-[#F8F9FB] px-4 py-3 text-sm font-semibold text-[#14213D]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-xs font-extrabold text-white">
                    ✓
                  </span>
                  {support}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#14213D] py-24">
          <div className="relative mx-auto w-full max-w-2xl px-4 text-center sm:px-6">
            <h2 className="ps-heading text-2xl sm:text-3xl">まずはお気軽にご相談ください。</h2>
            <p className="ps-lead mx-auto mt-4 max-w-xl text-sm sm:text-base">
              期間・レベル・目的に応じたプランを、無料でご提案いたします。
              LINEまたはフォームから、お気軽にお問い合わせください。
            </p>
            <ConsultCtaButtons
              variant="onDark"
              align="center"
              lineLabel="LINEで無料相談"
              showLineId
              className="mx-auto mt-10 max-w-sm sm:max-w-none"
            />
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
