import BlogOverview from "./components/homepage/BlogOverview";
import CarListSection from "./components/homepage/CarList";
import DealerLocation from "./components/homepage/DealerLocation";
import Features from "./components/homepage/Features";
import Footer from "./components/homepage/Footer";
import Hero from "./components/homepage/Hero";
import LeasingSupportSection from "./components/homepage/LeasingPartner";
import Navbar from "./components/homepage/Navbar";
import SalesProfile from "./components/homepage/SalesProfile";

export default function Home() {
  return (
    <main className="font-inter">
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
  );
}
