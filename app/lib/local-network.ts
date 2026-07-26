export type LocalNetworkSlide = {
  src: string;
  alt: string;
  caption: string;
  /** Tailwind object-position utilities */
  objectPosition: string;
};

/** トップページ「現地とのつながり」スライダー用写真 */
export const LOCAL_NETWORK_SLIDES: LocalNetworkSlide[] = [
  {
    src: "/images/local-network/01-paulo-miranda-partnership.webp",
    alt: "Academia de Futebol Paulo Mirandaの関係者との記念写真",
    caption: "Academia de Futebol Paulo Miranda｜提携クラブとの継続的な連携",
    objectPosition: "object-[center_35%]",
  },
  {
    src: "/images/local-network/02-apafut-trust.webp",
    alt: "APAFUT関係者との交流写真",
    caption: "APAFUT｜提携クラブとの信頼関係",
    objectPosition: "object-[center_22%]",
  },
  {
    src: "/images/local-network/03-wellington-advisor.webp",
    alt: "ウェリントン・モンテイロとの交流写真",
    caption: "ウェリントン・モンテイロ｜長年交流を続けるスペシャルアドバイザー",
    objectPosition: "object-[center_25%]",
  },
  {
    src: "/images/local-network/04-santos-player-1.webp",
    alt: "Santos FC所属選手との交流写真",
    caption: "ブラジルサッカー界で築いてきた交流｜Santos FC所属選手と",
    objectPosition: "object-[center_20%]",
  },
  {
    src: "/images/local-network/05-apafut-facility.webp",
    alt: "APAFUTの施設を現地で確認する様子",
    caption: "APAFUT｜育成環境を現地で確認",
    objectPosition: "object-[center_28%]",
  },
  {
    src: "/images/local-network/06-paulo-miranda-exchange.webp",
    alt: "Academia de Futebol Paulo Mirandaの現地関係者との交流",
    caption: "Academia de Futebol Paulo Miranda｜現地関係者との交流",
    objectPosition: "object-[center_30%]",
  },
  {
    src: "/images/local-network/07-santos-player-2.webp",
    alt: "Santos FC所属選手との交流写真",
    caption: "ブラジルサッカー界で築いてきた交流｜Santos FC所属選手と",
    objectPosition: "object-[center_22%]",
  },
];

export const LOCAL_NETWORK_CTA_IMAGE = "/images/local-network/cta-background.webp";
