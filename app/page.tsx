import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const LINE_URL = "https://line.me/R/ti/p/@593loohp";

export default function Home() {
  const plans = [
    {
      title: "短期留学プラン（1〜4週間）",
      target: "学校の長期休みで挑戦したい小中高生・大学生向け",
      points: ["現地クラブ練習参加", "生活サポート", "空港送迎"],
    },
    {
      title: "中期留学プラン（1〜3ヶ月）",
      target: "実践力を高めたい選手向け",
      points: ["実戦的トレーニング", "語学サポート", "現地サポート"],
    },
    {
      title: "長期留学プラン（6ヶ月〜）",
      target: "本格的に海外で成長したい選手向け",
      points: ["継続的な現地サポート", "進路相談", "定期面談"],
    },
  ];

  const faqs = [
    {
      q: "サッカー経験が浅くても参加できますか？",
      a: "はい。現在のレベルや目標に合わせて、参加先やサポート内容をご提案します。",
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

  return (
    <div className="min-h-screen bg-[#f8fff6] text-[#123524]">
      <SiteHeader />

      <main id="top">
        <section className="relative overflow-hidden border-b border-[#d6e9c9] bg-gradient-to-b from-[#0b6a37] to-[#137744] text-white">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#ffcd00]/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
          <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-24 text-center sm:px-6 md:py-36">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl">
              本場ブラジルで学ぶ、
              <br />
              <span className="text-[#ffcd00]">次の一歩へ。</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/80 sm:text-base md:text-lg">
              Para Sonho / パラソーニョ は、日本からブラジルへ挑戦する選手のための留学サポートサービスです。<br className="hidden sm:block" />
              現地生活・練習環境まで、安心して成長に集中できる環境を整えます。
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
                className="w-full rounded-full border border-white/60 px-8 py-4 text-center text-sm font-semibold transition hover:bg-white/15 sm:w-auto"
              >
                サービスを見る
              </a>
            </div>
          </div>
        </section>

        <section id="service" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="section-title">サービス内容</h2>
          <p className="section-subtitle">
            ブラジル挑戦に必要な準備・現地生活・通訳・サポートをワンストップで対応。
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "現地クラブ調整", desc: "選手に合わせた練習環境を厳選" },
              { title: "現地生活サポート", desc: "滞在開始からの生活をサポート" },
              { title: "通訳サポート", desc: "言語面での不安を解消" },
              { title: "緊急時対応", desc: "24時間体制でお応えします" },
            ].map(({ title, desc }) => (
              <div key={title} className="card flex flex-col">
                <p className="font-semibold text-[#0d6938]">{title}</p>
                <p className="mt-2 text-xs text-[#456c54]">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="/service"
              className="inline-flex rounded-full border-2 border-[#0b6a37] px-8 py-3 text-sm font-bold text-[#0b6a37] transition hover:bg-[#0b6a37] hover:text-white"
            >
              詳しく見る
            </a>
          </div>
        </section>

        <section id="plans" className="bg-white py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <h2 className="section-title">留学プラン</h2>
            <p className="section-subtitle">短期〜長期まで、目標とスケジュールに合わせて設計します。</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {plans.map((plan) => (
                <article key={plan.title} className="card flex h-full flex-col">
                  <h3 className="text-lg font-bold text-[#0d6938]">{plan.title}</h3>
                  <p className="mt-2 text-sm text-[#2d5d43]">{plan.target}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {plan.points.map((point) => (
                      <li key={point}>・{point}</li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-[#d6e9c9] pt-5">
                    <p className="text-sm leading-6 text-[#2d5d43]">費用についてはLINEでお気軽にご相談ください。</p>
                    <a
                      href={LINE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#06C755] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#05b34c]"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
                      LINEで費用を相談する
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section id="faq" className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="section-title">よくある質問</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="card group open:bg-[#f9fff4]">
                <summary className="cursor-pointer list-none font-semibold">
                  {item.q}
                  <span className="float-right text-[#4e8a3d] transition group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-[#2d5d43]">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-b from-[#0e6537] to-[#0a5a2e] py-20 text-white">
          <div className="mx-auto w-full max-w-2xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-extrabold sm:text-3xl">無料サッカー留学相談</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
              ブラジルでのサッカー留学について、期間・レベル・年齢問わずお気軽にご相談ください。<br />公式LINEよりお気軽にメッセージをお送りください。
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
