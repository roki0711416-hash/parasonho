export default function Home() {
  const navItems = [
    { href: "#service", label: "サービス内容" },
    { href: "#plans", label: "留学プラン" },
    { href: "#features", label: "サントス留学の特徴" },
    { href: "#pricing", label: "料金イメージ" },
    { href: "#faq", label: "よくある質問" },
    { href: "#contact", label: "お問い合わせ" },
  ];

  const plans = [
    {
      title: "短期留学プラン（1〜4週間）",
      target: "学校の長期休みで挑戦したい中高生・大学生向け",
      points: ["現地クラブ練習参加", "生活サポート", "空港送迎"],
    },
    {
      title: "中期留学プラン（1〜3ヶ月）",
      target: "実践力を高めたい選手向け",
      points: ["実戦的トレーニング", "語学サポート", "住居手配"],
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
      a: "問題ありません。現地スタッフと連携し、生活・練習両面でサポートします。",
    },
    {
      q: "まずは相談だけでも可能ですか？",
      a: "もちろん可能です。無料相談で目的や不安をヒアリングし、最適な留学プランをご案内します。",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fff6] text-[#123524]">
      <header className="sticky top-0 z-50 border-b border-[#d6e9c9] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="font-bold tracking-wide">
            <span className="text-xl text-[#0b6a37]">Para Sonho</span>
            <span className="ml-2 text-sm font-medium text-[#4e8a3d]">/ パラソーニョ</span>
          </a>
          <nav className="hidden gap-5 text-sm md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#0b6a37]">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-[#ffcd00] px-4 py-2 text-sm font-bold text-[#0e512e] shadow-sm transition hover:scale-[1.02] hover:bg-[#ffd735]"
          >
            無料相談する
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-[#d6e9c9] bg-gradient-to-b from-[#0b6a37] to-[#137744] text-white">
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#ffcd00]/25 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs tracking-wide">
                ブラジル・サントス サッカー留学サポート
              </p>
              <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
                本場ブラジルで学ぶ、
                <br />
                次の一歩へ。
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
                Para Sonho / パラソーニョ は、日本からサントスへ挑戦する選手のための留学サポートサービスです。
                住居・現地生活・練習環境まで、安心して成長に集中できる環境を整えます。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-[#ffcd00] px-7 py-3 text-center text-sm font-extrabold text-[#11562f] transition hover:bg-[#ffd735]"
                >
                  まずは無料相談へ
                </a>
                <a
                  href="#service"
                  className="rounded-full border border-white/70 px-7 py-3 text-center text-sm font-semibold transition hover:bg-white/15"
                >
                  サービスを見る
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/25 bg-white/10 p-6 shadow-2xl backdrop-blur-sm">
              <h2 className="text-xl font-bold">留学サポート内容</h2>
              <ul className="mt-4 space-y-3 text-sm text-white/90">
                <li>⚽ 現地クラブ練習参加の調整</li>
                <li>🏠 安全な住居の手配</li>
                <li>🧭 現地スタッフによる生活サポート</li>
                <li>✈️ 渡航前オリエンテーション</li>
                <li>📞 保護者への定期報告</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="service" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="section-title">サービス内容</h2>
          <p className="section-subtitle">
            サッカー留学に必要な準備と現地生活をワンストップでサポート。初めての海外でも安心して挑戦できます。
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "現地クラブ・練習先マッチング",
              "住居手配・生活立ち上げ支援",
              "通訳/コミュニケーション補助",
              "滞在中の相談・緊急時対応",
            ].map((text) => (
              <div key={text} className="card">
                <p className="text-sm font-semibold leading-6">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="plans" className="bg-white py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <h2 className="section-title">留学プラン</h2>
            <p className="section-subtitle">短期〜長期まで、目標とスケジュールに合わせて設計します。</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {plans.map((plan) => (
                <article key={plan.title} className="card h-full">
                  <h3 className="text-lg font-bold text-[#0d6938]">{plan.title}</h3>
                  <p className="mt-2 text-sm text-[#2d5d43]">{plan.target}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {plan.points.map((point) => (
                      <li key={point}>・{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="section-title">サントス留学の特徴</h2>
          <p className="section-subtitle">
            サッカー文化が根付く街・サントスで、実践に近い環境に身を置くことで成長を加速させます。
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="card">
              <h3 className="text-base font-bold">実践的なトレーニング環境</h3>
              <p className="mt-2 text-sm text-[#2d5d43]">スピードと判断力が求められる環境で、プレーの質を高めます。</p>
            </div>
            <div className="card">
              <h3 className="text-base font-bold">生活面まで伴走サポート</h3>
              <p className="mt-2 text-sm text-[#2d5d43]">住居・移動・生活導線を整え、競技に集中できる状態を作ります。</p>
            </div>
            <div className="card">
              <h3 className="text-base font-bold">保護者も安心の体制</h3>
              <p className="mt-2 text-sm text-[#2d5d43]">定期連絡と相談窓口により、離れていても状況を把握できます。</p>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-[#f3faed] py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <h2 className="section-title">料金イメージ</h2>
            <p className="section-subtitle">正式見積は無料相談後にご案内します。以下は参考イメージです。</p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-[#d4e7c8] bg-white shadow-sm">
              <div className="grid grid-cols-1 divide-y divide-[#e7f2dd] text-sm md:grid-cols-3 md:divide-x md:divide-y-0">
                <div className="p-6">
                  <p className="font-bold text-[#0d6938]">短期（1〜4週間）</p>
                  <p className="mt-2 text-2xl font-extrabold">20〜45万円</p>
                  <p className="mt-1 text-xs text-[#456c54]">渡航時期・滞在条件により変動</p>
                </div>
                <div className="p-6">
                  <p className="font-bold text-[#0d6938]">中期（1〜3ヶ月）</p>
                  <p className="mt-2 text-2xl font-extrabold">55〜120万円</p>
                  <p className="mt-1 text-xs text-[#456c54]">サポート範囲に応じて調整</p>
                </div>
                <div className="p-6">
                  <p className="font-bold text-[#0d6938]">長期（6ヶ月〜）</p>
                  <p className="mt-2 text-2xl font-extrabold">個別見積</p>
                  <p className="mt-1 text-xs text-[#456c54]">目的・進路に合わせて設計</p>
                </div>
              </div>
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

        <section id="contact" className="bg-[#0e6537] py-16 text-white">
          <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-extrabold sm:text-3xl">お問い合わせ</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
              留学時期やレベルが決まっていなくても大丈夫です。まずは無料相談で、あなたに合ったサントス留学の進め方を一緒に整理しましょう。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="w-full rounded-full bg-[#ffcd00] px-8 py-3 text-center text-sm font-extrabold text-[#104f2c] transition hover:bg-[#ffd735] sm:w-auto"
              >
                無料相談フォームへ
              </a>
              <a
                href="mailto:info@parasonho.jp"
                className="w-full rounded-full border border-white/60 px-8 py-3 text-center text-sm font-semibold transition hover:bg-white/10 sm:w-auto"
              >
                メールで問い合わせ
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d6e9c9] bg-white px-4 py-6 text-center text-xs text-[#4f735f] sm:px-6">
        © {new Date().getFullYear()} Para Sonho / パラソーニョ
      </footer>
    </div>
  );
}
