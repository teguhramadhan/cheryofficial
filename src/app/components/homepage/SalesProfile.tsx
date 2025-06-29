"use client";

import {
  Phone,
  MapPin,
  MessageCircle,
  BadgePercent,
  DollarSign,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SalesProfile() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }} // biar animasi aktif tiap scroll masuk
      className="py-20 bg-gray-50 text-zinc-800 px-0 md:px-20 lg:px-24"
    >
      <div className="w-full mx-auto flex flex-col lg:flex-row">
        {/* KIRI - PROFIL SALES */}
        <div className="flex-[2] flex flex-col md:flex-row items-center gap-2">
          {/* Foto Sales */}
          <div className="h-auto w-auto rounded-md overflow-hidden shadow-md mx-8 md:mx-0 lg:mx-0">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Budi Toyota"
              width={500}
              height={500}
              className="h-auto w-auto object-cover rounded-md"
            />
          </div>

          {/* Detail Profil */}
          <div className="flex-1 px-8 py-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Budi Hartono
            </h2>
            <p className="text-sm md:text-md lg:text-lg text-zinc-400 mb-6 text-justify">
              Sales Executive resmi dari Chery Bandung. Berpengalaman dalam
              membantu pelanggan memilih kendaraan impian mereka dengan
              pelayanan profesional dan konsultasi yang ramah.
            </p>

            <div className="space-y-4 text-zinc-700">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <a href="tel:+6281234567890" className="hover:underline">
                  +62 812-3456-7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-500" />
                <a
                  href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20mobil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Chat via WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <p>Dealer Resmi Chery, Bandung</p>
              </div>
            </div>
          </div>
        </div>

        {/* KANAN - CARD PROMO & KREDIT BERDAMPINGAN */}
        <div className="flex-1 flex flex-col">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 bg-red-600 shadow hover:shadow-md transition text-white px-8 py-12"
          >
            <div className="flex items-center gap-6 mb-4">
              <DollarSign className="w-6 h-6 bg-white text-red-600 rounded-full" />
              <h3 className="text-xl font-semibold">DIBANTU 100% APPROVED!</h3>
            </div>
            <p>
              Nikmati proses yang transparan, aman, dan terpercaya bersama tim
              marketing terbaik kami.
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20untuk%20kredit%20mobil%20Chery"
              target="_blank"
              className="inline-block bg-white text-black text-sm px-4 py-2 rounded-md font-light mt-12"
            >
              Mulai Kredit
            </a>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 bg-blue-600 shadow hover:shadow-md transition text-white px-8 py-12"
          >
            <div className="flex items-center gap-6 mb-4">
              <BadgePercent className="w-6 h-6 bg-white text-blue-600 rounded-full" />
              <h3 className="text-xl font-semibold">DAPATKAN PROMO MENARIK!</h3>
            </div>
            <p>
              Dapatkan diskon eksklusif, cashback, atau hadiah langsung hanya di
              bulan ini!
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20untuk%20kredit%20mobil%20Chery"
              target="_blank"
              className="inline-block bg-white text-black text-sm px-4 py-2 rounded-md font-light mt-12"
            >
              Tanya Promo
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
