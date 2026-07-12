"use client";

import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import SocialFeed from "./SocialFeed";
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

export default function HomePage() {
  const { locale, dict } = useI18n();
  const h = dict.home;
  const c = dict.common;
  const lp = (path = "") => localePath(locale, path);

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

        <SocialFeed />

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

      <SiteFooter showChallengeCta />
    </div>
  );
}
