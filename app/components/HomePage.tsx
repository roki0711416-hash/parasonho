"use client";

import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import LocalNetworkSlider from "./LocalNetworkSlider";
import { LOCAL_NETWORK_CTA_IMAGE } from "../lib/local-network";
import PhotoBackdrop from "./PhotoBackdrop";
import { HERO_IMAGE } from "../lib/images";
import FloatingLineButton from "./FloatingLineButton";
import Reveal from "./Reveal";
import JourneyTimeline from "./JourneyTimeline";
import TickerBar from "./TickerBar";
import ConsultCtaButtons from "./ConsultCtaButtons";
import WhyChooseSection from "./WhyChooseSection";
import { useI18n } from "../lib/i18n/I18nProvider";
import { localePath } from "../lib/i18n/locale-path";

type PricingLine = {
  label: string;
  amount: string;
  note?: string;
};

type PricingPlan = {
  period: string;
  title: string;
  breakdown: PricingLine[];
  summary?: string;
  note?: string;
};

const JAPANESE_PRICING_PLANS: PricingPlan[] = [
  {
    period: "約1か月",
    title: "短期留学プラン",
    breakdown: [
      { label: "サポート費", amount: "110万円" },
      { label: "クラブ参加費", amount: "800米ドル", note: "為替相場により変動" },
      { label: "宿泊費", amount: "旅行会社による手配・別途見積り" },
    ],
    summary: "参考費用：110万円＋800米ドル＋宿泊費",
  },
  {
    period: "約3か月",
    title: "中期留学プラン",
    breakdown: [
      { label: "サポート費", amount: "200万円" },
      { label: "クラブ参加費", amount: "2,400米ドル", note: "為替相場により変動" },
      { label: "チーム提携施設利用", amount: "90万円" },
    ],
    note:
      "1か月を超える場合は、クラブ提携先の滞在施設を利用する方向で現在調整しています。宿泊条件および正式な費用は、確定後に改めてご案内します。",
  },
  {
    period: "約6か月",
    title: "長期留学プラン",
    breakdown: [
      { label: "サポート費", amount: "350万円" },
      { label: "長期滞在に伴う渡航準備・追加サポート費", amount: "30万円" },
      { label: "クラブ参加費", amount: "4,800米ドル", note: "為替相場により変動" },
      { label: "チーム提携施設利用", amount: "180万円" },
    ],
  },
  {
    period: "1年間",
    title: "年間留学プラン",
    breakdown: [
      { label: "サポート費", amount: "700万円" },
      { label: "長期滞在に伴う渡航準備・追加サポート費", amount: "60万円" },
      { label: "クラブ参加費", amount: "9,600米ドル", note: "為替相場により変動" },
      { label: "チーム提携施設利用", amount: "300万円" },
    ],
  },
];

const JAPANESE_PRICING_NOTES = [
  "料金は、為替相場、参加時期、クラブ、滞在方法などによって変動します。",
  "往復航空券、海外旅行保険、診察費・治療費・薬代、個人的な支出などは含まれていません。",
  "試合出場、セレクション合格、プロ契約を保証するものではありません。実戦機会を得られるよう、提携クラブと継続的に調整します。",
  "正式なお申し込み前に、すべての費用を記載した個別見積書をご案内します。",
  "未成年の選手は、必ず保護者の方と一緒に内容をご確認ください。",
];

