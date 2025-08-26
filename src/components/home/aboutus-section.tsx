import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

const AboutUsSection = () => {
  const facesImages = [
    {
      image: "/faces/face1.jpg",
      lazyImage: "/faces/face1.jpg",
    },
    {
      image: "/faces/face2.jpg",
      lazyImage: "/faces/face2.jpg",
    },
    {
      image: "/faces/face3.jpg",
      lazyImage: "/faces/face3.jpg",
    },
    {
      image: "/faces/face4.jpg",
      lazyImage: "/faces/face4.jpg",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 lg:px-26 2xl:px-54 gap-8 2xl:gap-12 3xl:gap-16">
      <div className=" flex flex-col gap-4 2xl:gap-6 3xl:gap-8">
        <Badge variant={"amg"}>About Us</Badge>
        <div className="space-y-3 2xl:space-y-4 3xl:space-y-5">
          <p className="font-bold text-3xl 2xl:text-4xl 3xl:text-5xl text-main-800">
            Africa Moving Green
          </p>
          <p className="leading-[1.7] text-sm md:text-base 2xl:text-lg w-full md:w-[500px] 2xl:w-[700px]">
            Africa Moving Green ( AMG ) Energy Storage AMG Energy Storage
            Limited is a Nigerian based company that is in partnership with AMG
            Italian Energy Storage for the distribution of its machine- Proyten.
            AMG Proyten Hybrid Synchronizer is a machine which is able to
            accumulate energy by assimilating solar and wind, synchronizer. A
            powerful all in one solution for solar and wind energy converter to
            replace unreliable grid and gas generator for houses, business and
            offices. We are passionate about clean energy.
          </p>
        </div>
        <div
          className={
            "mt-6 2xl:mt-8 3xl:mt-10 space-y-6 2xl:space-y-8 3xl:space-y-10"
          }
        >
          <div className="flex flex-row items-center gap-4 2xl:gap-6 3xl:gap-8">
            <div
              className={
                "flex -space-x-3 2xl:-space-x-4 3xl:-space-x-5 overflow-visible"
              }
            >
              {facesImages.map(({ image, lazyImage }, index) => (
                <Image
                  width={40}
                  height={40}
                  key={index}
                  loading={"lazy"}
                  className={
                    "object-cover object-center lazy-loading inline-block rounded-full ring-2 ring-white w-10 h-10 2xl:w-15 2xl:h-15 3xl:w-18 3xl:h-18"
                  }
                  src={lazyImage}
                  data-src={image}
                  alt={`face image ${index}`}
                />
              ))}
            </div>
            <div>
              <p
                className={
                  "font-bold text-sm md:text-base 2xl:text-lg 3xl:text-lg text-main-900"
                }
              >
                Trusted by{" "}
                <span
                  className={
                    "font-bold text-main-500 text-xl 2xl:text-2xl 3xl:text-3xl"
                  }
                >
                  130+
                </span>{" "}
                happy customers.
              </p>
            </div>
          </div>
          <Button
            size={"lg"}
            className="flex flex-row gap-2 items-center bg-main-300/90 text-main-900 hover:bg-main-400/90 transition-all duration-200 text-sm 2xl:text-lg 3xl:text-xl"
          >
            <p>Learn More</p>
            <MoveUpRight size={18} />
          </Button>
        </div>
      </div>

      <div className={"relative "}>
        <Image
          width={300}
          height={500}
          className={
            "rounded-xl object-cover object-center w-[300px] h-[500px] 2xl:w-[500px] 2xl:h-[600px] 3xl:w-[500px] 3xl:h-[700px]"
          }
          src={
            "https://images.unsplash.com/flagged/photo-1566838634584-c541648798ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29sYXIlMjBwYW5lbHMlMjBvbiUyMGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D"
          }
          alt={"solar panels"}
        />

        {/* Card One */}
        <div
          className={
            "space-y-4 w-[18rem] 2xl:w-[26rem] absolute top-[-45px] 2xl:top-[-60px] 3xl:top-[-75px] right-0 p-2 2xl:p-4 backdrop-blur-lg rounded-xl border border-gray-600/10 bg-gray-300/10"
          }
        >
          <div className={"flex flex-row gap-1 items-baseline"}>
            <p
              className={
                "text-main-800 text-4xl 2xl:text-5xl 3xl:text-6xl font-bold"
              }
            >
              05+
            </p>
            <p
              className={
                "italic text-main-600 text-sm 2xl:text-base 3xl:text-lg"
              }
            >
              Experience
            </p>
          </div>
          <p className={"text-sm md:text-base 2xl:text-lg text-main-900"}>
            A powerful all in one solution for solar and wind energy converter
            to replace unreliable grid and gas generator for houses, business
            and offices. We are passionate about clean energy.
          </p>
        </div>

        {/* Card Two */}
        <div
          className={
            "space-y-4 w-[18rem] 2xl:w-[26rem] absolute top-45 2xl:top-60 3xl:top-75 right-30 2xl:right-15 p-2 2xl:p-4 bg-white/50 backdrop-blur-lg rounded-xl border border-gray-800/10"
          }
        >
          <div className={"flex flex-row gap-1 items-baseline"}>
            <p
              className={
                "text-main-800 text-4xl 2xl:text-5xl 3xl:text-6xl font-bold"
              }
            >
              90%
            </p>
            <p
              className={
                "italic text-main-600 text-sm 2xl:text-base 3xl:text-lg"
              }
            >
              Success
            </p>
          </div>
          <p className={"text-sm md:text-base 2xl:text-lg text-main-900"}>
            A powerful all in one solution for solar and wind energy converter
            to replace unreliable grid and gas generator for houses, business
            and offices. We are passionate about clean energy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
