import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Zumi-to | Máquinas de Zumo Natural - Ingresos Pasivos",
  description:
    "Transforma espacios vacíos en ingresos con máquinas expendedoras de zumo de naranja recién exprimido. Instalación gratuita, gestión 100% integral. Sin inversión inicial.",
  keywords:
    "máquinas de zumo, zumo natural, ingresos pasivos, vending saludable, zumo de naranja, máquinas expendedoras",
  authors: [{ name: "Zumi-to" }],
  openGraph: {
    title: "Zumi-to - Máquinas de Zumo Natural",
    description:
      "Instala una máquina de zumo natural en tu espacio y genera ingresos sin inversión inicial",
    type: "website",
    locale: "es_ES",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/Favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
