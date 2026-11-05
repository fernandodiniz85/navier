export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center px-6 py-32 bg-navier-green min-h-[85vh] mt-20">
      
      <h1 className="text-3xl md:text-5xl font-serif text-white mb-6 tracking-wide leading-tight max-w-4xl">
        Equipamentos para café especial: V60, prensa manual e kit barista
      </h1>
      
      <p className="text-base md:text-lg text-navier-peach tracking-widest uppercase mb-12 max-w-2xl leading-relaxed">
        Eleve o seu ritual. Precisão técnica e formas orgânicas para extrair o melhor de cada grão.
      </p>
      
      {/* Grupo de 3 Botões */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full max-w-4xl">
        
        {/* Botão Principal em Destaque */}
        <a 
          href="#produtos" 
          className="w-full md:w-auto bg-navier-peach text-navier-green font-bold px-8 py-4 uppercase tracking-widest text-xs hover:bg-white transition-colors duration-300"
        >
          Explorar a Coleção
        </a>

        {/* Botão Secundário 1 */}
        <a 
          href="#metodo-v60" 
          className="w-full md:w-auto border border-navier-peach text-navier-peach px-8 py-4 uppercase tracking-widest text-xs hover:bg-navier-peach hover:text-navier-green transition-colors duration-300"
        >
          Conheça o Método V60
        </a>

        {/* Botão Secundário 2 */}
        <a
          href="https://www.mercadolivre.com.br/cafeteira-portatil-manual-pressao-tipo-aeropress--filtros/up/MLBU5688554314?pdp_filters=item_id:MLB7881402892"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-navier-peach text-navier-peach font-bold px-6 py-4 uppercase tracking-wider text-xs hover:bg-navier-peach hover:text-navier-green transition-colors"
        >
          Cafeteira Portátil
        </a>

      </div>

    </section>
  );
}
