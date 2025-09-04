import Image from "next/image";
import { cn } from "@/lib/utils";
import { pagePadding } from "@/common/styles";

export const UseCases = () => {
  return (
    <div className={cn(pagePadding, "grid lg:grid-cols-3 gap-8")}>
      <div className="flex flex-col justify-between col-span-1">
        <div className={"space-y-5"}>
          <h3 className="tracking-wider font-bold text-4xl 2xl:text-6xl text-main-800">
            <span className="text-secondary-500 uppercase">Solutions</span> for
            Diverse Needs
          </h3>
          <p className="text-2xl">
            Our products are built with versatility in mind, offering solutions
            that fit seamlessly into different lifestyles and industries.
            Whether it’s for everyday use or specialized applications, each
            product is crafted to deliver performance, reliability, and real
            value.
          </p>
        </div>

        <div>
          <p className="text-2xl">
            Take a moment to explore our collection and discover how our
            products can make a difference for you.
          </p>
        </div>
      </div>

      <div className="col-span-2 space-y-5">
        <div className="grid grid-cols-3 gap-5">
          <Image
            className="col-span-2 w-full rounded-[2rem] object-cover object-center h-[25rem]"
            src={
              "https://images.pexels.com/photos/9799737/pexels-photo-9799737.jpeg"
            }
            alt={""}
            width={500}
            height={300}
          />

          <Image
            className="col-span-1 w-full rounded-[2rem] object-cover object-center h-[25rem]"
            src={
              "https://images.pexels.com/photos/9799724/pexels-photo-9799724.jpeg"
            }
            alt={""}
            width={500}
            height={300}
          />
        </div>

        <div className="grid grid-cols-3 gap-5">
          <Image
            className="col-span-1 w-full rounded-[2rem] object-cover object-center h-[25rem]"
            src={
              "https://images.pexels.com/photos/9875407/pexels-photo-9875407.jpeg"
            }
            alt={""}
            width={500}
            height={300}
          />

          <Image
            className="col-span-2 w-full rounded-[2rem] object-cover object-center h-[25rem]"
            src={
              "https://images.pexels.com/photos/23355060/pexels-photo-23355060.jpeg"
            }
            alt={""}
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};
