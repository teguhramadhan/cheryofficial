import DeleteArtikelButton from "@/app/components/DeleteArtikelButton";
import EditArtikelButton from "@/app/components/EditArtikelButton";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function ArtikelDetailPage({
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

  const imageUrl = artikel.image_url
    ? artikel.image_url.startsWith("http")
      ? artikel.image_url
      : `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${artikel.image_url}`
    : null;

  return (
    <main className="max-w-full bg-white mx-4 md:mx-12 lg:mx-72 my-6 p-6">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-base">
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/admin/artikel" className="text-blue-600 hover:underline">
            ← Kembali ke Daftar Artikel
          </Link>
        </div>

        <div className="flex flex-wrap gap-3">
          <EditArtikelButton artikelId={artikel.id} />
          <DeleteArtikelButton artikelId={artikel.id} />
        </div>
      </div>
      <p className="text-gray-500 italic my-6">
        Preview:{" "}
        <span className="font-semibold text-blue-600">{artikel.title}</span>
      </p>

      <h1 className="text-4xl font-bold mb-6">{artikel.title}</h1>

      {imageUrl && (
        <div className="mb-8">
          <Image
            src={imageUrl}
            alt={artikel.title || "Gambar Artikel"}
            width={1200}
            height={600}
            className="rounded-lg w-full h-auto object-cover border border-gray-200"
          />
        </div>
      )}

      <div
        className="prose prose-md w-full max-w-none text-md"
        dangerouslySetInnerHTML={{ __html: artikel.content }}
      />
    </main>
  );
}
