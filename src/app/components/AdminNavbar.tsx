"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AdminContentNavbar({
  email,
  toggleSidebar,
}: {
  email: string;
  toggleSidebar: () => void;
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-blue-600">
      {/* ✅ Hamburger: hanya muncul di mobile */}
      <button
        onClick={toggleSidebar}
        className="text-white mr-4 focus:outline-none block md:hidden"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* ✅ Right Profile */}
      <div className="relative ml-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 text-white"
        >
          <span>{email}</span>
          <svg
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-6 w-48 bg-white border rounded shadow-md z-50">
            <button
              onClick={() => router.push("/admin/profile")}
              className="block w-full text-left px-4 py-2 hover:bg-slate-100"
            >
              Profile Settings
            </button>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 hover:bg-slate-100 text-red-600"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
