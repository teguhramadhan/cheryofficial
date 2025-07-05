import Link from "next/link";
import Image from "next/image";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import SuccessAlert from "@/app/components/SuccessAlert";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ProductPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;

  // ✅ Pass cookies function directly to Supabase
  const supabase = createServerComponentClient({
    cookies,
  });

  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    return <p className="text-red-500 p-4">Error: {error.message}</p>;
  }

  return (
    <div className="max-w-full bg-white mx-4 md:mx-12 lg:mx-72 my-6 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Daftar Produk</h1>
        <Link
          href="/admin/product/createproduct"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Tambah Produk
        </Link>
      </div>

      {resolvedSearchParams.success &&
        typeof resolvedSearchParams.success === "string" && (
          <SuccessAlert message={resolvedSearchParams.success} />
        )}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px] border border-slate-300 text-sm">
          <thead>
            <tr className="bg-slate-200 text-center">
              <th className="p-3 border whitespace-nowrap">Gambar</th>
              <th className="p-3 border whitespace-nowrap">Nama</th>
              <th className="p-3 border whitespace-nowrap">Kategori</th>
              <th className="p-3 border whitespace-nowrap">Model</th>
              <th className="p-3 border whitespace-nowrap">Type</th>
              <th className="p-3 border whitespace-nowrap">Harga</th>
              <th className="p-3 border whitespace-nowrap">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr
                key={product.id}
                className="border hover:bg-slate-50 text-center"
              >
                <td className="p-3 border">
                  <div className="flex justify-center">
                    {product.gambar_url ? (
                      <Image
                        src={product.gambar_url}
                        alt={product.nama_product}
                        width={80}
                        height={80}
                        className="object-cover rounded"
                      />
                    ) : (
                      <span className="text-gray-500">-</span>
                    )}
                  </div>
                </td>
                <td className="p-3 border whitespace-nowrap">
                  {product.nama_product}
                </td>
                <td className="p-3 border whitespace-nowrap">
                  {product.kategori_mobil}
                </td>
                <td className="p-3 border whitespace-nowrap">
                  {product.model_mobil}
                </td>
                <td className="p-3 border whitespace-nowrap">
                  {product.type_mobil}
                </td>
                <td className="p-3 border whitespace-nowrap">
                  Rp {product.harga?.toLocaleString()}
                </td>
                <td className="p-3 border whitespace-nowrap">
                  <Link
                    href={`/admin/product/editproduct/${product.id}`}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
