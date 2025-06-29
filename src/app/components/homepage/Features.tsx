"use client";

import { motion } from "framer-motion";
import { Calculator, Wrench, Car, CalendarCheck } from "lucide-react";

const features = [
  {
    title: "Credit Simulation",
    desc: "Konsultasikan rencana keuangan Anda untuk membeli kendaraan Chery dengan marketing terbaik kami.",
    icon: (
      <Calculator className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-blue-500" />
    ),
  },
  {
    title: "Service",
    desc: "Dealer Resmi Chery Bandung memberikan layanan servis terbaik untuk kendaraan Chery Anda.",
    icon: (
      <Wrench className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-blue-500" />
    ),
  },
  {
    title: "Test Drive",
    desc: "Ayo Test Drive dan rasakan fitur terbaru dan tercanggih kendaraan Chery.",
    icon: (
      <Car className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-blue-500" />
    ),
  },
  {
    title: "Booking",
    desc: "Segera hubungi marketing terbaik kami untuk Booking Kendaraan Chery.",
    icon: (
      <CalendarCheck className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-blue-500" />
    ),
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 md:px-20 lg:px-24 bg-white text-zinc-800">
      <div className="max-w-full mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Layanan Kami
        </h2>

        <div className="flex flex-wrap -mx-4 md:-mx-8 lg:-mx-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 min-h-[250px]"
            >
              <div className="flex flex-col justify-center md:justify-start lg:justify-start py-12 border bg-blue-50/30 border-blue-500/40 rounded-md px-6 shadow hover:shadow-lg transition hover:scale-[1.03] cursor-default h-full">
                <div>
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-1 md:mb-3 lg:mb-6">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm md:text-md lg:text-lg text-zinc-400">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
