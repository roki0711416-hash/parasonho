/** 提携クラブページの公開フラグ。false のときナビ非表示・404 */
export const CLUBS_PUBLISHED = true;

export type ClubSectionKey =
  | "overview"
  | "facilities"
  | "training"
  | "matches"
  | "life"
  | "location";

/** 単一段落の文字列、または複数段落＋注意書き／住所＋地図リンク */
export type ClubSectionContent =
  | string
  | {
      paragraphs?: string[];
      note?: string;
      /** 所在地の住所行（改行区切りで表示） */
      addressLines?: string[];
      mapUrl?: string;
    };

export type Club = {
  slug: string;
  name: string;
  /** カード・詳細のカバー写真（未用意の場合は既存写真で仮表示） */
  coverImage: string;
  /** クラブロゴ（未用意の場合はプレースホルダー） */
  logoImage?: string;
  /** Instagram ユーザー名（@なし） */
  instagram?: string;
  location: string;
  ages: string;
  features: string[];
  sections: Record<ClubSectionKey, ClubSectionContent>;
  /** 施設紹介ギャラリー（あるクラブのみ） */
  facilityGallery?: Array<{ src: string; alt: string; caption: string }>;
  /** 施設紹介動画（あるクラブのみ） */
  facilityVideo?: ClubVideo;
  /** 生活環境紹介動画（あるクラブのみ） */
  lifeVideo?: ClubVideo;
  metaTitle: string;
  metaDescription: string;
};

export type ClubVideo = {
  embedUrl: string;
  title: string;
  heading: string;
  description: string;
};

const INQUIRY = "詳細はお問い合わせください。";

