export default function Features() {
  return (
    <section className="w-full bg-navier-green py-20 px-6 text-white border-t border-navier-peach/20">
      <h2 className="sr-only">Por que escolher a Navier</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        
        {/* Diferencial 1 */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border border-navier-peach flex items-center justify-center mb-6 transform rotate-45">
            <span className="transform -rotate-45 text-navier-peach text-xl">✦</span>
          </div>
          <h3 className="font-serif text-lg tracking-widest mb-3 uppercase">Curadoria Premium</h3>
          <p className="text-sm text-navier-peach leading-relaxed px-4 opacity-90">
            Equipamentos selecionados com o máximo rigor para garantir durabilidade e sofisticação no seu espaço.
          </p>
        </div>
        
        {/* Diferencial 2 */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border border-navier-peach flex items-center justify-center mb-6 transform rotate-45">
            <span className="transform -rotate-45 text-navier-peach text-xl">✦</span>
          </div>
          <h3 className="font-serif text-lg tracking-widest mb-3 uppercase">Precisão Técnica</h3>
          <p className="text-sm text-navier-peach leading-relaxed px-4 opacity-90">
            Ferramentas exatas que permitem controle total das variáveis para uma extração precisa e consistente.
          </p>
        </div>

        {/* Diferencial 3 */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border border-navier-peach flex items-center justify-center mb-6 transform rotate-45">
            <span className="transform -rotate-45 text-navier-peach text-xl">✦</span>
          </div>
          <h3 className="font-serif text-lg tracking-widest mb-3 uppercase">Design Nature-Tech</h3>
          <p className="text-sm text-navier-peach leading-relaxed px-4 opacity-90">
            A harmonia ideal, onde a precisão e a engenharia encontram a beleza e a fluidez das formas orgânicas.
          </p>
        </div>

      </div>
    </section>
  );
}
