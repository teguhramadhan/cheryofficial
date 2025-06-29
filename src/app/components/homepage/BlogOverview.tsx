"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "Tips Merawat Mobil Chery Agar Tetap Prima",
    image: "/images/blog/merawat-mobil-cherry.png",
    excerpt:
      "Pelajari cara merawat mobil Chery Anda dengan benar agar performa tetap maksimal.",
    link: "/blog/tips-merawat-mobil",
  },
  {
    title: "Promo Spesial Akhir Tahun Dealer Chery",
    image: "/images/blog/promo-akhir-tahun-cherry.png",
    excerpt:
      "Dapatkan penawaran menarik untuk pembelian mobil Chery hanya di bulan ini!",
    link: "/blog/promo-spesial",
  },
  {
    title: "Kenali Fitur Canggih Omoda 5 GT",
    image: "/images/blog/fitur-canggih-omoda5gt.jpg",
    excerpt:
      "Omoda 5 GT hadir dengan teknologi terkini. Yuk, kenali fiturnya lebih dekat!",
    link: "/blog/fitur-omoda-5gt",
  },
];

export default function BlogOverviewSection() {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover bg-no-repeat py-24 px-4 md:px-20 lg:px-24 text-zinc-50"
      style={{ backgroundImage: "url('/images/hero/hero-1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Judul */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          Artikel & Berita Terbaru
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-zinc-200 mb-12"
        >
          Baca tips, promo, dan info terbaru seputar mobil Chery.
        </motion.p>

        {/* Grid Artikel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.a
              key={blog.title}
              href={blog.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition text-zinc-800"
            >
              <div className="relative w-full h-64 md:h-72 lg:h-80">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {blog.title}
                </h3>
                <p className="text-sm md:text-base text-zinc-600 mb-4">
                  {blog.excerpt}
                </p>
                <span className="text-blue-600 font-medium">
                  Baca Selengkapnya →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Tombol Lihat Semua Artikel */}
        <motion.a
          href="/blog"
          whileHover={{ backgroundColor: "#2563EB", color: "#fff" }}
          className="group mt-16 mx-auto relative block w-fit border border-blue-300 text-blue-300 px-6 py-3 rounded-md text-sm md:text-base font-medium overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            Lihat Semua Artikel
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.span>
          </span>

          {/* overlay fill effect */}
          <span className="absolute inset-0 bg-blue-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
        </motion.a>
      </div>
    </section>
  );
}