export const clubs: Club[] = [
  {
    slug: "apafut",
    name: "APAFUT",
    coverImage: "/images/clubs/apafut-cover.jpg",
    logoImage: "/images/clubs/apafut-logo.png",
    instagram: "apafutoficial",
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
      facilities:
        "APAFUTでは、天然芝グラウンドや屋根付き人工芝コート、屋内コートを活用し、天候に左右されにくいトレーニング環境を整えています。また、トレーニングジム、屋内プール、測定・分析スペース、リハビリ・コンディショニング設備も利用し、技術・戦術・フィジカル・身体ケアの各面から選手の成長をサポートします。",
      training: {
        paragraphs: [
          "APAFUTでは、天然芝グラウンドと人工芝グラウンドを活用し、日常的なトレーニングを行っています。技術・戦術・フィジカルの向上を目的に、選手の年代や成長段階に合わせた指導を実施します。",
          "雨天時も練習を中止せず、屋内コートでフットサルトレーニングを行える環境が整っています。天候に左右されず継続的にボールへ触れられるため、年間を通して充実したトレーニングに取り組むことができます。",
        ],
      },
      matches: {
        paragraphs: [
          "APAFUTでは、グレミオ、インテルナシオナル、ジュベントゥージをはじめとする、ブラジルを代表するクラブの育成年代と対戦する機会があります。高いレベルの選手たちと実戦で競い合うことで、自分の現在地を知り、さらなるステップアップを目指せる環境です。",
          "Para Sonhoでは、留学生がトレーニングに参加するだけで終わらず、試合経験を積めるよう、選手の状態や成長段階を確認しながらクラブ側と継続的に連携・交渉します。ブラジルの公式戦や練習試合への出場機会を可能な限り増やし、実戦を通じて成長できる留学をサポートします。",
        ],
        note: "※試合への出場は、選手のコンディション、競技登録、指導者の判断、大会規定などによって決定されます。",
      },
      life: {
        paragraphs: [
          "Para Sonhoが選手の留学期間や希望に合わせて、アパートまたはホテルなどの滞在先を手配します。現地での生活を安心して送れるよう、住居の準備だけでなく、滞在中の生活面についてもサポートします。",
          "APAFUTの所在地であるカシアス・ド・スルは、生活に必要な商業施設やショッピングモールなどが揃った都市です。比較的落ち着いた環境で、サッカーに集中しながら快適な留学生活を送ることができます。",
        ],
        note: "※海外滞在中は、地域にかかわらず貴重品の管理や夜間の単独行動を避けるなど、基本的な安全対策が必要です。",
      },
      location: {
        addressLines: [
          "ブラジル・リオグランデ・ド・スル州",
          "カシアス・ド・スル",
          "Rua Francisco Getúlio Vargas, 1130",
          "Bairro Petrópolis",
        ],
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=APAFUT%20Rua%20Francisco%20Get%C3%BAlio%20Vargas%201130%20Caxias%20do%20Sul%20RS",
      },
    },
    facilityGallery: [
      {
        src: "/images/clubs/apafut/grass-field.jpg",
        alt: "APAFUTの天然芝グラウンドでトレーニングする選手たち",
        caption: "天然芝グラウンド",
      },
      {
        src: "/images/clubs/apafut/training-gym.jpg",
        alt: "APAFUTのトレーニングジムでフィジカル強化に取り組む選手たち",
        caption: "トレーニングジム",
      },
      {
        src: "/images/clubs/apafut/indoor-court.jpg",
        alt: "APAFUTの屋内コートで練習を行う選手たち",
        caption: "屋内コート",
      },
      {
        src: "/images/clubs/apafut/covered-turf.jpg",
        alt: "APAFUTの屋根付き人工芝コートで練習する選手たち",
        caption: "屋根付き人工芝コート",
      },
      {
        src: "/images/clubs/apafut/indoor-pool.jpg",
        alt: "APAFUTが利用する屋内プール施設",
        caption: "屋内プール",
      },
      {
        src: "/images/clubs/apafut/analysis-space.jpg",
        alt: "APAFUTの測定・分析スペース",
        caption: "測定・分析スペース",
      },
      {
        src: "/images/clubs/apafut/rehab-conditioning.jpg",
        alt: "APAFUTのリハビリ・コンディショニングスペース",
        caption: "リハビリ・コンディショニングスペース",
      },
    ],
    facilityVideo: {
      embedUrl: "https://www.youtube.com/embed/7UTHJlu2k60",
      title: "APAFUT施設紹介動画",
      heading: "動画で見るAPAFUTの施設",
      description:
        "天然芝グラウンドや屋内施設など、APAFUTのトレーニング環境を動画でご覧いただけます。",
    },
    lifeVideo: {
      embedUrl: "https://www.youtube.com/embed/jS4LZH4ZyE4",
      title: "カシアス・ド・スル生活環境Vlog",
      heading: "動画で見るカシアス・ド・スルでの生活",
      description:
        "APAFUTが拠点とするカシアス・ド・スルの街並みやショッピングモールなど、留学中の生活環境を動画でご紹介します。現地での暮らしを、より具体的にイメージしていただけます。",
    },
    metaTitle: "APAFUT｜提携クラブ紹介",
    metaDescription:
      "Para Sonho提携クラブ「APAFUT」の紹介ページ。リオグランデ・ド・スル州カシアス・ド・スル、対象13歳以上。ブラジルサッカー留学のクラブ選びのご参考に。",
  },
  {
    slug: "academia-paulo-miranda",
    name: "Academia de Futebol Paulo Miranda",
    coverImage: "/images/clubs/paulo-miranda-cover.jpg",
    logoImage: "/images/clubs/paulo-miranda-logo.png",
    instagram: "pmacademiadefutebol",
    location: "ブラジル・パラナ州 クリチバ",
    ages: "10〜17歳",
    features: [
      "Para Sonho提携クラブ",
      "パラナ州クリチバを拠点",
      "10〜17歳の選手が対象",
    ],
    sections: {
      overview:
        "Academia de Futebol Paulo Mirandaは、Para Sonhoが提携するブラジル現地のサッカーアカデミーです。パラナ州クリチバを拠点に、10〜17歳の選手の成長と挑戦をサポートする環境としてご案内しています。施設・指導体制の詳細はお問い合わせください。",
      facilities: {
        paragraphs: [
          "Academia de Futebol Paulo Mirandaでは、天然芝グラウンドと整備された人工芝グラウンドを利用でき、選手が日々のトレーニングに集中できる環境が整っています。",
          "さらに、屋根付きの人工芝コートも備えているため、雨天時にもトレーニングを継続できます。天候に左右されにくく、年間を通して充実した環境でサッカーに取り組めます。",
        ],
      },
      training: {
        paragraphs: [
          "天然芝と人工芝のグラウンドを活用し、技術・判断力・戦術理解・フィジカルの向上を目的としたトレーニングを行います。選手一人ひとりの成長段階に合わせ、実戦を意識しながら総合的なレベルアップを目指します。",
          "雨天時も屋根付きの人工芝コートでトレーニングを行えるため、天候による中止を抑え、継続的にボールへ触れられる環境です。",
        ],
      },
      matches: {
        paragraphs: [
          "Academia de Futebol Paulo Mirandaでは、クリチバ、アトレチコ・パラナエンセ、パラナクラブをはじめとする、クリチバ周辺の有力クラブとの試合や交流の機会があります。",
          "レベルの高い選手との実戦を通して、自分の現在地や課題を確認し、さらなるステップアップを目指せる環境です。Para Sonhoもクラブ側と連携し、留学生がトレーニングだけで終わらず、可能な限り試合経験を積めるようサポートします。",
        ],
        note: "※対戦クラブや試合日程は時期によって異なります。試合への出場は、選手のコンディション、競技登録、指導者の判断、大会規定などによって決定されます。",
      },
      life: {
        paragraphs: [
          "滞在中は、Academia de Futebol Paulo Mirandaが提携する滞在施設で生活します。現地クラブとPara Sonhoが連携し、選手が安心してサッカーに集中できるよう、住居をはじめとする日常生活をサポートします。",
          "また、Academiaにはスポンサーとして提携する医療機関があり、選手のけがや体調不良など、何かあった際には迅速に相談・対応できる連携体制が整っています。",
          "クリチバはブラジル南部を代表する大都市で、ショッピングモール、スーパーマーケット、飲食店、病院、公共交通機関など、生活に必要な環境が揃っています。都市としての利便性が高く、比較的落ち着いた環境で留学生活を送れます。",
        ],
        note: "※医療機関の受診方法や対応内容は、選手の症状、緊急性、滞在時期などによって異なります。海外滞在中は、基本的な安全対策と海外旅行保険への加入が必要です。",
      },
      location: {
        addressLines: ["ブラジル・パラナ州", "クリチバ"],
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=Academia%20de%20Futebol%20Paulo%20Miranda%20Curitiba%20Parana",
      },
    },
    facilityGallery: [
      {
        src: "/images/clubs/paulo-miranda/artificial-turf.jpg",
        alt: "Academia de Futebol Paulo Mirandaの人工芝グラウンド全体",
        caption: "人工芝グラウンド",
      },
      {
        src: "/images/clubs/paulo-miranda/grass-field.jpg",
        alt: "Academia de Futebol Paulo Mirandaの天然芝グラウンド",
        caption: "天然芝グラウンド",
      },
      {
        src: "/images/clubs/paulo-miranda/artificial-turf-2.jpg",
        alt: "Academia de Futebol Paulo Mirandaの人工芝グラウンドでの様子",
        caption: "人工芝グラウンド",
      },
      {
        src: "/images/clubs/paulo-miranda/covered-turf.jpg",
        alt: "Academia de Futebol Paulo Mirandaの屋根付き人工芝コート",
        caption: "屋根付き人工芝コート",
      },
      {
        src: "/images/clubs/paulo-miranda/covered-turf-2.jpg",
        alt: "Academia de Futebol Paulo Mirandaの屋根付き人工芝コート内部",
        caption: "屋根付き人工芝コート",
      },
    ],
    facilityVideo: {
      embedUrl: "https://www.youtube.com/embed/h6IDbG4QAeE",
      title: "Academia de Futebol Paulo Miranda紹介動画",
      heading: "動画で見るAcademia de Futebol Paulo Miranda",
      description:
        "天然芝・人工芝グラウンドや屋根付きコートなど、Academia de Futebol Paulo Mirandaの育成環境を動画でご覧いただけます。",
    },
    metaTitle: "Academia de Futebol Paulo Miranda｜提携クラブ紹介",
    metaDescription:
      "Para Sonho提携クラブ「Academia de Futebol Paulo Miranda」の紹介ページ。パラナ州クリチバ、対象10〜17歳。ブラジルサッカー留学のクラブ選びのご参考に。",
  },
];

export function getClubBySlug(slug: string): Club | undefined {
  return clubs.find((club) => club.slug === slug);
}

export function getClubSlugs(): string[] {
  return clubs.map((club) => club.slug);
}
