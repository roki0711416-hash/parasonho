import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/types";

const loaders: Partial<Record<Locale, () => Promise<Dictionary>>> = {
  ja: () => import("./dictionaries/ja").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
  pt: () => import("./dictionaries/pt").then((m) => m.default),
  es: () => import("./dictionaries/es").then((m) => m.default),
  zh: () => import("./dictionaries/zh").then((m) => m.default),
  ko: () => import("./dictionaries/ko").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const load = loaders[locale] ?? loaders.en;
  return (await load!()) as Dictionary;
}
