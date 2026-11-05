import Link from 'next/link';
import { posts } from './data';

export default function BlogIndex() {
  return (
    <main className="max-w-4xl mx-auto py-24 px-6">
      <h1 className="text-4xl font-serif text-[#1F5455] tracking-widest mb-12 text-center uppercase">Journal Navier</h1>
      
      <div className="grid gap-8">
        {posts.map(post => (
          <article key={post.id} className="bg-white p-8 rounded-sm shadow-sm border border-[#EABEA9]/20 hover:border-[#8FA98C]/50 transition-colors">
            <p className="text-[#8FA98C] text-sm mb-2 tracking-widest uppercase">{post.date}</p>
            <h2 className="text-2xl font-serif text-[#1F5455] mb-4">{post.title}</h2>
            <p className="text-gray-600 mb-6 text-justify leading-relaxed">{post.excerpt}</p>
            
            {/* O link agora aponta para /novo-blog/ em vez de /blog/ */}
            <Link href={`/novo-blog/${post.slug}`} className="text-[#1F5455] border-b border-[#1F5455] font-semibold text-xs uppercase tracking-wider hover:text-[#EABEA9] hover:border-[#EABEA9] transition-colors pb-1 inline-block">
              Ler artigo completo
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}