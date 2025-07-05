import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function ArtikelListPage() {
  const supabase = createServerComponentClient({
    cookies: () => cookies(),
  });

  const { data: artikels, error } = await supabase
    .from("artikel")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="max-w-full bg-white mx-4 md:mx-12 lg:mx-72 my-6 p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Daftar Artikel</h1>
        <Link
          href="/admin/artikel/create"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          + Tambah Artikel
        </Link>
      </div>

      {artikels?.length === 0 ? (
        <p className="text-gray-500">Belum ada artikel.</p>
      ) : (
        <div className="overflow-x-auto border rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Judul
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Cuplikan Konten
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Tanggal Dibuat
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {artikels?.map((artikel) => (
                <tr key={artikel.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    {artikel.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 max-w-xs truncate">
                    {artikel.content
                      ? artikel.content.replace(/<[^>]+>/g, "").slice(0, 50) +
                        "..."
                      : "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {new Date(artikel.created_at).toLocaleString("id-ID", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                      timeZone: "Asia/Jakarta",
                    })}{" "}
                    WIB
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex gap-3">
                    <Link
                      href={`/admin/artikel/${artikel.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      Lihat
                    </Link>
                    <Link
                      href={`/admin/artikel/${artikel.id}/edit`}
                      className="text-green-600 hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
