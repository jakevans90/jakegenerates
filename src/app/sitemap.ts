import type { MetadataRoute } from "next";
import { professions } from "@/data/tools";
import { SITE_URL } from "@/lib/site-metadata";

const lastUpdated = new Date("2026-10-09T00:00:00.000Z");
const hvacHubUpdated = new Date("2026-10-30T00:00:00.000Z");
const serviceCallGuidePublished = new Date("2026-10-09T00:00:00.000Z");
const maintenanceAgreementGuidePublished = new Date("2026-10-09T00:00:00.000Z");
const markupMarginGuidePublished = new Date("2026-10-09T00:00:00.000Z");
const diagnosticFeeGuidePublished = new Date("2026-10-30T00:00:00.000Z");
const flatRatePricingGuidePublished = new Date("2026-10-30T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: lastUpdated,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: lastUpdated,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: lastUpdated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: lastUpdated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/guides/how-to-price-an-hvac-service-call`,
      lastModified: serviceCallGuidePublished,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/guides/hvac-diagnostic-fee-vs-service-call-fee`,
      lastModified: diagnosticFeeGuidePublished,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/guides/how-hvac-flat-rate-pricing-works`,
      lastModified: flatRatePricingGuidePublished,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/guides/how-to-price-an-hvac-maintenance-agreement`,
      lastModified: maintenanceAgreementGuidePublished,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/guides/markup-vs-margin-for-contractors`,
      lastModified: markupMarginGuidePublished,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...professions.map(({ slug }) => ({
      url: `${SITE_URL}/professions/${slug}`,
      lastModified: slug === "hvac" ? hvacHubUpdated : lastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
