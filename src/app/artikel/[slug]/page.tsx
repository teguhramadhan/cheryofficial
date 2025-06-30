import Footer from "@/app/components/homepage/Footer";
import Navbar from "@/app/components/homepage/Navbar";
import { notFound } from "next/navigation";

export default async function ArticleDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await the params since it's now a Promise
  const { slug } = await params;

  const articles = [
    {
      slug: "tips-merawat-mobil",
      title: "Tips Merawat Mobil Agar Awet",
      content: "Ini isi artikelnya, nanti bisa dynamic atau dari CMS...",
    },
    {
      slug: "promo-mobil-chery-2025",
      title: "Promo Mobil Chery Terbaru 2025",
      content: "Promo mobil Chery terbaru dengan penawaran spesial...",
    },
  ];

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <section className="px-6 md:px-20 lg:px-32 pt-[72px] md:pt-[96px] lg:pt-[96px] pb-20 text-zinc-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
        <div className="text-zinc-700 leading-relaxed">{article.content}</div>
      </section>
      <Footer />
    </>
  );
}
