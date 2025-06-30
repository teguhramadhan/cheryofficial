"use client";

import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminContentNavbar from "./AdminNavbar";
import { AnimatePresence, motion } from "framer-motion";

export default function AdminShell({
  children,
  email,
}: {
  children: React.ReactNode;
  email: string;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <section className="bg-slate-50 min-h-screen flex">
      {/* ✅ Desktop Sidebar: selalu tampil di md ke atas */}
      <div className="hidden md:block">
        <AdminSidebar />
      </div>

      {/* ✅ Mobile Sidebar Overlay: cuma render di bawah md */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex md:hidden" // md:hidden biar di md ke atas gak muncul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Sidebar Panel */}
            <motion.div
              className="relative w-ful bg-white shadow-md h-full px-4"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "tween" }}
            >
              <AdminSidebar />
            </motion.div>

            {/* Backdrop */}
            <div
              className="flex-1 bg-black bg-opacity-50"
              onClick={() => setIsSidebarOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Main Content */}
      <div className="flex-1 flex flex-col">
        <AdminContentNavbar
          email={email}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <main className="px-6 md:px-12 py-8 flex-1">{children}</main>
      </div>
    </section>
  );
}
