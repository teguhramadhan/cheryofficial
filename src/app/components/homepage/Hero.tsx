"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const heroImages = [
  {
    src: "/images/hero/hero-1.jpg",
    title: "Chery Tiggo 7 Pro",
    desc: "SUV elegan dan canggih dengan fitur lengkap untuk kenyamanan keluarga Anda.",
  },
  {
    src: "/images/hero/hero-2.jpg",
    title: "Chery J6",
    desc: "Mobil sedan stylish dan efisien, cocok untuk perjalanan harian maupun bisnis.",
  },
  {
    src: "/images/hero/hero-3.jpg",
    title: "Chery Omoda 5",
    desc: "Crossover futuristik dengan desain modern dan teknologi terkini.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const { title, desc } = heroImages[index];

  return (
    <section className="relative pt-16 h-[400px] md:min-h-screen lg:min-h-screen w-full overflow-hidden text-white">
      {/* Gambar sebelumnya */}
      <Image
        src={heroImages[prevIndex].src}
        alt=""
        fill
        className="absolute inset-0 top-16 w-full h-full object-cover z-[-20]"
        priority
      />

      {/* Gambar aktif dengan fade in */}
      <motion.img
        key={heroImages[index].src}
        src={heroImages[index].src}
        alt={title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 top-16 w-full h-full object-cover z-[-10]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 top-16 bg-black/30 z-[-5]" />

      {/* Konten */}
      <div className="relative h-full flex items-center justify-center">
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl px-4"
        >
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2">
            {title}
          </h1>
          <p className="text-xs md:text-md lg:text-lg md:text-xl mb-6 text-white">
            {desc}
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20mobil%20Chery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white text-xs md:text-md lg:text-lg px-6 py-3 rounded-lg font-semibold transition"
          >
            Konsultasi Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  );
}
