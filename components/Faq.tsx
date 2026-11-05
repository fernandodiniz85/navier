export default function Faq() {
  return (
    <section id="faq" className="w-full bg-navier-bg py-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-navier-green tracking-widest mb-4 uppercase">Perguntas Frequentes</h2>
          <div className="w-16 h-1 bg-navier-peach mx-auto"></div>
        </div>
        
        <div className="space-y-6">
          {/* Pergunta 1 */}
          <div className="bg-white p-6 border border-gray-100 shadow-sm">
            <h3 className="text-navier-green font-medium tracking-wider mb-2">Os equipamentos têm garantia?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Sim. Todos os produtos NAVIER possuem garantia contra defeitos de fabricação. Comprando pelo Mercado Livre, você também conta com a política de devolução da plataforma caso o produto não corresponda às suas expectativas.</p>
          </div>
          
          {/* Pergunta 2 */}
          <div className="bg-white p-6 border border-gray-100 shadow-sm">
            <h3 className="text-navier-green font-medium tracking-wider mb-2">Qual o prazo de entrega?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">O envio é feito pela logística do Mercado Livre, e o prazo exato aparece na página do produto de acordo com o seu CEP. Em muitas regiões, a entrega é rápida.</p>
          </div>

          {/* Pergunta 3 */}
          <div className="bg-white p-6 border border-gray-100 shadow-sm">
            <h3 className="text-navier-green font-medium tracking-wider mb-2">O filtro V60 serve em outros suportes?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Os filtros foram desenhados com a angulação e a textura ideais para o método V60, garantindo a fluidez da água. Podem ser usados em qualquer suporte cônico de tamanho compatível (modelo 02).</p>
          </div>
        </div>

      </div>
    </section>
  );
}
