import { Clock, Languages } from "lucide-react";
import Reveal from "./Reveal";
import LineIcon from "./LineIcon";
import { LINE_URL } from "../lib/contact";

const reasons = [
  {
    title: "サントスFCなど名門クラブとのネットワーク",
    description:
      "サントスFCをはじめとするブラジル名門クラブとの提携・ネットワークにより、本場ブラジルの高いレベルの環境で挑戦できる機会を提供します。信用度の高い環境で、プロを目指す選手の挑戦をサポートします。",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 3c2.2 2.8 3.5 5.8 3.5 9s-1.3 6.2-3.5 9M12 3C9.8 5.8 8.5 8.8 8.5 12s1.3 6.2 3.5 9M12 3v18M3 12h18"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M5.5 7.5h13M5.5 16.5h13"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "日本語・ポルトガル語対応の現地スタッフ",
    description:
      "現地スタッフは高いレベルの日本語とポルトガル語に対応可能です。練習、生活、病院、手続き、クラブとのやり取りなど、言葉の壁を感じることなく安心して留学生活を送れます。",
    icon: <Languages className="h-7 w-7" strokeWidth={1.5} aria-hidden="true" />,
  },
  {
    title: "24時間対応の手厚い現地サポート",
    description:
      "ブラジル滞在中の生活面・サッカー面・トラブル対応まで、現地スタッフが24時間体制でサポートします。選手はサッカーに集中でき、保護者の方も安心して送り出せる環境を整えています。",
    icon: <Clock className="h-7 w-7" strokeWidth={1.5} aria-hidden="true" />,
  },
] as const;

export default function WhyChooseSection() {
  return (
    <section id="why-us" className="ps-section bg-white">
      <div className="ps-container">
        <Reveal>
          <p className="ps-eyebrow">WHY PARA SONHO</p>
          <h2 className="ps-heading mt-4 max-w-2xl">Para Sonhoが選ばれる3つの理由</h2>
          <p className="ps-lead mt-5 max-w-2xl text-sm sm:text-base">
            本場ブラジルでの挑戦を、信頼できる環境と手厚いサポートで支えます。
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-[rgba(20,33,61,0.08)] bg-white p-8 shadow-sm transition hover:border-[#22C55E]/25 hover:shadow-md">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#22C55E]/10 text-[#16A34A]">
                  {reason.icon}
                </div>
                <h3 className="mt-6 text-lg font-black leading-snug text-[#14213D] sm:text-xl">
                  {reason.title}
                </h3>
                <p className="ps-lead mt-4 flex-1 text-sm leading-7">{reason.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-14 text-center">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ps-btn-line inline-flex w-full items-center justify-center gap-2 text-base sm:w-auto sm:min-w-[320px]"
            >
              <LineIcon className="h-5 w-5 shrink-0" />
              ブラジル留学について無料相談する
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
