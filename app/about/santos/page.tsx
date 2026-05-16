export const metadata = { title: "ブラジル・サントス紹介 | Para Sonho" };

export default function SantosPage() {
  return (
    <>
      <h1 className="text-2xl font-extrabold text-[#0d6938] sm:text-3xl">ブラジル・サントス紹介</h1>
      <p className="mt-3 text-sm leading-7 text-[#2d5d43] sm:text-base">
        サントスは、ブラジル・サンパウロ州の海沿いに位置するサッカーの聖地のひとつ。
        多くの世界的選手を生み出した、サッカー文化が息づく街です。
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#d8eacb] bg-[#f8fff6] p-5">
          <p className="font-bold text-[#0b6a37]">気候</p>
          <p className="mt-2 text-sm text-[#2d5d43]">温暖な気候で、一年を通してサッカーがしやすい環境。</p>
        </div>
        <div className="rounded-2xl border border-[#d8eacb] bg-[#f8fff6] p-5">
          <p className="font-bold text-[#0b6a37]">サッカー文化</p>
          <p className="mt-2 text-sm text-[#2d5d43]">街中にサッカーが根付き、高い競技レベルに常に触れられる。</p>
        </div>
        <div className="rounded-2xl border border-[#d8eacb] bg-[#f8fff6] p-5">
          <p className="font-bold text-[#0b6a37]">アクセス</p>
          <p className="mt-2 text-sm text-[#2d5d43]">サンパウロ市内から車で約1時間。国際便のアクセスも良好。</p>
        </div>
        <div className="rounded-2xl border border-[#d8eacb] bg-[#f8fff6] p-5">
          <p className="font-bold text-[#0b6a37]">生活環境</p>
          <p className="mt-2 text-sm text-[#2d5d43]">海沿いで治安に配慮しやすいエリアを中心に住居を手配。</p>
        </div>
      </div>
      <p className="mt-6 text-xs text-[#4f735f]">※ 仮コンテンツです。</p>
    </>
  );
}
