import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function AdminDashboard() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <main className="bg-white py-12 mt-6 px-6">
      <h1 className="text-3xl font-bold mb-4">
        Selamat Datang di Admin Dashboard
      </h1>
      <p>Email: {session?.user?.email}</p>
    </main>
  );
}
