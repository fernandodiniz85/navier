export default function Faq() {
  return (
    <section id="faq" className="w-full bg-[#F9F9F9] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-[#1F5455] tracking-widest mb-4">PERGUNTAS FREQUENTES</h2>
          <div className="w-16 h-1 bg-[#EABEA9] mx-auto"></div>
        </div>
        
        <div className="space-y-6">
          {/* Pergunta 1 */}
          <div className="bg-white p-6 border border-gray-100 shadow-sm">
            <h3 className="text-[#1F5455] font-medium tracking-wider mb-2">Os equipamentos têm garantia?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Sim. Todos os produtos NAVIER possuem garantia contra defeitos de fabrico. A compra através do Mercado Livre também assegura a devolução gratuita caso o produto não corresponda às suas expectativas.</p>
          </div>
          
          {/* Pergunta 2 */}
          <div className="bg-white p-6 border border-gray-100 shadow-sm">
            <h3 className="text-[#1F5455] font-medium tracking-wider mb-2">Qual o prazo de entrega?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">O envio é processado através da logística rápida do Mercado Livre, o que significa que receberá a sua encomenda no menor tempo possível, muitas vezes no dia seguinte, dependendo da sua região.</p>
          </div>

          {/* Pergunta 3 */}
          <div className="bg-white p-6 border border-gray-100 shadow-sm">
            <h3 className="text-[#1F5455] font-medium tracking-wider mb-2">O Filtro V60 serve noutros suportes?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Os nossos filtros foram desenhados com a angulação e textura perfeitas para o método V60, garantindo a fluidez ideal da água. Podem ser usados em qualquer suporte cónico de tamanho compatível.</p>
          </div>
        </div>

      </div>
    </section>
  );
}