import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./data";

const siteUrl = "https://www.navierpremium.com.br";
const blogTitle = "Blog de Café Especial: Guias de V60, Moagem e Sabores";
const blogDesc =
  "Guias práticos para preparar café especial em casa: método V60, moagem, notas sensoriais e como montar seu kit básico de equipamentos.";

export const metadata: Metadata = {
  title: { absolute: blogTitle },
  description: blogDesc,
  alternates: {
    canonical: `${siteUrl}/novo-blog`,
  },
  openGraph: {
    title: blogTitle,
    description: blogDesc,
    url: `${siteUrl}/novo-blog`,
    siteName: "Navier",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blog Navier: guias de café especial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: blogTitle,
    description: blogDesc,
    images: ["/og-image.png"],
  },
};

export default function BlogIndex() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6">
      <h1 className="text-4xl font-serif text-navier-green tracking-widest mb-12 text-center uppercase">
        Blog Navier
      </h1>

      <div className="grid gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white p-8 rounded-sm shadow-sm border border-navier-peach/20 hover:border-navier-sage/50 transition-colors flex flex-col"
          >
            <time
              dateTime={post.isoDate}
              className="block text-navier-sage text-sm mb-2 tracking-widest uppercase"
            >
              {post.date}
            </time>
            
            <h2 className="text-2xl font-serif text-navier-green mb-4 hover:text-navier-sage transition-colors">
              <Link href={`/novo-blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            
            <p className="text-gray-600 mb-6 text-left md:text-justify hyphens-auto leading-relaxed flex-grow">
              {post.excerpt}
            </p>

            <div>
              <Link
                href={`/novo-blog/${post.slug}`}
                className="text-navier-green border-b border-navier-green font-semibold text-xs uppercase tracking-wider hover:text-navier-peach hover:border-navier-peach transition-colors pb-1 inline-block"
              >
                Ler guia completo &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}