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
  description: "歌ってみた、楽曲制作の活動を、徹底したクオリティとサポートで支える制作チーム。",
  openGraph: {
    title: "OrangeStudio",
    description: "歌ってみた、楽曲制作の活動を、徹底したクオリティとサポートで支える制作チーム。",
    siteName: "OrangeStudio",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrangeStudio",
    description: "歌ってみた、楽曲制作の活動を、徹底したクオリティとサポートで支える制作チーム。",
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
