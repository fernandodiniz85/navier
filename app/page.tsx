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

export default function Home() {
  
  // 🧠 DADOS ESTRUTURADOS (GEO/SEO): Isto é o que o Google e as IAs leem!
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "NAVIER",
    "url": "https://www.navierpremium.com.br",
    "logo": "https://www.navierpremium.com.br/og-image.jpg",
    "description": "Equipamentos Nature-Tech para entusiastas do café e baristas. Precisão técnica e formas orgânicas.",
    "sameAs": [
      "https://www.mercadolivre.com.br/pagina/navier_premium"
    ]
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#F9F9F9] relative">
      
      {/* O Script invisível que injeta os dados para os motores de busca */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <SideNav />
      <Hero />
      <Ritual />
      <MetodoV60 />
      <MetodoAeropress />
      <Products />
      <Features />
      <Faq />
      <Footer />
    </main>
  );
}