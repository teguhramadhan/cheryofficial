"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const leasingPartners = [
  {
    name: "Adira Finance",
    logo: "/images/leasingpartner/adira-finance.png",
  },
  {
    name: "Bank Sinarmas",
    logo: "/images/leasingpartner/banksinarmas.png",
  },
  {
    name: "FIF Group",
    logo: "/images/leasingpartner/fifgroup.png",
  },
];

export default function LeasingSupportSection() {
  return (
    <section className="flex justify-center items-center bg-white min-h-[400px] py-20 px-4 md:px-20 lg:px-24 text-zinc-800">
      <div className="max-w-full mx-auto text-center">
        {/* Judul */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Leasing Support Kami
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-zinc-600 mb-12"
        >
          Dealer Chery bekerja sama dengan berbagai perusahaan leasing
          terpercaya untuk mendukung kemudahan pengajuan kredit Anda.
        </motion.p>

        {/* Flex Logo Leasing */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {leasingPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-4 transition hover:scale-105"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={80}
                className="w-48 md:w-72 lg:w-96 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
