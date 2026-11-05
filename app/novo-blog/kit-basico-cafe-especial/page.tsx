import type { Metadata } from "next";
import Link from 'next/link';
import Image from "next/image";

const siteUrl = "https://www.navierpremium.com.br";
const articlePath = "/novo-blog/kit-basico-cafe-especial";
const articleUrl = `${siteUrl}${articlePath}`;

const articleTitle =
  "O Que Comprar para Começar no Café Especial? Kit Básico e Econômico";

const articleDescription =
  "Descubra quais equipamentos comprar para fazer café especial em casa sem gastar muito. Compare V60, prensa manual, moedor e acessórios essenciais.";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    siteName: "Navier Premium",
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
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
  author: {
    "@type": "Person",
    name: "Fernando Garcia Diniz"
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": articleUrl,
  },
  publisher: {
    "@type": "Organization",
    name: "Navier Premium",
    url: siteUrl,
  },
};

const faqItems = [
  {
    question: "O que preciso comprar para começar no café especial?",
    answer:
      "Você pode começar com um método de preparo manual, como o V60 ou uma prensa manual, café de boa qualidade e uma balança digital simples. Um moedor manual é um investimento útil, mas o café pré-moído de boa procedência também pode servir para começar.",
  },
  {
    question: "Qual é o equipamento mais importante para fazer café em casa?",
    answer:
      "Não existe um único equipamento indispensável para todos. O método de preparo determina como você fará o café, enquanto uma balança ajuda a repetir a receita. Um bom moedor permite controlar a granulometria e moer o café perto do preparo.",
  },
  {
    question: "É melhor começar com uma V60 ou uma prensa manual?",
    answer:
      "A V60 é uma boa escolha para quem gosta de café filtrado e quer aprender a controlar a extração. Uma prensa manual é prática, compacta e versátil, inclusive para viagens. A melhor escolha depende do perfil de bebida e da rotina que você prefere.",
  },
  {
    question: "Preciso de uma chaleira de bico fino para fazer café especial?",
    answer:
      "Não. Uma chaleira comum pode funcionar no início, desde que você consiga despejar a água com cuidado. O bico fino facilita o controle do fluxo, principalmente no preparo com V60, mas é um aprimoramento, não uma exigência.",
  },
  {
    question: "Filtros de papel diferentes mudam o resultado do café?",
    answer:
      "Sim. A espessura, a estrutura e a permeabilidade do papel podem influenciar o fluxo da água e o tempo de extração. Use filtros compatíveis com o seu método e, se perceber sabor residual de papel, experimente enxaguar o filtro com água quente antes de preparar o café.",
  },
  {
    question: "Qual é uma boa proporção de café e água para começar?",
    answer:
      "Uma referência inicial é usar 15 g de café para 250 ml de água, uma proporção aproximada de 1:16,7. Ajuste a receita conforme o método, o café e sua preferência de intensidade.",
  },
];

