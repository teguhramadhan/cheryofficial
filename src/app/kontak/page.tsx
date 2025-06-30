"use client";

import Link from "next/link";
import Navbar from "../components/homepage/Navbar";
import Footer from "../components/homepage/Footer";
import { Mail, Phone, Instagram, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen pb-20 text-zinc-800 relative overflow-hidden">
        {/* BREADCRUMB + JUDUL DENGAN BACKGROUND */}
        <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] mb-12 overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <img
              src="/images/hero/hero-1.jpg"
              alt="Hero Kontak"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20 lg:px-32 text-white">
            <nav className="text-sm mb-2">
              <ol className="flex space-x-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="font-medium">Kontak</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold">Kontak Kami</h1>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-20 lg:px-32">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Kontak Kami</h1>
          <p className="text-zinc-600 mb-8">
            Hubungi kami kapan saja, kami siap membantu Anda!
          </p>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Form Kontak LEBIH BESAR */}
            <form className="flex-1 border p-6 space-y-4">
              <div>
                <label className="block mb-1 text-sm">Nama</label>
                <input
                  type="text"
                  placeholder="Nama Anda"
                  className="w-full border border-zinc-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Email</label>
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="w-full border border-zinc-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Pesan</label>
                <textarea
                  placeholder="Tulis pesan Anda..."
                  rows={5}
                  className="w-full border border-zinc-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md font-bold hover:bg-blue-700 transition"
              >
                Kirim Pesan
              </button>
            </form>

            {/* Info Kontak KECIL */}
            <div className="flex-[0.5] space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-2">Informasi Kontak</h2>
                <p className="text-zinc-600 mb-4">
                  Anda juga dapat menghubungi kami melalui:
                </p>
                <h2 className="text-xl font-bold mb-2">Email atau Telepon</h2>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Mail className="text-blue-600" size={20} />
                    <a href="mailto:info@email.com" className="hover:underline">
                      info@email.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="text-blue-600" size={20} />
                    <a href="tel:+6281234567890" className="hover:underline">
                      +62 812 3456 7890
                    </a>
                  </li>
                </ul>
              </div>
              <h2 className="text-xl font-bold mb-2">
                Kirim pesan atau WhatsApp
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MessageCircle className="text-blue-600" size={20} />
                  <a href="mailto:info@email.com" className="hover:underline">
                    +62 891 2345 6789
                  </a>
                </li>
              </ul>

              <div>
                <h2 className="text-xl font-bold mb-2">Ikuti Kami</h2>
                <div className="flex gap-4 text-blue-600 text-2xl">
                  <a href="https://wa.me/62xxxxxxxxx" target="_blank">
                    <MessageCircle />
                  </a>
                  <a href="https://instagram.com/your_ig" target="_blank">
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
