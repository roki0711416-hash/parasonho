import Reveal from "./Reveal";

export interface JourneyStep {
  no: string;
  title: string;
  desc: string;
}

export default function JourneyTimeline({ steps }: { steps: JourneyStep[] }) {
  return (
    <div className="relative mt-14">
      <div className="ps-timeline-line absolute bottom-2 left-[1.35rem] top-2 w-px sm:left-1/2 sm:-translate-x-1/2" />

      <ol className="space-y-8 sm:space-y-0">
        {steps.map((step, i) => {
          const isRight = i % 2 === 1;
          return (
            <li
              key={step.no}
              className="relative sm:grid sm:grid-cols-2 sm:items-center sm:gap-10"
            >
              <span className="absolute left-[1.35rem] top-1 z-10 -translate-x-1/2 sm:left-1/2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white ring-2 ring-[#F5B041]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F5B041]" />
                </span>
              </span>

              <Reveal
                delay={i * 60}
                className={
                  isRight
                    ? "pl-12 sm:order-2 sm:col-start-2 sm:pl-10"
                    : "pl-12 sm:order-1 sm:col-start-1 sm:pr-10 sm:text-right"
                }
              >
                <div className="ps-card inline-block w-full p-6 sm:max-w-md sm:p-7">
                  <div
                    className={`flex items-center gap-3 ${isRight ? "" : "sm:flex-row-reverse"}`}
                  >
                    <span className="text-3xl font-black text-[#F5B041]/25">{step.no}</span>
                    <h3 className="text-xl font-black text-[#14213D] sm:text-2xl">{step.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#111111]/60">{step.desc}</p>
                </div>
              </Reveal>

              <span className={isRight ? "hidden sm:block sm:order-1" : "hidden sm:block sm:order-2"} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
