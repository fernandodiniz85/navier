import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NAVIER | Equipamentos Nature-Tech para Baristas",
  description: "Eleve o seu ritual do café. Equipamentos premium, precisão técnica e curadoria rigorosa para entusiastas e baristas.",
  openGraph: {
    title: "NAVIER | Equipamentos Premium",
    description: "Precisão técnica e formas orgânicas. Extraia o melhor de cada grão.",
    url: "https://www.navierpremium.com.br",
    siteName: "NAVIER",
    images: [
      {
        url: "https://www.navierpremium.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Logótipo NAVIER",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className={`${inter.className} min-h-full flex flex-col font-sans bg-[#FFFFFF] text-gray-900`}>
        {children}
        <GoogleAnalytics gaId="G-160ZGS3E85" />
      </body>
    </html>
  );
}