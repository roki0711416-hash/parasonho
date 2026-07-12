export const locales = [
  "ja",
  "en",
  "pt",
  "es",
  "zh",
  "ko",
  "fr",
  "de",
  "it",
  "nl",
  "pl",
  "ru",
  "uk",
  "tr",
  "ar",
  "hi",
  "th",
  "vi",
  "id",
  "ms",
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ja";

export const localeNames: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
  pt: "Português",
  es: "Español",
  zh: "中文",
  ko: "한국어",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  nl: "Nederlands",
  pl: "Polski",
  ru: "Русский",
  uk: "Українська",
  tr: "Türkçe",
  ar: "العربية",
  hi: "हिन्दी",
  th: "ไทย",
  vi: "Tiếng Việt",
  id: "Bahasa Indonesia",
  ms: "Bahasa Melayu",
};

/** 完全翻訳がある言語（それ以外は英語にフォールバック） */
export const fullyTranslatedLocales: Locale[] = ["ja", "en", "pt", "es", "zh", "ko"];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const ogLocales: Record<Locale, string> = {
  ja: "ja_JP",
  en: "en_US",
  pt: "pt_BR",
  es: "es_ES",
  zh: "zh_CN",
  ko: "ko_KR",
  fr: "fr_FR",
  de: "de_DE",
  it: "it_IT",
  nl: "nl_NL",
  pl: "pl_PL",
  ru: "ru_RU",
  uk: "uk_UA",
  tr: "tr_TR",
  ar: "ar_SA",
  hi: "hi_IN",
  th: "th_TH",
  vi: "vi_VN",
  id: "id_ID",
  ms: "ms_MY",
};
