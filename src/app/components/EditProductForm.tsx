"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";
import Image from "next/image";

interface Product {
  id: string; // atau number, sesuaikan dengan DB
  nama_product: string;
  desc_product: string;
  kategori_mobil: string;
  model_mobil: string;
  type_mobil: string;
  harga: number | string; // tergantung format DB
  gambar_url?: string; // optional kalau bisa kosong
}

export default function EditProductForm({ product }: { product: Product }) {
  const router = useRouter();

  const [form, setForm] = useState({
    nama_product: product.nama_product || "",
    desc_product: product.desc_product || "",
    kategori_mobil: product.kategori_mobil || "",
    model_mobil: product.model_mobil || "",
    type_mobil: product.type_mobil || "",
    harga: product.harga || "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>(
    product.gambar_url || ""
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    let imageUrl = previewUrl;

    if (file) {
      const { data, error: uploadError } = await supabase.storage
        .from("product-image")
        .upload(`public/${Date.now()}-${file.name}`, file);

      if (uploadError) {
        setError(uploadError.message);
        setLoading(false);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from("product-image")
        .getPublicUrl(data.path);

      imageUrl = publicUrlData.publicUrl;
    }

    const { error: updateError } = await supabase
      .from("products")
      .update({
        nama_product: form.nama_product,
        desc_product: form.desc_product,
        kategori_mobil: form.kategori_mobil,
        model_mobil: form.model_mobil,
        type_mobil: form.type_mobil,
        harga: Number(form.harga),
        gambar_url: imageUrl,
      })
      .eq("id", product.id);

    if (updateError) {
      setError(updateError.message);
    } else {
      router.push("/admin/product?success=Produk berhasil diperbarui!");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        name="nama_product"
        value={form.nama_product}
        onChange={handleChange}
        placeholder="Nama Produk"
        className="border p-2 rounded"
        required
      />

      <textarea
        name="desc_product"
        value={form.desc_product}
        onChange={handleChange}
        placeholder="Deskripsi Produk"
        className="border p-2 rounded"
        required
      />

      <input
        name="kategori_mobil"
        value={form.kategori_mobil}
        onChange={handleChange}
        placeholder="Kategori Mobil"
        className="border p-2 rounded"
        required
      />

      <input
        name="model_mobil"
        value={form.model_mobil}
        onChange={handleChange}
        placeholder="Model Mobil"
        className="border p-2 rounded"
        required
      />

      <input
        name="type_mobil"
        value={form.type_mobil}
        onChange={handleChange}
        placeholder="Type Mobil"
        className="border p-2 rounded"
        required
      />

      <input
        name="harga"
        type="number"
        value={form.harga}
        onChange={handleChange}
        placeholder="Harga"
        className="border p-2 rounded"
        required
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="border p-2 rounded"
      />

      {previewUrl && (
        <div className="relative w-full aspect-[4/3] rounded overflow-hidden">
          <Image
            src={previewUrl}
            alt="Preview"
            fill
            className="object-cover rounded"
            sizes="100vw"
            unoptimized
          />
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? "Menyimpan..." : "Simpan Perubahan"}
      </button>
    </form>
  );
}
