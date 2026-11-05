export default function Footer() {
  return (
    <footer className="w-full bg-[#1F5455] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Coluna 1: Marca */}
        <div>
          <h4 className="font-serif text-xl tracking-widest mb-4 text-[#FFFFFF]">NAVIER</h4>
          <p className="text-white/80 text-sm leading-relaxed text-justify">
            Equipamentos Nature-Tech para baristas e entusiastas. A precisão técnica aliada às formas orgânicas para elevar o seu ritual do café.
          </p>
        </div>
        
        {/* Coluna 2: Contacto */}
        <div>
          <h4 className="font-serif text-lg tracking-widest mb-4 text-[#EABEA9]">CONTATO</h4>
          <ul className="text-white/80 text-sm space-y-3">
            <li>
              <a href="https://wa.me/5521967417992" target="_blank" rel="noopener noreferrer" className="hover:text-[#EABEA9] transition-colors">
                WhatsApp: (21) 96741-7992
              </a>
            </li>
            <li>
              <a href="mailto:navierpremium@gmail.com" className="hover:text-[#EABEA9] transition-colors">
                Email: navierpremium@gmail.com
              </a>
            </li>
            <li>
              <a href="https://instagram.com/navier_premium" target="_blank" rel="noopener noreferrer" className="hover:text-[#EABEA9] transition-colors">
                Instagram: @navier_premium
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Legal e CNPJ */}
        <div>
          <h4 className="font-serif text-lg tracking-widest mb-4 text-[#EABEA9]">LEGAL</h4>
          <ul className="text-white/80 text-sm space-y-3">
            <li>CNPJ: 66.569.194/0001-59</li>
            <li>Rio de Janeiro, RJ - Brasil</li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-[#FFFFFF]/20 text-center text-white/60 text-xs">
        &copy; {new Date().getFullYear()} NAVIER Premium. Todos os direitos reservados.
      </div>
    </footer>
  );
}