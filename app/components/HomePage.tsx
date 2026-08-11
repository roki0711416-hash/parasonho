"use client";

import Image from "next/image";
import Link from "next/link";
import { Camera, Music2 } from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import FloatingLineButton from "./FloatingLineButton";
import Reveal from "./Reveal";
import HomeHero from "./home/HomeHero";
import LineIcon from "./LineIcon";
import { clubs } from "../lib/clubs";
import { GFORM_URL, LINE_URL } from "../lib/contact";
import { LOCAL_NETWORK_CTA_IMAGE } from "../lib/local-network";
import { useI18n } from "../lib/i18n/I18nProvider";
import { localePath } from "../lib/i18n/locale-path";

const STRENGTHS = [
  {
    no: "01",
    title: "現地スタッフによる24時間サポート",
    description: "滞在中の生活・練習・トラブル対応まで、現地スタッフが24時間体制で支えます。",
    image: "/images/local-network/05-apafut-facility.webp",
    position: "object-[32%_18%]",
  },
  {
    no: "02",
    title: "練習・試合・日常生活での通訳",
    description: "日本語とポルトガル語で、クラブや生活のやり取りをスムーズにサポートします。",
    image: "/images/staff/kevin-matsunaga.jpg",
    position: "object-[center_18%]",
    objectPosition: "center 18%",
  },
  {
    no: "03",
    title: "ブラジルの提携クラブでの実戦機会",
    description: "トレーニングだけで終わらず、提携クラブと連携して試合経験を積めるよう調整します。",
    image: "/images/clubs/apafut/grass-field.jpg",
    position: "object-[center_40%]",
  },
  {
    no: "04",
    title: "元プロ選手・現地アドバイザーによるサポート",
    description: "ブラジルサッカー界の経験を持つアドバイザーが、プレーや進路の相談に応じます。",
    image: "/images/local-network/03-wellington-advisor.webp",
    position: "object-[center_8%]",
  },
  {
    no: "05",
    title: "保護者への定期的な状況報告",
    description: "遠方でも安心できるよう、滞在中の様子を保護者の方へ定期的に共有します。",
    image: "/images/local-network/06-paulo-miranda-exchange.webp",
    position: "object-[center_12%]",
  },
  {
    no: "06",
    title: "ポルトガル語と生活面のサポート",
    description: "言語の壁を減らし、買い物や手続きなど日常生活も安心して過ごせる環境を整えます。",
    image: "/images/local-network/02-apafut-trust.webp",
    position: "object-[center_8%]",
  },
] as const;

const PROGRAMS = [
  {
    id: "short",
    period: "約1か月",
    title: "短期留学",
    description: "長期休みなどを活用し、本場ブラジルの練習環境を体験したい選手向け。",
    points: ["現地クラブ練習参加", "生活サポート", "空港送迎"],
    image: "/images/local-network/01-paulo-miranda-partnership.webp",
    position: "object-[center_22%]",
    href: "#plans",
  },
  {
    id: "mid",
    period: "約3か月",
    title: "中期留学",
    description: "実戦的なトレーニングを通じて、本気でレベルアップをめざす選手向け。",
    points: ["実戦的トレーニング", "語学サポート", "現地サポート"],
    image: "/images/clubs/paulo-miranda/artificial-turf.jpg",
    position: "object-center",
    href: "#plans",
  },
  {
    id: "long",
    period: "約6か月〜1年",
    title: "長期留学",
    description: "継続的な現地サポートのもと、本格的に海外で勝負したい選手向け。",
    points: ["継続的な現地サポート", "進路相談", "定期面談"],
    image: "/images/clubs/apafut/covered-turf.jpg",
    position: "object-[center_55%]",
    href: "#plans",
  },
  {
    id: "pro",
    period: "2週間〜",
    title: "プロ挑戦",
    description: "プロ契約・上位カテゴリ昇格をめざす選手向けの入団テストサポート。",
    points: ["受験クラブ選定", "テスト帯同", "契約交渉サポート"],
    image: "/images/local-network/04-santos-player-1.webp",
    position: "object-[center_12%]",
    objectPosition: "center 12%",
    href: "/plans/pro-test",
  },
] as const;

