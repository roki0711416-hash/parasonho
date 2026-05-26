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
      "U-18ソサイチ日本代表選出",
      "Santos FC U-17",
      "Lajeadense",
      "C.E.União",
    ],
    bio: "日本での競技経験とブラジル現地クラブでのプレー経験を活かし、選手一人ひとりに合った留学プランをコーディネートします。",
  },
];

export default function StaffPage() {
  return (
    <>
      <h1 className="text-2xl font-extrabold text-[#0d6938] sm:text-3xl">スタッフ紹介</h1>
      <p className="mt-3 text-sm leading-7 text-[#2d5d43] sm:text-base">
        日本と現地、両側からあなたの挑戦を支えるメンバーです。
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {staff.map((s) => (
          <article
            key={s.name}
            className="flex flex-col overflow-hidden rounded-2xl border border-[#d8eacb] bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-[#0a4f2a] to-[#0b6a37]">
              {s.image ? (
                <Image
                  src={s.image}
                  alt={`${s.name}（${s.furigana}）`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-3xl font-extrabold text-white/70">
                  {s.name.charAt(0)}
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-3 p-5">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.18em] text-[#6b8a76]">
                  {s.furigana}
                </p>
                <h2 className="mt-1 text-lg font-extrabold text-[#0b0f0d]">{s.name}</h2>
                <p className="mt-1 text-xs font-semibold text-[#0a4f2a]">{s.role}</p>
              </div>

              {typeof s.yearsPlayed === "number" && (
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#fff7d6] px-3 py-1 text-xs font-bold text-[#8a6a00] ring-1 ring-[#ffcd00]/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffcd00]" />
                  サッカー歴 {s.yearsPlayed}年
                </div>
              )}

              {s.career && s.career.length > 0 && (
                <div>
                  <p className="text-[10px] font-bold tracking-[0.15em] text-[#0a4f2a]">
                    MAIN CAREER
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#4f735f]">主な経歴</p>
                  <ul className="mt-2 space-y-1.5">
                    {s.career.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2 text-sm leading-snug text-[#2d5d43]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0a4f2a]" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {s.bio && (
                <p className="mt-1 text-xs leading-6 text-[#4f735f]">{s.bio}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
