export default function MetodoV60() {
  return (
    <section id="metodo-v60" className="w-full bg-[#F9F9F9] py-24 px-6 border-t border-[#EABEA9]/20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col">
          <h2 className="text-3xl font-serif text-[#1F5455] tracking-widest mb-4">A PRECISÃO DO V60</h2>
          <div className="w-16 h-1 bg-[#8FA98C] mb-8"></div>
          <p className="text-gray-600 mb-6 leading-relaxed text-justify">
            Reconhecido mundialmente pelo seu ângulo de 60 graus e ranhuras espirais, o método V60 não é apenas design — é engenharia fluida. Ele permite que a água flua na velocidade ideal, concedendo-lhe o controlo absoluto sobre o tempo de extração.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed text-justify">
            Mas a verdadeira diferença reside no <strong>papel</strong>. Os nossos filtros NAVIER são fabricados com especificações rigorosas para não reterem os óleos naturais do café, nem deixarem gosto residual de celulose. O resultado é uma xícara cristalina, onde todas as notas do grão brilham. Tudo isto integrado no nosso <strong>Kit Barista</strong>, pensado com uma estética <em>Nature-Tech</em> para ser a estrela da bancada da sua casa ou para o acompanhar de forma compacta numa viagem.
          </p>
          <div className="text-center md:text-left">
            <a href="#produtos" className="inline-block border border-[#1F5455] text-[#1F5455] px-8 py-3 uppercase tracking-wider text-xs font-semibold hover:bg-[#1F5455] hover:text-white transition-colors">
              Ver Kit e Filtros
            </a>
          </div>
        </div>
        
        {/* Bloco de Vídeo Vertical */}
        <div className="relative w-full max-w-sm mx-auto aspect-[9/16] rounded-md overflow-hidden shadow-xl border border-[#EABEA9]/40">
          <video
            src="/v60.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          ></video>
        </div>
      </div>
    </section>
  );
}