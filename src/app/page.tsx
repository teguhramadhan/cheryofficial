import Image from "next/image";
import BlogOverview from "./components/homepage/BlogOverview";
import CarListSection from "./components/homepage/CarList";
import DealerLocation from "./components/homepage/DealerLocation";
import Features from "./components/homepage/Features";
import Footer from "./components/homepage/Footer";
import Hero from "./components/homepage/Hero";
import LeasingSupportSection from "./components/homepage/LeasingPartner";
import Navbar from "./components/homepage/Navbar";
import SalesProfile from "./components/homepage/SalesProfile";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <>
      <main className="font-inter">
        {/* Tombol WhatsApp Floating */}
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed left-6 bottom-6 text-white flex items-center justify-center transition-colors z-50"
        >
          <Image
            src="/images/wa_ic.png"
            alt="WhatsApp Icon"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        </a>

        {/* Tombol ScrollToTop */}
        <ScrollToTop />

        <Navbar />
        <Hero />
        <CarListSection />
        <Features />
        <SalesProfile />
        <DealerLocation />
        <BlogOverview />
        <LeasingSupportSection />
        <Footer />
      </main>
    </>
  );
}
