"use client";

import { useI18n } from "../lib/i18n/I18nProvider";

function TickerContent({ items }: { items: readonly string[] }) {
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
  const items = dict.common.ticker.items;

  return (
    <div
      className="ps-ticker border-y border-[rgba(10,61,44,0.12)] bg-[#0A3D2C]"
      aria-label={dict.common.ticker.aria}
    >
      <div className="ps-ticker-track">
        <div className="ps-ticker-group">
          <TickerContent items={items} />
        </div>
        <div className="ps-ticker-group" aria-hidden="true">
          <TickerContent items={items} />
        </div>
      </div>
    </div>
  );
}
