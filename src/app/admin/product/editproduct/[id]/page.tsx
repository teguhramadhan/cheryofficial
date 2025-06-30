import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import EditProductForm from "@/app/components/EditProductForm"; // ⬅️ Client Component

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>; // ⬅️ Changed to Promise
}) {
  // Await the params Promise
  const { id } = await params; // ⬅️ Await params to get the actual values

  const supabase = createServerComponentClient({ cookies });

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id) // ⬅️ Use the awaited id value
    .single();

  if (error || !product) {
    notFound();
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Produk</h1>

      {/* Breadcrumb */}
      <nav className="text-sm mb-6 text-gray-600">
        <ol className="flex space-x-2">
          <li>
            <Link href="/" className="hover:underline text-blue-700">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/admin" className="hover:underline text-blue-700">
              Admin
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/admin/product"
              className="hover:underline text-blue-700"
            >
              Produk
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-800 font-medium">Edit Produk</li>
        </ol>
      </nav>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT: Detail */}
        <div className="p-4 border rounded bg-white shadow">
          <h2 className="text-lg font-semibold mb-2">Detail Produk Saat Ini</h2>
          <p className="mb-1">
            <strong>Nama:</strong> {product.nama_product}
          </p>
          <p className="mb-1">
            <strong>Deskripsi:</strong> {product.desc_product}
          </p>
          <p className="mb-1">
            <strong>Kategori:</strong> {product.kategori_mobil}
          </p>
          <p className="mb-1">
            <strong>Model:</strong> {product.model_mobil}
          </p>
          <p className="mb-1">
            <strong>Type:</strong> {product.type_mobil}
          </p>
          <p className="mb-1">
            <strong>Harga:</strong> Rp {product.harga?.toLocaleString()}
          </p>
          {product.gambar_url && (
            <Image
              src={product.gambar_url}
              alt={product.nama_product}
              width={400}
              height={300}
              className="rounded border mt-4"
            />
          )}
        </div>

        {/* RIGHT: Form Edit */}
        <div className="p-4 border rounded bg-white shadow">
          <h2 className="text-lg font-semibold mb-2">Edit Produk</h2>
          <EditProductForm product={product} />{" "}
          {/* ⬅️ Panggil komponen Client */}
        </div>
      </div>

      <Link
        href="/admin/product"
        className="inline-block mt-8 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded"
      >
        ← Kembali ke Daftar Produk
      </Link>
    </div>
  );
}
