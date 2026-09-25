import type { Metadata } from "next";
import { Noto_Sans_Devanagari, Noto_Sans_Oriya } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

// Arial has no Odia glyphs (and patchy Devanagari), so load
// proper fonts for Hindi and Odia. They're used as fallbacks in
// globals.css, so English text still renders in Arial.

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-devanagari",
  display: "swap",
});

const notoOriya = Noto_Sans_Oriya({
  subsets: ["oriya"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-odia",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nirmaan — Build Your Future",
  description:
    "Nirmaan provides free learning, guidance, upskilling, career support and entrepreneurship guidance to help young people build their future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoDevanagari.variable} ${notoOriya.variable}`}
      suppressHydrationWarning
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
