export default function MetodoAeropress() {
  return (
    <section id="metodo-aeropress" className="w-full bg-white py-24 px-6 border-t border-navier-peach/20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="relative w-full max-w-sm mx-auto aspect-[9/16] rounded-md overflow-hidden shadow-xl border border-navier-sage/40 order-2 md:order-1">
          <video
            src="/aeropress.mp4"
            poster="/aeropress.jpeg"
            preload="metadata"
            aria-hidden="true"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          ></video>
        </div>

        <div className="flex flex-col order-1 md:order-2">
          <h2 className="text-3xl font-serif text-navier-green tracking-widest mb-4 uppercase">A Versatilidade da Prensa Manual</h2>
          <div className="w-16 h-1 bg-navier-peach mb-8"></div>
          <p className="text-gray-600 mb-6 leading-relaxed text-justify">
            Se o V60 é a leveza da gravidade, a prensa manual portátil é a força da pressão. O método combina a imersão do café com uma extração rápida sob pressão. O resultado é uma bebida encorpada e intensa, com menos acidez percebida.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed text-justify">
            Construída em material muito resistente, esta prensa é a escolha óbvia para quem se recusa a abdicar de um café de nível profissional, independentemente de onde a vida levar você. Seja na tranquilidade do seu escritório, num quarto de hotel antes de uma reunião ou no meio de um acampamento na montanha, este método mantém o seu ritual intacto.
          </p>
          <div className="text-center md:text-left">
            <a href="#produtos" className="inline-block border border-navier-green text-navier-green px-8 py-3 uppercase tracking-wider text-xs font-semibold hover:bg-navier-green hover:text-white transition-colors">
              Ver Prensa Manual
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