const SUPPORT_STEPS = [
  {
    no: "01",
    title: "出発前",
    description: "無料相談・面談からクラブ選定、渡航準備までを一緒に進めます。",
  },
  {
    no: "02",
    title: "ブラジル到着時",
    description: "空港送迎や生活立ち上げをサポートし、安心してスタートできる環境を整えます。",
  },
  {
    no: "03",
    title: "留学期間中",
    description: "練習・生活・緊急時対応まで、現地スタッフが継続的に伴走します。",
  },
  {
    no: "04",
    title: "帰国・進路相談",
    description: "帰国後のプレー継続や次の挑戦についても、状況に合わせて相談できます。",
  },
] as const;

const VIDEOS = [
  {
    id: "apafut-facility",
    title: "APAFUT施設紹介",
    description: "天然芝や屋内施設など、提携クラブのトレーニング環境を動画で紹介。",
    embedUrl: "https://www.youtube.com/embed/7UTHJlu2k60",
    watchUrl: "https://www.youtube.com/watch?v=7UTHJlu2k60",
    thumb: "/images/clubs/apafut-cover.jpg",
  },
  {
    id: "apafut-life",
    title: "カシアス・ド・スル生活Vlog",
    description: "留学中の生活環境を、街並みや商業施設の様子からイメージできます。",
    embedUrl: "https://www.youtube.com/embed/jS4LZH4ZyE4",
    watchUrl: "https://www.youtube.com/watch?v=jS4LZH4ZyE4",
    thumb: "/images/clubs/apafut/grass-field.jpg",
  },
  {
    id: "paulo-miranda",
    title: "Academia Paulo Miranda紹介",
    description: "クリチバ拠点の育成環境を、グラウンドや屋根付きコートからご覧いただけます。",
    embedUrl: "https://www.youtube.com/embed/h6IDbG4QAeE",
    watchUrl: "https://www.youtube.com/watch?v=h6IDbG4QAeE",
    thumb: "/images/clubs/paulo-miranda-cover.jpg",
  },
] as const;

const SNS_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/para_sonho/",
    icon: <Camera className="h-5 w-5" />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@para.sonho",
    icon: <Music2 className="h-5 w-5" />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCE_sb8Gl_vGjHHjiN3wNK-Q",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
      </svg>
    ),
  },
] as const;

function SectionHeading({
  title,
  lead,
  light = false,
}: {
  title: string;
  lead?: string;
  light?: boolean;
}) {
  return (
    <div className="relative max-w-3xl">
      <h2 className={`ps-heading ${light ? "text-white" : ""}`}>{title}</h2>
      {lead && <p className={`ps-lead mt-5 text-sm sm:text-base ${light ? "text-white/75" : ""}`}>{lead}</p>}
    </div>
  );
}

