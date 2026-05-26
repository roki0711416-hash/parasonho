import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://parasonho.com"),
  title: {
    default: "Para Sonho｜ブラジルサッカー留学・海外サッカー挑戦サポート",
    template: "%s｜Para Sonho / パラソーニョ",
  },
  description:
    "Para Sonho（パラソーニョ）は、本場ブラジル・サントスでサッカー留学に挑戦する選手をサポートします。現地クラブ練習、生活サポート、通訳、チーム遠征まで対応。",
  keywords: [
    "パラソーニョ",
    "Para Sonho",
    "ブラジルサッカー留学",
    "サッカー留学",
    "海外サッカー留学",
    "サントス サッカー留学",
    "サントスサッカー留学",
    "ブラジル 留学 サッカー",
    "ブラジル留学",
    "サッカー海外挑戦",
  ],
  authors: [{ name: "株式会社セグランサ" }],
  creator: "株式会社セグランサ",
  publisher: "Para Sonho / パラソーニョ",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://parasonho.com",
    siteName: "Para Sonho / パラソーニョ",
    title: "Para Sonho｜ブラジルサッカー留学・海外サッカー挑戦サポート",
    description:
      "Para Sonho（パラソーニョ）は、本場ブラジル・サントスでサッカー留学に挑戦する選手をサポートします。",
    images: [
      {
        url: "/parasonho-logo.png",
        width: 1200,
        height: 480,
        alt: "Para Sonho / パラソーニョ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Para Sonho｜ブラジルサッカー留学・海外サッカー挑戦サポート",
    description:
      "本場ブラジル・サントスでのサッカー留学・海外サッカー挑戦をサポート。現地クラブ練習・生活・通訳・チーム遠征まで対応。",
    site: "@Para_Sonho",
    creator: "@Para_Sonho",
    images: ["/parasonho-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "sports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
