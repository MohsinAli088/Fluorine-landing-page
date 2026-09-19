import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig, getSiteUrl } from "@/lib/site-config";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteConfig.botName} — The Ultimate Discord Bot`,
  description: siteConfig.description,
  icons: {
    icon: siteConfig.botLogo,
    shortcut: siteConfig.botLogo,
    apple: siteConfig.botLogo,
  },
  openGraph: {
    title: `${siteConfig.botName} — The Ultimate Discord Bot`,
    description: siteConfig.description,
    type: "website",
    url: siteUrl,
    siteName: siteConfig.botName,
    images: [
      {
        url: siteConfig.botLogo,
        width: 512,
        height: 512,
        alt: `${siteConfig.botName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.botName} — The Ultimate Discord Bot`,
    description: siteConfig.description,
    images: [siteConfig.botLogo],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen bg-[#030712] text-slate-100 antialiased selection:bg-blue-600/30 selection:text-white font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
