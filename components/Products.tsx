export default function Products() {
  return (
    <section id="produtos" className="w-full bg-[#FFFFFF] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-[#1F5455] tracking-widest mb-4">
            A NOSSA COLEÇÃO
          </h2>
          <div className="w-16 h-1 bg-[#EABEA9] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Produto 1: Kit Barista */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full aspect-square bg-[#F9F9F9] mb-6 flex items-center justify-center overflow-hidden">
               <img src="/kit.jpg" alt="Kit Barista Navier" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-serif text-[#1F5455] tracking-widest mb-2">KIT BARISTA NAVIER</h3>
            <p className="text-gray-600 mb-6 text-sm px-4 leading-relaxed">
              Versatilidade e precisão. O conjunto definitivo para o entusiasta dominar a extração em casa.
            </p>
            <a href="https://www.mercadolivre.com.br/pagina/navier_premium" target="_blank" rel="noopener noreferrer" className="border border-[#1F5455] text-[#1F5455] px-8 py-3 uppercase tracking-wider text-xs hover:bg-[#1F5455] hover:text-white transition-colors">
              Comprar na Loja
            </a>
          </div>

          {/* Produto 2: Filtros V60 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full aspect-square bg-[#F9F9F9] mb-6 flex items-center justify-center overflow-hidden">
               <img src="/filtro.jpg" alt="Filtros V60 Navier" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-serif text-[#1F5455] tracking-widest mb-2">FILTROS V60 NAVIER</h3>
            <p className="text-gray-600 mb-6 text-sm px-4 leading-relaxed">
              Qualidade japonesa superior. Extração limpa e uniforme para destacar as melhores notas do seu café.
            </p>
            <a href="https://www.mercadolivre.com.br/filtro-papel-japones-v60-02-branco-para-cafe--caixa-com-100/up/MLBU5688947390?pdp_filters=item_id:MLB7881561608" target="_blank" rel="noopener noreferrer" className="border border-[#1F5455] text-[#1F5455] px-8 py-3 uppercase tracking-wider text-xs hover:bg-[#1F5455] hover:text-white transition-colors">
              Comprar no Mercado Livre
            </a>
          </div>

          {/* Produto 3: Cafeteira Portátil */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full aspect-square bg-[#F9F9F9] mb-6 flex items-center justify-center overflow-hidden">
              <img src="/aeropress.jpeg" alt="Cafeteira Portátil por Pressão" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-serif text-[#1F5455] tracking-widest mb-2">PRENSA MANUAL PORTÁTIL</h3>
            <p className="text-gray-600 mb-6 text-sm px-4 leading-relaxed">
              O método por pressão mais versátil e resistente. Uma bebida encorpada e perfeita para qualquer ambiente.
            </p>
            <a href="https://www.mercadolivre.com.br/cafeteira-portatil-manual-pressao-tipo-aeropress--filtros/up/MLBU5688554314?pdp_filters=item_id:MLB7881402892" target="_blank" rel="noopener noreferrer" className="border border-[#1F5455] text-[#1F5455] px-8 py-3 uppercase tracking-wider text-xs hover:bg-[#1F5455] hover:text-white transition-colors">
              Comprar no Mercado Livre
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}