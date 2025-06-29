import Image from "next/image";

export default function HeroPriceList() {
  return (
    <div className="w-full pt-16 mb-12 overflow-hidden">
      <Image
        src="/images/hero/hero-2.jpg"
        alt="Hero Mobil Chery"
        width={1200} // sesuaikan dengan resolusi asli
        height={600} // sesuaikan dengan resolusi asli
        className="w-full h-96 object-cover"
        priority
      />
    </div>
  );
}
