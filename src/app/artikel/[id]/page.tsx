import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/homepage/Navbar";
import Footer from "@/app/components/homepage/Footer";

export default async function DetailArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createServerComponentClient({ cookies });

  const { data: artikel, error } = await supabase
    .from("artikel")
    .select("*")
    .eq("id", params.id)
    .single();

  const imageUrl = artikel?.image_url
    ? artikel.image_url.startsWith("http")
      ? artikel.image_url
      : `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${artikel.image_url}`
    : null;

  return (
    <>
      <Navbar />

      <section className="min-h-screen pb-20 text-zinc-800">
        {/* HERO */}
        <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] mb-12 overflow-hidden">
          <Image
            src="/images/hero/hero-2.jpg"
            alt="Hero Artikel"
            fill
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20 lg:px-32 text-white">
            <nav className="text-sm mb-2">
              <ol className="flex space-x-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="font-medium">Artikel</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold">Artikel Terbaru</h1>
          </div>
        </div>

        {/* DETAIL */}
        {error || !artikel ? (
          <section className="px-6 md:px-20 lg:px-32 py-20 text-center">
            <h1 className="text-3xl font-bold mb-4">
              Artikel tidak ditemukan.
            </h1>
            <Link
              href="/artikel"
              className="inline-block text-blue-600 hover:underline mt-4"
            >
              ← Kembali ke Daftar Artikel
            </Link>
          </section>
        ) : (
          <section className="px-6 md:px-20 lg:px-32 py-12 text-zinc-800">
            <Link
              href="/artikel"
              className="inline-block text-blue-600 hover:underline text-sm mb-6"
            >
              ← Kembali ke Artikel
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {artikel.title}
            </h1>

            <p className="text-sm text-zinc-500 mb-6">
              Dipublikasikan:{" "}
              {new Date(artikel.created_at).toLocaleString("id-ID", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </p>

            {imageUrl && (
              <div className="mb-8">
                <Image
                  src={imageUrl}
                  alt={artikel.title}
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            )}

            <div
              className="prose prose-xl text-justify max-w-none text-zinc-800"
              dangerouslySetInnerHTML={{ __html: artikel.content }}
            />
          </section>
        )}
      </section>

      <Footer />
    </>
  );
}
