import type { MetadataRoute } from "next";
import { navigation } from "@/data/navigation";
import { services } from "@/data/services";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...navigation.map((n) => ({
      url: `https://consmarinems.com${n.href}`,
      lastModified: new Date(),
    })),
    ...services.map((s) => ({
      url: `https://consmarinems.com/services/${s.slug}`,
      lastModified: new Date(),
    })),
  ];
}
