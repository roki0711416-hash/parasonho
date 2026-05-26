import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import SocialFeed, { type SocialFeedItem } from "./components/SocialFeed";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Para Sonho｜ブラジルサッカー留学・海外サッカー挑戦サポート",
  },
  description:
    "Para Sonho（パラソーニョ）は、本場ブラジル・サントスでサッカー留学に挑戦する選手をサポートします。現地クラブ練習、生活サポート、通訳、チーム遠征まで対応。",
  alternates: { canonical: "/" },
};

const LINE_URL = "https://line.me/R/ti/p/@593loohp";
const INSTAGRAM_URL = "https://www.instagram.com/para_sonho/";
const X_URL = "https://x.com/Para_Sonho";
const TIKTOK_URL = "https://www.tiktok.com/@para.sonho";

const socialItems: SocialFeedItem[] = [
  {
    platform: "instagram",
    handle: "@para_sonho",
    profileUrl: INSTAGRAM_URL,
    // 将来: Instagram oEmbed の iframe URL を embedUrl に設定
  },
  {
    platform: "x",
    handle: "@Para_Sonho",
    profileUrl: X_URL,
    // 将来: X (Twitter) の埋め込みウィジェット URL を embedUrl に設定
  },
  {
    platform: "tiktok",
    handle: "@para.sonho",
    profileUrl: TIKTOK_URL,
    // 将来: TikTok oEmbed の iframe URL を embedUrl に設定
  },
];

export default function Home() {
  const plans = [
    {
      title: "短期留学プラン（1〜4週間）",
      target: "長期休みで海外に挑戦したい小中高生・大学生向け",
      points: ["現地クラブ練習参加", "生活サポート", "空港送迎"],
    },
    {
      title: "中期留学プラン（1〜3ヶ月）",
      target: "本気でレベルアップをめざす選手向け",
      points: ["実戦的トレーニング", "語学サポート", "現地サポート"],
    },
    {
      title: "長期留学プラン（6ヶ月〜）",
      target: "本格的に海外で勝負したい選手向け",
      points: ["継続的な現地サポート", "進路相談", "定期面談"],
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
      description:
        "本場ブラジル・サントスを舞台に、サッカー留学・海外サッカー挑戦をサポートするブランド。",
      sameAs: [
        "https://www.instagram.com/para_sonho/",
        "https://x.com/Para_Sonho",
        "https://www.tiktok.com/@para.sonho",
      ],
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
        "本場ブラジル・サントスでのサッカー留学に必要な現地クラブ練習調整、生活サポート、通訳、チーム遠征までワンストップでご提供。",
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
    <div className="min-h-screen bg-white text-[#0b0f0d]">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <main id="top">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0b0f0d] via-[#0a3a1f] to-[#0a4f2a] text-white">
          <div className="absolute inset-0 opacity-[0.07]" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }} />
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#0b6a37]/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#0a4f2a]/40 blur-3xl" />
          <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-24 text-center sm:px-6 md:py-36">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[10px] font-bold tracking-[0.25em] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ffcd00]" />
              GLOBAL FOOTBALL CHALLENGE
            </span>
            <h1 className="mt-7 text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-6xl md:text-7xl">
              海外サッカー留学で、
              <br />
              <span className="text-[#ffcd00]">次のステージへ。</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/75 sm:text-base md:text-lg">
              Para Sonho / パラソーニョは、本場ブラジル・サントスを舞台に、<br className="hidden sm:block" />
              日本から世界へ挑戦する選手の成長を現地からサポートするサッカー留学ブランドです。
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#06C755] px-9 py-4 text-base font-extrabold text-white shadow-lg transition hover:bg-[#05b34c] sm:w-auto"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
                LINEで無料相談
              </a>
              <a
                href="#service"
                className="w-full rounded-full border border-white/40 px-8 py-4 text-center text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 sm:w-auto"
              >
                サービスを見る
              </a>
            </div>
          </div>
        </section>

        <section id="service" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <p className="eyebrow">SERVICE</p>
          <h2 className="section-title mt-2">サービス内容</h2>
          <p className="section-subtitle">
            渡航準備・現地生活・通訳・練習環境まで、海外サッカー挑戦をワンストップでサポートします。
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "現地クラブ調整", desc: "選手に合わせた練習環境を厳選" },
              { title: "現地生活サポート", desc: "滞在開始からの生活を伴走" },
              { title: "通訳サポート", desc: "言語面の不安を解消" },
              { title: "緊急時対応", desc: "24時間体制でお応えします" },
            ].map(({ title, desc }) => (
              <div key={title} className="card flex flex-col">
                <p className="font-bold text-[#0b0f0d]">{title}</p>
                <p className="mt-2 text-xs leading-6 text-[#4b5563]">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="/service"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#0a4f2a] px-8 py-3 text-sm font-bold text-[#0a4f2a] transition hover:bg-[#0a4f2a] hover:text-white"
            >
              詳しく見る
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <SocialFeed items={socialItems} />

        <section id="plans" className="bg-white py-20">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <p className="eyebrow">PLANS</p>
            <h2 className="section-title mt-2">留学プラン</h2>
            <p className="section-subtitle">短期〜長期まで、目標とスケジュールに合わせて設計します。</p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {plans.map((plan) => (
                <article key={plan.title} className="card flex h-full flex-col">
                  <h3 className="text-lg font-bold text-[#0b0f0d]">{plan.title}</h3>
                  <p className="mt-2 text-sm text-[#4b5563]">{plan.target}</p>
                  <ul className="mt-4 space-y-2 text-sm text-[#1f2937]">
                    {plan.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0a4f2a]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto border-t border-[#e5e7eb] pt-5">
                    <p className="text-sm leading-6 text-[#4b5563]">費用についてはLINEでお気軽にご相談ください。</p>
                    <a
                      href={LINE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#06C755] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#05b34c]"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
                      LINEで相談する
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section id="faq" className="bg-[#fafaf7] py-20">
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title mt-2">よくある質問</h2>
            <div className="mt-10 space-y-3">
              {faqs.map((item) => (
                <details key={item.q} className="card group">
                  <summary className="cursor-pointer list-none font-semibold text-[#0b0f0d]">
                    {item.q}
                    <span className="float-right text-[#0a4f2a] transition group-open:rotate-45">＋</span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-[#4b5563]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-[#0b0f0d] via-[#0a3a1f] to-[#0a4f2a] py-24 text-white">
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }} />
          <div className="relative mx-auto w-full max-w-2xl px-4 text-center sm:px-6">
            <p className="text-[10px] font-bold tracking-[0.25em] text-[#ffcd00]">FREE CONSULTATION</p>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">無料サッカー留学相談</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
              ブラジルへのサッカー留学について、期間・レベル・年齢問わずお気軽にご相談ください。<br />公式LINEよりメッセージをお送りください。
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#06C755] px-8 py-5 text-lg font-extrabold text-white shadow-lg transition hover:bg-[#05b34c] sm:w-auto sm:min-w-[320px]"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
              LINEで無料相談する
            </a>
            <p className="mt-4 text-xs text-white/60">LINE ID：@593loohp</p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
