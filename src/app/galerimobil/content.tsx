"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const cars = [
  {
    id: "1",
    name: "Chery Omoda 5 GT",
    image: "/images/product/omoda-5gt.jpg",
    description:
      "SUV premium dengan 7 kursi, teknologi canggih, dan performa tangguh.",
  },
  {
    id: "2",
    name: "Chery Omoda 5",
    image: "/images/product/omoda-5.jpg",
    description:
      "SUV crossover futuristik dengan desain stylish dan fitur keselamatan modern.",
  },
  {
    id: "3",
    name: "Chery Omoda E5",
    image: "/images/product/omoda-e5.jpg",
    description:
      "SUV menengah dengan interior mewah, nyaman, dan efisien bahan bakar.",
  },
  {
    id: "4",
    name: "Chery Icar J6",
    image: "/images/product/icar-J6.jpg",
    description:
      "SUV menengah dengan interior mewah, nyaman, dan efisien bahan bakar.",
  },
  {
    id: "5",
    name: "Chery Icar J6",
    image: "/images/product/icar-J6.jpg",
    description:
      "SUV menengah dengan interior mewah, nyaman, dan efisien bahan bakar.",
  },
  {
    id: "6",
    name: "Chery Omoda E5",
    image: "/images/product/omoda-e5.jpg",
    description:
      "SUV menengah dengan interior mewah, nyaman, dan efisien bahan bakar.",
  },
  {
    id: "7",
    name: "Chery Omoda 5",
    image: "/images/product/omoda-5.jpg",
    description:
      "SUV crossover futuristik dengan desain stylish dan fitur keselamatan modern.",
  },
  {
    id: "8",
    name: "Chery Omoda 5 GT",
    image: "/images/product/omoda-5gt.jpg",
    description:
      "SUV premium dengan 7 kursi, teknologi canggih, dan performa tangguh.",
  },
];

export default function GaleriContent() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = cars.filter(
    (car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-white py-20 px-4 md:px-20 lg:px-24 pt-[72px] md:pt-[96px] lg:pt-[96px] text-zinc-800">
      <div className="max-w-full mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm mb-4 text-zinc-600">
          <ol className="flex space-x-2">
            <li>
              <Link href="/" className="hover:underline text-blue-700">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-zinc-800 font-medium">Galeri</li>
          </ol>
        </nav>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          Galeri Chery
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

        {/* Search bar */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Cari mobil..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>

        {/* Cars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCars.length > 0 ? (
            filteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
            ))
          ) : (
            <p className="col-span-full text-center text-zinc-500">
              Mobil tidak ditemukan.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
