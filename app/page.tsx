import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import SocialFeed, { type SocialFeedItem } from "./components/SocialFeed";
import Photo from "./components/Photo";
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

/**
 * 写真パス：public/images 配下に写真を置き、src を埋めるだけで反映されます。
 * 未指定（undefined）の場合はブラジルカラーの上品なプレースホルダーが表示されます。
 */
const experiencePhotos: { src?: string; label: string }[] = [
  { src: "/images/IMG_1165.JPG", label: "現地クラブの練習" },
  { src: "/images/IMG_0009.JPG", label: "遠征・スタジアム" },
];

const reasons: { no: string; title: string; desc: string; src?: string }[] = [
  {
    no: "01",
    title: "世界レベルの環境",
    desc: "本場ブラジルのピッチで、世界基準のスピードと技術を肌で感じる毎日。",
    src: "/images/IMG_0007.JPG",
  },
  {
    no: "02",
    title: "現地クラブとのネットワーク",
    desc: "現地に根ざしたつながりで、選手に合ったクラブ・練習環境へ。",
    src: "/images/IMG_2590.JPG",
  },
  {
    no: "03",
    title: "挑戦する機会",
    desc: "練習参加から入団テストまで、評価される舞台を用意します。",
    src: "/images/IMG_5800.jpg",
  },
  {
    no: "04",
    title: "安心のサポート体制",
    desc: "渡航前から現地生活・通訳・緊急時まで、日本語で伴走します。",
    src: "/images/support.png",
  },
];

const lifeItems: { title: string; desc: string; src?: string }[] = [
  { title: "寮・滞在", desc: "安全で快適な滞在先を手配。", src: undefined },
  { title: "食事", desc: "ブラジルの伝統料理シュラスコをはじめ、コンディションを支える食環境。", src: "/images/IMG_0595.JPG" },
  { title: "移動", desc: "練習・試合への送迎・移動を支援。", src: "/images/IMG_1030.JPG" },
  { title: "日常生活", desc: "現地での暮らしに寄り添う。", src: undefined },
];

const players: { name: string; meta: string; comment: string; src?: string }[] = [
  {
    name: "参加選手 A",
    meta: "高校生 / 中期留学",
    comment: "世界との距離を肌で感じ、サッカー観が大きく変わりました。",
    src: undefined,
  },
  {
    name: "参加選手 B",
    meta: "大学生 / 長期留学",
    comment: "現地クラブの練習に参加でき、毎日が刺激の連続でした。",
    src: undefined,
  },
  {
    name: "参加選手 C",
    meta: "社会人 / プロテスト",
    comment: "入団テストへの挑戦をサポートしてもらい、夢に近づけました。",
    src: undefined,
  },
];

