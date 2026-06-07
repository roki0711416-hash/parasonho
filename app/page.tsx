import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import SocialFeed, { type SocialFeedItem } from "./components/SocialFeed";
import Photo from "./components/Photo";
import FloatingLineButton from "./components/FloatingLineButton";
import Reveal from "./components/Reveal";
import JourneyTimeline, { type JourneyStep } from "./components/JourneyTimeline";
import TickerBar from "./components/TickerBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Para Sonho｜ブラジルサッカー留学・海外サッカー挑戦サポート",
  },
  description:
    "Para Sonho（パラソーニョ）は、本場ブラジルでサッカー留学に挑戦する選手をサポートします。現地クラブ練習、生活サポート、通訳、チーム遠征まで対応。",
  alternates: { canonical: "/" },
};

const LINE_URL = "https://line.me/R/ti/p/@593loohp";
const INSTAGRAM_URL = "https://www.instagram.com/para_sonho/";
const X_URL = "https://x.com/Para_Sonho";
const TIKTOK_URL = "https://www.tiktok.com/@para.sonho";
const YOUTUBE_URL = "https://www.youtube.com/channel/UCE_sb8Gl_vGjHHjiN3wNK-Q";

const LineIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
);

const socialItems: SocialFeedItem[] = [
  { platform: "instagram", handle: "@para_sonho", profileUrl: INSTAGRAM_URL },
  { platform: "x", handle: "@Para_Sonho", profileUrl: X_URL },
  { platform: "tiktok", handle: "@para.sonho", profileUrl: TIKTOK_URL },
  { platform: "youtube", handle: "Para Sonho / パラソーニョ", profileUrl: YOUTUBE_URL },
];

const studyAbroadJourney: JourneyStep[] = [
  { no: "01", title: "相談", desc: "LINEまたはフォームから無料相談。お子さまの目標やご家庭の不安をお伺いします。" },
  { no: "02", title: "面談", desc: "レベル・期間・目的をもとに、最適な留学プランをご提案します。" },
  { no: "03", title: "クラブ選定", desc: "選手に合った現地クラブをネットワークから選定します。" },
  { no: "04", title: "渡航準備", desc: "ビザ・航空券・持ち物など、渡航準備をサポートします。" },
  { no: "05", title: "ブラジル生活", desc: "現地スタッフが生活立ち上げをサポート。安心してスタート。" },
  { no: "06", title: "練習開始", desc: "現地クラブの練習に参加。本場の環境でプレーが始まります。" },
  { no: "07", title: "成長", desc: "サッカーだけでなく、人としての成長を支えます。" },
];

