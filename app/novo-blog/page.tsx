import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./data";

export const metadata: Metadata = {
  title: { absolute: "Blog de Café Especial: Guias de V60, Moagem e Sabores" },
  description:
    "Guias práticos para preparar café especial em casa: método V60, moagem, notas sensoriais e como montar seu kit básico de equipamentos.",
  alternates: {
    canonical: "https://www.navierpremium.com.br/novo-blog",
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
            className="bg-white p-8 rounded-sm shadow-sm border border-navier-peach/20 hover:border-navier-sage/50 transition-colors"
          >
            <time
              dateTime={post.isoDate}
              className="block text-navier-sage text-sm mb-2 tracking-widest uppercase"
            >
              {post.date}
            </time>
            <h2 className="text-2xl font-serif text-navier-green mb-4">{post.title}</h2>
            <p className="text-gray-600 mb-6 text-justify leading-relaxed">{post.excerpt}</p>

            <Link
              href={`/novo-blog/${post.slug}`}
              aria-label={`Ler o artigo: ${post.title}`}
              className="text-navier-green border-b border-navier-green font-semibold text-xs uppercase tracking-wider hover:text-navier-peach hover:border-navier-peach transition-colors pb-1 inline-block"
            >
              Ler artigo completo
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
