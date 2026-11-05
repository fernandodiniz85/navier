import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const siteUrl = "https://www.navierpremium.com.br";
const articlePath = "/novo-blog/cafe-em-graos-ou-moido";
const articleUrl = `${siteUrl}${articlePath}`;
const articleImage = "/moagem-cafe.jpeg";
const publishedAt = "2026-11-03T09:00:00-03:00";
const modifiedAt = "2026-11-03T09:00:00-03:00";

const articleTitle = "Café em Grãos ou Moído: Por Que Moer na Hora Faz Diferença?";

const articleDescription =
  "Descubra por que moer café na hora preserva melhor os aromas, como o frescor influencia a extração e como preparar um café melhor em casa ou durante viagens.";

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
        alt: "Grãos de café recém-torrados sendo moídos manualmente ao lado de um método de extração filtrado",
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
    question: "Café em grãos é melhor do que café moído?",
    answer:
      "Para quem busca preservar o frescor e os aromas, o café em " +
      "grãos costuma ser a melhor escolha, desde que seja armazenado " +
      "adequadamente e moído próximo ao preparo. O café já moído " +
      "continua sendo uma opção prática e pode produzir uma ótima bebida.",
  },
  {
    question: "Quanto tempo o café moído conserva o sabor?",
    answer:
      "Não existe um prazo universal. A velocidade de perda do frescor " +
      "depende do tempo desde a torra, da embalagem, da exposição ao " +
      "oxigênio, da temperatura, da umidade e das condições de armazenamento. " +
      "Por isso, é recomendável moer apenas a quantidade necessária para cada preparo.",
  },
  {
    question: "Por que o café fresco faz espuma quando recebe água quente?",
    answer:
      "No preparo filtrado, o fenômeno conhecido como bloom ocorre, em " +
      "grande parte, pela liberação do dióxido de carbono retido no café " +
      "após a torra. A intensidade varia conforme o frescor, a torra, " +
      "a moagem e o método de preparo.",
  },
  {
    question: "Preciso de um moedor para preparar café especial?",
    answer:
      "Não. É possível preparar um excelente café usando pó comprado " +
      "pronto para o método escolhido. Um moedor oferece mais controle " +
      "sobre o frescor e a granulometria, sendo um investimento interessante " +
      "para quem deseja experimentar e aperfeiçoar a extração.",
  },
  {
    question: "Como conservar o café moído por mais tempo?",
    answer:
      "Mantenha o café bem vedado, em local fresco, seco e protegido " +
      "da luz, do calor e de odores fortes. Evite abrir a embalagem " +
      "desnecessariamente e retire apenas a quantidade que será utilizada.",
  },
];

