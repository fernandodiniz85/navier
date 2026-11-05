export default function MetodoAeropress() {
  return (
    <section id="metodo-aeropress" className="w-full bg-[#FFFFFF] py-24 px-6 border-t border-[#EABEA9]/20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="relative w-full max-w-sm mx-auto aspect-[9/16] rounded-md overflow-hidden shadow-xl border border-[#8FA98C]/40 order-2 md:order-1">
          <video
            src="/aeropress.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          ></video>
        </div>

        <div className="flex flex-col order-1 md:order-2">
          <h2 className="text-3xl font-serif text-[#1F5455] tracking-widest mb-4">A VERSATILIDADE DA PRENSA MANUAL</h2>
          <div className="w-16 h-1 bg-[#EABEA9] mb-8"></div>
          <p className="text-gray-600 mb-6 leading-relaxed text-justify">
            Se o V60 é a leveza da gravidade, a prensa manual portátil é a força da pressão aerodinâmica. Este método revolucionário funde a imersão total do pó com uma extração rápida sob pressão. O que ganha com isto? Um café notavelmente encorpado, intenso, de baixíssima acidez e sem qualquer amargor.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed text-justify">
            Construída em material quase indestrutível, esta cafeteira é a escolha óbvia para quem se recusa a abdicar de um café de nível profissional, independentemente de onde a vida o levar. Seja na tranquilidade do seu escritório, num quarto de hotel antes de uma reunião ou no meio de um acampamento na montanha, este método assegura que o seu ritual se mantém intacto.
          </p>
          <div className="text-center md:text-left">
            <a href="#produtos" className="inline-block border border-[#1F5455] text-[#1F5455] px-8 py-3 uppercase tracking-wider text-xs font-semibold hover:bg-[#1F5455] hover:text-white transition-colors">
              Ver Prensa Manual
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}