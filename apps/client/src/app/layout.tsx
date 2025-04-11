import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/nav/Header"; // ✅ Import NavBar

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luminalogix | AI-Powered Fashion Commerce",
  description:
    "Experience intelligent fashion with AI-generated content, personalization, and immersive shopping tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`bg-brand-light text-charcoal ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Global site header */}
        <Header />

        {/* ✅ Page content wrapper */}
        <main>{children}</main>
      </body>
    </html>
  );
}
