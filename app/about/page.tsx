import Link from "next/link";

export const metadata = {
  title: "Para Sonhoについて",
  description:
    "Para Sonho（パラソーニョ）は、本場ブラジルを舞台にしたサッカー留学・海外サッカー挑戦サポートブランドです。会社概要・サポート内容・スタッフをご紹介します。",
  alternates: { canonical: "/about" },
};

export default function AboutIndex() {
  const sections = [
    { href: "/about/company", label: "会社概要", desc: "事業者情報と所在地。" },
    { href: "/about/support", label: "サポート内容", desc: "渡航前から現地までの伴走体制。" },
    { href: "/about/staff", label: "スタッフ紹介", desc: "日本・現地のチーム紹介。" },
  ];

  return (
    <>
      <h1 className="ps-heading text-2xl sm:text-3xl">Para Sonhoについて</h1>
      <p className="ps-lead mt-3 text-sm sm:text-base">
        Para Sonho（パラソーニョ）は、ブラジルでのサッカー留学を支援するサービスです。
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="ps-card block p-4 transition hover:border-[rgba(245,176,65,0.35)]"
          >
            <p className="text-sm font-bold text-[#14213D]">{s.label}</p>
            <p className="mt-1 text-xs text-[#111111]/50">{s.desc}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
