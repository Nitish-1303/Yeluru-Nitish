import type { MetadataRoute } from "next";

const siteUrl = "https://www.yelurunitish.tech";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: "2026-10-22",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