export default function Home() {
  const plans = [
    {
      title: "短期留学プラン",
      period: "1〜4週間",
      target: "長期休みで海外に挑戦したい小中高生・大学生向け",
      points: ["現地クラブ練習参加", "生活サポート", "空港送迎"],
      highlight: false,
    },
    {
      title: "中期留学プラン",
      period: "1〜3ヶ月",
      target: "本気でレベルアップをめざす選手向け",
      points: ["実戦的トレーニング", "語学サポート", "現地サポート"],
      highlight: true,
    },
    {
      title: "長期留学プラン",
      period: "6ヶ月〜",
      target: "本格的に海外で勝負したい選手向け",
      points: ["継続的な現地サポート", "進路相談", "定期面談"],
      highlight: false,
    },
  ];

  const faqs = [
    {
      q: "サッカー経験が浅くても参加できますか？",
      a: "はい。現在のレベルや目標に合わせて、参加先やサポート内容をご提案します。大事なのは「挑戦したい」気持ちです。",
    },
    {
      q: "未成年でも留学できますか？",
      a: "可能です。保護者の方へ事前説明を行い、渡航前から現地生活まで丁寧にフォローします。",
    },
    {
      q: "ポルトガル語が話せなくても大丈夫ですか？",
      a: "問題ありません。現地スタッフと連携し、サポートします。",
    },
    {
      q: "まずは相談だけでも可能ですか？",
      a: "もちろん可能です。無料相談で目的や不安をヒアリングし、最適な留学プランをご案内します。",
    },
  ];

  const SITE_URL = "https://parasonho.com";
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Para Sonho / パラソーニョ",
      alternateName: ["Para Sonho", "パラソーニョ"],
      url: SITE_URL,
      logo: `${SITE_URL}/parasonho-logo.png`,
      description: "本場ブラジルを舞台に、サッカー留学・海外サッカー挑戦をサポートするブランド。",
      sameAs: [INSTAGRAM_URL, X_URL, TIKTOK_URL, YOUTUBE_URL],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Para Sonho / パラソーニョ",
      url: SITE_URL,
      inLanguage: "ja",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "ブラジルサッカー留学・海外サッカー挑戦サポート",
      serviceType: "サッカー留学サポート",
      provider: { "@type": "Organization", name: "Para Sonho / パラソーニョ", url: SITE_URL },
      areaServed: [{ "@type": "Country", name: "Brazil" }, { "@type": "Country", name: "Japan" }],
      audience: { "@type": "Audience", audienceType: "サッカー選手・保護者・チーム" },
      description:
        "本場ブラジルでのサッカー留学に必要な現地クラブ練習調整、生活サポート、通訳、チーム遠征までワンストップでご提供。",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <div className="ps-page min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <FloatingLineButton />

      <main id="top">
        {/* 1. ヒーロー --------------------------------------------------- */}
        <section className="relative min-h-[78svh] w-full overflow-hidden bg-[#14213D] sm:min-h-[92svh]">
          <div className="absolute inset-0 br-slow-zoom">
            <Photo
              src="/images/ヒーロー画像.png"
              alt="スタジアムへ向かうサッカー選手"
              priority
              sizes="100vw"
              placeholderLabel="HERO"
              className="h-full w-full"
              imageClassName="object-cover object-[center_42%] sm:object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#14213D] via-[#14213D]/70 to-[#14213D]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#14213D]/85 via-[#14213D]/30 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[78svh] w-full max-w-7xl flex-col justify-start px-5 pb-10 pt-[4.75rem] sm:min-h-[92svh] sm:justify-center sm:px-6 sm:py-32 lg:px-8">
            <span className="br-animate inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[9px] font-bold tracking-[0.26em] text-white/90 backdrop-blur-md sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.28em]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F5B041]" />
              BRAZIL FOOTBALL CHALLENGE
            </span>

            <h1 className="br-animate br-animate-delay-1 mt-4 max-w-3xl text-[clamp(1.5rem,5.5vw,3.5rem)] font-extrabold leading-[1.18] tracking-tight text-white sm:mt-8">
              人として成長する留学から
              <br />
              <span className="text-[#F5B041]">プロを目指す挑戦まで。</span>
            </h1>

            <p className="br-animate br-animate-delay-2 mt-3 max-w-lg text-sm leading-7 text-white/80 sm:mt-7 sm:text-lg sm:leading-8">
              ブラジルでしか得られない経験が、人生とサッカーを変える。
            </p>

            <div className="br-animate br-animate-delay-3 mt-5 flex flex-col gap-2 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ps-btn-line w-full py-3.5 text-sm sm:w-auto sm:py-[1.05rem] sm:text-base"
              >
                <LineIcon className="h-5 w-5" />
                LINEで無料相談する
              </a>
              <a
                href="#plans"
                className="ps-btn-ghost-light w-full py-3.5 text-sm sm:w-auto sm:py-[1.05rem]"
              >
                留学の流れを見る
              </a>
            </div>
          </div>
        </section>

        <TickerBar />

        {/* 2. 留学プラン ------------------------------------------------- */}
        <section id="plans" className="ps-section bg-white">
          <div className="ps-container">
            <Reveal>
              <p className="ps-eyebrow">PLANS</p>
              <h2 className="ps-heading mt-4">留学プラン</h2>
              <p className="ps-lead mt-5 max-w-xl text-sm sm:text-base">
                短期〜長期まで、目標とスケジュールに合わせて設計します。保護者の方にも安心いただける流れをご案内します。
              </p>
            </Reveal>

            <div id="journey" className="mt-14">
              <Reveal>
                <p className="ps-eyebrow">STUDY ABROAD FLOW</p>
                <h3 className="mt-4 text-xl font-black text-[#14213D] sm:text-2xl">
                  相談から<span className="ps-gold-text">成長</span>まで
                </h3>
                <p className="ps-lead mt-3 max-w-xl text-sm">
                  はじめての方も安心。留学までの流れを、ステップでご案内します。
                </p>
              </Reveal>
              <JourneyTimeline steps={studyAbroadJourney} />
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {plans.map((plan, i) => (
                <Reveal key={plan.title} delay={i * 80}>
                  <article
                    className={`ps-card flex h-full flex-col overflow-hidden ${
                      plan.highlight ? "border-[#F5B041]/40 ring-1 ring-[#F5B041]/20 md:-translate-y-2" : ""
                    }`}
                  >
                    {plan.highlight && (
                      <div className="bg-[#14213D] px-4 py-2 text-center text-[10px] font-black tracking-[0.2em] text-[#F5B041]">
                        MOST POPULAR
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-7 sm:p-8">
                      <p className="text-[11px] font-bold tracking-[0.2em] text-[#F5B041]">
                        {plan.period}
                      </p>
                      <h3 className="mt-2 text-xl font-black text-[#14213D] sm:text-2xl">{plan.title}</h3>
                      <p className="ps-lead mt-3 text-sm">{plan.target}</p>
                      <ul className="mt-6 space-y-3 text-sm text-[#111111]/85">
                        {plan.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F5B041]/15 text-[10px] font-bold text-[#C4842A]">
                              ✓
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mt-12 overflow-hidden rounded-2xl border border-[rgba(20,33,61,0.08)] bg-[#F8F9FB] px-6 py-10 text-center sm:px-10 sm:py-12">
                <p className="text-sm font-semibold text-[#14213D] sm:text-base">
                  期間・費用はプランに合わせてご提案します
                </p>
                <p className="ps-lead mx-auto mt-2 max-w-md text-sm">
                  どのプランが合うかわからなくても大丈夫。無料でご相談いただけます。
                </p>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ps-btn-line mt-7 inline-flex w-full max-w-sm text-base sm:w-auto"
                >
                  <LineIcon className="h-5 w-5" />
                  LINEで相談する
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3. プロテスト（案内） ----------------------------------------- */}
        <section id="protest" className="ps-bg-subtle ps-section">
          <div className="ps-container">
            <Reveal>
              <p className="ps-eyebrow">NEW SERVICE</p>
              <h2 className="ps-heading mt-4 max-w-2xl">プロテスト（入団テスト）サポート</h2>
              <p className="ps-lead mt-5 max-w-2xl text-sm sm:text-base">
                プロ契約・上位カテゴリ昇格をめざす選手向け。無料相談からプロ契約まで、挑戦の流れを可視化したサポート体制です。
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div className="ps-card mt-10 flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
                <div>
                  <p className="text-lg font-black text-[#14213D]">
                    相談から<span className="ps-gold-text">プロ契約</span>まで伴走
                  </p>
                  <p className="ps-lead mt-2 max-w-lg text-sm">
                    入団テストの流れ・サポート内容・費用の目安など、詳しくは専用ページをご覧ください。
                  </p>
                </div>
                <Link
                  href="/plans/pro-test"
                  className="ps-btn-gold inline-flex w-full shrink-0 items-center justify-center gap-2 sm:w-auto"
                >
                  プロテストページを見る
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 4. SNS ------------------------------------------------------- */}
        <SocialFeed items={socialItems} />

        {/* 8. FAQ ------------------------------------------------------- */}
        <section id="faq" className="ps-section bg-white">
          <div className="ps-container relative z-10 max-w-3xl">
            <Reveal>
              <p className="ps-eyebrow">FAQ</p>
              <h2 className="ps-heading mt-4">よくある質問</h2>
            </Reveal>
            <div className="mt-10 space-y-4">
              {faqs.map((item, i) => (
                <Reveal key={item.q} delay={i * 50}>
                  <details className="group rounded-2xl border border-[rgba(20,33,61,0.08)] bg-white p-5 shadow-sm transition open:border-[#F5B041]/35 sm:p-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#14213D]">
                      {item.q}
                      <span className="text-xl font-light text-[#F5B041] transition group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="ps-lead mt-4 text-sm sm:text-base">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
