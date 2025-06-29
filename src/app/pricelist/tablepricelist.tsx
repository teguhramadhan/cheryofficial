"use client";

import { motion } from "framer-motion";

interface PriceListItem {
  model: string;
  type: string;
  price: string;
}

interface PriceListCategory {
  category: string;
  models: PriceListItem[];
}

const pricelist: PriceListCategory[] = [
  {
    category: "MOBIL – GASOLINE / BENSIN – 5 SEAT",
    models: [
      { model: "TIGGO 5X 1.5", type: "CLASSIC", price: "Rp 257.500.000" },
      { model: "TIGGO 5X 1.5", type: "CHAMPION", price: "Rp 290.000.000" },
      { model: "TIGGO CROSS 1.5", type: "COMFORT", price: "Rp 260.500.000" },
      { model: "TIGGO CROSS 1.5", type: "PREMIUM", price: "Rp 290.500.000" },
      {
        model: "OMODA5 1.5 TURBO",
        type: "Z SINGLE TONE",
        price: "Rp 347.500.000",
      },
      {
        model: "OMODA5 1.5 TURBO",
        type: "RZ SINGLE TONE",
        price: "Rp 423.500.000",
      },
      {
        model: "OMODA5 1.5 TURBO",
        type: "RZ TWO-TONE",
        price: "Rp 428.500.000",
      },
      {
        model: "OMODA5 GT 1.6 TURBO",
        type: "FWD TWO-TONE",
        price: "Rp 459.500.000",
      },
      {
        model: "OMODA5 GT 1.6 TURBO",
        type: "AWD TWO-TONE",
        price: "Rp 499.500.000",
      },
      {
        model: "TIGGO 7 PRO 1.5 TURBO",
        type: "PRO LUXURY",
        price: "Rp 406.500.000",
      },
      {
        model: "TIGGO 7 PRO 1.5 TURBO",
        type: "PRO PREM 1 TONE",
        price: "Rp 437.500.000",
      },
    ],
  },
  {
    category: "MOBIL – GASOLINE / BENSIN – 7 SEAT",
    models: [
      {
        model: "TIGGO 8 – 1.6 TURBO",
        type: "COMFORT",
        price: "Rp 358.000.000",
      },
      {
        model: "TIGGO 8 – 1.6 TURBO",
        type: "PREMIUM",
        price: "Rp 398.000.000",
      },
      {
        model: "TIGGO 8 PROMAX 2.0 TURBO",
        type: "PROMAX FWD",
        price: "Rp 579.000.000",
      },
      {
        model: "TIGGO 8 PROMAX 2.0 TURBO",
        type: "PROMAX AWD",
        price: "Rp 639.000.000",
      },
    ],
  },
  {
    category: "MOBIL LISTRIK – 5 SEAT",
    models: [
      {
        model: "OMODA E5 LUXURY",
        type: "SINGLE TONE",
        price: "Rp 506.000.000",
      },
      { model: "OMODA E5 LUXURY", type: "TWO-TONE", price: "Rp 511.000.000" },
      { model: "OMODA E5 PURE", type: "SINGLE TONE", price: "Rp 426.000.000" },
      { model: "ICAR 03 / J6", type: "RWD", price: "Rp 506.000.000" },
      { model: "ICAR 03 / J6", type: "i-WD", price: "Rp 566.000.000" },
      {
        model: "J6 BLACK PHANTOM",
        type: "RW PHANTOM",
        price: "Rp 548.500.000",
      },
      {
        model: "J6 BLACK PHANTOM",
        type: "iWD PHANTOM",
        price: "Rp 608.500.000",
      },
    ],
  },
];

export default function TablePriceList() {
  return (
    <section className="bg-white py-20 px-4 md:px-20 lg:px-24 text-zinc-800">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-16 text-center"
      >
        Daftar Harga Mobil Chery
      </motion.h2>

      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full border-collapse text-left">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                Kategori
              </th>
              <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                Model
              </th>
              <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                Tipe
              </th>
              <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                Harga
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200">
            {pricelist.map((cat, ci) => {
              const catRowSpan = cat.models.length;

              const modelRowMap: Record<string, number> = {};
              cat.models.forEach((m) => {
                modelRowMap[m.model] = (modelRowMap[m.model] || 0) + 1;
              });

              const renderedModels: Record<string, boolean> = {};
              let catRendered = false;

              return cat.models.map((m, mi) => {
                const modelKey = m.model;
                const renderModel = !renderedModels[modelKey];
                renderedModels[modelKey] = true;

                return (
                  <tr
                    key={`${ci}-${mi}`}
                    className={
                      mi % 2 === 0 ? "bg-white" : "bg-zinc-50 hover:bg-blue-50"
                    }
                  >
                    {!catRendered && (
                      <td
                        rowSpan={catRowSpan}
                        className="px-6 py-4 font-medium text-blue-800 align-middle border-r border-zinc-200"
                      >
                        {cat.category}
                      </td>
                    )}
                    {(catRendered = true)}

                    {renderModel ? (
                      <td
                        rowSpan={modelRowMap[modelKey]}
                        className="px-6 py-4 align-middle border-r border-zinc-200 font-medium"
                      >
                        {m.model}
                      </td>
                    ) : null}

                    <td className="px-6 py-4">{m.type}</td>
                    <td className="px-6 py-4 font-bold text-blue-700">
                      {m.price}
                    </td>
                  </tr>
                );
              });
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
