import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function ContentArtikel() {
  const supabase = createServerComponentClient({ cookies });

  const { data: artikels } = await supabase
    .from("artikel")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <section className="px-6 md:px-20 lg:px-32">
      {/* LIST ARTIKEL */}
      <div className="space-y-8 pt-4 md:pt-8 lg:pt-12">
        {artikels?.length === 0 && (
          <p className="text-gray-500">Belum ada artikel.</p>
        )}

        {artikels?.map((a) => (
          <article
            key={a.id}
            className="border-b pb-6 transition hover:bg-zinc-50"
          >
            <Link href={`/artikel/${a.id}`}>
              <h2 className="text-2xl font-bold text-blue-700 hover:underline">
                {a.title}
              </h2>
            </Link>
            <p className="text-zinc-600 mt-2 line-clamp-2">
              {/* Hanya kalimat pertama */}
              {a.content
                ?.replace(/<[^>]+>/g, "") // strip HTML tag
                .slice(0, 120) + "..."}
            </p>
            <p className="text-sm text-zinc-500 mt-1">
              {new Date(a.created_at).toLocaleString("id-ID", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
