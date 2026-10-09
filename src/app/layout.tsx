import type { Metadata } from "next";
import Script from "next/script";

import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL_IMAGE } from "@/lib/site-metadata";

import "./globals.css";

const GA_MEASUREMENT_ID = "G-DW36H2JDZ2";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "JakeGenerates — Practical tools for repetitive work", template: "%s | JakeGenerates" },
  description: SITE_DESCRIPTION,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/",
    title: "JakeGenerates — Practical tools for repetitive work",
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "JakeGenerates — Practical tools for repetitive work",
    description: SITE_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
  icons: {
    icon: "/brand/jg-circle.png",
    shortcut: "/brand/jg-circle.png",
    apple: "/brand/jg-circle.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </html>
  );
}
