import { cn } from "@/lib/utils";
import { pagePadding } from "@/common/styles";

const ProductHeroSection = () => {
  return (
    <div className={cn(pagePadding, "space-y-4")}>
      <div
        className={cn(
          pagePadding,
          "flex flex-row items-end backdrop-blur-xs rounded-lg p-4"
        )}
      >
        <p className="text-center text-4xl md:text-5xl lg:text-7xl 2xl:text-9xl 3xl:text-8xl leading-[1.1] font-bold text-main-50/80 drop-shadow-lg">
          Product Page{" "}
          <span className="text-main-300 uppercase">Greener World</span>{" "}
          Together
        </p>
      </div>
    </div>
  );
};

export default ProductHeroSection;
