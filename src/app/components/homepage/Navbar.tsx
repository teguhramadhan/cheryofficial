"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DemoBar from "../Demobar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleLinkClick = () => {
    setIsOpen(false);
    setShowSearch(false);
  };

  useEffect(() => {
    if (isOpen) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  }, [isOpen]);

  // 📌 Fokus hanya di desktop
  useEffect(() => {
    if (!isOpen && showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, showSearch]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/pricelist", label: "Price List" },
    { href: "/galerimobil", label: "Galeri Mobil" },
    { href: "/artikel", label: "Artikel/Blog" },
    { href: "/contactsales", label: "Contact Sales" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 uppercase">
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-24">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center relative h-10 w-auto">
            <div className="relative h-10 w-32 md:w-40">
              <Image
                src="/images/logo-cherry.png"
                alt="MyLogo"
                fill
                sizes="(max-width: 768px) 120px, 160px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-lg">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group text-black"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-gray-800 hover:text-gray-900"
            >
              <Search size={20} />
            </button>

            <AnimatePresence>
              {showSearch && (
                <motion.input
                  key="desktop-search"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "200px", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  type="text"
                  placeholder="Search..."
                  ref={searchInputRef}
                  className="ml-2 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center md:hidden space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-800 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-md"
          >
            {showSearch && (
              <div className="w-full px-4 py-3 border-b border-gray-200">
                <input
                  type="text"
                  placeholder="Search..."
                  ref={searchInputRef}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            )}

            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="block px-4 py-3 border-b border-gray-200 text-black hover:bg-gray-100"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <DemoBar />
    </nav>
  );
}