export default function KitBasicoCafeEspecialPage() {
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
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1F5455] hover:text-[#8FA98C] transition-colors bg-[#F9F9F9] border border-[#EABEA9]/40 px-4 py-2 rounded"
          >
            ← Voltar ao Journal
          </Link>
        </div>

        <header className="mb-12 text-center">
          <p className="text-[#8FA98C] text-xs font-bold tracking-widest uppercase mb-4">
            Guia para Iniciantes
          </p>

          <h1 className="text-4xl md:text-5xl font-serif text-[#1F5455] mb-6 leading-tight">
            {articleTitle}
          </h1>
          
          <div className="flex justify-center items-center gap-4 text-sm text-gray-500 mb-8">
            <span className="font-semibold text-[#1F5455]">Por Fernando Garcia Diniz</span>
            <span>•</span>
            <span>Leitura Técnica</span>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed text-justify">
            Você não precisa de uma máquina cara para preparar um ótimo café em
            casa. Com um método manual, café de qualidade e alguns acessórios
            bem escolhidos, é possível começar com simplicidade e evoluir aos
            poucos.
          </p>
        </header>

        {/* Imagem de Destaque */}
        <Image 
          src="/kit-cafe.jpeg" 
          alt="Kit básico de equipamentos e acessórios para preparo de café especial em casa" 
          width={800} 
          height={500} 
          className="w-full h-auto object-cover rounded-sm mb-12 shadow-sm"
        />

        {/* Sumário / Índice estilizado */}
        <nav
          aria-label="Neste artigo"
          className="mb-12 rounded bg-[#F9F9F9] border border-[#EABEA9]/30 p-6"
        >
          <p className="mb-4 font-serif text-[#1F5455] text-base font-semibold">Neste artigo</p>
          <ul className="list-inside list-disc space-y-2 text-sm text-gray-600">
            <li><a href="#por-onde-comecar" className="hover:text-[#1F5455] transition-colors">Por onde começar</a></li>
            <li><a href="#moedor" className="hover:text-[#1F5455] transition-colors">Moedor de café</a></li>
            <li><a href="#metodo" className="hover:text-[#1F5455] transition-colors">Escolhendo o método de preparo</a></li>
            <li><a href="#filtros" className="hover:text-[#1F5455] transition-colors">Filtros de papel</a></li>
            <li><a href="#balanca" className="hover:text-[#1F5455] transition-colors">Balança digital</a></li>
            <li><a href="#chaleira" className="hover:text-[#1F5455] transition-colors">Chaleira de bico fino</a></li>
            <li><a href="#receita" className="hover:text-[#1F5455] transition-colors">Receita para começar</a></li>
            <li><a href="#faq" className="hover:text-[#1F5455] transition-colors">Perguntas frequentes</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none text-gray-700 text-justify">
          <section id="por-onde-comecar" className="mb-12">
            <h2 className="text-3xl font-serif text-[#1F5455] mb-6">
              Você não precisa de equipamentos caros
            </h2>

            <p className="mb-4">
              Quem começa a pesquisar sobre cafés especiais encontra máquinas de
              espresso sofisticadas, moedores elétricos e acessórios que podem
              custar bastante. Isso pode dar a impressão de que preparar café de
              qualidade em casa exige um investimento elevado.
            </p>

            <p className="mb-4">
              Na prática, o resultado depende de um conjunto de fatores: qualidade
              e frescor do café, água adequada, moagem, proporção entre café e
              água, temperatura e técnica de preparo.
            </p>

            <p className="mb-4">
              A melhor estratégia é montar um kit enxuto, aprender a utilizá-lo e
              investir em novos acessórios somente quando eles resolverem uma
              necessidade real.
            </p>

            <p className="mb-3 font-semibold text-[#1F5455]">
              Para começar, priorize estes itens:
            </p>

            <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-600">
              <li>Um método de preparo manual.</li>
              <li>Café de boa qualidade, adequado ao método escolhido.</li>
              <li>Uma balança digital que meça em gramas.</li>
              <li>Um moedor manual, se couber no orçamento.</li>
              <li>Filtros compatíveis, quando o método utilizar papel.</li>
            </ol>

            <p className="mt-4">
              A chaleira de bico fino e outros acessórios podem ficar para uma
              segunda etapa. O importante é começar com o que você consegue usar
              de maneira consistente.
            </p>
          </section>

          <section id="moedor" className="mb-12">
            <h2 className="text-3xl font-serif text-[#1F5455] mb-6">
              1. Moedor manual: mais controle sobre a moagem
            </h2>

            <p className="mb-4">
              Moer o café pouco antes do preparo ajuda a preservar seus aromas.
              Depois que os grãos são moídos, a maior área de contato com o ar
              acelera a perda de compostos aromáticos voláteis.
            </p>

            <p className="mb-4">
              Um moedor manual de boa qualidade costuma ser uma alternativa
              econômica aos modelos elétricos. Ele também ocupa pouco espaço e
              pode acompanhar você em viagens.
            </p>

            <p className="mb-4">
              Ao escolher, observe a estabilidade do mecanismo, a consistência
              das partículas, a facilidade de ajuste e a disponibilidade de peças
              ou manutenção. As mós podem ser de cerâmica ou de aço; o material,
              isoladamente, não determina a qualidade da moagem.
            </p>

            <p className="p-4 bg-[#F9F9F9] border-l-4 border-[#8FA98C] text-sm leading-relaxed text-gray-600">
              <strong>Dica econômica:</strong> se o orçamento estiver muito
              limitado, comece com café recém-torrado de um fornecedor confiável,
              moído próximo da data de consumo. Você poderá investir no moedor
              depois, sem precisar adiar o início.
            </p>
          </section>

          <section id="metodo" className="mb-12">
            <h2 className="text-3xl font-serif text-[#1F5455] mb-6">
              2. Escolha um método de preparo que combine com você
            </h2>

            <p className="mb-6">
              Dois caminhos interessantes para iniciantes são o café filtrado
              no V60 e as cafeteiras manuais de pressão. Ambos dispensam uma
              máquina elétrica, mas oferecem experiências diferentes.
            </p>

            <h3 className="text-2xl font-serif text-[#1F5455] mt-8 mb-4">
              Hario V60: para quem gosta de café filtrado
            </h3>

            <p className="mb-4">
              O <strong>V60</strong> é um suporte de preparo por percolação:
              a água atravessa o café moído e o filtro de papel por ação da
              gravidade. Seu formato cônico e suas ranhuras influenciam o fluxo,
              mas a moagem, a quantidade de água e a forma de despejá-la também
              são importantes.
            </p>

            <h3 className="text-2xl font-serif text-[#1F5455] mt-8 mb-4">
              Prensa Manual Portátil: praticidade e versatilidade
            </h3>

            <p className="mb-6">
              Uma cafeteira portátil de pressão combina imersão e pressão manual,
              permitindo testar diferentes proporções, moagens e tempos de preparo.
              Conheça os equipamentos disponíveis na nossa{" "}
              <a
                href="https://www.mercadolivre.com.br/pagina/navier_premium"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#1F5455] font-semibold"
              >
                loja oficial
              </a>
              .
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1F5455] text-white">
                    <th scope="col" className="p-4 font-semibold text-sm">Critério</th>
                    <th scope="col" className="p-4 font-semibold text-sm">V60</th>
                    <th scope="col" className="p-4 font-semibold text-sm">Prensa Manual</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-200">
                    <th scope="row" className="p-4 font-medium text-gray-900">Extração</th>
                    <td className="p-4">Por percolação (gravidade)</td>
                    <td className="p-4">Imersão e pressão manual</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th scope="row" className="p-4 font-medium text-gray-900">Perfil da Bebida</th>
                    <td className="p-4">Limpa, cristalina e aromática</td>
                    <td className="p-4">Encorpada, intensa e sem amargor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="filtros" className="mb-12">
            <h2 className="text-3xl font-serif text-[#1F5455] mb-6">
              3. Filtros de papel: escolha o modelo correto
            </h2>
            <p className="mb-4">
              Se você escolher o V60, o filtro é parte importante do sistema.
              Não basta comprar qualquer papel com formato parecido: ele precisa
              ser compatível com o tamanho e o modelo do suporte. Conheça os{" "}
              <a href="https://www.mercadolivre.com.br/filtro-papel-japones-v60-02-branco-para-cafe--caixa-com-100/up/MLBU5688947390?pdp_filters=item_id:MLB7881561608" target="_blank" rel="noopener noreferrer" className="underline text-[#1F5455] font-semibold">Filtros V60 Navier</a>.
            </p>
          </section>

          <section id="balanca" className="mb-12">
            <h2 className="text-3xl font-serif text-[#1F5455] mb-6">
              4. Balança digital: o acessório que ajuda a repetir bons resultados
            </h2>
            <p className="mb-4">
              Uma balança digital simples, com leitura em gramas, permite medir
              tanto o café quanto a água. Assim, você consegue repetir uma receita
              e ajustar variáveis com precisão.
            </p>
          </section>

          <section id="receita" className="mb-12">
            <h2 className="text-3xl font-serif text-[#1F5455] mb-6">
              Receita simples para seu primeiro café
            </h2>
            <div className="mb-6 rounded bg-[#F9F9F9] border border-[#EABEA9]/40 p-6">
              <h3 className="mb-3 font-serif text-lg text-[#1F5455] font-bold">
                Receita de referência (V60)
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
                <li><strong>15 g</strong> de café.</li>
                <li><strong>250 ml</strong> de água quente.</li>
                <li>Proporção aproximada de 1:16,7.</li>
              </ul>
            </div>
          </section>

          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-serif text-[#1F5455] mb-6">
              Perguntas frequentes
            </h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details key={item.question} className="group border border-gray-200 rounded-sm p-4 cursor-pointer">
                  <summary className="font-semibold text-[#1F5455] list-none flex justify-between items-center">
                    {item.question}
                    <span className="transition group-open:rotate-180 text-[#EABEA9]">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>

        {/* CTA Comercial Inferior (redireciona para a loja no Mercado Livre) */}
        <aside aria-labelledby="cta-title" className="bg-[#1F5455] p-8 md:p-12 text-center mt-12 shadow-lg">
          <h2 id="cta-title" className="text-2xl md:text-3xl font-serif text-white mb-4">
            Eleve o seu ritual do café
          </h2>
          <p className="text-[#EABEA9] mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            Explore os equipamentos e acessórios da Navier e comece a extrair o melhor de cada grão hoje mesmo.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://www.mercadolivre.com.br/filtro-papel-japones-v60-02-branco-para-cafe--caixa-com-100/up/MLBU5688947390?pdp_filters=item_id:MLB7881561608"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#EABEA9] text-[#1F5455] font-bold px-6 py-4 uppercase tracking-wider text-xs hover:bg-white transition-colors"
            >
              Filtros V60 Original
            </a>
            <a
              href="https://www.mercadolivre.com.br/cafeteira-portatil-manual-pressao-tipo-aeropress--filtros/up/MLBU5688554314?pdp_filters=item_id:MLB7881402892"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#EABEA9] text-[#EABEA9] font-bold px-6 py-4 uppercase tracking-wider text-xs hover:bg-[#EABEA9] hover:text-[#1F5455] transition-colors"
            >
              Prensa Manual Portátil
            </a>
          </div>
        </aside>
      </article>
    </>
  );
}