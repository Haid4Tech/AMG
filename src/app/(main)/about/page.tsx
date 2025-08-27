import { cn } from "@/lib/utils";
import Image from "next/image";
import { pagePadding } from "@/common/styles";
import { Badge } from "@/components/ui/badge";
import MenuBar from "@/components/navigation/menu";
import HeroLayout from "@/components/general/hero-layout";
import AboutUsHeroSection from "@/components/about-us/hero-section";

import CoreValues from "@/components/about-us/core-values";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroLayout bgImage="https://images.pexels.com/photos/325944/pexels-photo-325944.jpeg">
        <MenuBar />
        <AboutUsHeroSection />
      </HeroLayout>

      {/* Company Overview */}
      <div className={cn(pagePadding)}>
        <div className="flex flex-col items-center justify-center py-20 space-y-6 px-3 md:px-8 lg:px-20 2xl:px-32">
          <Badge variant={"amg"}>Our story</Badge>
          <div className="space-y-6">
            <p className="text-justify text-base lg:text-xl 2xl:text-2xl  text-main-700 leading-relaxed">
              Founded with a vision to bring sustainable energy solutions to
              Africa, AMG Energy Storage has grown from a local startup to a
              leading distributor of solar energy solutions across the
              continent. Our commitment to quality and innovation has made us a
              trusted name in renewable energy technology.
            </p>
            <p className="text-justify text-base lg:text-xl 2xl:text-2xl text-main-700 leading-relaxed">
              We specialize in the production and distribution of advanced
              battery storage systems, high-efficiency solar panels, and
              innovative energy management solutions designed specifically for
              African markets and conditions.
            </p>
          </div>
        </div>
      </div>

      <div className={"bg-gray-50"}>
        <CoreValues />
      </div>

      {/* Key Products */}
      <div className={cn(pagePadding, "space-y-6 border  border-red-500")}>
        <h3 className="text-2xl font-bold text-main-900">Key Products</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-3 h-3 bg-main-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-semibold text-main-900">
                AMG Proyten Hybrid Synchronizer
              </h4>
              <p className="text-main-700 text-sm">
                Advanced machine for hybrid energy synchronization
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-3 h-3 bg-main-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-semibold text-main-900">Solar Panels</h4>
              <p className="text-main-700 text-sm">
                High-efficiency photovoltaic modules
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-3 h-3 bg-main-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-semibold text-main-900">
                Energy Storage Systems
              </h4>
              <p className="text-main-700 text-sm">
                Advanced battery solutions for various applications
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-main-700 leading-relaxed">
                To provide cutting-edge sustainable energy solutions that
                empower communities and businesses across Africa to achieve
                their environmental and economic goals while contributing to a
                cleaner, more sustainable future for the continent.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-main-800 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-main-700 leading-relaxed">
                To be the leading provider of innovative energy solutions in
                Africa, driving the transition to sustainable energy systems and
                creating lasting positive impact for generations to come.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/bg-1.jpg"
                alt="AMG Mission and Vision"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-main-900/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-main-700 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we
              make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "Constantly pushing boundaries to develop cutting-edge solutions that address Africa's unique energy challenges.",
                icon: "🚀",
              },
              {
                title: "Sustainability",
                description:
                  "Committed to environmental stewardship and creating solutions that benefit both people and planet.",
                icon: "🌱",
              },
              {
                title: "Excellence",
                description:
                  "Delivering the highest quality products and services that exceed expectations and industry standards.",
                icon: "⭐",
              },
              {
                title: "Integrity",
                description:
                  "Operating with honesty, transparency, and ethical practices in all our business relationships.",
                icon: "🤝",
              },
              {
                title: "Collaboration",
                description:
                  "Working together with partners, clients, and communities to achieve shared goals and success.",
                icon: "🤲",
              },
              {
                title: "African Focus",
                description:
                  "Dedicated to understanding and serving the unique energy needs of African markets and communities.",
                icon: "🌍",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-main-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-main-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main-900 mb-6">
              Our Team
            </h2>
            <p className="text-lg text-main-700 max-w-3xl mx-auto">
              Meet the passionate professionals dedicated to driving innovation
              and sustainability across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Chief Executive Officer",
                bio: "Leading AMG with over 15 years of experience in sustainable energy and technology innovation across Africa.",
                image: "/images/team-1.jpg",
              },
              {
                name: "Michael Chen",
                role: "Chief Technology Officer",
                bio: "Expert in renewable energy systems and smart grid technologies with a passion for African energy solutions.",
                image: "/images/team-2.jpg",
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Head of Research & Development",
                bio: "Pioneering new sustainable energy solutions through cutting-edge research and development for African markets.",
                image: "/images/team-3.jpg",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-bold text-main-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-main-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-main-700 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54 bg-main-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-main-100 mb-8 leading-relaxed">
            Let&apos;s discuss how AMG can help you achieve your sustainability
            goals and transform your energy infrastructure for the future.
          </p>
          <button className="bg-main-300 text-main-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-main-200 transition-colors duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
