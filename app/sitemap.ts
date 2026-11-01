import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://thearcanasystems.com";
  const routes = ["", "/audit", "/pricing", "/method", "/about", "/contact"];

  return routes.map((route, index) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/audit" ? 0.95 : 0.8,
  }));
}
