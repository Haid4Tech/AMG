import Image from "next/image";
import { Calendar, Clock, ArrowRight, Search, Filter } from "lucide-react";

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "AMG Launches Revolutionary AMG Proyten Hybrid Synchronizer",
      excerpt: "Our latest innovation in hybrid energy synchronization promises to increase efficiency by 25% while reducing energy costs significantly for African markets.",
      image: "/products/solar_lil.png",
      category: "Technology",
      publishDate: "2024-01-15",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Sustainable Energy Trends for 2024: What to Expect in Africa",
      excerpt: "As we move into 2024, the renewable energy sector in Africa is poised for unprecedented growth. Here's what industry experts are predicting.",
      image: "/products/solar2.png",
      category: "Industry",
      publishDate: "2024-01-10",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 3,
      title: "AMG Partners with Major Nigerian Utility Company for Grid Modernization",
      excerpt: "Strategic partnership announced to modernize aging electrical infrastructure with smart grid technology and renewable energy integration across Nigeria.",
      image: "/products/solar_lil.png",
      category: "Partnerships",
      publishDate: "2024-01-08",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 4,
      title: "The Future of Energy Storage: Beyond Lithium-Ion for African Markets",
      excerpt: "Exploring emerging battery technologies that could revolutionize how we store and distribute renewable energy in Africa's unique conditions.",
      image: "/products/solar2.png",
      category: "Research",
      publishDate: "2024-01-05",
      readTime: "10 min read",
      featured: false
    },
    {
      id: 5,
      title: "How AMG is Contributing to Carbon Neutrality Goals in Africa",
      excerpt: "Our comprehensive approach to helping businesses and communities across Africa achieve their sustainability objectives.",
      image: "/products/solar_lil.png",
      category: "Sustainability",
      publishDate: "2024-01-02",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 6,
      title: "Solar Energy: The Untapped Potential in Rural African Communities",
      excerpt: "Innovative approaches to bringing solar power to remote areas where traditional grid infrastructure isn't feasible.",
      image: "/products/solar2.png",
      category: "Innovation",
      publishDate: "2023-12-28",
      readTime: "9 min read",
      featured: false
    }
  ];

  const categories = ["All", "Technology", "Industry", "Partnerships", "Research", "Sustainability", "Innovation"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-main-50 to-main-100 py-20 px-6 md:px-10 lg:px-26 2xl:px-54">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-main-900">
            AMG News & Insights
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-main-700 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest developments in sustainable energy, 
            industry trends, and AMG innovations across Africa
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="py-12 px-6 md:px-10 lg:px-26 2xl:px-54 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-500 focus:border-transparent transition-colors duration-300"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-main-600" />
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-500 focus:border-transparent transition-colors duration-300">
                {categories.map((category) => (
                  <option key={category} value={category.toLowerCase()}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-main-900 mb-8">Featured Article</h2>
          {newsArticles.filter(article => article.featured).map((article) => (
            <div key={article.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-main-100 text-main-700 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-main-600">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.publishDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-main-900 mb-4 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-lg text-main-700 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-main-600">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                    <button className="flex items-center gap-2 text-main-600 hover:text-main-800 font-semibold transition-colors duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* News Grid */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-main-900 mb-12 text-center">Latest News</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(article => !article.featured).map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-main-600 text-white rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-main-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.publishDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-main-900 mb-3 leading-tight line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-main-700 mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <button className="flex items-center gap-2 text-main-600 hover:text-main-800 font-semibold transition-colors duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54 bg-main-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-main-100 mb-8 leading-relaxed">
            Subscribe to our newsletter for the latest industry insights, 
            company updates, and sustainable energy news from AMG.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full text-main-900 placeholder-main-600 focus:outline-none focus:ring-2 focus:ring-main-300"
            />
            <button className="bg-main-300 text-main-900 px-8 py-4 rounded-full font-semibold hover:bg-main-200 transition-colors duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-main-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Industry Resources */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main-900 mb-6">
              Industry Resources
            </h2>
            <p className="text-lg text-main-700 max-w-3xl mx-auto">
              Access our comprehensive library of whitepapers, case studies, and industry reports
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AMG Proyten Hybrid Synchronizer Technical Guide",
                description: "Comprehensive technical specifications and installation guide for our flagship product",
                type: "PDF",
                size: "3.2 MB"
              },
              {
                title: "Solar ROI Calculator for African Markets",
                description: "Interactive tool to calculate return on investment for solar installations in African conditions",
                type: "Tool",
                size: "Web App"
              },
              {
                title: "AMG Sustainability Report 2023",
                description: "Annual report on AMG's environmental impact and sustainability initiatives across Africa",
                type: "PDF",
                size: "5.8 MB"
              }
            ].map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-bold text-main-900 mb-3">{resource.title}</h3>
                <p className="text-main-700 mb-4 leading-relaxed">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-main-600">{resource.type} • {resource.size}</span>
                  <button className="text-main-600 hover:text-main-800 font-semibold transition-colors duration-300">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
