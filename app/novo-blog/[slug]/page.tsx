import { posts } from '../data';
import Link from 'next/link';

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Procura o artigo correto com base no link da página
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-serif text-[#1F5455]">Artigo não encontrado</h1>
        {/* Corrigido para /novo-blog */}
        <Link href="/novo-blog" className="mt-8 text-[#8FA98C] underline">Voltar ao Journal</Link>
      </div>
    );
  }

  return (
    <main className="max-w-3xl mx-auto py-24 px-6 bg-[#FFFFFF] min-h-screen border-x border-[#EABEA9]/10 shadow-xl">
      {/* Corrigido para /novo-blog */}
      <Link href="/novo-blog" className="text-[#8FA98C] text-xs tracking-widest uppercase hover:text-[#1F5455] mb-12 inline-block transition-colors">
        &larr; Voltar ao Journal
      </Link>
      
      <p className="text-[#EABEA9] text-sm mb-4 uppercase tracking-widest font-semibold">{post.date}</p>
      <h1 className="text-4xl md:text-5xl font-serif text-[#1F5455] mb-12 leading-tight">{post.title}</h1>
      <div className="w-16 h-1 bg-[#8FA98C] mb-12"></div>
      
      <div className="text-gray-600 leading-relaxed text-lg text-justify whitespace-pre-wrap">
        {post.content}
      </div>
    </main>
  );
}