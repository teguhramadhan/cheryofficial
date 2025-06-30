import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Tips Merawat Mobil Agar Awet",
    slug: "tips-merawat-mobil",
    excerpt: "Pelajari cara merawat mobil agar tetap prima dan tahan lama...",
  },
  {
    id: 2,
    title: "Promo Mobil Chery Terbaru 2025",
    slug: "promo-mobil-chery-2025",
    excerpt: "Lihat daftar promo terbaru mobil Chery dengan diskon spesial...",
  },
];

export default function ContentArtikel() {
  return (
    <section className="px-6 md:px-20 lg:px-32">
      {/* LIST ARTIKEL */}
      <div className="space-y-8 pt-4 md:pt-8 lg:pt-12">
        {articles.map((article) => (
          <article key={article.id} className="border-b pb-6">
            <Link href={`/article/${article.slug}`}>
              <h2 className="text-2xl font-bold text-blue-700 hover:underline">
                {article.title}
              </h2>
            </Link>
            <p className="text-zinc-600 mt-2">{article.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
