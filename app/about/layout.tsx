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
    <div className="ps-dark min-h-screen">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <nav className="mb-6 text-xs text-[#E9E1D1]/60">
          <Link href="/" className="transition hover:text-[#F5B041]">
            ホーム
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#E9E1D1]">Para Sonhoについて</span>
        </nav>

        <div className="grid gap-8 md:grid-cols-[220px_1fr]">
          <aside className="md:sticky md:top-24 md:self-start">
            <div className="ps-card overflow-hidden">
              <div className="border-b border-[rgba(245,176,65,0.2)] bg-[#1B2338] px-4 py-3 text-xs font-bold tracking-[0.2em] text-[#F5B041]">
                ABOUT PARA SONHO
              </div>
              <ul className="divide-y divide-[rgba(245,176,65,0.15)] text-sm">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-[#E9E1D1]/85 transition hover:bg-[#1B2338] hover:text-[#F5B041]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <article className="ps-card p-6 sm:p-10">{children}</article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
