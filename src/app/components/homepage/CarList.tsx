"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabaseClient";

interface Product {
  id: string; // atau number
  nama_product: string;
  desc_product: string;
  kategori_mobil: string;
  model_mobil: string;
  type_mobil: string;
  harga: number | string;
  gambar_url?: string;
}

export default function CarListSection() {
  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .limit(4); // tampilkan 4 mobil terbaru misalnya

      if (error) {
        console.error("Error fetching products:", error.message);
      } else {
        setProducts(data || []);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

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
          {loading ? (
            <p className="col-span-full text-center text-zinc-500">
              Memuat data mobil...
            </p>
          ) : products.length > 0 ? (
            products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white overflow-hidden hover:shadow-lg hover:shadow-blue-100 transition"
              >
                <div className="relative w-full h-52 md:h-72 lg:h-96">
                  <Image
                    src={product.gambar_url || "/images/placeholder.png"}
                    alt={product.nama_product}
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <div className="p-5 lg:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {product.nama_product}
                  </h3>
                  <p className="text-sm md:text-base text-zinc-600">
                    {product.desc_product}
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

        <motion.a
          href="/galerimobil"
          whileHover={{ backgroundColor: "#2563EB", color: "#fff" }}
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
