"use client";

import Link from "next/link";
import Image from "next/image"; // pakai Image Next.js
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `block px-4 py-2 rounded hover:bg-slate-200 ${
      pathname === path ? "font-bold bg-slate-200" : ""
    }`;

  return (
    <aside className="max-w-full bg-white shadow-none md:shadow-md h-screen sticky top-0 px-2 md:px-8 py-12 flex flex-col">
      {/* Logo */}
      <div className="mb-8 flex justify-center">
        <Link href="/admin">
          <Image
            src="/images/logo-cherry.png"
            alt="Logo Cherry"
            width={150}
            height={50}
            priority
          />
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-2">
        <Link href="/admin" className={linkClasses("/admin")}>
          Dashboard
        </Link>
        <Link href="/admin/product" className={linkClasses("/admin/product")}>
          Product
        </Link>
        <Link href="/admin/artikel" className={linkClasses("/admin/artikel")}>
          Artikel
        </Link>
      </nav>
    </aside>
  );
}
