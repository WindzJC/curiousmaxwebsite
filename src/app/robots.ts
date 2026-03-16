import type { MetadataRoute } from "next";

import { siteUrl } from "@/data/site-content";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const resolvedSiteUrl = new URL(siteUrl);

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${resolvedSiteUrl.origin}/sitemap.xml`,
    host: resolvedSiteUrl.origin,
  };
}
