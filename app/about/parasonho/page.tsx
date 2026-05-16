export const metadata = { title: "Para Sonhoについて | Para Sonho" };

export default function ParasonhoPage() {
  return (
    <>
      <h1 className="text-2xl font-extrabold text-[#0d6938] sm:text-3xl">Para Sonhoについて</h1>
      <p className="mt-4 text-sm leading-7 text-[#2d5d43] sm:text-base">
        Para Sonho（パラソーニョ）は、ポルトガル語で「夢へ向かう」を意味する言葉から名付けました。
        サッカーを通じて夢に挑戦する選手と、その家族の不安に寄り添うサービスを目指しています。
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          { t: "本場で学ぶ", d: "ブラジル・サントスで実践的なトレーニング。" },
          { t: "安心の伴走", d: "住居・生活・移動までトータルサポート。" },
          { t: "夢へ向かう", d: "目的・時期・レベルに合わせた留学設計。" },
        ].map((b) => (
          <div key={b.t} className="rounded-2xl border border-[#d8eacb] bg-[#f8fff6] p-5">
            <p className="font-bold text-[#0b6a37]">{b.t}</p>
            <p className="mt-2 text-sm text-[#2d5d43]">{b.d}</p>
          </div>
        ))}
      </div>
    </>
  );
}
