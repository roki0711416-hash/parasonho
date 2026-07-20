import { FIELD_IMAGE, HERO_IMAGE } from "./images";

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
    coverImage: HERO_IMAGE,
    location: "ブラジル（詳細はお問い合わせください）",
    ages: "詳細はお問い合わせください",
    features: [
      "Para Sonho提携クラブ",
      "現地トレーニング環境での実践機会",
      "選手のレベル・目標に応じた留学相談が可能",
    ],
    sections: {
      overview:
        "APAFUTは、Para Sonhoが提携するブラジル現地クラブのひとつです。選手の年齢・レベル・目標に合わせた挑戦の場としてご案内しています。クラブの詳細な沿革やカテゴリー構成については、お問い合わせください。",
      facilities: INQUIRY,
      training: INQUIRY,
      matches: INQUIRY,
      coaches: INQUIRY,
      life: "滞在中の生活面は、Para Sonhoの現地サポートと合わせてご案内します。詳細はお問い合わせください。",
      location: "所在地の詳細はお問い合わせください。",
    },
    gallery: [
      { src: HERO_IMAGE, alt: "APAFUT トレーニング雰囲気", label: "トレーニング" },
      { src: FIELD_IMAGE, alt: "サッカー場の風景", label: "ピッチ" },
      { alt: "施設写真（準備中）", label: "施設" },
      { alt: "クラブ写真（準備中）", label: "クラブ" },
    ],
    metaTitle: "APAFUT｜提携クラブ紹介",
    metaDescription:
      "Para Sonho提携クラブ「APAFUT」の紹介ページ。所在地・対象年代・トレーニング環境など、ブラジルサッカー留学のクラブ選びのご参考に。",
  },
  {
    slug: "academia-paulo-miranda",
    name: "Academia de Futebol Paulo Miranda",
    coverImage: FIELD_IMAGE,
    location: "ブラジル（詳細はお問い合わせください）",
    ages: "詳細はお問い合わせください",
    features: [
      "Para Sonho提携クラブ",
      "ブラジル現地でのサッカー留学環境",
      "選手一人ひとりに合わせたクラブ提案が可能",
    ],
    sections: {
      overview:
        "Academia de Futebol Paulo Mirandaは、Para Sonhoが提携するブラジル現地のサッカーアカデミーです。留学希望者の目標やレベルに応じた環境としてご案内しています。施設・指導体制の詳細はお問い合わせください。",
      facilities: INQUIRY,
      training: INQUIRY,
      matches: INQUIRY,
      coaches: INQUIRY,
      life: "滞在中の生活面は、Para Sonhoの現地サポートと合わせてご案内します。詳細はお問い合わせください。",
      location: "所在地の詳細はお問い合わせください。",
    },
    gallery: [
      { src: FIELD_IMAGE, alt: "ピッチ風景", label: "ピッチ" },
      { src: HERO_IMAGE, alt: "選手の雰囲気", label: "トレーニング" },
      { alt: "施設写真（準備中）", label: "施設" },
      { alt: "アカデミー写真（準備中）", label: "アカデミー" },
    ],
    metaTitle: "Academia de Futebol Paulo Miranda｜提携クラブ紹介",
    metaDescription:
      "Para Sonho提携クラブ「Academia de Futebol Paulo Miranda」の紹介ページ。ブラジルサッカー留学のクラブ選びのご参考に。",
  },
];

export function getClubBySlug(slug: string): Club | undefined {
  return clubs.find((club) => club.slug === slug);
}

export function getClubSlugs(): string[] {
  return clubs.map((club) => club.slug);
}
