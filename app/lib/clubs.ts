/** 提携クラブページの公開フラグ。false のときナビ非表示・404 */
export const CLUBS_PUBLISHED = true;

export type ClubSectionKey =
  | "overview"
  | "facilities"
  | "training"
  | "matches"
  | "coaches"
  | "life"
  | "location";

export type Club = {
  slug: string;
  name: string;
  /** カード・詳細のカバー写真（未用意の場合は既存写真で仮表示） */
  coverImage: string;
  /** クラブロゴ（未用意の場合はプレースホルダー） */
  logoImage?: string;
  location: string;
  ages: string;
  features: string[];
  sections: Record<ClubSectionKey, string>;
  gallery: Array<{ src?: string; alt: string; label: string }>;
  metaTitle: string;
  metaDescription: string;
};

const INQUIRY = "詳細はお問い合わせください。";

export const clubs: Club[] = [
  {
    slug: "apafut",
    name: "APAFUT",
    coverImage: "/images/clubs/apafut-cover.jpg",
    logoImage: "/images/clubs/apafut-logo.png",
    location: "ブラジル・リオグランデ・ド・スル州 カシアス・ド・スル",
    ages: "13歳以上",
    features: [
      "Para Sonho提携クラブ",
      "リオグランデ・ド・スル州カシアス・ド・スルを拠点",
      "13歳以上の選手が対象",
    ],
    sections: {
      overview:
        "APAFUTは、Para Sonhoが提携するブラジル現地クラブです。リオグランデ・ド・スル州カシアス・ド・スルを拠点に、13歳以上の選手の挑戦の場としてご案内しています。クラブの詳細な沿革やカテゴリー構成については、お問い合わせください。",
      facilities: INQUIRY,
      training: INQUIRY,
      matches: INQUIRY,
      coaches: INQUIRY,
      life: "滞在中の生活面は、Para Sonhoの現地サポートと合わせてご案内します。詳細はお問い合わせください。",
      location: "ブラジル・リオグランデ・ド・スル州 カシアス・ド・スル",
    },
    gallery: [
      { src: "/images/clubs/apafut-cover.jpg", alt: "APAFUTの活動風景", label: "クラブ" },
      { alt: "施設写真（準備中）", label: "施設" },
      { alt: "トレーニング写真（準備中）", label: "トレーニング" },
      { alt: "試合写真（準備中）", label: "試合" },
    ],
    metaTitle: "APAFUT｜提携クラブ紹介",
    metaDescription:
      "Para Sonho提携クラブ「APAFUT」の紹介ページ。リオグランデ・ド・スル州カシアス・ド・スル、対象13歳以上。ブラジルサッカー留学のクラブ選びのご参考に。",
  },
  {
    slug: "academia-paulo-miranda",
    name: "Academia de Futebol Paulo Miranda",
    coverImage: "/images/clubs/paulo-miranda-cover.jpg",
    logoImage: "/images/clubs/paulo-miranda-logo.png",
    location: "ブラジル・パラナ州 クリチバ",
    ages: "10〜18歳",
    features: [
      "Para Sonho提携クラブ",
      "パラナ州クリチバを拠点",
      "10〜18歳の選手が対象",
    ],
    sections: {
      overview:
        "Academia de Futebol Paulo Mirandaは、Para Sonhoが提携するブラジル現地のサッカーアカデミーです。パラナ州クリチバを拠点に、10〜18歳の選手の成長と挑戦をサポートする環境としてご案内しています。施設・指導体制の詳細はお問い合わせください。",
      facilities: INQUIRY,
      training: INQUIRY,
      matches: INQUIRY,
      coaches: INQUIRY,
      life: "滞在中の生活面は、Para Sonhoの現地サポートと合わせてご案内します。詳細はお問い合わせください。",
      location: "ブラジル・パラナ州 クリチバ",
    },
    gallery: [
      { src: "/images/clubs/paulo-miranda-cover.jpg", alt: "Academia de Futebol Paulo Mirandaの活動風景", label: "クラブ" },
      { alt: "施設写真（準備中）", label: "施設" },
      { alt: "トレーニング写真（準備中）", label: "トレーニング" },
      { alt: "アカデミー写真（準備中）", label: "アカデミー" },
    ],
    metaTitle: "Academia de Futebol Paulo Miranda｜提携クラブ紹介",
    metaDescription:
      "Para Sonho提携クラブ「Academia de Futebol Paulo Miranda」の紹介ページ。パラナ州クリチバ、対象10〜18歳。ブラジルサッカー留学のクラブ選びのご参考に。",
  },
];

export function getClubBySlug(slug: string): Club | undefined {
  return clubs.find((club) => club.slug === slug);
}

export function getClubSlugs(): string[] {
  return clubs.map((club) => club.slug);
}
