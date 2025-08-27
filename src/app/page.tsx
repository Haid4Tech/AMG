import Footer from "@/components/navigation/footer";
import MenuBar from "@/components/navigation/menu";
import Services from "@/components/home/services";
import HeroSection from "@/components/home/hero-section";
import AboutUsSection from "@/components/home/aboutus-section";
import ProductSection from "@/components/home/product-section";
import NewsSection from "@/components/home/news-section";
import ContactSection from "@/components/home/contact-section";
import HeroLayout from "@/components/general/hero-layout";

export default function Home() {
  return (
    <div className="space-y-24 2xl:space-y-32 3xl:space-y-40">
      {/* Hero Section */}
      <HeroLayout bgImage="/images/bg-1.jpg">
        <MenuBar />
        <HeroSection />
      </HeroLayout>

      <AboutUsSection />
      <div className="bg-gray-50">
        <Services />
      </div>

      <ProductSection />
      <div className="bg-gray-50">
        <NewsSection />
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
}
