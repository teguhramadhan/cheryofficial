"use client";

import { useState } from "react";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import EditEditor from "./EditEditor";
import Image from "next/image";

interface Artikel {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
}
export default function EditArtikelForm({ artikel }: { artikel: Artikel }) {
  const [title, setTitle] = useState(artikel.title);
  const [editorContent, setEditorContent] = useState(artikel.content);
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const supabase = createPagesBrowserClient();

  const imagePreviewUrl = artikel.image_url?.startsWith("http")
    ? artikel.image_url
    : `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${artikel.image_url}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      let image_url = artikel.image_url;

      if (file) {
        if (artikel.image_url) {
          const oldImagePath = artikel.image_url.replace("artikel-images/", "");
          await supabase.storage.from("artikel-images").remove([oldImagePath]);
        }

        const fileName = `${Date.now()}_${file.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("artikel-images")
          .upload(fileName, file);

        if (uploadError) {
          alert("Gagal upload gambar: " + uploadError.message);
          return;
        }

        if (uploadData) {
          image_url = `artikel-images/${uploadData.path}`;
        }
      }

      const { error } = await supabase
        .from("artikel")
        .update({
          title: title.trim(),
          content: editorContent,
          image_url,
        })
        .eq("id", artikel.id);

      if (error) {
        alert("Gagal update: " + error.message);
      } else {
        alert("Artikel berhasil diupdate!");
        router.push("/admin/artikel");
      }
    } catch (err) {
      alert("Terjadi kesalahan: " + (err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 max-w-full p-6 bg-white border rounded-md"
    >
      <div>
        <label className="block mb-2 font-medium text-gray-800">
          Judul Artikel
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Judul Artikel"
          className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-800">Konten</label>
        <EditEditor content={editorContent} onChange={setEditorContent} />
      </div>

      <div className="flex flex-col gap-4">
        {artikel.image_url && !file && (
          <div>
            <label className="block mb-2 font-medium text-gray-800">
              Gambar Saat Ini
            </label>
            <div className="w-full max-w-lg rounded border border-gray-300 relative aspect-[16/9]">
              <Image
                src={imagePreviewUrl || ""}
                alt="Current Preview"
                fill
                className="object-contain rounded"
              />
            </div>
          </div>
        )}
        {file && (
          <div>
            <label className="block mb-2 font-medium text-gray-800">
              Preview Gambar Baru
            </label>
            <div className="w-full max-w-lg rounded border border-gray-300 relative aspect-[16/9]">
              <Image
                src={URL.createObjectURL(file)}
                alt="New Preview"
                fill
                className="object-contain rounded"
              />
            </div>
          </div>
        )}
        <div>
          <label className="block mb-2 font-medium text-gray-800">
            Ganti Gambar
          </label>
          <input
            type="file"
            accept="image/*"
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
              file:rounded file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100
            "
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          {isSubmitting ? "Menyimpan..." : "Simpan Perubahan"}
        </button>

        <button
          type="button"
          onClick={() => router.push("/admin/artikel")}
          className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          Batal
        </button>
      </div>
    </form>
  );
}
