export const metadata = {
  title: "会社概要",
  description:
    "Para Sonho（パラソーニョ）を運営する株式会社セグランサの会社概要。ブラジルサッカー留学・海外サッカー挑戦サポート事業を展開しています。",
  alternates: { canonical: "/about/company" },
};

export default function CompanyPage() {
  return (
    <>
      <h1 className="ps-heading text-2xl sm:text-3xl">会社概要</h1>
      <p className="ps-lead mt-3 text-sm sm:text-base">
        Para Sonho（パラソーニョ）の事業者情報です。
      </p>

      <dl className="mt-6 divide-y divide-[rgba(20,33,61,0.08)] border-y border-[rgba(20,33,61,0.08)] text-sm">
        {[
          ["サービス名", "Para Sonho / パラソーニョ"],
          ["事業内容", "サッカー留学サポート"],
          ["運営会社", "株式会社セグランサ"],
          ["所在地", "静岡県静岡市"],
          ["お問い合わせ", "parasonho.info@gmail.com"],
        ].map(([k, v]) => (
          <div key={k} className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[160px_1fr]">
            <dt className="font-semibold text-[#14213D]">{k}</dt>
            <dd className="text-[#111111]/80">{v}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}
