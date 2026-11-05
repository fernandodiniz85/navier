export default function Ritual() {
  return (
    <section id="ritual" className="w-full bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-serif text-navier-green tracking-widest mb-4 uppercase">A Pausa, o Grão e o Ritual</h2>
        <div className="w-16 h-1 bg-navier-peach mx-auto mb-12"></div>
        
        <p className="text-gray-600 mb-8 leading-relaxed text-lg text-justify px-4">
          Num mundo que corre contra o relógio, o momento de preparar um café é o seu porto seguro. É a pausa necessária para se desconectar do caos e recarregar a energia. Na NAVIER, acreditamos que essa experiência é um ritual terapêutico que começa muito antes de a água tocar no pó.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="border-t border-navier-sage pt-6">
            <h3 className="text-navier-green font-serif text-xl mb-3 text-center md:text-left">A Origem e Cultivo</h3>
            <p className="text-sm text-gray-500 leading-relaxed text-justify">
              Tudo começa nas montanhas. A colheita manual e seletiva garante que apenas os frutos no pico da maturação cheguem à sua xícara, preservando a doçura natural, os óleos essenciais e a complexidade do terroir.
            </p>
          </div>
          <div className="border-t border-navier-sage pt-6">
            <h3 className="text-navier-green font-serif text-xl mb-3 text-center md:text-left">A Arte da Torra</h3>
            <p className="text-sm text-gray-500 leading-relaxed text-justify">
              A torra é a alquimia do grão. Torras claras destacam a acidez e notas frutadas; as médias trazem o equilíbrio do caramelo e chocolate; enquanto as mais escuras encorpam a bebida. O grão dita o caminho.
            </p>
          </div>
          <div className="border-t border-navier-sage pt-6">
            <h3 className="text-navier-green font-serif text-xl mb-3 text-center md:text-left">A Extração Exata</h3>
            <p className="text-sm text-gray-500 leading-relaxed text-justify">
              A magia final está nas suas mãos. A combinação do método correto, a precisão da moagem e a qualidade da filtração revelam o potencial máximo que a natureza guardou durante meses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
