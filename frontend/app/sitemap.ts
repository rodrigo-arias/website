import type { MetadataRoute } from "next";
import { getSiteSettings } from "@/lib/graphql/fetchers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const site = await getSiteSettings();

  return [
    {
      url: `${site.url}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/stack`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/bookmarks`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/colophon`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
