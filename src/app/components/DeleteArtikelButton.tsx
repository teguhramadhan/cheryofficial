"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface DeleteArtikelButtonProps {
  artikelId: string;
}

export default function DeleteArtikelButton({
  artikelId,
}: DeleteArtikelButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Apakah kamu yakin ingin menghapus artikel ini?"
    );
    if (!confirmDelete) return;

    setLoading(true);

    try {
      const res = await fetch(`/admin/artikel/${artikelId}/delete`, {
        method: "POST",
      });

      if (res.ok) {
        alert("Artikel berhasil dihapus!");
        router.push("/admin/artikel");
      } else {
        const data = await res.text();
        alert("Gagal menghapus artikel: " + data);
      }
    } catch (err) {
      alert("Terjadi kesalahan: " + (err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
    >
      {loading ? "Menghapus..." : "Hapus Artikel"}
    </button>
  );
}
