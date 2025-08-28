import { FC } from "react";
import Image from "next/image";
import { News } from "@/common/types";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface INewsCard {
  news: News;
}

export const NewsCard: FC<INewsCard> = ({ news }) => {
  return (
    <div>
      <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48">
          <Image
            src={
              news.heroImage ??
              "https://images.pexels.com/photos/159652/table-food-book-newspaper-159652.jpeg"
            }
            alt={news.title}
            fill
            className="object-cover object-center"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-main-600 text-white rounded-full text-sm font-medium">
              {news.categories?.[0] ?? "General"}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 mb-3 text-sm text-main-600">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(news.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {news.readTimeMinutes}
            </div>
          </div>

          <h3 className="text-xl font-bold text-main-900 mb-3 leading-tight line-clamp-2">
            {news.title}
          </h3>

          <p className="text-main-700 mb-4 leading-relaxed line-clamp-3">
            {news.summary}
          </p>

          <button className="flex items-center gap-2 text-main-600 hover:text-main-800 font-semibold transition-colors duration-300">
            Read More
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </article>
    </div>
  );
};

export const FeaturedNewsCard: FC<INewsCard> = ({ news }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <Image
          className={"w-full h-[30rem] object-cover object-center"}
          src={news.heroImage ?? "/path/to/featured-image.jpg"}
          alt="Featured News Image"
          width={500}
          height={300}
        />

        <div className="bg-white/30 absolute rounded-t-lg p-5 bottom-0 right-0 w-[10rem] lg:w-54 2xl:w-[35rem]">
          <h2 className="text-lg font-bold">{news.title}</h2>
          <p className="text-sm text-gray-600">{news.summary}</p>
        </div>
      </div>
    </div>
  );
};
