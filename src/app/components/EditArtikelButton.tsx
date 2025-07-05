// app/components/EditArtikelButton.tsx

"use client";

import Link from "next/link";

export default function EditArtikelButton({
  artikelId,
}: {
  artikelId: string;
}) {
  return (
    <Link
      href={`/admin/artikel/${artikelId}/edit`}
      className="flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md"
    >
      Edit Artikel
    </Link>
  );
}
