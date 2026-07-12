import HomePage from "../components/HomePage";
import { getDictionary } from "../lib/i18n/get-dictionary";
import { homeMetadata } from "../lib/i18n/metadata";
import { isLocale } from "../lib/i18n/config";
import { localePath } from "../lib/i18n/locale-path";
import type { Metadata } from "next";
import type { FaqItem } from "../lib/i18n/dictionaries/types";

const INSTAGRAM_URL = "https://www.instagram.com/para_sonho/";
const X_URL = "https://x.com/Para_Sonho";
const TIKTOK_URL = "https://www.tiktok.com/@para.sonho";
const YOUTUBE_URL = "https://www.youtube.com/channel/UCE_sb8Gl_vGjHHjiN3wNK-Q";
const SITE_URL = "https://parasonho.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return homeMetadata(locale);
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return null;

  const dict = await getDictionary(localeParam);
  const faqs: FaqItem[] = dict.home.faq.items;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: dict.common.brand,
      url: SITE_URL,
      logo: `${SITE_URL}/parasonho-logo.png`,
      description: dict.meta.siteDescription,
      sameAs: [INSTAGRAM_URL, X_URL, TIKTOK_URL, YOUTUBE_URL],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: dict.common.brand,
      url: `${SITE_URL}${localePath(localeParam, "")}`,
      inLanguage: localeParam,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  );
}
