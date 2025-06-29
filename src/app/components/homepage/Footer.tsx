"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, User, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-200 py-12 md:py-12 lg:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-full mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-12">
        {/* Logo & Deskripsi */}
        <div className="flex-1">
          <div className="mb-12">
            <Image
              src="/images/logo-cherry.png"
              alt="Chery Official"
              width={160}
              height={50}
              className="object-contain"
            />
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Dealer Resmi Chery Bandung. Komitmen kami adalah memberikan layanan
            terbaik untuk pembelian mobil Chery impian Anda.
          </p>
        </div>

        {/* Kontak */}
        <div className="flex-1">
          <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
          <ul className="space-y-6">
            <li className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-white" />
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-400 hover:text-white transition"
              >
                WhatsApp: +62 812 3456 7890
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-white" />
              <a
                href="tel:+62222000000"
                className="text-sm text-zinc-400 hover:text-white transition"
              >
                Telp: (022) 2000 000
              </a>
            </li>
            <li className="flex items-center gap-3">
              <User className="w-5 h-5 text-white" />
              <span className="text-sm text-zinc-400">
                ID Dealer: CHERYBDG123
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-white" />
              <a
                href="mailto:info@cherybandung.co.id"
                className="text-sm text-zinc-400 hover:text-white transition"
              >
                info@cherybandung.co.id
              </a>
            </li>
          </ul>
        </div>

        {/* Alamat */}
        <div className="flex-1">
          <h4 className="text-lg font-semibold mb-4">Alamat</h4>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-white mt-1" />
            <p className="text-sm text-zinc-400">
              Jl. Soekarno Hatta No. 123, Bandung, Jawa Barat 40235
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-xs text-zinc-500">
        &copy; {new Date().getFullYear()} Chery Bandung. All rights reserved.
      </div>
    </footer>
  );
}
