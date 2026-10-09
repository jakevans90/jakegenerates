import type { Metadata } from "next";

export const SITE_NAME = "JakeGenerates";
export const SITE_URL = "https://www.jakegenerates.com";
export const SITE_DESCRIPTION =
  "Free calculators for service-business pricing, job costing, break-even, and profit decisions, plus professional document generators.";

export const SOCIAL_IMAGE = {
  url: `${SITE_URL}/brand/jakegenerates-logo.png`,
  width: 2172,
  height: 724,
  alt: SITE_NAME,
};

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title,
      description,
      siteName: SITE_NAME,
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SOCIAL_IMAGE],
    },
  };
}
