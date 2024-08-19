import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SystemContextProvider } from "./context/systemContext";
import MadeBy from "./components/organisms/MadeBy";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GB Contabilidade | Assessoria Contábil",
  description:
    "Precisão e confiança em cada detalhe da sua contabilidade e finanças. Oferecemos serviços personalizados de imposto de renda, abertura de empresa, criação de MEI e contabilidade geral.",
  keywords:
    "contabilidade, assessoria contábil, imposto de renda, abertura de empresa, criação de MEI, contabilidade geral, GB Contabilidade",
  openGraph: {
    title: "GB Contabilidade | Assessoria Contábil",
    description:
      "Soluções contábeis precisas e personalizadas para seu negócio. Confiança e transparência em cada detalhe financeiro.",
    url: "https://www.seusite.com.br", // Substitua pelo URL real do seu site
    siteName: "GB Contabilidade",
    images: [
      {
        url: "https://www.seusite.com.br/imagem-destaque.jpg", // Substitua pela URL da imagem de destaque do seu site
        width: 1200,
        height: 630,
        alt: "GB Contabilidade | Assessoria Contábil",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GB Contabilidade | Assessoria Contábil",
    description:
      "Precisão e confiança em cada detalhe da sua contabilidade e finanças.",
    images: [
      {
        url: "https://www.seusite.com.br/imagem-destaque.jpg", // Substitua pela URL da imagem de destaque do seu site
        alt: "GB Contabilidade | Assessoria Contábil",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://www.seusite.com.br", // Substitua pelo URL real do seu site
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SystemContextProvider>
      <html lang="en">
        <body className={`${inter.className} dark`}>{children}</body>
      </html>
    </SystemContextProvider>
  );
}
