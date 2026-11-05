import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const siteUrl = "https://www.navierpremium.com.br";
const articlePath = "/novo-blog/notas-sensoriais-do-cafe";
const articleUrl = `${siteUrl}${articlePath}`;
const articleImage = "/degustacao-cafe.png";
const publishedAt = "2026-11-03T09:00:00-03:00";
const modifiedAt = "2026-11-03T09:00:00-03:00";

const articleTitle = "Notas Sensoriais do Café: Como Identificar Sabores e Aromas";

const articleDescription =
  "Entenda as notas sensoriais do café especial, descubra a diferença entre sabores achocolatados e frutados e aprenda a treinar seu paladar.";

export const metadata: Metadata = {
  // "absolute" evita acrescentar " | Navier" e estourar ~60 caracteres no Google
  title: { absolute: articleTitle },
  description: articleDescription,
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    siteName: "Navier",
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    publishedTime: publishedAt,
    modifiedTime: modifiedAt,
    authors: ["Fernando Garcia Diniz"],
    images: [
      {
        url: articleImage,
        width: 800,
        height: 500,
        alt: "Xícara de café especial ao lado de grãos torrados e notas de degustação",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: articleTitle,
    description: articleDescription,
    images: [articleImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: articleTitle,
  description: articleDescription,
  inLanguage: "pt-BR",
  datePublished: publishedAt,
  dateModified: modifiedAt,
  image: [`${siteUrl}${articleImage}`],
  author: {
    "@type": "Person",
    name: "Fernando Garcia Diniz",
    url: siteUrl,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": articleUrl,
  },
  publisher: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Navier",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/og-image.png`,
    },
  },
};

const faqs = [
  {
    question: "O café especial tem frutas ou chocolate adicionados?",
    answer:
      "Não necessariamente. Em cafés sem aromatização adicionada, " +
      "as notas sensoriais descrevem aromas e sabores que lembram " +
      "chocolate, frutas, flores ou outros alimentos. Essas percepções " +
      "surgem dos compostos do próprio café e das transformações " +
      "ocorridas durante a torra e o preparo.",
  },
  {
    question: "O que significa acidez no café especial?",
    answer:
      "A acidez sensorial é uma característica percebida na bebida, " +
      "que pode lembrar frutas cítricas, maçã ou outras frutas. " +
      "Ela pode trazer vivacidade e equilíbrio ao café e não deve " +
      "ser confundida automaticamente com amargor ou desconforto gástrico.",
  },
  {
    question: "Qual é a diferença entre corpo, aroma e sabor do café?",
    answer:
      "Aroma é o conjunto de sensações olfativas percebidas antes, " +
      "durante e depois de beber. Sabor é a experiência gustativa " +
      "integrada aos aromas percebidos retronasalmente. Corpo é a " +
      "sensação de peso e textura da bebida na boca.",
  },
  {
    question: "Como identificar notas de chocolate ou frutas no café?",
    answer:
      "Comece sentindo o aroma do café, prove a bebida quando estiver " +
      "em uma temperatura confortável e observe as sensações durante " +
      "e depois do gole. Compare o que percebe com referências " +
      "conhecidas, sem tentar adivinhar obrigatoriamente as notas do rótulo.",
  },
  {
    question: "Qual método de preparo destaca melhor as notas do café?",
    answer:
      "Depende do café e da receita. Métodos filtrados com papel " +
      "costumam produzir uma bebida mais limpa, enquanto métodos " +
      "por imersão ou pressão podem oferecer mais corpo e textura. " +
      "Nenhum método garante, sozinho, um perfil sensorial específico.",
  },
];

export default function NotasSensoriaisDoCafePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      <article className="max-w-3xl mx-auto py-24 px-6 bg-white font-sans">
        
        {/* Botão de retorno ao Blog no topo esquerdo */}
        <div className="mb-8">
          <Link 
            href="/novo-blog" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-navier-green hover:text-navier-sage transition-colors bg-navier-bg border border-navier-peach/40 px-4 py-2 rounded"
          >
            ← Voltar ao Blog
          </Link>
        </div>

        <header className="mb-12 text-center">
          <p className="text-navier-sage text-xs font-bold tracking-widest uppercase mb-4">
            Guia do Café
          </p>

          <h1 className="text-4xl md:text-5xl font-serif text-navier-green mb-6 leading-tight">
            {articleTitle}
          </h1>
          
          <div className="flex justify-center items-center gap-4 text-sm text-gray-500 mb-8">
            <span className="font-semibold text-navier-green">Por Fernando Garcia Diniz</span>
            <span>•</span>
            <time dateTime="2026-11-03">3 de novembro de 2026</time>
            <span>•</span>
            <span>Leitura Técnica</span>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed text-justify">
            Chocolate, caramelo, frutas vermelhas, limão siciliano.
            Se você já leu essas expressões no rótulo de um café
            especial, provavelmente ficou com uma dúvida: como uma
            bebida feita apenas com café e água pode apresentar
            tantas notas diferentes?
          </p>
        </header>

        <Image 
          priority
          src="/degustacao-cafe.png" 
          alt="Xícara de café especial ao lado de grãos torrados e notas de degustação" 
          width={800} 
          height={500} 
          className="w-full h-auto object-cover rounded-sm mb-12 shadow-sm"
        />

        <div className="text-gray-700 text-justify">
          <section aria-labelledby="resposta" className="mb-12">
            <h2 id="resposta" className="text-3xl font-serif text-navier-green mb-6">
              O que são notas sensoriais do café?
            </h2>
            <p className="mb-4">
              As <strong>notas sensoriais do café</strong> são descrições
              de aromas, sabores e sensações que lembram outros alimentos
              ou experiências sensoriais. Quando um rótulo menciona
              chocolate, caramelo ou frutas vermelhas, ele está indicando
              semelhanças percebidas durante a degustação, e não
              necessariamente ingredientes adicionados à bebida.
            </p>
            <p>
              Em outras palavras, você não precisa encontrar literalmente
              um pedaço de chocolate ou sentir o gosto de um suco de
              morango. A proposta é reconhecer semelhanças e descobrir
              quais características tornam aquele café interessante
              para o seu paladar.
            </p>
          </section>

          <section aria-labelledby="rotulo" className="mb-12">
            <h2 id="rotulo" className="text-3xl font-serif text-navier-green mb-6">
              Tem fruta no meu café? Como interpretar o rótulo
            </h2>
            <p className="mb-4">
              Em cafés sem aromatização adicionada, essas descrições
              normalmente se referem ao perfil sensorial da bebida.
              Durante o desenvolvimento do fruto, o processamento e,
              principalmente, as transformações químicas da torra,
              formam-se e modificam-se compostos que contribuem para
              aromas e sabores complexos.
            </p>
            <p>
              A expressão “notas de frutas vermelhas”, por exemplo,
              indica que certas sensações lembram frutas dessa família.
              Isso não significa que o café contenha morango ou framboesa
              adicionados.
            </p>
          </section>

          <section aria-labelledby="achocolatado" className="mb-12">
            <h2 id="achocolatado" className="text-3xl font-serif text-navier-green mb-6">
              Café com notas de chocolate, caramelo e castanhas
            </h2>
            <p className="mb-4">
              Você prefere um café com sensação doce, textura aveludada
              e notas que lembram chocolate ou castanhas? Esse conjunto
              de características pode ser um bom ponto de partida para
              explorar diferentes cafés especiais.
            </p>
            
            <h3 className="text-2xl font-serif text-navier-green mt-8 mb-4">O que você pode perceber na xícara?</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Chocolate:</strong> lembranças que podem variar entre cacau, chocolate amargo e chocolate ao leite.
              </li>
              <li>
                <strong>Caramelo:</strong> uma associação com açúcar caramelizado e notas doces e tostadas.
              </li>
              <li>
                <strong>Castanhas:</strong> referências que podem lembrar amêndoas, avelãs ou outras oleaginosas.
              </li>
              <li>
                <strong>Corpo:</strong> a sensação de peso, densidade e textura que a bebida apresenta na boca.
              </li>
            </ul>

            <h3 className="text-2xl font-serif text-navier-green mt-8 mb-4">Como preparar um café com mais corpo?</h3>
            <p>
              Se você gosta de uma bebida intensa e com textura marcante,
              vale experimentar métodos por imersão ou pressão, incluindo
              cafeteiras portáteis. Dependendo do equipamento, a bebida
              pode apresentar maior presença de óleos em comparação com um café filtrado em papel.
            </p>
          </section>

          <section aria-labelledby="frutado" className="mb-12">
            <h2 id="frutado" className="text-3xl font-serif text-navier-green mb-6">
              Café com acidez cítrica, frutas e notas florais
            </h2>
            <p className="mb-4">
              Outros cafés apresentam um perfil que pode lembrar limão
              siciliano, maçã, maracujá ou flores.
              Essas referências costumam aparecer em descrições de
              cafés com características sensoriais mais delicadas
              e vivacidade perceptível.
            </p>
            
            <h3 className="text-2xl font-serif text-navier-green mt-8 mb-4">O que significa acidez no café?</h3>
            <p>
              A acidez sensorial é uma característica importante. Em alguns cafés, ela pode lembrar
              frutas cítricas; em outros, maçã. Quando equilibrada, proporciona vivacidade.
              Essa percepção não deve ser confundida com amargor, defeitos de preparo ou desconforto gástrico.
            </p>
          </section>

          <section aria-labelledby="diferencas" className="mb-12">
            <h2 id="diferencas" className="text-3xl font-serif text-navier-green mb-6">
              Aroma, sabor, acidez e corpo
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-navier-green text-white">
                    <th scope="col" className="p-4 font-semibold text-sm">Característica</th>
                    <th scope="col" className="p-4 font-semibold text-sm">O que significa</th>
                    <th scope="col" className="p-4 font-semibold text-sm">Exemplo</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-200">
                    <th scope="row" className="p-4 font-medium text-gray-900">Aroma</th>
                    <td className="p-4">Sensações olfativas ao cheirar ou beber.</td>
                    <td className="p-4">Chocolate, flores ou frutas.</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th scope="row" className="p-4 font-medium text-gray-900">Sabor</th>
                    <td className="p-4">Experiência gustativa e retronasal integrada.</td>
                    <td className="p-4">Doçura percebida e lembrança de caramelo.</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th scope="row" className="p-4 font-medium text-gray-900">Acidez</th>
                    <td className="p-4">Sensação gustativa que traz vivacidade.</td>
                    <td className="p-4">Lembrança cítrica ou de maçã.</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th scope="row" className="p-4 font-medium text-gray-900">Corpo</th>
                    <td className="p-4">Sensação de peso e textura na boca.</td>
                    <td className="p-4">Bebida leve ou aveludada.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="paladar" className="mb-12">
            <h2 id="paladar" className="text-3xl font-serif text-navier-green mb-6">
              Como treinar o paladar em casa
            </h2>
            <p className="mb-4">
              Você não precisa ser barista. O mais importante é provar com atenção e construir referências.
            </p>
            <ul className="list-decimal pl-6 mb-6 space-y-3">
              <li><strong>Sinta o aroma antes de provar:</strong> Observe o aroma do pó seco e quando a água entra em contato.</li>
              <li><strong>Prove na temperatura certa:</strong> Deixe esfriar um pouco. A percepção sensorial muda.</li>
              <li><strong>Observe o aroma durante o gole:</strong> Parte da experiência acontece quando os compostos chegam ao nariz pelo fundo da boca.</li>
              <li><strong>Preste atenção à finalização:</strong> Depois de engolir, quais sensações permanecem?</li>
              <li><strong>Compare:</strong> Prepare dois cafés com receitas semelhantes e prove em sequência.</li>
            </ul>
          </section>

          <section aria-labelledby="faq" className="mb-12">
            <h2 id="faq" className="text-3xl font-serif text-navier-green mb-6">
              Perguntas frequentes
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group border border-gray-200 rounded-sm p-4 cursor-pointer">
                  <summary className="font-semibold text-navier-green list-none flex justify-between items-center">
                    {faq.question}
                    <span className="transition group-open:rotate-180 text-navier-peach">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
          
          <div className="border-t border-gray-200 pt-8 mt-12 mb-16 text-sm text-gray-500">
            <p><strong>Referência Científica:</strong> Specialty Coffee Association (SCA). <em>Coffee Taster's Flavor Wheel</em>. (Fundamentação baseada na padronização global de atributos sensoriais do café verde e torrado).</p>
          </div>
        </div>

        <aside aria-labelledby="cta-title" className="bg-navier-green p-8 md:p-12 text-center mt-12 shadow-lg">
          <h2 id="cta-title" className="text-2xl md:text-3xl font-serif text-white mb-4">
            Explore novas possibilidades na sua xícara
          </h2>
          <p className="text-navier-peach mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            Seja para extrair a máxima clareza e doçura de um café frutado ou encorpar notas de chocolate, o equipamento correto faz toda a diferença.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://www.mercadolivre.com.br/filtro-papel-japones-v60-02-branco-para-cafe--caixa-com-100/up/MLBU5688947390?pdp_filters=item_id:MLB7881561608"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navier-peach text-navier-green font-bold px-6 py-4 uppercase tracking-wider text-xs hover:bg-white transition-colors"
            >
              Filtros V60 Original
            </a>
            <a
              href="https://www.mercadolivre.com.br/cafeteira-portatil-manual-pressao-tipo-aeropress--filtros/up/MLBU5688554314?pdp_filters=item_id:MLB7881402892"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-navier-peach text-navier-peach font-bold px-6 py-4 uppercase tracking-wider text-xs hover:bg-navier-peach hover:text-navier-green transition-colors"
            >
              Prensa Manual Portátil
            </a>
          </div>
        </aside>
      </article>
    </>
  );
}
