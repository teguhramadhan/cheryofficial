"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const cars = [
  {
    name: "Chery Omoda 5 GT",
    image: "/images/product/omoda-5gt.jpg",
    description:
      "SUV premium dengan 7 kursi, teknologi canggih, dan performa tangguh.",
  },
  {
    name: "Chery Omoda 5",
    image: "/images/product/omoda-5.jpg",
    description:
      "SUV crossover futuristik dengan desain stylish dan fitur keselamatan modern.",
  },
  {
    name: "Chery Omoda E5",
    image: "/images/product/omoda-e5.jpg",
    description:
      "SUV menengah dengan interior mewah, nyaman, dan efisien bahan bakar.",
  },
  {
    name: "Chery Icar J6",
    image: "/images/product/icar-J6.jpg",
    description:
      "SUV menengah dengan interior mewah, nyaman, dan efisien bahan bakar.",
  },
];

export default function CarListSection() {
  return (
    <section className="bg-blue-50/50 py-20 px-4 md:px-20 lg:px-24 text-zinc-800">
      <div className="max-w-full mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          Temukan Mobil Chery Impianmu!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-zinc-600 mb-12"
        >
          Temukan mobil Chery yang sesuai dengan kebutuhan dan gaya hidup Anda.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white overflow-hidden hover:shadow-lg hover:shadow-blue-100 transition"
            >
              <div className="relative w-full h-52 md:h-72 lg:h-96">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-contain object-center"
                />
              </div>
              <div className="p-5 lg:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {car.name}
                </h3>
                <p className="text-sm md:text-base text-zinc-600">
                  {car.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.a
          href="/products"
          whileHover={{ backgroundColor: "#2563EB", color: "#fff" }} // bg-blue-600
          className="group mt-24 mx-auto relative block w-fit border border-blue-600 text-blue-600 px-6 py-3 rounded-md text-sm md:text-base font-medium overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            Lihat Semua Produk
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.span>
          </span>

          {/* background overlay */}
          <span className="absolute inset-0 bg-blue-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
        </motion.a>
      </div>
    </section>
  );
}
