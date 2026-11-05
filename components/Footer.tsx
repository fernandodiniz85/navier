import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-navier-green text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Coluna 1: Marca */}
        <div>
          <h2 className="font-serif text-xl tracking-widest mb-4 text-white uppercase">Navier</h2>
          <p className="text-white/80 text-sm leading-relaxed text-justify">
            Equipamentos Nature-Tech para baristas e entusiastas. A precisão técnica aliada às formas orgânicas para elevar o seu ritual do café.
          </p>
          <p className="mt-4 text-sm">
            <Link href="/novo-blog" className="text-white/80 hover:text-navier-peach transition-colors underline underline-offset-4">
              Blog: Guias de Café Especial
            </Link>
          </p>
        </div>
        
        {/* Coluna 2: Contato */}
        <div>
          <h2 className="font-serif text-lg tracking-widest mb-4 text-navier-peach uppercase">Contato</h2>
          <ul className="text-white/80 text-sm space-y-3">
            <li>
              <a href="https://wa.me/5521967417992" target="_blank" rel="noopener noreferrer" className="hover:text-navier-peach transition-colors">
                WhatsApp: (21) 96741-7992
              </a>
            </li>
            <li>
              <a href="mailto:navierpremium@gmail.com" className="hover:text-navier-peach transition-colors">
                Email: navierpremium@gmail.com
              </a>
            </li>
            <li>
              <a href="https://instagram.com/navier_premium" target="_blank" rel="noopener noreferrer" className="hover:text-navier-peach transition-colors">
                Instagram: @navier_premium
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Legal e CNPJ */}
        <div>
          <h2 className="font-serif text-lg tracking-widest mb-4 text-navier-peach uppercase">Legal</h2>
          <ul className="text-white/80 text-sm space-y-3">
            <li>CNPJ: 66.569.194/0001-59</li>
            <li><address className="not-italic">Rio de Janeiro, RJ - Brasil</address></li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/20 text-center text-white/60 text-xs">
        &copy; {new Date().getFullYear()} NAVIER Premium. Todos os direitos reservados.
      </div>
    </footer>
  );
}
