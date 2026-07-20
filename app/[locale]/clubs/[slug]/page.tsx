import { notFound } from "next/navigation";
import ClubDetailPageContent from "../../../components/ClubDetailPageContent";
import { CLUBS_PUBLISHED, getClubBySlug, getClubSlugs } from "../../../lib/clubs";
import { isLocale, locales } from "../../../lib/i18n/config";
import { pageMetadata } from "../../../lib/i18n/metadata";
import type { Metadata } from "next";

export function generateStaticParams() {
  if (!CLUBS_PUBLISHED) return [];
  const slugs = getClubSlugs();
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  if (!CLUBS_PUBLISHED) return {};
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const club = getClubBySlug(slug);
  if (!club) return {};
  return pageMetadata(locale, `/clubs/${slug}`, club.metaTitle, club.metaDescription);
}

export default async function ClubDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  if (!CLUBS_PUBLISHED) notFound();
  const { slug } = await params;
  const club = getClubBySlug(slug);
  if (!club) notFound();
  return <ClubDetailPageContent club={club} />;
}
