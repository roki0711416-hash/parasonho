export const metadata = {
  title: "サポート内容",
  description:
    "Para Sonho（パラソーニョ）のサッカー留学サポート内容。現地生活・練習参加・通訳・緊急時対応まで、選手と保護者が安心できる体制をご紹介します。",
  alternates: { canonical: "/about/support" },
};

export default function SupportPage() {
  const items = [
    { t: "渡航前サポート", d: "ビザ・航空券・持ち物・生活オリエンテーション。" },
    { t: "現地生活サポート", d: "到着後の生活立ち上げや現地での困りごとに対応。" },
    { t: "練習環境マッチング", d: "目的・年齢・レベルに応じた現地クラブの調整。" },
    { t: "生活サポート", d: "現地スタッフによる買い物・通院・通訳サポート。" },
    { t: "保護者連絡", d: "定期的な状況報告と相談窓口。" },
    { t: "帰国後フォロー", d: "進路相談、再渡航サポート。" },
  ];

  return (
    <>
      <h1 className="text-2xl font-extrabold text-[#0d6938] sm:text-3xl">サポート内容</h1>
      <p className="mt-3 text-sm leading-7 text-[#2d5d43] sm:text-base">
        渡航前から帰国後まで、選手とご家族に伴走する体制を整えています。
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((i) => (
          <div key={i.t} className="rounded-2xl border border-[#d8eacb] bg-[#f8fff6] p-5">
            <p className="font-bold text-[#0b6a37]">{i.t}</p>
            <p className="mt-2 text-sm text-[#2d5d43]">{i.d}</p>
          </div>
        ))}
      </div>
    </>
  );
}
