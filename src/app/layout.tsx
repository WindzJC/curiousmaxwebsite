import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import type { ReactNode } from "react";

import { contact, siteMeta, siteUrl } from "@/data/site-content";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteMeta.title,
    template: "%s | Joyce B. Whaley",
  },
  description: siteMeta.description,
  keywords: siteMeta.keywords,
  authors: [{ name: "Joyce B. Whaley", url: siteUrl }],
  creator: "Joyce B. Whaley",
  publisher: "Joyce B. Whaley",
  category: "books",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteMeta.title,
    description: siteMeta.description,
    siteName: "Joyce B. Whaley | Curious Maxx",
    images: [
      {
        url: siteMeta.ogImage,
        width: 1200,
        height: 630,
        alt: siteMeta.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    images: [siteMeta.ogImage],
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
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#061221",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${cormorant.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
