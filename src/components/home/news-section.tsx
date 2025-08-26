import NewsCardPreview from "../news/news-card-preview";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      title: "Sample News Title",
      description: "This is a sample description for the news article.",
      imageUrl:
        "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "https://example.com/news/sample-news",
      publishDate: new Date(),
      readTime: "5 min read",
    },
    {
      title: "Sample News Title",
      description: "This is a sample description for the news article.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1689701711439-e54f039f8d97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5ld3N8ZW58MHx8MHx8fDA%3D",
      publishDate: new Date(),
      readTime: "5 min read",
    },
  ];
  return (
    <div className="space-y-10 px-6 md:px-10 lg:px-26 2xl:px-54 py-20">
      <div className="flex flex-row items-center justify-between">
        <div className="space-y-4">
          <Badge variant={"amg"}>News</Badge>
          <p className="font-semibold text-main-900 text-3xl md:text-4xl 2xl:text-4xl">
            AMG News
          </p>
        </div>
        <Button variant={"amg"} className="flex flex-row gap-2 items-center">
          <p>See All News</p>
          <MoveRight size={18} />
        </Button>
      </div>

      <div className="flex flex-col divide-y divide-gray-800/20">
        {news.map((article, index) => (
          <div key={index} className="py-6">
            <NewsCardPreview
              title={article.title}
              description={article.description}
              imageUrl={article.imageUrl}
              url={article.url}
              readTime={article.readTime}
              publishDate={article.publishDate}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
