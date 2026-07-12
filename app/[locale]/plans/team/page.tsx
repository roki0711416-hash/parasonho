import TeamPageContent from "../../../components/TeamPageContent";
import { isLocale } from "../../../lib/i18n/config";
import { getDictionary } from "../../../lib/i18n/get-dictionary";
import { pageMetadata } from "../../../lib/i18n/metadata";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return pageMetadata(locale, "/plans/team", dict.team.metaTitle, dict.team.metaDescription);
}

export default function TeamPage() {
  return <TeamPageContent />;
}
