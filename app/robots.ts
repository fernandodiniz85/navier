import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.navierpremium.com.br/sitemap.xml",
    host: "https://www.navierpremium.com.br",
  };
}
