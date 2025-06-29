"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Navigation, User, Star } from "lucide-react";
import Image from "next/image";

export default function DealerLocation() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="bg-white py-20 px-4 md:px-20 lg:px-24 text-zinc-800"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          Lokasi Dealer Kami
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-zinc-600 mb-12"
        >
          Kunjungi showroom resmi Chery Bandung dan dapatkan layanan terbaik
          dari tim kami.
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Kiri - Google Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 h-[300px] lg:h-[400px] rounded-xl overflow-hidden"
          >
            <Image
              src="/images/dealerlocation/chery-official-dealer.png"
              alt="Foto Showroom Chery"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Kanan - Info Dealer + Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="flex-1 flex flex-col justify-between gap-6"
          >
            <div className="space-y-4">
              <div className="flex flex-col items-start gap-12 mb-6">
                <p className="textsm md:text-md lg:text-lg text-zinc-500 leading-relaxed text-start md:text-justify lg:text-start">
                  Selamat datang di Dealer Chery Official Bandung, pilihan
                  terbaik untuk Anda yang ingin membeli mobil Chery, dimana kami
                  berkomitmen untuk memberikan pengalaman membeli mobil yang
                  mudah, nyaman, dan penuh kepercayaan bagi setiap pelanggan.
                </p>
                <div className="flex justify-center items-center gap-6">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-red-600 mt-1" />
                  <p className="text-sm md:text-md lg:text-lg text-zinc-700 leading-relaxed font-semibold">
                    Jl. Soekarno Hatta{" "}
                    <span className="block md:inline">
                      No. 123, Bandung, Jawa Barat 40235
                    </span>
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Chery+Bandung"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-fit bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md text-sm font-light transition"
              >
                <Navigation className="w-5 h-5" />
                Arahkan ke Lokasi
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-blue-500 p-6 text-center "
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <User className="w-8 h-8 text-blue-100" />
                  <h3 className="text-3xl md:text-4xl font-bold text-blue-50">
                    4k+
                  </h3>
                </div>
                <p className="text-sm md:text-base text-blue-100 font-medium">
                  Pelanggan Kami
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-emerald-500 p-6 text-center "
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Star className="w-8 h-8 text-emerald-100" />
                  <h3 className="text-3xl md:text-4xl font-bold text-emerald-50">
                    98%
                  </h3>
                </div>
                <p className="text-sm md:text-base text-emerald-100 font-medium">
                  Kepuasan Pelanggan
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
