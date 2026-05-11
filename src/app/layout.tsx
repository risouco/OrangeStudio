import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OrangeStudio",
    template: "%s | OrangeStudio",
  },
  description: "OrangeStudio — 運営×エンジニアの分業で、ご依頼に向き合う。",
  openGraph: {
    title: "OrangeStudio",
    description: "OrangeStudio — 運営×エンジニアの分業で、ご依頼に向き合う。",
    siteName: "OrangeStudio",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrangeStudio",
    description: "OrangeStudio — 運営×エンジニアの分業で、ご依頼に向き合う。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJp.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
