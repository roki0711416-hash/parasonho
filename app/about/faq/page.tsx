export const metadata = { title: "よくある質問 | Para Sonho" };

const faqs = [
  { q: "サッカー経験が浅くても参加できますか？", a: "はい。レベルに合わせて環境をご提案します。" },
  { q: "未成年でも留学できますか？", a: "保護者の方への事前説明と、現地サポートで対応します。" },
  { q: "ポルトガル語が話せなくても大丈夫ですか？", a: "現地スタッフが日常生活と練習をサポートします。" },
  { q: "ビザはどうすればいいですか？", a: "期間に応じて必要な手続きをご案内します。" },
  { q: "費用はどのくらいかかりますか？", a: "期間と滞在条件で異なります。無料相談で詳細をご案内します。" },
  { q: "まずは相談だけでも可能ですか？", a: "もちろん可能です。フォームからお気軽にどうぞ。" },
];

export default function AboutFaqPage() {
  return (
    <>
      <h1 className="text-2xl font-extrabold text-[#0d6938] sm:text-3xl">よくある質問</h1>
      <div className="mt-6 space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="rounded-2xl border border-[#d8eacb] bg-[#f8fff6] p-4 open:bg-white">
            <summary className="cursor-pointer list-none font-semibold text-[#0b6a37]">
              {f.q}
            </summary>
            <p className="mt-3 text-sm leading-7 text-[#2d5d43]">{f.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
