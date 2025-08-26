"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { socialMedia } from "@/common/data";

const HeroSection = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col h-full gap-8 2xl:gap-12 3xl:gap-16 mt-20 2xl:mt-24 3xl:mt-32 px-6 md:px-10 lg:px-26 2xl:px-54 ">
      <div className={"w-[60%] 2xl:w-[55%] 3xl:w-[50%]"}>
        <p className="text-lg 2xl:text-xl 3xl:text-2xl font-light mb-2 2xl:mb-3 3xl:mb-4 text-white drop-shadow-lg">
          More Power Efficiency
        </p>
        <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl leading-[1.3] font-bold text-white drop-shadow-lg">
          Experience the Future of Solar Power.
        </p>
      </div>

      <div className="flex flex-col w-fit gap-6 2xl:gap-8 3xl:gap-10">
        <Button variant={"amg"} size={"lg"}>
          Get Started
        </Button>
        <div className="flex flex-row items-center gap-4 2xl:gap-6 3xl:gap-8">
          {socialMedia.map((icon) => (
            <button
              onClick={() => router.push(icon.url)}
              key={icon.label}
              className="flex items-center cursor-pointer bg-gray-200/30 rounded-full p-3 2xl:p-4 3xl:p-5 group"
            >
              <icon.Icon
                size={35}
                className="text-white group-hover:text-main-300 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="border border-red-500 ml-auto text-white drop-shadow-md h-full">
        Carousel
      </div>
    </div>
  );
};

export default HeroSection;
