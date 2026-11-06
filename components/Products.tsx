import Image from "next/image";

export default function Products() {
  return (
    <section id="produtos" className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-navier-green tracking-widest mb-4 uppercase">
            A Nossa Coleção
          </h2>
          <div className="w-16 h-1 bg-navier-peach mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Produto 1: Kit Barista */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full aspect-square bg-navier-bg mb-6 overflow-hidden">
               <Image
              src="/kit.jpg"
              alt="Kit Barista Navier para extração de café especial cônico"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            </div>
            <h3 className="text-xl font-serif text-navier-green tracking-widest mb-2 uppercase">Kit Barista Navier</h3>
            <p className="text-gray-600 mb-6 text-sm px-4 leading-relaxed">
              Versatilidade e precisão. O conjunto definitivo para o entusiasta dominar a extração em casa com excelência.
            </p>
            <a href="https://www.mercadolivre.com.br/pagina/navier_premium" target="_blank" rel="noopener noreferrer" aria-label="Comprar o Kit Barista Navier na loja Navier do Mercado Livre" className="btn-outline">
              Comprar na Loja
            </a>
          </div>

          {/* Produto 2: Filtros V60 (Aplicação SEO Método 1 e 4) */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full aspect-square bg-navier-bg mb-6 overflow-hidden">
               <Image
              src="/filtro.jpg"
              alt="Filtros de papel especial Navier, 100% compatíveis com suporte Hario V60 tamanho 02"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            </div>
            <h3 className="text-xl font-serif text-navier-green tracking-widest mb-2 uppercase">Filtros V60 Navier</h3>
            <p className="text-gray-600 mb-6 text-sm px-4 leading-relaxed">
              Papel de alta performance sem gosto residual. Com angulação perfeita, é 100% compatível com o suporte Hario V60.
            </p>
            <a href="https://www.mercadolivre.com.br/filtro-papel-japones-v60-02-branco-para-cafe--caixa-com-100/up/MLBU5688947390?pdp_filters=item_id:MLB7881561608" target="_blank" rel="noopener noreferrer" aria-label="Comprar Filtros V60 Navier no Mercado Livre" className="btn-outline">
              Comprar no Mercado Livre
            </a>
          </div>

          {/* Produto 3: Cafeteira Portátil */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full aspect-square bg-navier-bg mb-6 overflow-hidden">
              <Image
              src="/aeropress.jpeg"
              alt="Prensa manual portátil para café sob pressão, da Navier"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            </div>
            <h3 className="text-xl font-serif text-navier-green tracking-widest mb-2 uppercase">Prensa Manual Portátil</h3>
            <p className="text-gray-600 mb-6 text-sm px-4 leading-relaxed">
              O método por pressão mais versátil e resistente. Uma bebida encorpada e perfeita para qualquer ambiente.
            </p>
            <a href="https://www.mercadolivre.com.br/cafeteira-portatil-manual-pressao-tipo-aeropress--filtros/up/MLBU5688554314?pdp_filters=item_id:MLB7881402892" target="_blank" rel="noopener noreferrer" aria-label="Comprar a Prensa Manual Portátil Navier no Mercado Livre" className="btn-outline">
              Comprar no Mercado Livre
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}