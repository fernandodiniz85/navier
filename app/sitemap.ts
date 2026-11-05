import { MetadataRoute } from "next";
import { posts } from "./novo-blog/data";

const siteUrl = "https://www.navierpremium.com.br";

// Atualize esta data manualmente quando alterar o conteúdo da home.
const homeLastModified = new Date("2026-11-03");

export default function sitemap(): MetadataRoute.Sitemap {
  const blogLastModified = new Date(
    Math.max(...posts.map((post) => new Date(post.isoDate).getTime()))
  );

  return [
    {
      url: siteUrl,
      lastModified: homeLastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/novo-blog`,
      lastModified: blogLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${siteUrl}/novo-blog/${post.slug}`,
      lastModified: new Date(post.isoDate),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
