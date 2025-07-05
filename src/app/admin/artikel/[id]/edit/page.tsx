import EditArtikelForm from "@/app/components/EditArtikelForm";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function EditArtikelPage({
  params,
}: {
  params: { id: string };
}) {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const { data: artikel, error } = await supabase
    .from("artikel")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error || !artikel) {
    return <p>Artikel tidak ditemukan.</p>;
  }

  return (
    <div className="max-w-full bg-white mx-4 md:mx-12 lg:mx-72 my-6 p-6">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-base">
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/admin/artikel" className="text-blue-600 hover:underline">
            ← Kembali ke Detail Artikel
          </Link>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-4">Edit Artikel</h1>
      <EditArtikelForm artikel={artikel} />
    </div>
  );
}
