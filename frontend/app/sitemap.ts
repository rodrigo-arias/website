import type { MetadataRoute } from "next";
import { mockSiteSettings } from "@/lib/mock/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: mockSiteSettings.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${mockSiteSettings.url}/stack`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${mockSiteSettings.url}/bookmarks`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${mockSiteSettings.url}/colophon`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
