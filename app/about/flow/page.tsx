export const metadata = { title: "留学の流れ | Para Sonho" };

export default function FlowPage() {
  const steps = [
    { t: "1. 無料相談", d: "目的・期間・ご予算をヒアリングし、最適なプランをご提案。" },
    { t: "2. プラン決定・お申込み", d: "渡航時期・滞在条件を確定し、契約を締結。" },
    { t: "3. 渡航準備", d: "ビザ・航空券・持ち物・健康面の準備をサポート。" },
    { t: "4. 渡航・現地到着", d: "空港送迎、住居入居、生活オリエンテーション。" },
    { t: "5. トレーニング開始", d: "クラブ参加・練習・生活の伴走スタート。" },
    { t: "6. 滞在中サポート", d: "定期面談、保護者報告、緊急時対応。" },
    { t: "7. 帰国・アフターフォロー", d: "進路相談、次のステップへのサポート。" },
  ];
  return (
    <>
      <h1 className="text-2xl font-extrabold text-[#0d6938] sm:text-3xl">留学の流れ</h1>
      <ol className="mt-6 space-y-3">
        {steps.map((s) => (
          <li key={s.t} className="rounded-2xl border border-[#d8eacb] bg-[#f8fff6] p-5">
            <p className="font-bold text-[#0b6a37]">{s.t}</p>
            <p className="mt-2 text-sm text-[#2d5d43]">{s.d}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
