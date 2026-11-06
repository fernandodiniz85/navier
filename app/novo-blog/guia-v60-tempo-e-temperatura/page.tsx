import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const siteUrl = "https://www.navierpremium.com.br";
const articlePath = "/novo-blog/guia-v60-tempo-e-temperatura";
const articleUrl = `${siteUrl}${articlePath}`;
const articleImage = "/v60.mp4"; // Usando a referência visual do V60 que já tem, ou pode trocar por um .jpg depois
const publishedAt = "2026-11-05T09:00:00-03:00";
const modifiedAt = "2026-11-05T09:00:00-03:00";

const articleTitle = "Guia Prático da V60: Domine o Tempo e Dê Adeus ao Café Amargo";

const articleDescription =
  "Descubra como controlar o tempo de extração, a temperatura da água e a qualidade do filtro para evitar o amargor no método cônico V60.";

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
        url: "/kit.jpg",
        width: 800,
        height: 500,
        alt: "Preparo de café especial no método V60 com chaleira de bico fino",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: articleTitle,
    description: articleDescription,
    images: ["/kit.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question: "Qual a temperatura ideal da água para a V60?",
    answer:
      "Para cafés especiais de torra média ou clara, busque temperaturas entre 90°C e 96°C. Água muito quente dissolve as substâncias de forma agressiva, gerando amargor. Se não tiver um termômetro, ferva a água e aguarde cerca de 45 segundos antes de despejar.",
  },
  {
    question: "Quanto tempo deve demorar a extração na V60?",
    answer:
      "O tempo ideal desde o primeiro contato da água até a última gota costuma ficar entre 2 minutos e 30 segundos a 3 minutos e 30 segundos (para preparos de até 300ml). Tempos muito longos causam super-extração (amargor).",
  },
  {
    question: "Por que meu café está demorando muito para coar?",
    answer:
      "Os dois motivos principais são: moagem muito fina, que cria uma lama e entope o fluxo, ou o uso de filtros de papel de baixa qualidade, que soltam resíduos de celulose e travam as ranhuras do suporte.",
  },
  {
    question: "Posso usar água fervendo direto no pó de café?",
    answer:
      "Não é recomendado. A água a 100°C possui muita energia e extrai rapidamente os compostos finais do café, que são os responsáveis pela adstringência e amargor intenso.",
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
      image: [`${siteUrl}/kit.jpg`],
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

export default function GuiaV60Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      <article className="max-w-3xl mx-auto py-24 px-6 bg-white font-sans">
        
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
            Técnica e Precisão
          </p>

          <h1 className="text-4xl md:text-5xl font-serif text-navier-green mb-6 leading-tight">
            {articleTitle}
          </h1>
          
          <div className="flex justify-center items-center gap-4 text-sm text-gray-500 mb-8">
            <span className="font-semibold text-navier-green">Por Fernando Garcia Diniz</span>
            <span>•</span>
            <time dateTime="2026-11-05">5 de novembro de 2026</time>
            <span>•</span>
            <span>Prática de Barista</span>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed text-left md:text-justify hyphens-auto">
            O balde de água fria (ou melhor, fervendo). Você investe em um pacote de café especial incrível, recém-torrado, com notas prometidas de caramelo e frutas vermelhas. Chega em casa, prepara no método cônico tradicional (como o popular Hario V60) e, ao dar o primeiro gole, uma decepção: a bebida está adstringente e com aquele amargor intenso que trava a língua.
          </p>
        </header>

        {/* Mantivemos a imagem do kit como capa genérica para ilustrar. Pode alterar depois. */}
        <Image 
          priority
          src="/kit.jpg" 
          alt="Preparo de café filtrado na V60 com equipamentos Navier" 
          width={800} 
          height={500} 
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full h-auto object-cover rounded-sm mb-12 shadow-sm"
        />

        <div className="text-gray-700 text-left md:text-justify hyphens-auto leading-relaxed [&_p]:mb-4">
          <section aria-labelledby="culpa" className="mb-12">
            <h2 id="culpa" className="text-3xl font-serif text-navier-green mb-6">
              A culpa não é do grão: entenda a super-extração
            </h2>
            <p>
              É frustrante, mas acredite: o problema raramente está no café. O que aconteceu na sua xícara foi um erro clássico de super-extração. A água é um solvente poderoso. Durante o preparo, ela extrai primeiro a acidez e as notas frutadas, depois a doçura e o corpo e, por último, o amargor e a adstringência (aquela sensação de secura na boca).
            </p>
            <p>
              O segredo para uma xícara perfeita, especialmente em um método de fluxo contínuo e ranhuras espirais, é saber exatamente a hora de parar. E para isso, você precisa dominar duas variáveis: a <strong>temperatura da água</strong> e o <strong>tempo de extração</strong>.
            </p>
          </section>

          <section aria-labelledby="temperatura" className="mb-12">
            <h2 id="temperatura" className="text-3xl font-serif text-navier-green mb-6">
              A Temperatura: O mito da água fervendo
            </h2>
            <p>
              Existe um conselho antigo que diz: "nunca deixe a água do café ferver, senão você queima o pó". A verdade científica não é exatamente sobre "queimar", mas sim sobre a energia térmica da água.
            </p>
            <p>
              Água muito quente dissolve as substâncias de forma agressiva e descontrolada. Se você jogar água borbulhando (a 100°C) no seu café, ela vai extrair rapidamente aqueles compostos finais que queríamos deixar no filtro. Por outro lado, água morna demais não tem energia suficiente para dissolver a doçura natural do grão, resultando em um café ralo, sem corpo e com uma acidez agressiva (sub-extração).
            </p>
            
            <h3 className="text-2xl font-serif text-navier-green mt-8 mb-4">Como encontrar o ponto perfeito</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>A zona ideal:</strong> Para cafés especiais de torra média ou clara, busque temperaturas entre 90°C e 96°C.
              </li>
              <li>
                <strong>O truque simples:</strong> Se você não tem uma chaleira com termômetro, basta ferver a água, desligar o fogo e esperar cerca de 45 a 60 segundos antes de despejar. Isso trará a temperatura para a margem ideal.
              </li>
            </ul>
          </section>

          <section aria-labelledby="tempo" className="mb-12">
            <h2 id="tempo" className="text-3xl font-serif text-navier-green mb-6">
              O Tempo de Extração: O relógio é o seu melhor amigo
            </h2>
            <p>
              Em um método cônico de 60 graus, o tempo ideal para finalizar todo o processo — desde o primeiro contato da água até a última gota cair — geralmente fica entre 2 minutos e 30 segundos a 3 minutos e 30 segundos (para preparos padrão de 250ml a 300ml).
            </p>
            <p>
              Se o seu café demorou 5 minutos para coar, ele passou tempo demais em contato com a água e inevitavelmente ficará amargo. Se coou em apenas 1 minuto, a água passou direto e a bebida ficará aguada. Mas como controlar esse tempo se a gravidade é quem manda? Aqui entram dois fatores cruciais: a granulometria e o seu filtro.
            </p>
          </section>

          <section aria-labelledby="fatores" className="mb-12">
            <h2 id="fatores" className="text-3xl font-serif text-navier-green mb-6">
              Por que a água trava?
            </h2>
            <div className="mb-6 rounded bg-navier-bg border border-navier-peach/40 p-6">
              <h3 className="mb-3 font-serif text-lg text-navier-green font-bold">1. A Granulometria (Tamanho do pó)</h3>
              <p className="text-sm text-gray-600 mb-4">
                Se a água está demorando muito para descer, o seu café está moído fino demais. O pó fino cria uma barreira (lama) que entope o fluxo de saída. A solução é engrossar a moagem no seu moedor manual no próximo preparo.
              </p>
              
              <h3 className="mb-3 font-serif text-lg text-navier-green font-bold">2. A Qualidade do Filtro (O Erro Invisível)</h3>
              <p className="text-sm text-gray-600">
                Esse é o erro mais comum. Filtros de papel convencionais soltam resíduos de celulose que entopem as ranhuras do suporte, travando a passagem da água e estragando todo o seu controle de tempo. Usar um papel de alta performance, desenhado especificamente para suportes V60, garante um fluxo contínuo e limpo, essencial para extrair o melhor perfil sensorial.
              </p>
            </div>
          </section>

          <section aria-labelledby="passo-a-passo" className="mb-12">
            <h2 id="passo-a-passo" className="text-3xl font-serif text-navier-green mb-6">
              Passo a passo prático para a extração perfeita
            </h2>
            <p className="mb-4">
              Para amarrar o tempo e a temperatura de forma prática, siga este ritual de barista:
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-3">
              <li><strong>Escalde o filtro:</strong> Antes de colocar o café, jogue um pouco de água quente pelo papel. Isso tira qualquer gosto residual e já pré-aquece o suporte. Descarte essa água.</li>
              <li><strong>Faça o Bloom (Pré-infusão):</strong> Despeje o dobro do peso de água em relação ao café (ex: 30g de água para 15g de pó) e aguarde 30 a 40 segundos para liberar os gases da torra.</li>
              <li><strong>Despejo em espirais:</strong> Com a sua chaleira, faça movimentos circulares lentos e controlados, do centro para as bordas. Mantenha o nível da água constante até atingir o peso final.</li>
              <li><strong>Observe o relógio:</strong> A última gota deve cair perto dos 3 minutos. Se o sabor ficou amargo, engrosse a moagem da próxima vez. Se ficou aguado, afine.</li>
            </ol>
          </section>

          <section aria-labelledby="faq" className="mb-12">
            <h2 id="faq" className="text-3xl font-serif text-navier-green mb-6">
              Dúvidas Rápidas (FAQ)
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

        <aside aria-labelledby="cta-title" className="bg-navier-green p-8 md:p-12 text-center mt-12 shadow-lg">
          <h2 id="cta-title" className="text-2xl md:text-3xl font-serif text-white mb-4">
            O fluxo perfeito exige o equipamento certo
          </h2>
          <p className="text-navier-peach mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            Para garantir extrações exatas, sem entupimentos e sem amargor, equipe a sua bancada com os Filtros Navier, 100% compatíveis com suportes V60 (tamanho 02).
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
              href="https://www.mercadolivre.com.br/pagina/navier_premium"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-navier-peach text-navier-peach font-bold px-6 py-4 uppercase tracking-wider text-xs hover:bg-navier-peach hover:text-navier-green transition-colors"
            >
              Conhecer Kit Completo
            </a>
          </div>
        </aside>
      </article>
    </>
  );
}