import { Footer } from "@/components/footer";
import { Menu } from "@/components/menu";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Só Delicia",
  description: "Aqui você encontra tudo sobre doces e salgados e receitas...",
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
