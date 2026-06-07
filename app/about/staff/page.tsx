import Image from "next/image";

export const metadata = {
  title: "スタッフ紹介",
  description:
    "Para Sonho（パラソーニョ）のスタッフ紹介。ブラジル現地・日本の両拠点でサッカー留学をサポートするメンバーをご紹介します。",
  alternates: { canonical: "/about/staff" },
};

type Staff = {
  name: string;
  furigana: string;
  role: string;
  image?: string;
  yearsPlayed?: number;
  yearsLabel?: string;
  career?: string[];
  bio?: string;
};

const staff: Staff[] = [
  {
    name: "清水 裕基",
    furigana: "シミズ ヒロキ",
    role: "留学コーディネーター / サッカーサポート",
    image: "/images/staff/hiroki-shimizu.jpg",
    yearsPlayed: 13,
    career: [
      "神奈川県トレセン",
      "U-18ソサイチ日本選抜選出",
      "Santos FC U-17",
      "Lajeadense",
      "C.E.União",
    ],
    bio: "日本での競技経験とブラジル現地クラブでのプレー経験を活かし、選手一人ひとりに合った留学プランをコーディネートします。",
  },
  {
    name: "松永 ケビン",
    furigana: "マツナガ ケビン",
    role: "現地サポート / 通訳",
    image: "/images/staff/kevin-matsunaga.jpg",
    yearsPlayed: 15,
    yearsLabel: "サッカー・フットサル歴",
    career: [
      "マリオフットサル",
      "Santos Academy JAPAN",
      "全日本ユース(U-18)フットサル大会出場",
      "Atibaia",
    ],
    bio: "高いレベルの日本語・ポルトガル語に対応し、現地での生活や手続きを安全・安心にサポート。サッカー・フットサルで培った経験を活かし、選手目線で寄り添います。",
  },
];

export default function StaffPage() {
  return (
    <>
      <h1 className="ps-heading text-2xl sm:text-3xl">スタッフ紹介</h1>
      <p className="ps-lead mt-3 text-sm sm:text-base">
        日本と現地、両側からあなたの挑戦を支えるメンバーです。
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {staff.map((s) => (
          <article key={s.name} className="ps-card flex flex-col overflow-hidden p-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F8F9FB]">
              {s.image ? (
                <Image
                  src={s.image}
                  alt={`${s.name}（${s.furigana}）`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-3xl font-extrabold text-[#14213D]/20">
                  {s.name.charAt(0)}
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-3 p-5">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.18em] text-[#111111]/40">
                  {s.furigana}
                </p>
                <h2 className="mt-1 text-lg font-extrabold text-[#14213D]">{s.name}</h2>
                <p className="mt-1 text-xs font-semibold text-[#F5B041]">{s.role}</p>
              </div>

              {typeof s.yearsPlayed === "number" && (
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(245,176,65,0.3)] bg-[rgba(245,176,65,0.08)] px-3 py-1 text-xs font-bold text-[#C4842A]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F5B041]" />
                  {s.yearsLabel ?? "サッカー歴"} {s.yearsPlayed}年
                </div>
              )}

              {s.career && s.career.length > 0 && (
                <div>
                  <p className="text-[10px] font-bold tracking-[0.15em] text-[#F5B041]">
                    MAIN CAREER
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#111111]/50">主な経歴</p>
                  <ul className="mt-2 space-y-1.5">
                    {s.career.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2 text-sm leading-snug text-[#111111]/70"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F5B041]" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {s.bio && (
                <p className="mt-1 text-xs leading-6 text-[#111111]/55">{s.bio}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
