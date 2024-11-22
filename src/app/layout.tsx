import { Footer } from "@/components/footer";
import { Menu } from "@/components/menu";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Só Delicia",
  description: "Aqui você encontra tudo sobre bolo, salgados, doces e receitas.",
  keywords: ["doces", "salgados", "receitas", "bolos"],
  authors: [{ name: 'André Ezequiel', url: 'https://github.com/andre-ezequiel' }],

  viewport: 'width=device-width, initial-scale=1',

  openGraph: {
    title: 'Duetted recipes App',
    description: 'Aqui você encontra tudo sobre doces e salgados e receitas...',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Toast App'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Menu />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
