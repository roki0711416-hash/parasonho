"use client";

import { useI18n } from "../lib/i18n/I18nProvider";

function TickerContent({ items }: { items: string[] }) {
  return (
    <>
      {items.map((item) => (
        <span key={item} className="ps-ticker-item">
          <span className="ps-ticker-dot" aria-hidden="true" />
          {item}
        </span>
      ))}
    </>
  );
}

export default function TickerBar() {
  const { dict } = useI18n();

  return (
    <div className="ps-ticker border-y border-[#F5B041]/15 bg-[#14213D]" aria-label={dict.common.ticker.aria}>
      <div className="ps-ticker-track">
        <div className="ps-ticker-group" aria-hidden="true">
          <TickerContent items={dict.common.ticker.items} />
        </div>
        <div className="ps-ticker-group" aria-hidden="true">
          <TickerContent items={dict.common.ticker.items} />
        </div>
      </div>
    </div>
  );
}
