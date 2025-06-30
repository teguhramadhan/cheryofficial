"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function CreateProductPage() {
  const router = useRouter();
  const [step, setStep] = useState<"form" | "review">("form");

  const [form, setForm] = useState({
    nama_product: "",
    desc_product: "",
    kategori_mobil: "",
    model_mobil: "",
    type_mobil: "",
    harga: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
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
      setPreviewUrl(URL.createObjectURL(selectedFile)); // preview
    }
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError("File gambar wajib diunggah.");
      return;
    }
    setError("");
    setStep("review");
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    let imageUrl = "";

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

    const { error: insertError } = await supabase.from("products").insert([
      {
        nama_product: form.nama_product,
        desc_product: form.desc_product,
        kategori_mobil: form.kategori_mobil,
        model_mobil: form.model_mobil,
        type_mobil: form.type_mobil,
        harga: Number(form.harga),
        gambar_url: imageUrl,
      },
    ]);

    if (insertError) {
      setError(insertError.message);
    } else {
      router.push("/admin/product");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">
        {step === "form" ? "Tambah Produk Baru" : "Review Produk"}
      </h1>

      {/* ✅ Breadcrumb */}
      <nav className="text-sm mb-4 text-gray-600">
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
          <li className="text-gray-800 font-medium">Tambah Produk</li>
        </ol>
      </nav>

      {/* ✅ Stepper */}
      <div className="flex items-center justify-center mb-8">
        {/* Step 1 */}
        <div className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
              step === "form" ? "bg-blue-600" : "bg-green-600"
            }`}
          >
            {step === "review" ? "✓" : "1"}
          </div>
          <span className="ml-2 text-sm">Form Input</span>
        </div>

        {/* Line */}
        <div className="flex-auto border-t-2 mx-4 border-gray-300"></div>

        {/* Step 2 */}
        <div className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
              step === "review" ? "bg-blue-600" : "bg-gray-400"
            }`}
          >
            2
          </div>
          <span className="ml-2 text-sm">Review</span>
        </div>
      </div>

      {/* ✅ Form Input */}
      {step === "form" && (
        <form onSubmit={handleNextStep} className="flex flex-col gap-4">
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
            required
          />

          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Lanjut Review
          </button>
        </form>
      )}

      {/* ✅ Review */}
      {step === "review" && (
        <div className="flex flex-col gap-4">
          <div>
            <p>
              <strong>Nama Produk:</strong> {form.nama_product}
            </p>
            <p>
              <strong>Deskripsi:</strong> {form.desc_product}
            </p>
            <p>
              <strong>Kategori Mobil:</strong> {form.kategori_mobil}
            </p>
            <p>
              <strong>Model Mobil:</strong> {form.model_mobil}
            </p>
            <p>
              <strong>Type Mobil:</strong> {form.type_mobil}
            </p>
            <p>
              <strong>Harga:</strong> Rp {Number(form.harga).toLocaleString()}
            </p>
            {previewUrl && (
              <Image
                src={previewUrl}
                alt="Preview"
                width={288} // 72 * 4 (karena Next.js pakai px, bukan rem/tailwind)
                height={200} // atau tinggi perkiraan kamu, bisa disesuaikan
                className="object-cover rounded mt-2"
              />
            )}
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <div className="flex gap-2">
            <button
              onClick={() => setStep("form")}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            >
              Kembali Edit
            </button>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
            >
              {loading ? "Menyimpan..." : "Konfirmasi & Simpan"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
