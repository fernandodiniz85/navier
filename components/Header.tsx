import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-white py-4 px-6 md:px-8 flex items-center justify-between shadow-sm fixed top-0 z-50">
      
      {/* Logotipo */}
      <div className="flex items-center">
        <Link href="/" aria-label="Navier: página inicial">
          <Image
            src="/logo.svg"
            alt="Logotipo NAVIER"
            width={160}
            height={56}
            priority
            className="h-12 md:h-14 w-auto object-contain cursor-pointer"
          />
        </Link>
      </div>

      {/* Navegação Desktop e Mobile básica ajustada */}
      <nav aria-label="Navegação principal" className="flex gap-4 md:gap-8 text-xs md:text-sm font-medium text-navier-green tracking-wider uppercase items-center">
        <a href="#ritual" className="hidden sm:inline-block hover:text-navier-peach transition-colors">O Ritual</a>
        <a href="#produtos" className="hidden sm:inline-block hover:text-navier-peach transition-colors">Equipamentos</a>
        <a href="#faq" className="hidden lg:inline-block hover:text-navier-peach transition-colors">FAQ</a>
        
        {/* Blog visível em todas as resoluções */}
        <Link href="/novo-blog" className="hover:text-navier-peach transition-colors font-bold sm:border-l sm:border-navier-green/20 sm:pl-6">
          Blog
        </Link>
      </nav>

      {/* Botão Ver Produtos funcional direcionando para a âncora #produtos */}
      <a 
        href="#produtos" 
        className="bg-navier-green text-white px-4 md:px-6 py-2 rounded text-xs md:text-sm uppercase tracking-wider hover:bg-navier-sage transition-colors text-center"
      >
        Ver Produtos
      </a>

    </header>
  );
}
