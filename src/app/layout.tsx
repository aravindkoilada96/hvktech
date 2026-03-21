import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { createPageMetadata } from "@/lib/metadata";
import "./globals.css";

const bitter = localFont({
  src: "./fonts/BitterLatin.woff2",
  variable: "--font-bitter",
  display: "swap",
});

export const metadata: Metadata = createPageMetadata({
  title: "Home",
  description: "Innovative Software Solutions for Businesses",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={`${bitter.variable} bg-white text-zinc-900 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
