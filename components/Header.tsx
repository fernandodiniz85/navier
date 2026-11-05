import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-[#FFFFFF] py-4 px-6 md:px-8 flex items-center justify-between shadow-sm fixed top-0 z-50">
      
      {/* Logótipo */}
      <div className="flex items-center">
        <Link href="/">
          <img 
            src="/logo.svg" 
            alt="Logotipo NAVIER" 
            className="h-12 md:h-14 object-contain cursor-pointer" 
          />
        </Link>
      </div>

      {/* Navegação Desktop e Mobile básica ajustada */}
      <nav className="flex gap-4 md:gap-8 text-xs md:text-sm font-medium text-[#1F5455] tracking-wider uppercase items-center">
        <a href="#ritual" className="hidden sm:inline-block hover:text-[#EABEA9] transition-colors">O Ritual</a>
        <a href="#produtos" className="hidden sm:inline-block hover:text-[#EABEA9] transition-colors">Equipamentos</a>
        <a href="#faq" className="hidden lg:inline-block hover:text-[#EABEA9] transition-colors">FAQ</a>
        
        {/* Journal visível em todas as resoluções */}
        <Link href="/novo-blog" className="hover:text-[#EABEA9] transition-colors font-bold sm:border-l sm:border-[#1F5455]/20 sm:pl-6">
          Journal
        </Link>
      </nav>

      {/* Botão Ver Produtos funcional direcionando para a âncora #produtos */}
      <a 
        href="#produtos" 
        className="bg-[#1F5455] text-white px-4 md:px-6 py-2 rounded text-xs md:text-sm uppercase tracking-wider hover:bg-[#8FA98C] transition-colors text-center"
      >
        Ver Produtos
      </a>

    </header>
  );
}