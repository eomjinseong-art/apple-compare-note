import type { Metadata, Viewport } from "next";
import { Disclosure } from "@/components/Disclosure";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { GOOGLE_SITE_VERIFICATION, NAVER_SITE_VERIFICATION, SITE_NAME, SITE_SUB, SITE_TAGLINE, SITE_URL } from "@/lib/site";
import "./globals.css";

const description = `${SITE_TAGLINE}. ${SITE_SUB}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s · ${SITE_NAME}` },
  description,
  keywords: ["아이폰 비교", "아이폰 17 비교", "아이폰 18 프로", "아이폰 에어", "아이폰 듀오", "아이패드 비교", "아이패드 에어 M4", "맥북 비교", "맥북에어 M5", "맥북 네오", "에어팟 프로 3", "자급제 아이폰"],
  openGraph: { type: "website", locale: "ko_KR", url: SITE_URL, siteName: SITE_NAME, title: SITE_NAME, description, images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", title: SITE_NAME, description, images: ["/opengraph-image"] },
  verification: { google: GOOGLE_SITE_VERIFICATION, other: { "naver-site-verification": NAVER_SITE_VERIFICATION } },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0f172a" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={`min-h-screen bg-white font-sans text-slate-900 antialiased`}>
        <Disclosure />
        <Header />
        <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
