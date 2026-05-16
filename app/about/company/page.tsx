export const metadata = { title: "会社概要 | Para Sonho" };

export default function CompanyPage() {
  return (
    <>
      <h1 className="text-2xl font-extrabold text-[#0d6938] sm:text-3xl">会社概要</h1>
      <p className="mt-3 text-sm leading-7 text-[#2d5d43] sm:text-base">
        Para Sonho（パラソーニョ）の事業者情報です。
      </p>

      <dl className="mt-6 divide-y divide-[#e7f2dd] border-y border-[#e7f2dd] text-sm">
        {[
          ["サービス名", "Para Sonho / パラソーニョ"],
          ["事業内容", "ブラジルのサッカー留学サポート"],
          ["所在地", "（準備中）"],
          ["お問い合わせ", "parasonho.info@gmail.com"],
        ].map(([k, v]) => (
          <div key={k} className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[160px_1fr]">
            <dt className="font-semibold text-[#0b6a37]">{k}</dt>
            <dd className="text-[#123524]">{v}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-6 text-xs text-[#4f735f]">※ 仮コンテンツです。確定後に更新します。</p>
    </>
  );
}
