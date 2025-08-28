import { Search } from "lucide-react";
import HeroLayout from "@/components/general/hero-layout";
import MenuBar from "@/components/navigation/menu";
import { FeaturedNewsCard, NewsCard } from "@/components/news/news-card";
import { newsArticles } from "@/common/data";

export default function NewsPage() {
  if (!newsArticles) {
    return <div>No news articles available</div>;
  }
  const featuredArticle = newsArticles.find((article) => article.isFeatured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroLayout
        bgImage={
          "https://images.pexels.com/photos/9242850/pexels-photo-9242850.jpeg"
        }
      >
        <MenuBar />
        <div
          className={
            "flex items-center justify-center h-[20rem] lg:h-[35rem] 2xl:h-[40rem]"
          }
        >
          <p
            className={
              "font-bold text-main-50 text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl"
            }
          >
            AMG News & Insights
          </p>
        </div>
      </HeroLayout>

      <div className={"py-12 border-b border-main-800/10"}>
        <p className="text-center text-lg md:text-xl lg:text-2xl text-main-700 max-w-4xl mx-auto leading-relaxed">
          Stay updated with the latest developments in sustainable energy,
          industry trends, and AMG innovations across Africa
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="py-12 border-b border-gray-200">
        <div className="grid grid-cols-3">
          <div className="bg-main-800 col-span-1">
            <p className={"text-main-50"}>Search for something</p>
          </div>
          <div className="col-span-2 flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:ring-2 focus:ring-main-500 focus:border-transparent transition-colors duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54">
        <div className="max-w-6xl mx-auto">
          {featuredArticle ? (
            <>
              <h2 className="text-2xl font-bold text-main-900 mb-8">
                Featured Article
              </h2>
              <FeaturedNewsCard news={featuredArticle} />
            </>
          ) : (
            <div>No featured article available</div>
          )}
        </div>
      </div>

      {/* News Grid */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-main-900 mb-12 text-center">
            Latest News
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles
              .filter((article) => !article.isFeatured)
              .map((article) => (
                <NewsCard news={article} key={article.id} />
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
              Access our comprehensive library of whitepapers, case studies, and
              industry reports
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AMG Proyten Hybrid Synchronizer Technical Guide",
                description:
                  "Comprehensive technical specifications and installation guide for our flagship product",
                type: "PDF",
                size: "3.2 MB",
              },
              {
                title: "Solar ROI Calculator for African Markets",
                description:
                  "Interactive tool to calculate return on investment for solar installations in African conditions",
                type: "Tool",
                size: "Web App",
              },
              {
                title: "AMG Sustainability Report 2023",
                description:
                  "Annual report on AMG's environmental impact and sustainability initiatives across Africa",
                type: "PDF",
                size: "5.8 MB",
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-main-900 mb-3">
                  {resource.title}
                </h3>
                <p className="text-main-700 mb-4 leading-relaxed">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-main-600">
                    {resource.type} • {resource.size}
                  </span>
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
