import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journal | NAVIER",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col font-sans">
      
      {/* Navegação Exclusiva do Blog */}
      <header className="w-full bg-[#1F5455] text-white py-5 px-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-serif text-xl tracking-widest hover:text-[#EABEA9] transition-colors">
            NAVIER
          </Link>
          <Link href="/" className="text-xs font-semibold uppercase tracking-widest hover:text-[#EABEA9] transition-colors flex items-center gap-2">
            <span>&larr;</span> Voltar à Loja
          </Link>
        </div>
      </header>

      {/* Área onde os artigos são carregados */}
      <div className="flex-grow">
        {children}
      </div>
      
    </div>
  );
}