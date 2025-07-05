"use client";

import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Editor from "@/app/components/Editor";
import Link from "next/link";

export default function CreateArtikelPage() {
  const supabase = createPagesBrowserClient();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title || !content) {
      alert("Judul dan konten wajib diisi.");
      return;
    }

    setLoading(true);

    let imageUrl = null;

    // 1. Upload gambar kalau ada
    if (imageFile) {
      const fileExt = imageFile.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("artikel-images") // nama bucket kamu
        .upload(fileName, imageFile);

      if (uploadError) {
        alert("Gagal upload gambar: " + uploadError.message);
        setLoading(false);
        return;
      }

      // Dapatkan public URL
      const { data: publicUrl } = supabase.storage
        .from("artikel-images")
        .getPublicUrl(fileName);

      imageUrl = publicUrl.publicUrl;
    }

    // 2. Insert ke tabel artikel
    const { error } = await supabase.from("artikel").insert({
      title,
      content,
      image_url: imageUrl,
    });

    if (error) {
      alert("Gagal simpan artikel: " + error.message);
    } else {
      alert("Artikel berhasil dibuat!");
      router.push("/admin/artikel");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="flex items-center gap-4 mb-4 text-lg">
        <Link href="/admin/artikel" className="text-blue-600 hover:underline">
          ← Kembali ke Daftar Artikel
        </Link>
      </div>

      <div className="bg-white w-full p-8">
        <h1 className="text-4xl font-bold mb-4">Buat Artikel</h1>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Judul Artikel"
          className="border py-4 px-6 w-full mb-4 rounded-lg
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />

        <Editor content={content} onChange={setContent} />

        <div className="mt-4">
          <label className="block mb-2 font-medium">Upload Gambar</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImageFile(e.target.files ? e.target.files[0] : null)
            }
            className="block"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          {loading ? "Menyimpan..." : "Simpan Artikel"}
        </button>
      </div>
    </>
  );
}