// ギャラリー（12枚以上）。src を埋めると写真に差し替わります。
const galleryPhotos: { src?: string; label: string }[] = [
  { src: undefined, label: "PITCH" },
  { src: undefined, label: "MATCH" },
  { src: undefined, label: "TRAINING" },
  { src: undefined, label: "STADIUM" },
  { src: undefined, label: "TEAM" },
  { src: undefined, label: "CITY" },
  { src: undefined, label: "BEACH" },
  { src: undefined, label: "FANS" },
  { src: undefined, label: "GOAL" },
  { src: undefined, label: "DAILY" },
  { src: undefined, label: "TRAVEL" },
  { src: undefined, label: "DREAM" },
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
        "本場ブラジルを舞台に、サッカー留学・海外サッカー挑戦をサポートするブランド。",
      sameAs: [
        "https://www.instagram.com/para_sonho/",
        "https://x.com/Para_Sonho",
        "https://www.tiktok.com/@para.sonho",
        "https://www.youtube.com/channel/UCE_sb8Gl_vGjHHjiN3wNK-Q",
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
    <div className="min-h-screen bg-white text-[#0b1a10]">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <main id="top">
        {/* 1. ヒーロー --------------------------------------------------- */}
        <section className="relative min-h-[88vh] w-full overflow-hidden">
          <div className="absolute inset-0 br-slow-zoom">
            <Photo
              src="/images/IMG_5800.jpg"
              alt="ブラジルでサッカーに挑戦する選手"
              priority
              sizes="100vw"
              placeholderLabel="HERO PHOTO"
              className="h-full w-full"
            />
          </div>
          <div className="absolute inset-0 br-overlay-dark" />
          {/* ブラジルカラーのアクセントバー */}
          <div className="absolute left-0 top-0 z-10 flex h-1.5 w-full">
            <span className="h-full flex-1 bg-[#009c3b]" />
            <span className="h-full flex-1 bg-[#ffdf00]" />
            <span className="h-full flex-1 bg-[#002776]" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[88vh] w-full max-w-6xl flex-col justify-center px-5 py-28 sm:px-6">
            <span className="br-animate inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] font-bold tracking-[0.25em] text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ffdf00]" />
              BRAZIL FOOTBALL CHALLENGE
            </span>
            <h1 className="br-animate br-animate-delay-1 mt-6 max-w-3xl text-4xl font-black leading-[1.15] tracking-tight text-white sm:text-6xl md:text-7xl">
              世界への挑戦は、
              <br />
              <span className="text-[#ffdf00]">ここから始まる。</span>
            </h1>
            <p className="br-animate br-animate-delay-2 mt-6 max-w-xl text-sm leading-8 text-white/85 sm:text-lg">
              ブラジルで本物のサッカーを体験し、世界への可能性を広げる。
            </p>
            <div className="br-animate br-animate-delay-3 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="br-btn-green w-full text-base sm:w-auto">
                <LineIcon className="h-5 w-5" />
                LINEで無料相談する
              </a>
              <a
                href="#reasons"
                className="w-full rounded-full border border-white/40 px-8 py-4 text-center text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 sm:w-auto"
              >
                Para Sonhoを知る
              </a>
            </div>
          </div>

          {/* スクロールヒント */}
          <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/60">
            <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 p-1">
              <span className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
            </div>
          </div>
        </section>

        {/* 2. 世界レベルを体験 ------------------------------------------- */}
        <section className="bg-[#f7faf8] py-20 sm:py-24">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
            <p className="br-eyebrow">EXPERIENCE</p>
            <h2 className="br-heading mt-3 max-w-2xl">
              世界レベルを、<span className="text-[#009c3b]">体で覚える。</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-8 text-[#3f5147]">
              練習、試合、遠征。ブラジルの日常そのものが、最高のトレーニングです。
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 px-3 sm:grid-cols-3 sm:gap-4 sm:px-4">
            {experiencePhotos.map((p, i) => (
              <div
                key={p.label}
                className={`relative overflow-hidden rounded-2xl ${
                  i === 0 ? "aspect-[4/5] sm:aspect-[3/4]" : "aspect-[4/5] sm:aspect-[3/4]"
                }`}
              >
                <Photo
                  src={p.src}
                  alt={p.label}
                  overlay="dark"
                  placeholderLabel={p.label}
                  sizes="(max-width: 640px) 100vw, 33vw"
                >
                  <div className="flex h-full items-end p-5">
                    <p className="text-lg font-extrabold text-white drop-shadow">{p.label}</p>
                  </div>
                </Photo>
              </div>
            ))}
          </div>
        </section>

        {/* 3. 選ばれる理由 ----------------------------------------------- */}
        <section id="reasons" className="bg-white py-20 sm:py-24">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
            <p className="br-eyebrow">WHY PARA SONHO</p>
            <h2 className="br-heading mt-3 max-w-2xl">Para Sonhoが選ばれる理由</h2>
            <p className="mt-4 max-w-xl text-sm leading-8 text-[#3f5147]">
              「行ってみたい」を「挑戦できた」に変える、4つの強み。
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {reasons.map((r, i) => (
                <article
                  key={r.no}
                  className="group relative overflow-hidden rounded-3xl border border-[#e7efe9] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] w-full">
                    <Photo
                      src={r.src}
                      alt={r.title}
                      overlay={i % 2 === 0 ? "green" : "navy"}
                      placeholderLabel={r.title}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    >
                      <div className="flex h-full flex-col justify-between p-6">
                        <span className="text-3xl font-black text-white/90">{r.no}</span>
                        <h3 className="text-2xl font-black text-white drop-shadow">{r.title}</h3>
                      </div>
                    </Photo>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-7 text-[#3f5147]">{r.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. 留学生活 --------------------------------------------------- */}
        <section className="relative overflow-hidden bg-[#002776] py-20 text-white sm:py-24">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#009c3b]/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#ffdf00]/20 blur-3xl" />
          <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6">
            <p className="br-eyebrow" style={{ color: "#ffdf00" }}>
              DAILY LIFE
            </p>
            <p className="mt-4 max-w-xl text-sm leading-8 text-white/80">
              寮・食事・移動・日常まで。サッカーに集中できる環境を整えます。
            </p>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {lifeItems.map((item) => (
                <div
                  key={item.title}
                  className="relative aspect-[4/5] overflow-hidden rounded-2xl"
                >
                  <Photo
                    src={item.src}
                    alt={item.title}
                    overlay="dark"
                    placeholderLabel={item.title}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  >
                    <div className="flex h-full flex-col justify-end p-4">
                      <p className="text-base font-extrabold text-white drop-shadow">{item.title}</p>
                      <p className="mt-1 text-[11px] leading-5 text-white/75">{item.desc}</p>
                    </div>
                  </Photo>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. 留学プラン ------------------------------------------------- */}
        <section id="plans" className="bg-white py-20 sm:py-24">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
            <p className="br-eyebrow">PLANS</p>
            <h2 className="br-heading mt-3">留学プラン</h2>
            <p className="mt-4 max-w-xl text-sm leading-8 text-[#3f5147]">
              短期〜長期まで、目標とスケジュールに合わせて設計します。
            </p>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.title}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#e7efe9] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="h-1.5 w-full bg-gradient-to-r from-[#009c3b] via-[#ffdf00] to-[#002776]" />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-black text-[#0b1a10]">{plan.title}</h3>
                    <p className="mt-2 text-sm text-[#3f5147]">{plan.target}</p>
                    <ul className="mt-4 space-y-2 text-sm text-[#1f2937]">
                      {plan.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#009c3b]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto border-t border-[#eef3f0] pt-5">
                      <p className="text-sm leading-6 text-[#3f5147]">費用についてはLINEでお気軽にご相談ください。</p>
                      <a
                        href={LINE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#009c3b] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#00702a]"
                      >
                        <LineIcon className="h-4 w-4" />
                        LINEで相談する
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. プロテスト ------------------------------------------------- */}
        <section id="protest" className="bg-[#f7faf8] py-20 sm:py-24">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
            <p className="br-eyebrow">NEW SERVICE</p>
            <h2 className="br-heading mt-3 max-w-2xl">プロテスト（入団テスト）サポート</h2>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-[#3f5147]">
              現地クラブの入団テスト（プロテスト／セレクション）への挑戦をサポート。プロ契約・上位カテゴリ昇格を本気でめざす選手向けの新サービスです。
            </p>

            <div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-[#00702a] via-[#009c3b] to-[#002776] text-white shadow-lg">
              <div className="grid gap-8 p-8 sm:p-10 md:grid-cols-2">
                <div className="flex flex-col justify-center">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ffdf00]" />
                    PRO TEST / SELECTION
                  </span>
                  <h3 className="mt-5 text-2xl font-black leading-snug sm:text-3xl">
                    現地クラブの入団テストへ、
                    <br />
                    <span className="text-[#ffdf00]">本気の挑戦を。</span>
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/85">
                    選手のレベルや希望に合わせて受験するクラブを選定。テスト同行・通訳・現地サポートまで一括で対応し、評価される環境づくりを支えます。
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3">
                      <p className="text-[10px] font-bold tracking-[0.15em] text-[#ffdf00]">期間</p>
                      <p className="mt-1 text-base font-bold">2週間〜</p>
                    </div>
                    <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3">
                      <p className="text-[10px] font-bold tracking-[0.15em] text-[#ffdf00]">受験クラブ数</p>
                      <p className="mt-1 text-base font-bold">ご希望に応じて調整</p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-6 text-white/70">
                    ※ 受験するチーム数や現地の状況によって、期間・費用は変動します。詳細はお気軽にご相談ください。
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-white/60">SUPPORT</p>
                  <ul className="space-y-3 text-sm">
                    {[
                      "選手のレベル・希望に合った受験クラブの選定",
                      "入団テスト（プロテスト）への帯同・申込サポート",
                      "現地での通訳・移動・生活サポート",
                      "テスト結果を踏まえた次のステップのご提案",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-3 rounded-xl bg-white/10 px-4 py-3">
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#ffdf00]" />
                        <span className="leading-6 text-white/90">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="br-btn-green mt-2 w-full text-sm"
                  >
                    <LineIcon className="h-4 w-4" />
                    プロテストについて相談する
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. 参加選手・卒業生（参加選手がまだいないため一旦非表示） -------
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
            <p className="br-eyebrow">PLAYERS</p>
            <h2 className="br-heading mt-3 max-w-2xl">挑戦した選手たち</h2>
            <p className="mt-4 max-w-xl text-sm leading-8 text-[#3f5147]">
              ブラジルでの日々が、選手を大きく変えていきます。
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {players.map((p) => (
                <article
                  key={p.name}
                  className="flex flex-col overflow-hidden rounded-3xl border border-[#e7efe9] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/5] w-full">
                    <Photo
                      src={p.src}
                      alt={p.name}
                      overlay="dark"
                      placeholderLabel={p.name}
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    >
                      <div className="flex h-full flex-col justify-end p-5">
                        <p className="text-xl font-black text-white drop-shadow">{p.name}</p>
                        <p className="mt-1 text-xs font-semibold text-[#ffdf00]">{p.meta}</p>
                      </div>
                    </Photo>
                  </div>
                  <div className="p-5">
                    <p className="text-sm leading-7 text-[#3f5147]">「{p.comment}」</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        */}

        {/* 8. ギャラリー（写真が揃うまで一旦非表示） ---------------------
        <section className="bg-[#f7faf8] py-20 sm:py-24">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
            <p className="br-eyebrow">GALLERY</p>
            <h2 className="br-heading mt-3">現地の一瞬を、そのままに。</h2>
            <p className="mt-4 max-w-xl text-sm leading-8 text-[#3f5147]">
              ピッチも、街も、青空も。ブラジルの空気を写真でお届けします。
            </p>
          </div>

          <div className="mx-auto mt-10 w-full max-w-6xl px-3 sm:px-6">
            <div className="columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3">
              {galleryPhotos.map((g, i) => {
                // 高さに変化をつけてPinterest風に
                const aspect = i % 5 === 0 ? "aspect-[3/4]" : i % 3 === 0 ? "aspect-square" : "aspect-[4/5]";
                return (
                  <div key={`${g.label}-${i}`} className={`relative w-full overflow-hidden rounded-xl ${aspect} break-inside-avoid`}>
                    <Photo
                      src={g.src}
                      alt={g.label}
                      overlay="green"
                      placeholderLabel={g.label}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        */}

        {/* SNS */}
        <SocialFeed items={socialItems} />

        {/* FAQ */}
        <section id="faq" className="bg-white py-20 sm:py-24">
          <div className="mx-auto w-full max-w-4xl px-5 sm:px-6">
            <p className="br-eyebrow">FAQ</p>
            <h2 className="br-heading mt-3">よくある質問</h2>
            <div className="mt-10 space-y-3">
              {faqs.map((item) => (
                <details key={item.q} className="group rounded-2xl border border-[#e7efe9] bg-white p-5 shadow-sm">
                  <summary className="cursor-pointer list-none font-bold text-[#0b1a10]">
                    {item.q}
                    <span className="float-right text-[#009c3b] transition group-open:rotate-45">＋</span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-[#3f5147]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 9. CTA（スタジアム背景） ------------------------------------- */}
        <section id="contact" className="relative min-h-[60vh] w-full overflow-hidden">
          <div className="absolute inset-0">
            <Photo
              src={undefined}
              alt="スタジアム"
              placeholderLabel="STADIUM"
              sizes="100vw"
              className="h-full w-full"
            />
          </div>
          <div className="absolute inset-0 br-overlay-dark" />
          <div className="absolute inset-0 bg-[#002776]/40" />

          <div className="relative z-10 mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center px-5 py-24 text-center sm:px-6">
            <p className="text-[10px] font-bold tracking-[0.3em] text-[#ffdf00]">YOUR TURN</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-5xl">
              次に世界へ挑戦するのは、
              <br />
              <span className="text-[#ffdf00]">あなたです。</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-8 text-white/85 sm:text-base">
              年齢・レベルは問いません。まずは気軽に、夢への一歩を相談してください。
            </p>
            <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="br-btn-green w-full text-base sm:w-auto sm:min-w-[240px]"
              >
                <LineIcon className="h-5 w-5" />
                LINEで相談する
              </a>
            </div>
            <p className="mt-4 text-xs text-white/70">LINE ID：@593loohp</p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
