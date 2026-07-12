import type { Metadata } from "next";
import { ogLocales, type Locale } from "./config";
import { getDictionary } from "./get-dictionary";
import { localePath } from "./locale-path";

export async function pageMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string,
): Promise<Metadata> {
  const dict = await getDictionary(locale);
  const canonical = localePath(locale, path);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${dict.common.brand}`,
      description,
      url: canonical,
      locale: ogLocales[locale],
    },
  };
}

export async function homeMetadata(locale: Locale): Promise<Metadata> {
  const dict = await getDictionary(locale);
  return {
    title: { absolute: dict.meta.siteTitle },
    description: dict.meta.siteDescription,
    alternates: { canonical: localePath(locale, "") },
    openGraph: {
      title: dict.meta.siteTitle,
      description: dict.meta.siteDescription,
      url: localePath(locale, ""),
      locale: ogLocales[locale],
    },
  };
}
