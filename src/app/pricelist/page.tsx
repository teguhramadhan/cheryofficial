import Navbar from "../components/homepage/Navbar";
import TablePriceList from "./tablepricelist";
import Footer from "../components/homepage/Footer";
import HeroPriceList from "./hero";

export default function Home() {
  return (
    <main className="font-inter">
      <Navbar />
      <HeroPriceList />
      <TablePriceList />
      <Footer />
    </main>
  );
}
