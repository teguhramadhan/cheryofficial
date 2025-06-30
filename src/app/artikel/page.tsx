"use client";

import Link from "next/link";
import Navbar from "../components/homepage/Navbar";
import Footer from "../components/homepage/Footer";
import ContentArtikel from "./contentartikel";
import Image from "next/image";

export default function ArticlePage() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen pb-20 text-zinc-800">
        {/* BREADCRUMB + JUDUL DENGAN BACKGROUND */}
        <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] mb-12 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero/hero-2.jpg" // Sesuaikan path
              alt="Hero Artikel"
              fill // Membuat image absolute fill ke parent relatif
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20 lg:px-32 text-white">
            {/* BREADCRUMB */}
            <nav className="text-sm mb-2">
              <ol className="flex space-x-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="font-medium">Artikel</li>
              </ol>
            </nav>

            {/* JUDUL */}
            <h1 className="text-3xl md:text-4xl font-bold">Artikel Terbaru</h1>
          </div>
        </div>
        <ContentArtikel />
      </section>
      <Footer />
    </>
  );
}