export default function HomePage() {
  const { locale, dict } = useI18n();
  const h = dict.home;
  const c = dict.common;
  const lp = (path = "") => localePath(locale, path);
  const isJapanese = locale === "ja";

  const plans = h.plans.items.map((item, i) => ({
    ...item,
    highlight: i === 1,
  }));

  return (
    <div className="ps-page min-h-screen">
      <SiteHeader />
      <FloatingLineButton />

      <main id="top">
        <section className="relative min-h-[78svh] w-full overflow-hidden sm:min-h-[92svh]">
          <PhotoBackdrop
            src={HERO_IMAGE}
            alt={h.hero.heroAlt}
            variant="hero"
            priority
            className="br-slow-zoom"
          />

          <div className="relative z-10 mx-auto flex min-h-[78svh] w-full max-w-7xl flex-col justify-start px-5 pb-10 pt-[4.75rem] ps-on-photo sm:min-h-[92svh] sm:justify-center sm:px-6 sm:py-32 lg:px-8">
            <span className="br-animate inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[9px] font-bold tracking-[0.26em] text-white/90 backdrop-blur-md sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.28em]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F5B041]" />
              {h.hero.eyebrow}
            </span>

            <h1 className="br-animate br-animate-delay-1 mt-4 max-w-3xl text-[clamp(1.5rem,5.5vw,3.5rem)] font-extrabold leading-[1.18] tracking-tight text-white sm:mt-8">
              {h.hero.title1}
              <br />
              <span className="text-[#F5B041]">{h.hero.title2}</span>
            </h1>

            <p className="br-animate br-animate-delay-2 mt-3 max-w-lg text-sm leading-7 text-white/80 sm:mt-7 sm:text-lg sm:leading-8">
              {h.hero.lead}
            </p>

            <div className="br-animate br-animate-delay-3 mt-5 sm:mt-10">
              <ConsultCtaButtons variant="onDark" size="compact" />
              <a
                href="#plans"
                className="mt-3 inline-flex text-sm font-semibold text-white/75 underline-offset-4 transition hover:text-white hover:underline"
              >
                {h.hero.viewFlow}
              </a>
            </div>
          </div>
        </section>

        <TickerBar />
        <WhyChooseSection />

        <section id="plans" className="ps-section bg-white">
          <div className="ps-container">
            {isJapanese ? (
              <>
                <Reveal>
                  <p className="ps-eyebrow">PLANS</p>
                  <h2 className="ps-heading mt-4">留学費用の目安</h2>
                  <p className="ps-lead mt-5 max-w-3xl text-sm sm:text-base">
                    留学期間、参加クラブ、滞在方法などに応じて、選手一人ひとりに合ったプランをご提案します。以下は現時点での費用の目安です。
                  </p>
                </Reveal>

                <div className="mt-14 grid gap-6 md:grid-cols-2">
                  {JAPANESE_PRICING_PLANS.map((plan, i) => (
                    <Reveal key={plan.title} delay={i * 70}>
                      <article className="ps-card flex h-full flex-col overflow-hidden border border-[rgba(20,33,61,0.08)]">
                        <div className="p-6 sm:p-8">
                          <p className="inline-flex rounded-full bg-[#F5B041]/15 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-[#C4842A]">
                            {plan.period}
                          </p>
                          <h3 className="mt-4 text-2xl font-black tracking-tight text-[#14213D] sm:text-[1.75rem]">
                            {plan.title}
                          </h3>

                          <div className="mt-6 rounded-2xl border border-[rgba(20,33,61,0.08)] bg-[#FCFDFC]">
                            {plan.breakdown.map((item, itemIndex) => (
                              <div
                                key={`${plan.title}-${item.label}`}
                                className={`flex flex-col gap-2 px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:px-5 ${
                                  itemIndex !== 0 ? "border-t border-[rgba(20,33,61,0.08)]" : ""
                                }`}
                              >
                                <div className="min-w-0">
                                  <p className="text-sm leading-6 font-semibold text-[#14213D] sm:text-[15px]">
                                    {item.label}
                                  </p>
                                  {item.note && <p className="mt-1 text-xs leading-5 text-[#111111]/55">{item.note}</p>}
                                </div>
                                <p className="shrink-0 text-base leading-7 font-black text-[#14213D] sm:text-right sm:text-lg">
                                  {item.amount}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {(plan.summary || plan.note) && (
                          <div className="border-t border-[rgba(20,33,61,0.08)] bg-[#F8F5EF] px-6 py-5 sm:px-8">
                            {plan.summary && (
                              <p className="text-sm leading-7 font-semibold text-[#14213D]">
                                {plan.summary}
                              </p>
                            )}
                            {plan.note && (
                              <p className="text-sm leading-7 text-[#14213D]/80">
                                {plan.note}
                              </p>
                            )}
                          </div>
                        )}
                      </article>
                    </Reveal>
                  ))}
                </div>

                <Reveal delay={90}>
                  <div className="mt-10 rounded-2xl border border-[rgba(20,33,61,0.08)] bg-[#FCF7EE] p-6 sm:p-8">
                    <h3 className="text-xl font-black text-[#14213D] sm:text-2xl">料金についてのご案内</h3>
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-[#14213D]/82 sm:text-[15px]">
                      {JAPANESE_PRICING_NOTES.map((note) => (
                        <li key={note} className="flex items-start gap-3">
                          <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-[#2BB673]" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal delay={120}>
                  <div className="mt-10 overflow-hidden rounded-2xl border border-[rgba(20,33,61,0.08)] bg-[#F8F9FB] px-6 py-10 text-center sm:px-10 sm:py-12">
                    <h3 className="text-2xl font-black tracking-tight text-[#14213D] sm:text-3xl">
                      選手に合ったプランと正式なお見積りをご案内します
                    </h3>
                    <p className="ps-lead mx-auto mt-4 max-w-2xl text-sm sm:text-base">
                      選手の年齢、競技歴、希望期間、目標を確認したうえで、個別にプランをご提案します。まだ具体的に決まっていない段階でもご相談いただけます。
                    </p>
                    <ConsultCtaButtons
                      variant="onLight"
                      align="center"
                      lineLabel={c.cta.lineFreeFull}
                      formLabel={c.cta.formInquiry}
                      className="mx-auto mt-7 max-w-sm sm:max-w-none"
                    />
                  </div>
                </Reveal>
              </>
            ) : (
              <>
                <Reveal>
                  <p className="ps-eyebrow">{h.plans.eyebrow}</p>
                  <h2 className="ps-heading mt-4">{h.plans.title}</h2>
                  <p className="ps-lead mt-5 max-w-xl text-sm sm:text-base">{h.plans.lead}</p>
                </Reveal>

                <div id="journey" className="mt-14">
                  <Reveal>
                    <p className="ps-eyebrow">{h.plans.flowEyebrow}</p>
                    <h3 className="mt-4 text-xl font-black text-[#14213D] sm:text-2xl">
                      {h.plans.flowTitle}
                      <span className="ps-gold-text">{h.plans.flowTitleGold}</span>
                      {h.plans.flowTitleEnd}
                    </h3>
                    <p className="ps-lead mt-3 max-w-xl text-sm">{h.plans.flowLead}</p>
                  </Reveal>
                  <JourneyTimeline steps={h.plans.journey} />
                </div>

                <div className="mt-14 grid gap-6 md:grid-cols-3">
                  {plans.map((plan, i) => (
                    <Reveal key={plan.title} delay={i * 80}>
                      <article
                        className={`ps-card flex h-full flex-col overflow-hidden ${
                          plan.highlight ? "border-[#F5B041]/40 ring-1 ring-[#F5B041]/20 md:-translate-y-2" : ""
                        }`}
                      >
                        {plan.highlight && (
                          <div className="bg-[#14213D] px-4 py-2 text-center text-[10px] font-black tracking-[0.2em] text-[#F5B041]">
                            {c.mostPopular}
                          </div>
                        )}
                        <div className="flex flex-1 flex-col p-7 sm:p-8">
                          <p className="text-[11px] font-bold tracking-[0.2em] text-[#F5B041]">{plan.period}</p>
                          <h3 className="mt-2 text-xl font-black text-[#14213D] sm:text-2xl">{plan.title}</h3>
                          <p className="ps-lead mt-3 text-sm">{plan.target}</p>
                          <ul className="mt-6 space-y-3 text-sm text-[#111111]/85">
                            {plan.points.map((point) => (
                              <li key={point} className="flex items-start gap-3">
                                <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F5B041]/15 text-[10px] font-bold text-[#C4842A]">
                                  ✓
                                </span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>

                <Reveal delay={120}>
                  <div className="mt-12 overflow-hidden rounded-2xl border border-[rgba(20,33,61,0.08)] bg-[#F8F9FB] px-6 py-10 text-center sm:px-10 sm:py-12">
                    <p className="text-sm font-semibold text-[#14213D] sm:text-base">{h.plans.ctaTitle}</p>
                    <p className="ps-lead mx-auto mt-2 max-w-md text-sm">{h.plans.ctaLead}</p>
                    <ConsultCtaButtons
                      variant="onLight"
                      align="center"
                      lineLabel={c.cta.lineConsult}
                      className="mx-auto mt-7 max-w-sm sm:max-w-none"
                    />
                  </div>
                </Reveal>
              </>
            )}
          </div>
        </section>

        <section id="protest" className="ps-bg-subtle ps-section">
          <div className="ps-container">
            <Reveal>
              <p className="ps-eyebrow">{h.proTest.eyebrow}</p>
              <h2 className="ps-heading mt-4 max-w-2xl">{h.proTest.title}</h2>
              <p className="ps-lead mt-5 max-w-2xl text-sm sm:text-base">{h.proTest.lead}</p>
            </Reveal>
            <Reveal delay={80}>
              <div className="ps-card mt-10 flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
                <div>
                  <p className="text-lg font-black text-[#14213D]">
                    {h.proTest.cardTitle}
                    <span className="ps-gold-text">{h.proTest.cardTitleGold}</span>
                    {h.proTest.cardTitleEnd}
                  </p>
                  <p className="ps-lead mt-2 max-w-lg text-sm">{h.proTest.cardLead}</p>
                </div>
                <Link href={lp("/plans/pro-test")} className="ps-btn-gold inline-flex w-full shrink-0 items-center justify-center gap-2 sm:w-auto">
                  {h.proTest.cardButton}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="faq" className="ps-section bg-white">
          <div className="ps-container relative z-10 max-w-3xl">
            <Reveal>
              <p className="ps-eyebrow">{h.faq.eyebrow}</p>
              <h2 className="ps-heading mt-4">{h.faq.title}</h2>
            </Reveal>
            <div className="mt-10 space-y-4">
              {h.faq.items.map((item, i) => (
                <Reveal key={item.q} delay={i * 50}>
                  <details className="group rounded-2xl border border-[rgba(20,33,61,0.08)] bg-white p-5 shadow-sm transition open:border-[#F5B041]/35 sm:p-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#14213D]">
                      {item.q}
                      <span className="text-xl font-light text-[#F5B041] transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="ps-lead mt-4 text-sm sm:text-base">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <LocalNetworkSlider />

      <SiteFooter
        showChallengeCta
        challengeImageSrc={LOCAL_NETWORK_CTA_IMAGE}
        challengeImageClassName="object-cover object-[center_30%] sm:object-[center_38%]"
      />
    </div>
  );
}
