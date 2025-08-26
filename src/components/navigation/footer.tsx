"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { menuItems } from "@/common/data";
import Link from "next/link";
import dayjs from "dayjs";
import { cn } from "@/lib/utils";

const Footer = () => {
  const [date] = useState<Date>(new Date());
  const pathName = usePathname();

  return (
    <div
      className={
        "space-y-15 2xl:space-y-20 3xl:space-y-24 bg-main-800 px-5 md:px-10 lg:px-12 2xl:px-20 3xl:px-32 py-10 2xl:py-16 3xl:py-20 min-h-[600px] 2xl:min-h-[700px] 3xl:min-h-[800px] h-full"
      }
    >
      {/* Top */}
      <div
        className={
          "flex flex-row items-center justify-center gap-1 2xl:gap-2 3xl:gap-3"
        }
      >
        <p
          className={
            "font-bigShoulders text-[5.2rem] 2xl:text-9xl 3xl:text-[10rem] text-main-600 font-bold uppercase"
          }
        >
          let&apos;s set up the energy
        </p>
        <Image
          src={"/SVG/Icon11.svg"}
          alt={"icon"}
          height={90}
          width={90}
          className="mt-4 w-[75px] h-[75px] 2xl:w-[110px] 2xl:h-[110px] 3xl:w-[130px] 3xl:h-[130px]"
        />
      </div>

      {/* divider */}
      <div className="border-[0.1rem] border-main-100/10"></div>

      {/* Bottom */}
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 2xl:gap-12 3xl:gap-16">
          {/* Intro & social links */}
          <div className={"space-y-10 2xl:space-y-12 3xl:space-y-16"}>
            <div className={"space-y-3 2xl:space-y-4 3xl:space-y-5"}>
              <div
                className={
                  "flex flex-row gap-1 2xl:gap-2 3xl:gap-3 items-center"
                }
              >
                <Image
                  src={"/SVG/Icon 1.svg"}
                  alt={"icon"}
                  height={25}
                  width={25}
                  className="w-[25px] h-[25px] 2xl:w-[30px] 2xl:h-[30px] 3xl:w-[35px] 3xl:h-[35px]"
                />
                <p
                  className={
                    "text-main-50/70 font-semibold text-2xl 2xl:text-3xl 3xl:text-4xl"
                  }
                >
                  Africa Moving Green (AMG)
                </p>
              </div>
              <p
                className={"text-main-50/70 text-sm 2xl:text-base 3xl:text-lg"}
              >
                AMG is a leading distributor of solar energy solutions.
              </p>
            </div>

            <div className={"space-y-3 2xl:space-y-4 3xl:space-y-5"}>
              <p
                className={"text-2xl 2xl:text-3xl 3xl:text-4xl text-main-50/70"}
              >
                Social Links
              </p>
              <div
                className={"flex flex-row flex-wrap gap-4 2xl:gap-6 3xl:gap-8"}
              ></div>
            </div>
          </div>

          {/* Quick link */}
          <div className={"space-y-6 2xl:space-y-8 3xl:space-y-10"}>
            <p className={"text-2xl 2xl:text-3xl 3xl:text-4xl text-main-50/70"}>
              Quick Link
            </p>
            <div
              className={"flex flex-row flex-wrap gap-4 2xl:gap-6 3xl:gap-8"}
            >
              {menuItems.map((menuitems, index) => (
                <Link
                  className={cn(
                    pathName === menuitems.url
                      ? "text-main-500 bg-main-500/50 hover:bg-main-500/30"
                      : "text-main-50/70 hover:text-main-50/40 bg-main-900 hover:bg-main-900/50",
                    "uppercase py-1 px-3 2xl:py-2 2xl:px-4 3xl:py-3 3xl:px-6 rounded-full transition-all ease-in-out duration-300 text-sm 2xl:text-base 3xl:text-lg"
                  )}
                  key={index}
                  href={menuitems.url}
                >
                  {menuitems.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className={"space-y-6 2xl:space-y-8 3xl:space-y-10"}>
            <p className={"text-main-50/70 text-2xl 2xl:text-3xl 3xl:text-4xl"}>
              Contact
            </p>
            <div className="space-y-3 2xl:space-y-4 3xl:space-y-5">
              <p className="text-main-50/70 text-sm 2xl:text-base 3xl:text-lg">
                amg@gmail.com
              </p>
              <p className="text-main-50/70 text-sm 2xl:text-base 3xl:text-lg">
                +234804545454545, +2348023434343
              </p>
              <p className="text-main-50/70 text-sm 2xl:text-base 3xl:text-lg">
                12 Energy raiders street, FCT, Abuja, Nigeria.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Terms & conditions */}
      <div className="border-t-[0.1rem] border-main-100/10 pt-4 text-main-50/50 text-sm text-center md:text-right">
        <p>
          &copy; {dayjs(date).format("YYYY")} HAID Technologies. All rights
          reserved.
        </p>
        <p className="mt-1">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          {" • "}
          <a href="#" className="hover:text-white transition-colors">
            Terms of Use
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
