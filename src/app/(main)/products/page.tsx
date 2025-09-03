import Image from "next/image";
import MenuBar from "@/components/navigation/menu";
import HeroVideoLayout from "@/components/general/hero-video-layout";
import ProductHeroSection from "@/components/product/product-hero-section";

import ProductCard from "@/components/product/product-card";
import { cn } from "@/lib/utils";
import { pagePadding } from "@/common/styles";

export default function ProductsPage() {
  const productCategories = [
    {
      title: "Solar Panels",
      description:
        "High-efficiency photovoltaic modules designed for African climate conditions and energy needs",
      image: "/products/solar_lil.png",
      features: [
        "High Efficiency",
        "Weather Resistant",
        "Long Lifespan",
        "Easy Installation",
      ],
      applications: [
        "Residential",
        "Commercial",
        "Industrial",
        "Off-Grid Systems",
      ],
    },
    {
      title: "Energy Storage Systems",
      description:
        "Advanced battery solutions for reliable energy storage and backup power applications",
      image: "/products/solar2.png",
      features: [
        "Lithium-Ion Technology",
        "Smart Management",
        "High Capacity",
        "Fast Charging",
      ],
      applications: [
        "Home Storage",
        "Commercial Backup",
        "Solar Integration",
        "Grid Support",
      ],
    },
    {
      title: "AMG Proyten Hybrid Synchronizer",
      description:
        "Revolutionary machine for hybrid energy synchronization and management",
      image: "/products/solar_lil.png",
      features: [
        "Hybrid Synchronization",
        "Smart Control",
        "Energy Optimization",
        "Real-time Monitoring",
      ],
      applications: [
        "Hybrid Systems",
        "Grid Integration",
        "Industrial Power",
        "Micro-Grids",
      ],
    },
    {
      title: "Energy Management Solutions",
      description:
        "Comprehensive systems for monitoring, controlling, and optimizing energy consumption",
      image: "/products/solar2.png",
      features: [
        "Smart Monitoring",
        "Automated Control",
        "Performance Analytics",
        "Remote Management",
      ],
      applications: [
        "Smart Homes",
        "Commercial Buildings",
        "Industrial Facilities",
        "Utility Networks",
      ],
    },
  ];

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

      {/* Product Categories */}
      <div className={cn(pagePadding, "space-y-12")}>
        <h3 className="font-bold text-5xl text-center">
          What Kinds of Products Do we have
        </h3>
        <div className={"grid grid-cols-2 gap-6"}>
          <div className="space-y-6 rounded-[2rem] p-5">
            <h1 className="font-bold text-lg lg:text-2xl 2xl:text-4xl text-main-800">
              Solar Panels & Turbines
            </h1>

            <div className="rounded-[2rem] bg-white/40">
              <Image
                className={
                  "object-cover object-contain rounded-[2rem] h-[35rem] w-full"
                }
                src={
                  "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg"
                }
                alt={""}
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="space-y-6 rounded-[2rem] p-5">
            <h1 className="font-bold text-lg lg:text-2xl 2xl:text-4xl text-main-800">
              Battery
            </h1>

            <div className="rounded-[2rem] bg-white/40">
              <Image
                className={
                  "object-cover object-contain rounded-[2rem] h-[35rem] w-full"
                }
                src={
                  "https://impro.usercontent.one/appid/oneComWsb/domain/proytenamg.com/media/proytenamg.com/onewebmedia/domestic_rack.jpg?etag=%2219261-63ff182c%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=328%2B284&quality=85"
                }
                alt={""}
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Product - AMG Proyten Hybrid Synchronizer */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main-900 mb-6">
              Featured Product
            </h2>
            <p className="text-lg text-main-700 max-w-3xl mx-auto">
              Our flagship innovation that&apos;s revolutionizing hybrid energy
              systems
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-96 lg:h-full">
                <Image
                  src="/products/solar_lil.png"
                  alt="AMG Proyten Hybrid Synchronizer"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-main-600 text-white rounded-full text-sm font-bold">
                    Flagship Product
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl lg:text-4xl font-bold text-main-900 mb-6">
                  AMG Proyten Hybrid Synchronizer
                </h3>

                <p className="text-lg text-main-700 mb-6 leading-relaxed">
                  The AMG Proyten Hybrid Synchronizer is a revolutionary machine
                  that enables seamless integration and synchronization of
                  multiple energy sources. This cutting-edge technology
                  optimizes energy flow between solar panels, batteries, and
                  grid power for maximum efficiency and reliability.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-main-500 rounded-full"></div>
                    <span className="text-main-700">
                      Intelligent energy synchronization
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-main-500 rounded-full"></div>
                    <span className="text-main-700">
                      Real-time monitoring and control
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-main-500 rounded-full"></div>
                    <span className="text-main-700">
                      Optimized for African power conditions
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-main-500 rounded-full"></div>
                    <span className="text-main-700">
                      Advanced safety and protection systems
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-main-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-main-700 transition-colors duration-300">
                    Request Demo
                  </button>
                  <button className="border-2 border-main-600 text-main-600 px-8 py-4 rounded-full font-semibold hover:bg-main-600 hover:text-white transition-colors duration-300">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Showcase */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main-900 mb-6">
              Advanced Technology
            </h2>
            <p className="text-lg text-main-700 max-w-3xl mx-auto">
              Our products incorporate the latest innovations in sustainable
              energy technology, designed specifically for African markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Smart Energy Management",
                description:
                  "AI-powered systems for optimal energy distribution and consumption patterns",
                icon: "🤖",
              },
              {
                title: "Climate Adaptation",
                description:
                  "Products designed to withstand African climate conditions and power fluctuations",
                icon: "🌍",
              },
              {
                title: "Energy Efficiency",
                description:
                  "Maximum output with minimal environmental impact and resource consumption",
                icon: "⚡",
              },
              {
                title: "Scalable Solutions",
                description:
                  "Modular design that grows with your energy needs and business expansion",
                icon: "📈",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-lg font-bold text-main-900 mb-3">
                  {tech.title}
                </h3>
                <p className="text-sm text-main-700 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54 bg-main-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-main-100 mb-8 leading-relaxed">
            Contact our team to discuss your energy needs and discover how our
            products can transform your energy infrastructure for African
            markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-main-300 text-main-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-main-200 transition-colors duration-300">
              Request Quote
            </button>
            <button className="border-2 border-main-300 text-main-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-main-300 hover:text-main-900 transition-colors duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

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
