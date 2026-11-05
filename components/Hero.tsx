export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center px-6 py-32 bg-[#1F5455] min-h-[85vh] mt-20">
      
      <h1 className="text-4xl md:text-6xl font-serif text-[#FFFFFF] mb-6 tracking-widest leading-tight">
        ELEVE O SEU RITUAL
      </h1>
      
      <p className="text-base md:text-lg text-[#EABEA9] tracking-widest uppercase mb-12 max-w-2xl leading-relaxed">
        Precisão técnica e formas orgânicas. Extraia o melhor de cada grão com os equipamentos premium da NAVIER.
      </p>
      
      {/* Grupo de 3 Botões */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full max-w-4xl">
        
        {/* Botão Principal em Destaque */}
        <a 
          href="#produtos" 
          className="w-full md:w-auto bg-[#EABEA9] text-[#1F5455] font-bold px-8 py-4 uppercase tracking-widest text-xs hover:bg-[#FFFFFF] transition-colors duration-300"
        >
          Explorar a Coleção
        </a>

        {/* Botão Secundário 1 */}
        <a 
          href="#metodo-v60" 
          className="w-full md:w-auto border border-[#EABEA9] text-[#EABEA9] px-8 py-4 uppercase tracking-widest text-xs hover:bg-[#EABEA9] hover:text-[#1F5455] transition-colors duration-300"
        >
          Conheça o Método V60
        </a>

        {/* Botão Secundário 2 */}
        <a
          href="https://www.mercadolivre.com.br/cafeteira-portatil-manual-pressao-tipo-aeropress--filtros/up/MLBU5688554314?pdp_filters=item_id:MLB7881402892"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#EABEA9] text-[#EABEA9] font-bold px-6 py-4 uppercase tracking-wider text-xs hover:bg-[#EABEA9] hover:text-[#1F5455] transition-colors"
        >
          Cafeteira Portátil
        </a>

      </div>

    </section>
  );
}