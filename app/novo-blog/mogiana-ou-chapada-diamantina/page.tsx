import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const siteUrl = "https://www.navierpremium.com.br";
const articlePath = "/novo-blog/mogiana-ou-chapada-diamantina";
const articleUrl = `${siteUrl}${articlePath}`;
const articleImage = "/mogiana-chapada-cafe.png";
const publishedAt = "2026-11-08T10:00:00-03:00";
const modifiedAt = "2026-11-08T10:00:00-03:00";

const articleTitle = "Mogiana ou Chapada Diamantina? Como a Região Muda o Sabor do Seu Café";

const articleDescription =
  "Não sabe qual café especial escolher? Entenda as diferenças de sabor entre a doçura da Mogiana Paulista e a acidez frutada da Chapada Diamantina.";

export const metadata: Metadata = {
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
        alt: "Grãos de café especial comparando o terroir da Mogiana Paulista e da Chapada Diamantina",
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

const faqs = [
  {
    question: "Qual a principal diferença de sabor entre a Mogiana Paulista e a Chapada Diamantina?",
    answer:
      "A Mogiana Paulista destaca-se pela doçura marcante, corpo denso e notas intensas de chocolate, caramelo e nozes, com baixíssima acidez. Já a Chapada Diamantina surpreende com uma acidez cítrica brilhante, notas de frutas vermelhas, melaço, rapadura e um perfil mais elegante, que lembra chá.",
  },
  {
    question: "O que significa a palavra terroir no café especial?",
    answer:
      "Terroir representa a combinação única de solo, altitude, clima, índice de chuvas e o fator humano em uma determinada região produtora. Fatores como altitude e tipo de solo transformam diretamente os açúcares e compostos aromáticos da semente.",
  },
  {
    question: "Como a altitude influencia o sabor do café?",
    answer:
      "Quanto mais alto o café é plantado, mais frio é o clima. Isso faz com que o fruto amadureça de forma lenta, desenvolvendo maior complexidade de açúcares e acidez na semente.",
  },
  {
    question: "Qual o melhor método para preparar cafés da Chapada Diamantina?",
    answer:
      "Métodos de percolação limpa e translúcida, como o suporte cônico Hario V60 utilizando filtros de papel de alta performance Navier, são perfeitos para isolar a acidez brilhante e entregar uma xícara cristalina sem gosto de celulose.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${articleUrl}/#article`,
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
    },
    {
      "@type": "FAQPage",
      "@id": `${articleUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function MogianaOuChapadaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      <article className="max-w-3xl mx-auto py-24 px-6 bg-white font-sans">
        
        {/* Botão de retorno ao Journal no topo esquerdo */}
        <div className="mb-8">
          <Link 
            href="/novo-blog" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-navier-green hover:text-navier-sage transition-colors bg-navier-bg border border-navier-peach/40 px-4 py-2 rounded"
          >
            ← Voltar ao Journal
          </Link>
        </div>

        <header className="mb-12 text-center">
          <p className="text-navier-sage text-xs font-bold tracking-widest uppercase mb-4">
            Geografia do Café
          </p>

          <h1 className="text-4xl md:text-5xl font-serif text-navier-green mb-6 leading-tight">
            {articleTitle}
          </h1>
          
          <div className="flex justify-center items-center gap-4 text-sm text-gray-500 mb-8">
            <span className="font-semibold text-navier-green">Por Fernando Garcia Diniz</span>
            <span>•</span>
            <time dateTime="2026-11-08">8 de novembro de 2026</time>
            <span>•</span>
            <span>Leitura Técnica</span>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed text-justify mb-4">
            Você já comprou pacotes de cafés especiais caríssimos, de regiões produtoras diferentes, mas na hora de beber a sensação foi de que o sabor era praticamente igual? A frustração de investir em grãos de alta qualidade e não conseguir sentir as notas prometidas no rótulo é uma dor real para muitos iniciantes.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed text-justify mb-4">
            O problema nem sempre está no seu paladar. Muitas vezes, a dificuldade esbarra em não entender as características da região onde a planta cresceu e, principalmente, no uso de um método de extração que &quot;achata&quot; a personalidade do grão.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed text-justify">
            Hoje, você vai entender como a geografia transforma a sua xícara, comparando duas das regiões mais famosas do Brasil: a Mogiana Paulista e a Chapada Diamantina. E o mais importante: vai descobrir como extrair o verdadeiro potencial de cada uma delas.
          </p>
        </header>

        <Image 
          priority
          src={articleImage} 
          alt="Mapa visual e grãos de café representando o terroir da Mogiana Paulista e da Chapada Diamantina" 
          width={800} 
          height={500} 
          className="w-full h-auto object-cover rounded-sm mb-12 shadow-sm"
        />

        <div className="text-gray-700 text-justify">
          <section aria-labelledby="terroir" className="mb-12">
            <h2 id="terroir" className="text-3xl font-serif text-navier-green mb-6">
              O poder do Terroir: A terra dita o sabor
            </h2>
            <p className="mb-4">
              No mundo dos cafés especiais, a palavra francesa <em>terroir</em> (lê-se &quot;terroar&quot;) é a chave de tudo. Ela representa a combinação única de solo, altitude, clima, índice de chuvas e o trabalho humano em uma fazenda.
            </p>
            <p className="mb-4">
              A planta do café é extremamente sensível ao ambiente. Se você plantar a exata mesma semente de café em São Paulo e na Bahia, o resultado na xícara será completamente diferente.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>A regra da altitude:</strong> Quanto mais alto o café é plantado, mais frio é o clima. Isso faz o fruto amadurecer lentamente, desenvolvendo mais açúcares e acidez complexa.
              </li>
              <li>
                <strong>O papel do solo:</strong> Solos vulcânicos ou ricos em minerais específicos transferem características diretas para a formação dos óleos essenciais da semente.
              </li>
              <li>
                <strong>O processo pós-colheita:</strong> A forma como o fruto é seco ao sol também define se a bebida será mais frutada ou mais achocolatada.
              </li>
            </ul>
          </section>

          <section aria-labelledby="mogiana" className="mb-12">
            <h2 id="mogiana" className="text-3xl font-serif text-navier-green mb-6">
              Mogiana Paulista: O abraço quente e doce
            </h2>
            <p className="mb-4">
              A região da Mogiana, no interior de São Paulo, possui altitudes médias (em torno de 900 a 1.100 metros) e um clima com estações muito bem definidas. Historicamente, os produtores secam o café no método &quot;Natural&quot; (com a casca e a polpa intactas).
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>O Perfil Sensorial:</strong> É o clássico que o brasileiro ama. Cafés da Mogiana entregam uma doçura marcante, corpo denso (sensação licorosa) e notas intensas de chocolate, caramelo e nozes. A acidez é baixíssima.
              </li>
              <li>
                <strong>O Método Ideal:</strong> Esse perfil encorpado brilha muito quando preparado em uma <Link href="/#metodo-aeropress" className="underline text-navier-green font-semibold">cafeteira manual portátil de pressão</Link>. O sistema de imersão e pressão extrai todos os óleos e a doçura do grão, rendendo uma bebida rica, perfeita para começar o dia ou para acompanhar uma sobremesa.
              </li>
            </ul>
          </section>

          <section aria-labelledby="chapada" className="mb-12">
            <h2 id="chapada" className="text-3xl font-serif text-navier-green mb-6">
              Chapada Diamantina: A explosão frutada e cítrica
            </h2>
            <p className="mb-4">
              No coração da Bahia, a Chapada Diamantina oferece altitudes elevadas (muitas vezes acima de 1.300 metros) e um microclima único. As noites frias e os dias quentes estressam positivamente a planta, gerando frutos complexos.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>O Perfil Sensorial:</strong> Uma verdadeira quebra de paradigmas. Cafés da Chapada costumam apresentar uma acidez cítrica brilhante e agradável, notas de frutas vermelhas, rapadura, melaço e até flores. É um café elegante, que muitas vezes lembra um chá.
              </li>
              <li>
                <strong>O Método Ideal:</strong> Para não ofuscar essa complexidade, a extração precisa ser translúcida. O <Link href="/#metodo-v60" className="underline text-navier-green font-semibold">suporte cônico Hario V60</Link> é perfeito, mas há uma condição: o papel precisa ser impecável. Usar o <Link href="/#produtos" className="underline text-navier-green font-semibold">papel de alta performance Navier</Link> garante um fluxo de água veloz, isolando a acidez brilhante e entregando uma xícara limpa, onde as notas frutadas ficam cristalinas, sem gosto de celulose.
              </li>
            </ul>
          </section>

          <section aria-labelledby="tabela" className="mb-12">
            <h2 id="tabela" className="text-3xl font-serif text-navier-green mb-6">
              Tabela Comparativa: Mogiana vs. Chapada
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-navier-green text-white">
                    <th scope="col" className="p-4 font-semibold text-sm">Característica</th>
                    <th scope="col" className="p-4 font-semibold text-sm">Mogiana Paulista</th>
                    <th scope="col" className="p-4 font-semibold text-sm">Chapada Diamantina</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-200">
                    <th scope="row" className="p-4 font-medium text-gray-900">Altitude Média</th>
                    <td className="p-4">900m a 1.100m</td>
                    <td className="p-4">1.100m a 1.400m+</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th scope="row" className="p-4 font-medium text-gray-900">Perfil de Sabor</th>
                    <td className="p-4">Achocolatado, nozes e caramelo</td>
                    <td className="p-4">Frutado, floral e melaço</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th scope="row" className="p-4 font-medium text-gray-900">Acidez</th>
                    <td className="p-4">Baixa e suave</td>
                    <td className="p-4">Brilhante e cítrica</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th scope="row" className="p-4 font-medium text-gray-900">Corpo (Sensação)</th>
                    <td className="p-4">Denso, cremoso e licoroso</td>
                    <td className="p-4">Sedoso, limpo e elegante</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th scope="row" className="p-4 font-medium text-gray-900">Equipamento Ideal</th>
                    <td className="p-4">Cilindro de extração manual</td>
                    <td className="p-4">Suporte cônico com papel japonês</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="conclusao" className="mb-12">
            <h2 id="conclusao" className="text-3xl font-serif text-navier-green mb-6">
              Conclusão e Próximos Passos
            </h2>
            <p className="mb-4">
              A beleza do café especial está justamente nessa diversidade. Você pode viajar o Brasil inteiro sem sair da sua cozinha, apenas variando os grãos e os equipamentos que utiliza.
            </p>
            <p>
              O segredo para não tomar cafés com &quot;gostos iguais&quot; é respeitar o <em>terroir</em> de cada grão, escolhendo ferramentas que realcem suas melhores virtudes, em vez de escondê-las.
            </p>
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
        </div>

        {/* CTA Comercial Inferior */}
        <aside aria-labelledby="cta-title" className="bg-navier-green p-8 md:p-12 text-center mt-12 shadow-lg">
          <h2 id="cta-title" className="text-2xl md:text-3xl font-serif text-white mb-4">
            Valorize o Terroir na sua Xícara
          </h2>
          <p className="text-navier-peach mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            Para tirar o máximo de sabor de qualquer região do Brasil, seja garantindo um café encorpado ou uma filtragem cristalina, equipe o seu cantinho do café com nossos filtros de papel japonês e métodos de extração portáteis.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://www.mercadolivre.com.br/filtro-papel-japones-v60-02-branco-para-cafe--caixa-com-100/up/MLBU5688947390?pdp_filters=item_id:MLB7881561608"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navier-peach text-navier-green font-bold px-6 py-4 uppercase tracking-wider text-xs hover:bg-white transition-colors"
            >
              Filtros V60 Navier
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