import Footer from "@/components/navigation/footer";
import MenuBar from "@/components/navigation/menu";
import Services from "@/components/home/services";
import HeroSection from "@/components/home/hero-section";
import AboutUsSection from "@/components/home/aboutus-section";
import ProductSection from "@/components/home/product-section";
import NewsSection from "@/components/home/news-section";

export default function Home() {
  return (
    <div className="space-y-24 2xl:space-y-32 3xl:space-y-40">
      {/* Hero Section */}
      <div className="relative bg-[url('/images/bg-1.jpg')] bg-cover bg-no-repeat bg-center md:h-[40rem] 2xl:h-[55rem] 3xl:h-[60rem] p-6 2xl:p-8 3xl:p-12">
        {/* Gradient behind content */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-slate-800/50 to-gray-700/90 z-0"></div>

        {/* Content above gradient */}
        <div className="relative z-10">
          <MenuBar />
          <HeroSection />
        </div>
      </div>

      <AboutUsSection />
      <div className="bg-gray-50">
        <Services />
      </div>

      <ProductSection />

      <NewsSection />
      <Footer />
    </div>
  );
}
