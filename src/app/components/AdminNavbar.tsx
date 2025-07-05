"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import UserProfileDropdown from "./UserProfileDropdown";
import LogoutButton from "./LogoutButton";

export default function AdminNavbar({ email }: { email: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/product", label: "Product" },
    { href: "/admin/artikel", label: "Artikel" },
  ];

  return (
    <header className="relative max-w-full h-20 bg-white shadow border-b px-4 md:px-12 lg:px-72 flex items-center justify-between">
      {/* Kiri: Logo */}
      <Link href="/admin" className="flex items-center flex-shrink-0">
        <Image
          src="/images/logo-cherry.png"
          alt="Logo Cherry"
          width={120}
          height={40}
          className="h-auto w-auto"
          priority
        />
      </Link>

      {/* Tengah: Nav links (md ke atas) */}
      <nav className="hidden md:flex gap-12 text-lg absolute left-1/2 transform -translate-x-1/2">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="relative inline-block text-slate-700 hover:text-blue-600 transition-colors duration-200 after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full after:absolute after:bottom-0 after:left-0"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Kanan: User profiles */}
      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <UserProfileDropdown email={email} />
        </div>

        {/* Hamburger: sm only */}
        <button
          className="md:hidden text-slate-700 hover:text-blue-600 transition text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav: muncul kalau menuOpen */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow border-t border-slate-200 flex flex-col items-center z-50 md:hidden">
          <h1 className="text-lg py-4">{email}</h1>
          <div className="border-t w-full"></div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="w-full text-center px-4 py-4 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t w-full"></div>
          <LogoutButton />
        </div>
      )}
    </header>
  );
}
