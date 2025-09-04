import { cn } from "@/lib/utils";
import MenuBar from "@/components/navigation/menu";
import HeroVideoLayout from "@/components/general/hero-video-layout";
import ProductHeroSection from "@/components/product/product-hero-section";

import ProductCard from "@/components/product/product-card";
import { UseCases } from "@/components/product/use-cases";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroVideoLayout
        video={
          "https://player.vimeo.com/progressive_redirect/playback/1099358534/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1794566840&signature=af0d680d7a20b1b55456ed637fca0ab1e4394d1a4cb93b834f0870f32f365e5f"
        }
      >
        <MenuBar />
        <ProductHeroSection />
      </HeroVideoLayout>

      {/* Use cases */}
      <UseCases />

      {/* Sticky Section */}
      <div
        className={cn(
          "flex flex-col gap-20 items-center justify-center w-full py-20"
        )}
      >
        <ProductCard
          title="EP500PRO"
          model={"Power Station"}
          productImage={
            "https://impro.usercontent.one/appid/oneComWsb/domain/proytenamg.com/media/proytenamg.com/onewebmedia/Schermata%202023-03-01%20alle%2011.01.32.png?etag=%22169d86-63ff22aa%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=407%2B518"
          }
          capacity={["3000W / 5120Wh", "6000W / 10240Wh"]}
          capacityHeader="AC Output/Capacity"
          pdf={"/document/Bluetti Products 2022.pdf"}
        />

        <ProductCard
          title="Industrial Salt Storage"
          model={"Proyten"}
          productImage={
            "https://impro.usercontent.one/appid/oneComWsb/domain/proytenamg.com/media/proytenamg.com/onewebmedia/salt_storage.jpg?etag=W%2F%22102a8-64147352%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=625%2B414&quality=85"
          }
          capacity={["3000W / 5120Wh", "6000W / 10240Wh"]}
          capacityHeader="AC Output/Capacity"
          pdf={"/document/Bluetti Products 2022.pdf"}
        />

        <ProductCard
          title="Industrial"
          model={"Rack"}
          productImage={
            "https://impro.usercontent.one/appid/oneComWsb/domain/proytenamg.com/media/proytenamg.com/onewebmedia/industrial_rack.jpg?etag=%222346f-63ff180c%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=293%2B254&quality=85"
          }
          capacity={["3000W / 5120Wh", "6000W / 10240Wh"]}
          capacityHeader="AC Output/Capacity"
          pdf={"/document/Bluetti Products 2022.pdf"}
        />
      </div>
    </div>
  );
}
