import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import ScrollToTop from "./components/ScrollToTop"; // ganti path sesuai struktur project mu

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sales Mobil | Budi Chery",
  description: "Website pribadi sales mobil Toyota terpercaya",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulasi loading 2 detik

  return (
    <html lang="id">
      <body className={`${inter.variable} antialiased relative`}>
        {children}

        {/* Tombol WhatsApp Floating */}
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed left-6 bottom-6 text-white flex items-center justify-center transition-colors z-50"
        >
          <Image
            src="/images/wa_ic.png"
            alt="WhatsApp Icon"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        </a>

        {/* Tombol ScrollToTop */}
        <ScrollToTop />
      </body>
    </html>
  );
}
