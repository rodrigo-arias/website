import type { MetadataRoute } from "next";
import { mockSiteSettings } from "@/lib/mock/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${mockSiteSettings.url}/sitemap.xml`,
  };
}
