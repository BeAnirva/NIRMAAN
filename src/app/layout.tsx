import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
