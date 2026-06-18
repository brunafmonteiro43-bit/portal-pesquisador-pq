import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AtenaFloatingButton } from "@/components/modules/atena-floating-button";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Portal do Pesquisador (PQ)",
  description: "Autoatendimento para pesquisadores da COCEN/UNICAMP"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <AtenaFloatingButton />
      </body>
    </html>
  );
}
