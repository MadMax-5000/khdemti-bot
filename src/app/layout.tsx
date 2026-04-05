import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "KHDEMTI | Coach IA pour les entretiens d'embauche",
  description:
    "KHDEMTI simule un vrai recruteur marocain, évalue tes réponses en temps réel et t'envoie un plan d'amélioration personnalisé sur 7 jours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen bg-black antialiased">{children}</body>
    </html>
  );
}
