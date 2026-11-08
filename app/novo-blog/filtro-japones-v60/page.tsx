import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const siteUrl = "https://www.navierpremium.com.br";
const articlePath = "/novo-blog/filtro-japones-v60";
const articleUrl = `${siteUrl}${articlePath}`;
const articleImage = "/filtro-v60-papel-japones.jpeg";
const publishedAt = "2026-11-08T09:00:00-03:00";
const modifiedAt = "2026-11-08T09:00:00-03:00";

const articleTitle =
  "Café com Gosto de Papel? Como o Filtro Japonês Salva a Sua Extração na V60";

const articleDescription =
  "Descubra por que o seu café especial pode estar com gosto de celulose e entenda como o filtro de papel japonês garante uma extração limpa e perfeita na V60.";

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
        alt: "Filtro de papel japonês Navier posicionado em suporte cônico V60 ao lado de café especial",
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
    question: "Por que o meu café coado fica com gosto de papel?",
    answer:
      "Filtros convencionais de supermercado possuem alta concentração de celulose pesada ou passam por tratamentos químicos agressivos. O contato com a água quente dissolve esses resíduos e os transfere diretamente para a bebida.",
  },
  {
    question: "Qual a diferença entre o filtro de papel japonês e o filtro comum?",
    answer:
      "O papel japonês de alta performance possui fibras refinadas de alta densidade, micro-rugosidades (crepagem) e porosidade uniforme. Isso garante neutralidade de sabor absoluta e um fluxo de água contínuo que evita o entupimento e o amargor.",
  },
  {
    question: "Preciso escaldar o filtro de papel japonês antes de passar o café?",
    answer:
      "Sim. Escaldar o filtro com água quente antes de adicionar o pó elimina eventuais micro-resíduos da fabricação e pré-aquece o suporte V60, mantendo a estabilidade térmica ideal durante a extração.",
  },
  {
    question: "O filtro Navier é compatível com o suporte Hario V60?",
    answer:
      "Sim. Os filtros de papel japonês da Navier possuem angulação de 60 graus e especificações exatas para encaixe perfeito em suportes cônicos V60 tamanho 02.",
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

export default function FiltroJaponesV60Page() {
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
            Técnica e Filtragem
          </p>

          <h1 className="text-4xl md:text-5xl font-serif text-navier-green mb-6 leading-tight">
            {articleTitle}
          </h1>

          <div className="flex justify-center items-center gap-4 text-sm text-gray-500 mb-8">
            <span className="font-semibold text-navier-green">
              Por Fernando Garcia Diniz
            </span>
            <span>•</span>
            <time dateTime="2026-11-08">8 de novembro de 2026</time>
            <span>•</span>
            <span>Leitura Técnica</span>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed text-left md:text-justify hyphens-auto mb-4">
            Você investe em um café especial incrível, recém-torrado, repleto de
            notas sensoriais complexas. Você pesa os grãos com precisão e faz a
            moagem perfeita. A água está na temperatura exata. Porém, ao dar o
            primeiro gole na xícara, uma surpresa desagradável: a bebida tem um
            retrogosto seco que lembra papelão molhado.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed text-left md:text-justify hyphens-auto mb-4">
            É uma dor real e incrivelmente comum. Muitos apaixonados por café
            culpam o grão, a temperatura ou até a própria técnica de despejo.
            Mas, na grande maioria das vezes, o grande vilão da sua extração é
            invisível e subestimado: o filtro de papel.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed text-left md:text-justify hyphens-auto">
            Para métodos cônicos de fluxo rápido, o material de filtragem não é
            apenas um acessório. Ele é o coração do processo. Hoje, você vai
            entender por que abandonar os filtros comuns de mercado e migrar
            para o papel japonês de alta performance é a melhor decisão que você
            pode tomar pelo seu café.
          </p>
        </header>

        <Image
          priority
          src={articleImage}
          alt="Filtro de papel japonês Navier posicionado em suporte cônico compatível com Hario V60 para extração limpa"
          width={800}
          height={500}
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full h-auto object-cover rounded-sm mb-12 shadow-sm"
        />

        <div className="text-gray-700 text-left md:text-justify hyphens-auto leading-relaxed [&_p]:mb-4">
          <section aria-labelledby="transferencia-sabor" className="mb-12">
            <h2
              id="transferencia-sabor"
              className="text-3xl font-serif text-navier-green mb-6"
            >
              O vilão invisível: a transferência de sabor
            </h2>
            <p>
              Filtros de papel convencionais, geralmente encontrados em
              supermercados, são fabricados com uma alta concentração de
              celulose pesada e, muitas vezes, passam por processos de
              branqueamento químicos agressivos ou não recebem tratamento algum
              (os famosos papéis pardos).
            </p>
            <p>
              Quando a água quente entra em contato com esse material, ela
              dissolve os resíduos da celulose e os carrega diretamente para a
              sua xícara. Em um café tradicional, extremamente torrado e amargo,
              esse gosto passa despercebido.
            </p>
            <p>
              Mas em um café especial, que possui uma acidez delicada e notas
              florais ou frutadas, o gosto de papel &ldquo;atropela&rdquo; e
              esconde todas as qualidades da bebida. O papel japonês, por outro
              lado, passa por um rigoroso processo de refinamento das fibras,
              garantindo uma neutralidade de sabor absoluta.
            </p>
          </section>

          <section aria-labelledby="engenharia-trama" className="mb-12">
            <h2
              id="engenharia-trama"
              className="text-3xl font-serif text-navier-green mb-6"
            >
              A engenharia da trama: controlando o tempo da água
            </h2>
            <p>
              Além do sabor residual, a principal diferença técnica está na
              textura e na porosidade do papel. Para tirar o máximo do seu
              suporte cônico Hario V60, o papel de alta performance Navier é
              essencial por conta da sua trama.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li>
                <strong>Fibras estruturadas:</strong> O papel japonês possui
                micro-rugosidades (crepagem) no lado externo. Isso evita que o
                papel grude totalmente nas paredes do suporte, permitindo a fuga
                do ar e um fluxo de água constante.
              </li>
              <li>
                <strong>Porosidade consistente:</strong> Em filtros baratos, os
                furos (poros) têm tamanhos irregulares. As partículas finas do
                café moído rapidamente entopem esses furos, criando uma
                &ldquo;lama&rdquo; no fundo.
              </li>
              <li>
                <strong>O risco do amargor:</strong> Quando o filtro entope, a
                água não desce. O café fica em contato com a água por muito mais
                tempo do que deveria (super-extração), resultando naquela bebida
                pesada, adstringente e amarga.
              </li>
            </ul>
          </section>

          <section aria-labelledby="comparativo-rapido" className="mb-12">
            <h2
              id="comparativo-rapido"
              className="text-3xl font-serif text-navier-green mb-6"
            >
              Comparativo Rápido: Papel Comum vs. Papel Japonês de Alta
              Performance
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-navier-green text-white">
                    <th scope="col" className="p-4 font-semibold text-sm">
                      Característica
                    </th>
                    <th scope="col" className="p-4 font-semibold text-sm">
                      Filtro de Supermercado
                    </th>
                    <th scope="col" className="p-4 font-semibold text-sm">
                      Filtro de Papel Japonês (Navier)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-200">
                    <th scope="row" className="p-4 font-medium text-gray-900">
                      Material Base
                    </th>
                    <td className="p-4">Celulose comum, tramas irregulares</td>
                    <td className="p-4">
                      Fibras refinadas de alta densidade
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th scope="row" className="p-4 font-medium text-gray-900">
                      Neutralidade de Sabor
                    </th>
                    <td className="p-4">
                      Baixa (transfere gosto de papel/papelão)
                    </td>
                    <td className="p-4">
                      Altíssima (100% livre de sabores residuais)
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th scope="row" className="p-4 font-medium text-gray-900">
                      Fluxo de Água
                    </th>
                    <td className="p-4">
                      Instável (tendência a travar/entupir)
                    </td>
                    <td className="p-4">
                      Contínuo e preciso (evita amargor)
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th scope="row" className="p-4 font-medium text-gray-900">
                      Extração de Óleos
                    </th>
                    <td className="p-4">
                      Retém óleos essenciais em excesso
                    </td>
                    <td className="p-4">
                      Permite a passagem de uma xícara limpa e brilhante
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="escaldar-filtro" className="mb-12">
            <h2
              id="escaldar-filtro"
              className="text-3xl font-serif text-navier-green mb-6"
            >
              O ritual obrigatório: escaldar o filtro
            </h2>
            <p>
              Mesmo utilizando o melhor filtro do mundo, existe um passo que um
              barista nunca pula: escaldar o papel.
            </p>
            <p>
              Antes de colocar o café moído no suporte, despeje um pouco de água
              quente por toda a extensão do filtro de papel japonês. Essa
              técnica simples cumpre duas funções cruciais na sua extração.
            </p>
            <p>
              Primeiro, ela elimina qualquer microscópico resíduo de poeira de
              celulose que tenha restado da fabricação. Segundo, ela pré-aquece
              o seu suporte V60, garantindo que a água da extração não perca
              temperatura ao tocar na cerâmica ou no acrílico frio, mantendo a
              estabilidade térmica ideal. Descarte essa água e, só então,
              adicione o café.
            </p>
            <p>
              Não permita que um papel de baixa qualidade destrua o trabalho de
              meses de um produtor de café especial. Elevar o nível do seu
              equipamento de filtragem é o caminho mais rápido e barato para uma
              xícara perfeita, limpa e vibrante.
            </p>
            <div className="p-5 bg-navier-bg border-l-4 border-navier-sage text-sm text-gray-700 my-6">
              <p className="mb-2">
                <strong>Teste Prático de Sensorial:</strong> Você já fez o teste
                de beber apenas a água quente que passou pelo seu filtro atual
                para sentir se ela tem gosto de papel? Faça essa experiência em
                casa!
              </p>
              <p className="mb-0">
                Para garantir extrações perfeitas, sem entupimentos e com fluxo
                contínuo, eleve o nível da sua bancada com os filtros de papel
                japonês de alta performance acessando{" "}
                <Link
                  href="/#produtos"
                  className="underline text-navier-green font-semibold"
                >
                  www.navierpremium.com.br
                </Link>
                .
              </p>
            </div>
          </section>

          <section aria-labelledby="faq" className="mb-12">
            <h2 id="faq" className="text-3xl font-serif text-navier-green mb-6">
              Perguntas frequentes
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border border-gray-200 rounded-sm p-4 cursor-pointer"
                >
                  <summary className="font-semibold text-navier-green list-none flex justify-between items-center">
                    {faq.question}
                    <span className="transition group-open:rotate-180 text-navier-peach">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed mb-0">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>

        <aside
          aria-labelledby="cta-title"
          className="bg-navier-green p-8 md:p-12 text-center mt-12 shadow-lg"
        >
          <h2
            id="cta-title"
            className="text-2xl md:text-3xl font-serif text-white mb-4"
          >
            Dê adeus ao gosto de papel na sua xícara
          </h2>
          <p className="text-navier-peach mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            Garanta uma extração limpa, brilhante e com fluxo contínuo. Equipe a
            sua bancada com os Filtros de Papel Japonês Navier, 100% compatíveis
            com suportes V60 tamanho 02.
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