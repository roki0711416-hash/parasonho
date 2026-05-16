import Link from "next/link";

export default function AboutIndex() {
  const sections = [
    { href: "/about/company", label: "会社概要", desc: "事業者情報と所在地。" },
    { href: "/about/support", label: "サポート内容", desc: "渡航前から現地までの伴走体制。" },
    { href: "/about/staff", label: "スタッフ紹介", desc: "日本・現地のチーム紹介。" },
  ];

  return (
    <>
      <h1 className="text-2xl font-extrabold text-[#0d6938] sm:text-3xl">Para Sonhoとは</h1>
      <p className="mt-3 text-sm leading-7 text-[#2d5d43] sm:text-base">
        Para Sonho（パラソーニョ）は、ブラジルでのサッカー留学を支援するサービスです。
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="rounded-2xl border border-[#d8eacb] bg-[#f8fff6] p-4 transition hover:border-[#0b6a37] hover:bg-white"
          >
            <p className="text-sm font-bold text-[#0b6a37]">{s.label}</p>
            <p className="mt-1 text-xs text-[#2d5d43]">{s.desc}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
