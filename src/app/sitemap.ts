import type { MetadataRoute } from "next";
import { collections } from "@/content/collections";
import { articles } from "@/content/insights";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/collections", "/services", "/about", "/insights", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  return [
    ...pages,
    ...collections.map((c) => ({
      url: `${site.url}/collections/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...articles.map((a) => ({
      url: `${site.url}/insights/${a.slug}`,
      lastModified: new Date(a.published),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
