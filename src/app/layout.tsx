import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // ganti path sesuai struktur project mu

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
      </body>
    </html>
  );
}
