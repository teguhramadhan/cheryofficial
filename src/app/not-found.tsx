"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 text-center px-4">
      <h1 className="text-6xl font-bold text-blue-700 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-zinc-800">
        Oops! Halaman Tidak Ditemukan
      </h2>
      <p className="text-zinc-600 mb-6">
        Maaf, halaman yang kamu cari tidak tersedia atau telah dipindahkan.
      </p>
      <Link
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}
