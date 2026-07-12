import { notFound } from "next/navigation";
import { isLocale, locales } from "../lib/i18n/config";
import { getDictionary } from "../lib/i18n/get-dictionary";
import { I18nProvider } from "../lib/i18n/I18nProvider";
import HtmlLang from "../components/HtmlLang";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const dict = await getDictionary(localeParam);

  return (
    <I18nProvider locale={localeParam} dict={dict}>
      <HtmlLang locale={localeParam} />
      {children}
    </I18nProvider>
  );
}
