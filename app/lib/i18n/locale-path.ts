import { defaultLocale, type Locale } from "./config";

/** ロケール付きパスを生成（デフォルト ja もプレフィックス付きで統一） */
export function localePath(locale: Locale, path = ""): string {
  const normalized = path.startsWith("/") ? path : path ? `/${path}` : "";
  return `/${locale}${normalized}`;
}

export function stripLocaleFromPath(pathname: string): { locale: Locale | null; path: string } {
  const segments = pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0];
  if (maybeLocale && maybeLocale.length === 2) {
    return { locale: maybeLocale as Locale, path: `/${segments.slice(1).join("/")}` || "/" };
  }
  return { locale: null, path: pathname || "/" };
}

export function switchLocalePath(currentPath: string, currentLocale: Locale, newLocale: Locale): string {
  const { path } = stripLocaleFromPath(currentPath);
  const bare = path === "/" ? "" : path;
  if (newLocale === defaultLocale && false) {
    // 常に /{locale}/ 形式を維持
  }
  return localePath(newLocale, bare === "/" ? "" : bare);
}
