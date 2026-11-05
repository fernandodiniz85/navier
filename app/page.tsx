import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Hero from "../components/Hero";
import Ritual from "../components/Ritual";
import MetodoV60 from "../components/MetodoV60";
import MetodoAeropress from "../components/MetodoAeropress";
import Products from "../components/Products";
import Features from "../components/Features";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const siteUrl = "https://www.navierpremium.com.br";

// Dados estruturados (SEO/GEO): lidos por Google, Bing e plataformas de IA.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Navier",
      legalName: "NAVIER Premium",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/og-image.png`,
      },
      description:
        "Marca carioca de equipamentos para café especial: filtros V60, prensa manual portátil e kit barista.",
      email: "navierpremium@gmail.com",
      telephone: "+55-21-96741-7992",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rio de Janeiro",
        addressRegion: "RJ",
        addressCountry: "BR",
      },
      areaServed: {
        "@type": "Country",
        name: "Brasil",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+55-21-96741-7992",
        email: "navierpremium@gmail.com",
        areaServed: "BR",
        availableLanguage: "pt-BR",
      },
      sameAs: [
        "https://www.mercadolivre.com.br/pagina/navier_premium",
        "https://instagram.com/navier_premium",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Navier",
      inLanguage: "pt-BR",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Header />
      <SideNav />

      <main className="flex min-h-screen flex-col bg-navier-bg relative">
        <Hero />
        <Ritual />
        <MetodoV60 />
        <MetodoAeropress />
        <Products />
        <Features />
        <Faq />
      </main>

      <Footer />
    </>
  );
}