export default function CafeEmGraosOuMoidoPage() {
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
            Você já comprou um café especial, sentiu aquele aroma
            irresistível ao abrir a embalagem e, dias depois, percebeu
            que a bebida parecia ter perdido parte da sua personalidade?
            A explicação começa em algo simples: o que acontece quando
            você mói o café.
          </p>
        </header>

        <Image 
          priority
          src="/moagem-cafe.jpeg" 
          alt="Grãos de café recém-torrados sendo moídos manualmente ao lado de um método de extração filtrado" 
          width={800} 
          height={500} 
          className="w-full h-auto object-cover rounded-sm mb-12 shadow-sm"
        />

        <div className="text-gray-700 text-justify">
          <section aria-labelledby="resposta-direta" className="mb-12">
            <h2 id="resposta-direta" className="text-3xl font-serif text-navier-green mb-6">
              Café em grãos ou moído: qual é a melhor opção?
            </h2>
            <p className="mb-4">
              Para preservar melhor os aromas e o frescor, geralmente vale
              a pena comprar <strong>café em grãos e moê-lo pouco antes do preparo</strong>.
              Quando o grão é moído, sua superfície de contato com o ambiente
              aumenta, facilitando a liberação de compostos aromáticos e
              acelerando as mudanças químicas associadas à perda de frescor.
            </p>
            <p>
              Isso não significa que o café previamente moído seja ruim.
              Ele oferece praticidade e pode proporcionar uma ótima bebida.
              A diferença está no controle sobre o frescor, a granulometria
              e o momento da moagem.
            </p>
          </section>

          <section aria-labelledby="aroma" className="mb-12">
            <h2 id="aroma" className="text-3xl font-serif text-navier-green mb-6">
              Por que o café moído perde o aroma mais rapidamente?
            </h2>
            <p className="mb-4">
              A resposta envolve a <strong>perda de compostos voláteis,
              a exposição ao oxigênio e outras transformações químicas</strong>{" "}
              que ocorrem durante o envelhecimento do café torrado.
              A moagem acelera esse processo porque rompe a estrutura
              do grão e expõe uma área exponencialmente maior ao ambiente.
            </p>
            
            <h3 className="text-2xl font-serif text-navier-green mt-8 mb-4">O que acontece dentro do grão durante a moagem?</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Maior superfície de contato:</strong> mais áreas do café ficam expostas ao ar.
              </li>
              <li>
                <strong>Liberação de aromas:</strong> compostos voláteis começam a se dissipar nos primeiros minutos após a moagem.
              </li>
              <li>
                <strong>Oxidação:</strong> a exposição ao oxigênio favorece reações que alteram o perfil sensorial da bebida.
              </li>
              <li>
                <strong>Desgaseificação:</strong> o dióxido de carbono retido no café torrado é liberado gradualmente.
              </li>
            </ul>
          </section>

          <section aria-labelledby="bloom" className="mb-12">
            <h2 id="bloom" className="text-3xl font-serif text-navier-green mb-6">
              O que é bloom e por que o frescor influencia a extração?
            </h2>
            <p className="mb-4">
              Se você prepara café em métodos filtrados, como o V60,
              talvez já tenha observado o pó inchar e formar pequenas
              bolhas quando recebe a primeira quantidade de água quente.
              Esse fenômeno é conhecido como <em>bloom</em>, ou pré-infusão.
            </p>
            <p>
              Durante a torra, o café acumula dióxido de carbono. Quando entra em contato com a água, parte desse gás é liberada. A pré-infusão ajuda a umedecer o leito de café e permite a liberação inicial do gás, preparando a estrutura para uma extração mais uniforme.
            </p>
          </section>

          <section aria-labelledby="graos-ou-po" className="mb-12">
            <h2 id="graos-ou-po" className="text-3xl font-serif text-navier-green mb-6">
              Café em grãos ou café moído: qual vale mais a pena?
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-navier-green text-white">
                    <th scope="col" className="p-4 font-semibold text-sm">Critério</th>
                    <th scope="col" className="p-4 font-semibold text-sm">Café em grãos</th>
                    <th scope="col" className="p-4 font-semibold text-sm">Café moído</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-200">
                    <th scope="row" className="p-4 font-medium text-gray-900">Preservação dos aromas</th>
                    <td className="p-4">Geralmente melhor até o momento da moagem.</td>
                    <td className="p-4">Os aromas se dissipam mais rapidamente após a moagem.</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th scope="row" className="p-4 font-medium text-gray-900">Controle da granulometria</th>
                    <td className="p-4">Permite ajustar a moagem a diferentes métodos.</td>
                    <td className="p-4">Depende da granulometria escolhida na compra.</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
            <p><strong>Referência Científica:</strong> Illy, A., & Viani, R. (2005). <em>Espresso Coffee: The Science of Quality</em>. Academic Press. (Fundamentação sobre a desgaseificação e a perda acelerada de compostos voláteis após a fragmentação do grão).</p>
          </div>
        </div>

        <aside aria-labelledby="cta-title" className="bg-navier-green p-8 md:p-12 text-center mt-12 shadow-lg">
          <h2 id="cta-title" className="text-2xl md:text-3xl font-serif text-white mb-4">
            Leve sua experiência para o próximo nível
          </h2>
          <p className="text-navier-peach mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            Seja para extrair o máximo do método V60 em casa ou garantir uma bebida encorpada em viagens, a granulometria correta e o equipamento adequado são fundamentais.
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