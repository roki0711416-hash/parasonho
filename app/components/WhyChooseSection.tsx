"use client";

import { Clock, Languages } from "lucide-react";
import Reveal from "./Reveal";
import ConsultCtaButtons from "./ConsultCtaButtons";
import { useI18n } from "../lib/i18n/I18nProvider";

const icons = [
  (
    <svg key="ball" viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 3c2.2 2.8 3.5 5.8 3.5 9s-1.3 6.2-3.5 9M12 3C9.8 5.8 8.5 8.8 8.5 12s1.3 6.2 3.5 9M12 3v18M3 12h18"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M5.5 7.5h13M5.5 16.5h13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  <Languages key="lang" className="h-7 w-7" strokeWidth={1.5} aria-hidden="true" />,
  <Clock key="clock" className="h-7 w-7" strokeWidth={1.5} aria-hidden="true" />,
];

export default function WhyChooseSection() {
  const { dict } = useI18n();
  const w = dict.home.why;

  return (
    <section id="why-us" className="ps-section bg-white">
      <div className="ps-container">
        <Reveal>
          <p className="ps-eyebrow">{w.eyebrow}</p>
          <h2 className="ps-heading mt-4 max-w-2xl">{w.title}</h2>
          <p className="ps-lead mt-5 max-w-2xl text-sm sm:text-base">{w.lead}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {w.reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-[rgba(20,33,61,0.08)] bg-white p-8 shadow-sm transition hover:border-[#22C55E]/25 hover:shadow-md">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#22C55E]/10 text-[#16A34A]">
                  {icons[i]}
                </div>
                <h3 className="mt-6 text-lg font-black leading-snug text-[#14213D] sm:text-xl">{reason.title}</h3>
                <p className="ps-lead mt-4 flex-1 text-sm leading-7">{reason.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <ConsultCtaButtons
            variant="onLight"
            align="center"
            stacked
            lineLabel={dict.common.cta.brazilStudyFree}
            formLabel={dict.common.cta.formApply}
            className="mx-auto mt-14 max-w-sm sm:max-w-[360px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
