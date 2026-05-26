export const metadata = {
  title: "スタッフ紹介",
  description:
    "Para Sonho（パラソーニョ）のスタッフ紹介。ブラジル現地・日本の両拠点でサッカー留学をサポートするメンバーをご紹介します。",
  alternates: { canonical: "/about/staff" },
};

export default function StaffPage() {
  const staff = [
    { name: "代表（仮）", role: "代表 / 留学コーディネーター", bio: "日本とブラジルを繋ぐ留学設計を担当。" },
    { name: "現地担当（仮）", role: "ブラジル現地サポート", bio: "生活・通訳など現地全般を担当。" },
    { name: "サッカー担当（仮）", role: "練習環境コーディネーター", bio: "選手のレベルに合わせたクラブ調整を担当。" },
  ];

  return (
    <>
      <h1 className="text-2xl font-extrabold text-[#0d6938] sm:text-3xl">スタッフ紹介</h1>
      <p className="mt-3 text-sm leading-7 text-[#2d5d43] sm:text-base">
        日本と現地、両側からあなたの挑戦を支えるメンバーです。
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {staff.map((s) => (
          <div key={s.name} className="rounded-2xl border border-[#d8eacb] bg-[#f8fff6] p-5 text-center">
            <div className="mx-auto h-20 w-20 rounded-full bg-[#0b6a37]/10" />
            <p className="mt-4 font-bold text-[#0b6a37]">{s.name}</p>
            <p className="mt-1 text-xs text-[#4f735f]">{s.role}</p>
            <p className="mt-3 text-sm text-[#2d5d43]">{s.bio}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-[#4f735f]">※ 仮コンテンツです。</p>
    </>
  );
}
