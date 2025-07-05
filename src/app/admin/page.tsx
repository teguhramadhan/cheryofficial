import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function AdminDashboard() {
  // 🗝️ Ambil cookiesnya sekali, udah sync
  const cookieStore = cookies();

  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  });

  // 🔒 Pakai getUser() BUKAN getSession()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return (
    <>
      <main className="max-w-full bg-white mx-4 md:mx-12 lg:mx-72 my-6 p-6">
        <h1 className="text-3xl font-bold mb-3">
          Selamat Datang di Admin Dashboard
        </h1>
        <p className="mt-3 text-emerald-600">
          Email: {user?.email || "User tidak ditemukan"}
        </p>
      </main>
    </>
  );
}
