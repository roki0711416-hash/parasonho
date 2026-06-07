const TICKER_ITEMS = [
  "⚽️ プロテスト参加者受付中",
  "無料相談受付中",
  "🇧🇷 本場ブラジルで挑戦",
  "日本語サポート完備",
  "保護者への定期報告",
];

function TickerContent() {
  return (
    <>
      {TICKER_ITEMS.map((item) => (
        <span key={item} className="ps-ticker-item">
          <span className="ps-ticker-dot" aria-hidden="true" />
          {item}
        </span>
      ))}
    </>
  );
}

export default function TickerBar() {
  return (
    <div className="ps-ticker border-y border-[#F5B041]/15 bg-[#14213D]" aria-label="お知らせ">
      <div className="ps-ticker-track">
        <div className="ps-ticker-group" aria-hidden="true">
          <TickerContent />
        </div>
        <div className="ps-ticker-group" aria-hidden="true">
          <TickerContent />
        </div>
      </div>
    </div>
  );
}
