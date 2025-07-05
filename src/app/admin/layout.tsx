// src/app/admin/layout.tsx

import { ReactNode } from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminNavbar from "@/app/components/AdminNavbar";
import AdminFooter from "../components/AdminFooter";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });

  // Pastikan user login
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <section className="min-h-screen flex flex-col bg-slate-100">
      {/* Navbar */}
      <AdminNavbar email={user.email || "No Email"} />

      {/* Konten */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <AdminFooter />
    </section>
  );
}
