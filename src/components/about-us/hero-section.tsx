import { cn } from "@/lib/utils";
import { Leaf } from "lucide-react";
import { pagePadding } from "@/common/styles";

const AboutUsHeroSection = () => {
  return (
    <div className={cn(pagePadding, "space-y-4")}>
      <div
        className={cn(
          pagePadding,
          "flex flex-row items-end border border-red-500 backdrop-blur-xs rounded-lg p-4"
        )}
      >
        <p className="text-center text-4xl md:text-5xl lg:text-7xl 2xl:text-9xl 3xl:text-8xl leading-[1.1] font-bold text-main-50/80 drop-shadow-lg">
          Achieving a Greener World Together
        </p>
        <Leaf className={"text-main-300 w-45 h-45"} />
      </div>

      <div className={"grid grid-cols-3 gap-4 rounded-lg"}>
        <div className="h-32 backdrop-blur-xs rounded-lg p-4 border border-red-500"></div>
        <div className="h-32 backdrop-blur-xs rounded-lg p-4 border border-red-500"></div>
        <div className="h-32 backdrop-blur-xs rounded-lg p-4 border border-red-500"></div>
      </div>
    </div>
  );
};

export default AboutUsHeroSection;
