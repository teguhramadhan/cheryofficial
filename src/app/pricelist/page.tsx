import Navbar from "../components/homepage/Navbar";
import TablePriceList from "./tablepricelist";
import Footer from "../components/homepage/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-inter">
      <Navbar />
      {/* BREADCRUMB + JUDUL DENGAN BACKGROUND */}
      <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] mb-12 overflow-hidden rounded-lg">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-1.jpg" // Ganti path sesuai punyamu
            alt="Hero Artikel"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20 lg:px-32 text-white">
          {/* BREADCRUMB */}
          <nav className="text-sm mb-2">
            <ol className="flex space-x-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="font-medium">Price List</li>
            </ol>
          </nav>

          {/* JUDUL */}
          <h1 className="text-3xl md:text-4xl font-bold">Price List</h1>
        </div>
      </div>
      <TablePriceList />
      <Footer />
    </main>
  );
}
