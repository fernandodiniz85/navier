import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://www.navierpremium.com.br";
const siteDescription = "Marca carioca de equipamentos para café especial: prensa manual portátil, kit barista e filtros de papel de alta performance compatíveis com Hario V60.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Navier | Filtro V60, Prensa Manual e Kit para Café Especial",
    template: "%s | Navier",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Navier | Equipamentos para Café Especial",
    description: siteDescription,
    url: siteUrl,
    siteName: "Navier",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Navier: equipamentos para café especial",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navier | Equipamentos para Café Especial",
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`scroll-smooth ${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900">
        {children}
        <GoogleAnalytics gaId="G-160ZGS3E85" />
      </body>
    </html>
  );
}