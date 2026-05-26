const SITE_URL = "https://parasonho.com";

const routes: Array<{ path: string; priority: string; changeFrequency: string }> = [
  { path: "/", priority: "1.0", changeFrequency: "weekly" },
  { path: "/service", priority: "0.9", changeFrequency: "monthly" },
  { path: "/plans/team", priority: "0.9", changeFrequency: "monthly" },
  { path: "/about", priority: "0.6", changeFrequency: "monthly" },
  { path: "/about/company", priority: "0.5", changeFrequency: "monthly" },
  { path: "/about/support", priority: "0.7", changeFrequency: "monthly" },
  { path: "/about/staff", priority: "0.5", changeFrequency: "monthly" },
];

export function GET() {
  const lastmod = new Date().toISOString();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${r.changeFrequency}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