function ChallengeCta({ id }: { id?: string }) {
  return (
    <section id={id} className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={LOCAL_NETWORK_CTA_IMAGE}
          alt="ブラジル現地での挑戦の風景"
          fill
          sizes="100vw"
          className="object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-[#061910]/78" aria-hidden="true" />
      </div>
      <div className="ps-container relative z-10 py-20 text-center sm:py-24">
        <h2 className="text-[clamp(1.8rem,5vw,3.2rem)] font-black tracking-tight text-white">
          ブラジルへの挑戦を、
          <br className="sm:hidden" />
          ここから始めよう。
        </h2>
        <div className="mx-auto mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#06C755] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#05a847] sm:text-base"
          >
            <LineIcon className="h-5 w-5" />
            公式LINEで無料相談
          </a>
          <a
            href={GFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/18 sm:text-base"
          >
            お問い合わせフォーム
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const { locale, dict } = useI18n();
  const h = dict.home;
  const c = dict.common;
  const lp = (path = "") => localePath(locale, path);
  const isJapanese = locale === "ja";

  const clubCards = [
    {
      club: clubs[0],
      region: "Caxias do Sul / RS",
      regionJa: "カシアス・ド・スル",
      facilities: "天然芝・屋根付き人工芝・屋内コート",
      matches: "グレミオ、インテルナシオナル、ジュベントゥージなど",
      rain: "雨天時は屋内コートで継続練習",
    },
    {
      club: clubs[1],
      region: "Curitiba / PR",
      regionJa: "クリチバ",
      facilities: "天然芝・人工芝・屋根付きコート",
      matches: "クリチバ、アトレチコ・パラナエンセ、パラナクラブなど",
      rain: "雨天時も屋根付きコートで継続練習",
    },
  ];

  return (
    <div className="ps-page min-h-screen">
      <SiteHeader />
      <FloatingLineButton />

      <main id="top">
        <HomeHero
          programsHref={`${lp()}#programs`}
          title1={isJapanese ? "ブラジルで、本気の挑戦を。" : h.hero.title1}
          title2={isJapanese ? "人として成長する留学から、プロを目指す挑戦まで。" : h.hero.title2}
          lead={h.hero.lead}
          programsLabel={isJapanese ? "留学プログラムを見る" : h.hero.viewFlow}
          lineLabel={isJapanese ? "公式LINEで無料相談" : c.cta.lineFreeFull}
        />

        {/* NEWS – data-ready shell, no fictional articles */}
        <section id="news" className="border-y border-[rgba(10,61,44,0.08)] bg-[#0A3D2C]">
          <div className="ps-container py-5 sm:py-6">
            <p className="text-sm leading-6 text-white/80">
              {isJapanese
                ? "最新のお知らせは準備中です。公開され次第、こちらに掲載します。"
                : "News updates will appear here when published."}
            </p>
          </div>
        </section>

        {/* WHY / INTRO */}
        <section id="about" className="ps-section relative overflow-hidden">
          <div className="ps-container relative">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <Reveal>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:aspect-[5/6]">
                  <Image
                    src="/images/staff/hiroki-shimizu.jpg"
                    alt="留学コーディネーター清水裕基"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-[center_12%]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#061910]/85 to-transparent p-6">
                    <p className="mt-2 text-lg font-black text-white">清水 裕基</p>
                    <p className="mt-1 text-sm text-white/75">Santos FC U-17練習生 / ブラジル現地プレー経験</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <SectionHeading
                  title={isJapanese ? "ブラジル現地の経験とネットワークで、挑戦を支える。" : h.why.title}
                  lead={
                    isJapanese
                      ? "Para Sonhoは、代表自身のブラジルでの選手経験と、現地クラブ・関係者との継続的な関係を活かし、一人ひとりに合った留学をコーディネートします。"
                      : h.why.lead
                  }
                />
                <div className="mt-8 space-y-5">
                  {h.why.reasons.slice(0, 2).map((reason) => (
                    <div key={reason.title} className="border-l-2 border-[#D4A017] pl-5">
                      <h3 className="text-base font-black text-[#0A3D2C] sm:text-lg">{reason.title}</h3>
                      <p className="ps-lead mt-2 text-sm">{reason.description}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={lp("/about/staff")}
                  className="mt-8 inline-flex text-sm font-bold text-[#0A3D2C] underline-offset-4 transition hover:text-[#D4A017] hover:underline"
                >
                  スタッフ紹介を見る →
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* STRENGTHS */}
        <section id="strengths" className="ps-section-tight ps-bg-subtle">
          <div className="ps-container">
            <Reveal>
              <SectionHeading
                title={isJapanese ? "Para Sonhoの強み" : h.why.title}
                lead={
                  isJapanese
                    ? "挑戦に集中できる環境を、現地と日本の両側から整えます。"
                    : h.why.lead
                }
              />
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {STRENGTHS.map((item, i) => (
                <Reveal key={item.no} delay={i * 60}>
                  <article className="group ps-card h-full overflow-hidden p-0">
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={`ps-media-zoom object-cover ${item.position}`}
                        style={{
                          objectPosition:
                            "objectPosition" in item && item.objectPosition
                              ? item.objectPosition
                              : undefined,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061910]/55 to-transparent" />
                      <p className="absolute left-4 top-4 font-saira text-3xl font-black text-white/90">{item.no}</p>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-black leading-snug text-[#0A3D2C]">{item.title}</h3>
                      <p className="ps-lead mt-3 text-sm">{item.description}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAMS */}
        <section id="programs" className="ps-section-tight scroll-mt-24">
          <div className="ps-container">
            <Reveal>
              <SectionHeading
                title={isJapanese ? "留学プログラム" : h.plans.title}
                lead={
                  isJapanese
                    ? "短期からプロ挑戦まで。目的と期間に合わせて設計します。"
                    : h.plans.lead
                }
              />
            </Reveal>

            <div id="plans" className="mt-10 grid scroll-mt-24 gap-5 md:grid-cols-2 lg:gap-6">
              {PROGRAMS.map((program, i) => (
                <Reveal key={program.id} delay={i * 70}>
                  <article className="group ps-card flex h-full flex-col overflow-hidden p-0">
                    <div className="relative aspect-[16/10] overflow-hidden lg:aspect-[2.05/1]">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={`object-cover ${program.position}`}
                        style={{
                          objectPosition:
                            "objectPosition" in program && program.objectPosition
                              ? program.objectPosition
                              : undefined,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061910]/55 to-transparent" />
                      <p className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold tracking-[0.16em] text-[#0A3D2C]">
                        {program.period}
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-6">
                      <h3 className="text-xl font-black text-[#0A3D2C] lg:text-2xl">{program.title}</h3>
                      <p className="ps-lead mt-2.5 text-sm">{program.description}</p>
                      <ul className="mt-4 space-y-2 text-sm text-[#111111]/85">
                        {program.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4A017]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 rounded-xl bg-[#F4F6F5] px-4 py-3.5">
                        <p className="text-[11px] font-bold tracking-[0.18em] text-[#D4A017]">料金</p>
                        <p className="mt-1 text-base font-black text-[#0A3D2C] lg:text-lg">個別見積もり</p>
                        <p className="mt-1 text-sm leading-6 text-[#111111]/65">
                          期間・内容に応じて個別にご案内します。
                        </p>
                      </div>
                      <Link
                        href={program.id === "pro" ? lp(program.href) : `${lp()}${program.href}`}
                        className="mt-5 inline-flex text-sm font-bold text-[#0A3D2C] underline-offset-4 transition hover:text-[#D4A017] hover:underline"
                      >
                        {program.id === "pro" ? "プロテスト詳細を見る →" : "詳しく相談する →"}
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ChallengeCta id="contact-mid" />

        {/* CLUBS */}
        <section id="clubs-home" className="ps-section">
          <div className="ps-container">
            <Reveal>
              <SectionHeading
                title={isJapanese ? "提携クラブ・留学先" : c.nav.clubs}
                lead={
                  isJapanese
                    ? "ブラジル現地の提携クラブで、練習と実戦の機会をつくります。"
                    : undefined
                }
              />
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {clubCards.map(({ club, region, regionJa, facilities, matches, rain }, i) => (
                <Reveal key={club.slug} delay={i * 80}>
                  <article className="group ps-card overflow-hidden p-0">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={club.coverImage}
                        alt={`${club.name}の施設`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="ps-media-zoom object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061910]/8 via-[#061910]/2 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <p className="text-xs font-bold tracking-[0.22em] text-[#E8B423]">{region}</p>
                        <h3 className="mt-2 text-2xl font-black text-white">{club.name}</h3>
                        <p className="mt-1 text-sm text-white/75">{regionJa}</p>
                      </div>
                    </div>
                    <div className="space-y-4 p-6 sm:p-7">
                      <dl className="space-y-3 text-sm">
                        <div>
                          <dt className="font-bold text-[#0A3D2C]">施設環境</dt>
                          <dd className="ps-lead mt-1">{facilities}</dd>
                        </div>
                        <div>
                          <dt className="font-bold text-[#0A3D2C]">主な対戦・交流クラブ</dt>
                          <dd className="ps-lead mt-1">{matches}</dd>
                        </div>
                        <div>
                          <dt className="font-bold text-[#0A3D2C]">雨天時の練習環境</dt>
                          <dd className="ps-lead mt-1">{rain}</dd>
                        </div>
                      </dl>
                      <Link
                        href={lp(`/clubs/${club.slug}`)}
                        className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#0A3D2C] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0f5a40]"
                      >
                        詳しく見る
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={100}>
              <div className="mt-8 text-center">
                <Link
                  href={lp("/clubs")}
                  className="inline-flex text-sm font-bold text-[#0A3D2C] underline-offset-4 transition hover:text-[#D4A017] hover:underline"
                >
                  提携クラブ一覧を見る →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* VIDEOS */}
        <section id="videos" className="ps-section-tight ps-bg-subtle">
          <div className="ps-container">
            <Reveal>
              <SectionHeading
                title={isJapanese ? "現地の様子を動画で見る" : "Videos"}
                lead={
                  isJapanese
                    ? "提携クラブの施設や現地生活を、既存の公式動画でご紹介します。"
                    : undefined
                }
              />
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {VIDEOS.map((video, i) => (
                <Reveal key={video.id} delay={i * 70}>
                  <a
                    href={video.watchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group ps-card block overflow-hidden p-0"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={video.thumb}
                        alt={video.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="ps-media-zoom object-cover"
                      />
                      <div className="absolute inset-0 bg-[#061910]/35 transition group-hover:bg-[#061910]/2" />
                      <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#0A3D2C] shadow-lg">
                        <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6" fill="currentColor" aria-hidden="true">
                          <path d="M8 5.14v13.72L19 12 8 5.14z" />
                        </svg>
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-black text-[#0A3D2C]">{video.title}</h3>
                      <p className="ps-lead mt-2 text-sm">{video.description}</p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SUPPORT FLOW */}
        <section id="support-flow" className="ps-section relative overflow-hidden">
          <div className="ps-container relative">
            <Reveal>
              <SectionHeading
                title={isJapanese ? "サポート体制" : c.nav.support}
                lead={
                  isJapanese
                    ? "出発前から帰国後まで、挑戦の全工程をサポートします。"
                    : undefined
                }
              />
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {SUPPORT_STEPS.map((step, i) => (
                <Reveal key={step.no} delay={i * 70}>
                  <article className="ps-card h-full p-6">
                    <p className="font-saira text-3xl font-black text-[#D4A017]">{step.no}</p>
                    <h3 className="mt-4 text-xl font-black text-[#0A3D2C]">{step.title}</h3>
                    <p className="ps-lead mt-3 text-sm">{step.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mt-8">
                <Link
                  href={lp("/about/support")}
                  className="inline-flex text-sm font-bold text-[#0A3D2C] underline-offset-4 transition hover:text-[#D4A017] hover:underline"
                >
                  サポート内容の詳細を見る →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="ps-section-tight ps-bg-subtle">
          <div className="ps-container max-w-3xl">
            <Reveal>
              <SectionHeading title={h.faq.title} />
            </Reveal>
            <div className="mt-10 space-y-4">
              {h.faq.items.map((item, i) => (
                <Reveal key={item.q} delay={i * 50}>
                  <details className="group rounded-2xl border border-[rgba(10,61,44,0.1)] bg-white p-5 shadow-sm open:border-[#D4A017]/40 sm:p-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#0A3D2C]">
                      {item.q}
                      <span className="text-xl font-light text-[#D4A017] transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="ps-lead mt-4 text-sm sm:text-base">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SNS */}
        <section id="sns" className="border-y border-[rgba(10,61,44,0.08)] bg-white">
          <div className="ps-container flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-black text-[#0A3D2C] sm:text-3xl">
                {isJapanese ? "現地の様子をSNSでチェック" : "Follow Para Sonho"}
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {SNS_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[rgba(10,61,44,0.12)] px-5 py-3 text-sm font-bold text-[#0A3D2C] transition hover:border-[#D4A017]/50 hover:text-[#D4A017]"
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <ChallengeCta id="contact" />
      </main>

      <SiteFooter />
    </div>
  );
}
