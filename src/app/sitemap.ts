import type { MetadataRoute } from "next";
import { professions } from "@/data/tools";

const siteUrl = "https://jakegenerates.com";
const serviceCallGuidePublished = new Date("2026-10-09T00:00:00.000Z");
const maintenanceAgreementGuidePublished = new Date("2026-10-09T00:00:00.000Z");
const markupMarginGuidePublished = new Date("2026-10-09T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contact`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/guides/how-to-price-an-hvac-service-call`,
      lastModified: serviceCallGuidePublished,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/guides/how-to-price-an-hvac-maintenance-agreement`,
      lastModified: maintenanceAgreementGuidePublished,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/guides/markup-vs-margin-for-contractors`,
      lastModified: markupMarginGuidePublished,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...professions.map(({ slug }) => ({
      url: `${siteUrl}/professions/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
