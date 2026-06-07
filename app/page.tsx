import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import SocialFeed, { type SocialFeedItem } from "./components/SocialFeed";
import Photo from "./components/Photo";
import FloatingLineButton from "./components/FloatingLineButton";
import Reveal from "./components/Reveal";
import JourneyTimeline, { type JourneyStep } from "./components/JourneyTimeline";
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
const GFORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScwxBEWIxBWeQpoHuQi-BV0OaWao-pDAPg9AhhzIr1sEPcsmA/viewform?usp=dialog";
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

const journey: JourneyStep[] = [
  { no: "01", title: "相談", desc: "LINEまたはフォームから無料相談。目標や不安をヒアリングします。" },
  { no: "02", title: "面談", desc: "現状のレベルや希望をもとに、最適なプランをご提案します。" },
  { no: "03", title: "クラブ選定", desc: "選手に合った現地クラブをネットワークから選定。" },
  { no: "04", title: "渡航", desc: "渡航準備から空港送迎まで、日本語で安心サポート。" },
  { no: "05", title: "ブラジル生活開始", desc: "練習・生活・語学を現地スタッフが伴走。挑戦の日々がスタート。" },
  { no: "06", title: "プロ挑戦", desc: "入団テスト・上位カテゴリへの挑戦まで、次のステップを後押し。" },
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
    <div className="ps-dark min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <FloatingLineButton />

      <main id="top">
        {/* 1. ヒーロー --------------------------------------------------- */}
        <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#0E1322]">
          <div className="absolute inset-0 br-slow-zoom">
            <Photo
              src="/images/ヒーロー画像.png"
              alt="スタジアムへ向かうサッカー選手"
              priority
              sizes="100vw"
              placeholderLabel="HERO"
              className="h-full w-full"
            />
          </div>
          {/* シネマティックなオーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B16] via-[#080B16]/55 to-[#080B16]/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080B16]/80 via-transparent to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center px-5 py-32 sm:px-6 lg:px-8">
            <span className="br-animate inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] font-bold tracking-[0.3em] text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F5B041]" />
              BRAZIL FOOTBALL CHALLENGE
            </span>

            <h1 className="ps-display br-animate br-animate-delay-1 mt-8 max-w-4xl">
              人として成長する留学から
              <br />
              <span className="ps-gold-text">プロを目指す挑戦まで。</span>
            </h1>

            <p className="br-animate br-animate-delay-2 mt-7 max-w-xl text-base leading-9 text-white/85 sm:text-lg">
              ブラジルでしか得られない経験が、人生とサッカーを変える。
            </p>

            <div className="br-animate br-animate-delay-3 mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ps-btn-line w-full text-base sm:w-auto"
              >
                <LineIcon className="h-5 w-5" />
                LINEで無料相談する
              </a>
              <a href="#journey" className="ps-btn-ghost w-full text-sm sm:w-auto">
                留学の流れを見る
              </a>
            </div>
          </div>

          {/* スクロール誘導 */}
          <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50">
            <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
              <span className="ps-scroll-dot h-2 w-1 rounded-full bg-white/80" />
            </div>
            <span className="text-[9px] font-bold tracking-[0.3em]">SCROLL</span>
          </div>
        </section>

        {/* 2. プレイヤージャーニー --------------------------------------- */}
        <section id="journey" className="ps-bg-aurora ps-grain ps-section relative">
          <div className="ps-container relative z-10">
            <Reveal>
              <p className="ps-eyebrow">PLAYER JOURNEY</p>
              <h2 className="ps-heading mt-4 max-w-2xl">
                相談から<span className="ps-gold-text">プロ挑戦</span>まで
              </h2>
              <p className="ps-lead mt-5 max-w-xl text-sm sm:text-base">
                はじめての方も安心。挑戦までの流れを、ステップでご案内します。
              </p>
            </Reveal>
            <JourneyTimeline steps={journey} />
          </div>
        </section>

        {/* 5. 留学プラン ------------------------------------------------- */}
        <section id="plans" className="ps-dark ps-section">
          <div className="ps-container">
            <Reveal>
              <p className="ps-eyebrow">PLANS</p>
              <h2 className="ps-heading mt-4">留学プラン</h2>
              <p className="ps-lead mt-5 max-w-xl text-sm sm:text-base">
                短期〜長期まで、目標とスケジュールに合わせて設計します。
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {plans.map((plan, i) => (
                <Reveal key={plan.title} delay={i * 80}>
                  <article
                    className={`ps-card flex h-full flex-col overflow-hidden ${
                      plan.highlight ? "border-[#F5B041]/40 md:-translate-y-3" : ""
                    }`}
                  >
                    {plan.highlight && (
                      <div className="bg-gradient-to-r from-[#FFD98A] to-[#F5B041] px-4 py-2 text-center text-[10px] font-black tracking-[0.2em] text-[#0E1322]">
                        MOST POPULAR
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-7 sm:p-8">
                      <p className="text-[11px] font-bold tracking-[0.2em] text-[#F5B041]">
                        {plan.period}
                      </p>
                      <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">{plan.title}</h3>
                      <p className="ps-lead mt-3 text-sm">{plan.target}</p>
                      <ul className="mt-6 space-y-3 text-sm text-white/85">
                        {plan.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F5B041]/15 text-[10px] font-bold text-[#F5B041]">
                              ✓
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto border-t border-white/10 pt-6">
                        <p className="ps-lead text-sm">費用はLINEでお気軽にご相談ください。</p>
                        <a
                          href={LINE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ps-btn-line mt-4 w-full text-sm"
                        >
                          <LineIcon className="h-4 w-4" />
                          LINEで相談する
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 6. プロテスト ------------------------------------------------- */}
        <section id="protest" className="ps-bg-aurora ps-grain ps-section relative">
          <div className="ps-container relative z-10">
            <Reveal>
              <p className="ps-eyebrow">NEW SERVICE</p>
              <h2 className="ps-heading mt-4 max-w-2xl">プロテスト（入団テスト）サポート</h2>
              <p className="ps-lead mt-5 max-w-2xl text-sm sm:text-base">
                現地クラブの入団テスト（プロテスト／セレクション）への挑戦をサポート。プロ契約・上位カテゴリ昇格を本気でめざす選手向けの新サービスです。
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="ps-glass mt-12 overflow-hidden">
                <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-2 lg:gap-12">
                  <div className="flex flex-col justify-center">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#F5B041]/40 bg-[#F5B041]/10 px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-[#FFD98A]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F5B041]" />
                      PRO TEST / SELECTION
                    </span>
                    <h3 className="mt-5 text-2xl font-black leading-snug text-white sm:text-3xl">
                      現地クラブの入団テストへ、
                      <br />
                      <span className="ps-gold-text">本気の挑戦を。</span>
                    </h3>
                    <p className="ps-lead mt-4 text-sm sm:text-base">
                      選手のレベルや希望に合わせて受験するクラブを選定。テスト同行・通訳・現地サポートまで一括で対応し、評価される環境づくりを支えます。
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                        <p className="text-[10px] font-bold tracking-[0.15em] text-[#F5B041]">期間</p>
                        <p className="mt-1 text-base font-bold text-white">2週間〜</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                        <p className="text-[10px] font-bold tracking-[0.15em] text-[#F5B041]">
                          受験クラブ数
                        </p>
                        <p className="mt-1 text-base font-bold text-white">ご希望に応じて調整</p>
                      </div>
                    </div>
                    <p className="mt-4 text-xs leading-6 text-white/60">
                      ※ 受験するチーム数や現地の状況によって、期間・費用は変動します。詳細はお気軽にご相談ください。
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-white/50">SUPPORT</p>
                    <ul className="space-y-3 text-sm">
                      {[
                        "選手のレベル・希望に合った受験クラブの選定",
                        "入団テスト（プロテスト）への帯同・申込サポート",
                        "現地での通訳・移動・生活サポート",
                        "テスト結果を踏まえた次のステップのご提案",
                      ].map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                        >
                          <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F5B041]" />
                          <span className="leading-6 text-white/85">{point}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={LINE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ps-btn-line mt-2 w-full text-sm"
                    >
                      <LineIcon className="h-4 w-4" />
                      プロテストについて相談する
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 7. SNS ------------------------------------------------------- */}
        <SocialFeed items={socialItems} />

        {/* 8. FAQ ------------------------------------------------------- */}
        <section id="faq" className="ps-bg-aurora ps-grain ps-section relative">
          <div className="ps-container relative z-10 max-w-3xl">
            <Reveal>
              <p className="ps-eyebrow">FAQ</p>
              <h2 className="ps-heading mt-4">よくある質問</h2>
            </Reveal>
            <div className="mt-10 space-y-4">
              {faqs.map((item, i) => (
                <Reveal key={item.q} delay={i * 50}>
                  <details className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition open:border-[#F5B041]/40 sm:p-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-white">
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

        {/* 9. 相談フォーム（ガラスモーフィズム） ------------------------- */}
        <section id="contact" className="relative w-full overflow-hidden bg-[#0E1322]">
          <div className="absolute inset-0">
            <Photo
              src="/images/IMG_0009.JPG"
              alt="スタジアム"
              placeholderLabel="STADIUM"
              sizes="100vw"
              className="h-full w-full"
            />
          </div>
          <div className="absolute inset-0 bg-[#080B16]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B16] via-[#080B16]/60 to-[#080B16]/70" />

          <div className="ps-container relative z-10 py-24 sm:py-28">
            <Reveal>
              <div className="ps-glass mx-auto max-w-2xl p-8 text-center sm:p-12">
                <p className="ps-eyebrow justify-center">CONTACT</p>
                <h2 className="ps-heading mt-5">
                  まずは、<span className="ps-gold-text">無料相談</span>から。
                </h2>
                <p className="ps-lead mx-auto mt-5 max-w-md text-sm sm:text-base">
                  目的や不安をヒアリングし、あなたに最適な留学プランをご案内します。お気軽にどうぞ。
                </p>

                <div className="mt-9 flex flex-col gap-4">
                  <a
                    href={GFORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ps-btn-gold w-full text-base"
                  >
                    相談フォームに進む
                  </a>
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ps-btn-line w-full text-base"
                  >
                    <LineIcon className="h-5 w-5" />
                    LINEで無料相談する
                  </a>
                </div>
                <p className="mt-5 text-xs text-white/60">LINE ID：@593loohp ／ 24時間受付</p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
