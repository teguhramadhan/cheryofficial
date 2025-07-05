import { supabaseServer } from "@/app/lib/supabaseServerClient";

export default async function BlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = supabaseServer(); // <- pakai yang server!

  const { data: post } = await supabase
    .from("artikel") // jangan lupa, tabelnya `artikel` kan? bukan `posts`!
    .select("*")
    .eq("id", params.id)
    .single();

  if (!post) return <p>Artikel tidak ditemukan</p>;

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </div>
  );
}
