import Footer from "../components/homepage/Footer";
import Navbar from "../components/homepage/Navbar";
import GaleriContent from "./content";

export default function Home() {
  return (
    <main className="font-inter">
      <Navbar />
      <GaleriContent />
      <Footer />
    </main>
  );
}
