import Image from "next/image";

export default function ProductsPage() {
  const productCategories = [
    {
      title: "Solar Panels",
      description: "High-efficiency photovoltaic modules designed for African climate conditions and energy needs",
      image: "/products/solar_lil.png",
      features: ["High Efficiency", "Weather Resistant", "Long Lifespan", "Easy Installation"],
      applications: ["Residential", "Commercial", "Industrial", "Off-Grid Systems"]
    },
    {
      title: "Energy Storage Systems",
      description: "Advanced battery solutions for reliable energy storage and backup power applications",
      image: "/products/solar2.png",
      features: ["Lithium-Ion Technology", "Smart Management", "High Capacity", "Fast Charging"],
      applications: ["Home Storage", "Commercial Backup", "Solar Integration", "Grid Support"]
    },
    {
      title: "AMG Proyten Hybrid Synchronizer",
      description: "Revolutionary machine for hybrid energy synchronization and management",
      image: "/products/solar_lil.png",
      features: ["Hybrid Synchronization", "Smart Control", "Energy Optimization", "Real-time Monitoring"],
      applications: ["Hybrid Systems", "Grid Integration", "Industrial Power", "Micro-Grids"]
    },
    {
      title: "Energy Management Solutions",
      description: "Comprehensive systems for monitoring, controlling, and optimizing energy consumption",
      image: "/products/solar2.png",
      features: ["Smart Monitoring", "Automated Control", "Performance Analytics", "Remote Management"],
      applications: ["Smart Homes", "Commercial Buildings", "Industrial Facilities", "Utility Networks"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-main-50 to-main-100 py-20 px-6 md:px-10 lg:px-26 2xl:px-54">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-main-900">
            Our Products
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-main-700 max-w-4xl mx-auto leading-relaxed">
            Cutting-edge sustainable energy solutions designed specifically for African markets and conditions
          </p>
        </div>
      </div>

      {/* Product Categories */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54">
        <div className="max-w-7xl mx-auto space-y-20">
          {productCategories.map((category, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main-900">
                  {category.title}
                </h2>
                <p className="text-lg text-main-700 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-main-800 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-main-700">
                          <span className="text-main-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-main-800 mb-3">Applications</h3>
                    <ul className="space-y-2">
                      {category.applications.map((application, appIndex) => (
                        <li key={appIndex} className="flex items-center text-main-700">
                          <span className="text-main-400 mr-2">✓</span>
                          {application}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button className="bg-main-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-main-700 transition-colors duration-300">
                  Learn More
                </button>
              </div>
              
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-main-900/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
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
              Our flagship innovation that's revolutionizing hybrid energy systems
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
                  The AMG Proyten Hybrid Synchronizer is a revolutionary machine that enables seamless 
                  integration and synchronization of multiple energy sources. This cutting-edge technology 
                  optimizes energy flow between solar panels, batteries, and grid power for maximum 
                  efficiency and reliability.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-main-500 rounded-full"></div>
                    <span className="text-main-700">Intelligent energy synchronization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-main-500 rounded-full"></div>
                    <span className="text-main-700">Real-time monitoring and control</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-main-500 rounded-full"></div>
                    <span className="text-main-700">Optimized for African power conditions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-main-500 rounded-full"></div>
                    <span className="text-main-700">Advanced safety and protection systems</span>
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
              Our products incorporate the latest innovations in sustainable energy technology, 
              designed specifically for African markets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Smart Energy Management",
                description: "AI-powered systems for optimal energy distribution and consumption patterns",
                icon: "🤖"
              },
              {
                title: "Climate Adaptation",
                description: "Products designed to withstand African climate conditions and power fluctuations",
                icon: "🌍"
              },
              {
                title: "Energy Efficiency",
                description: "Maximum output with minimal environmental impact and resource consumption",
                icon: "⚡"
              },
              {
                title: "Scalable Solutions",
                description: "Modular design that grows with your energy needs and business expansion",
                icon: "📈"
              }
            ].map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-lg font-bold text-main-900 mb-3">{tech.title}</h3>
                <p className="text-sm text-main-700 leading-relaxed">{tech.description}</p>
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
            Contact our team to discuss your energy needs and discover how our products 
            can transform your energy infrastructure for African markets.
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
    </div>
  );
}
