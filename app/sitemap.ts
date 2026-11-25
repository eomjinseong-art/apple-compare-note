import type { MetadataRoute } from "next";
import { CATEGORIES, MODELS } from "@/lib/products";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ["", ...CATEGORIES.map((c) => c.path), "/about", ...MODELS.map((m) => `/models/${m.slug}`)];
  return paths.map((p) => ({ url: `${SITE_URL}${p}`, lastModified: now, changeFrequency: "weekly", priority: p === "" ? 1 : 0.7 }));
}
