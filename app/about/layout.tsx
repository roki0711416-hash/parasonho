import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const items = [
  { href: "/about/company", label: "会社概要" },
  { href: "/about/support", label: "サポート内容" },
  { href: "/about/staff", label: "スタッフ紹介" },
];

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f8fff6] text-[#123524]">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <nav className="mb-6 text-xs text-[#4f735f]">
          <Link href="/" className="hover:text-[#0b6a37]">
            ホーム
          </Link>
          <span className="mx-2">/</span>
          <span>Para Sonhoとは</span>
        </nav>

        <div className="grid gap-8 md:grid-cols-[220px_1fr]">
          <aside className="md:sticky md:top-24 md:self-start">
            <div className="overflow-hidden rounded-2xl border border-[#d8eacb] bg-white">
              <div className="border-b border-[#e7f2dd] bg-[#0b0f0d] px-4 py-3 text-xs font-bold tracking-wide text-[#ffcd00]">
                ABOUT PARA SONHO
              </div>
              <ul className="divide-y divide-[#e7f2dd] text-sm">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-[#123524] transition hover:bg-[#f3faed] hover:text-[#0b6a37]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <article className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
            {children}
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
