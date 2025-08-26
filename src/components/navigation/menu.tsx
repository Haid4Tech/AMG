"use client";

import { usePathname, useRouter } from "next/navigation";
import { menuItems } from "@/common/data";
import { Button } from "../ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const MenuBar = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div className="transition-all duration-200 ease-in-out grid grid-cols-3 items-center justify-items-center p-3 2xl:p-4 3xl:p-6 rounded-full bg-gradient-to-r from-black/30 via-gray-800/30 to-black/30 mx-auto w-[70%] 2xl:w-[60%] 3xl:w-[50%] backdrop-blur-md border border-white/20">
      <div className="mr-auto">
        <Image
          src="/SVG/Icon 1.svg"
          alt="icon"
          height={40}
          width={40}
          className="2xl:w-12 2xl:h-12 3xl:w-14 3xl:h-14"
        />
      </div>

      <div className="w-[20rem] lg:w-[24rem] 2xl:w-[28rem] flex flex-row justify-between gap-6 2xl:gap-8 3xl:gap-10">
        {menuItems
          .filter((items) => items.title !== "Contact")
          .map((items, index) => (
            <div
              onClick={() => router.push(items.url)}
              className={cn(
                "flex flex-row items-center gap-1 cursor-pointer transition-all ease-in-out duration-200"
              )}
              key={index}
            >
              {pathName === items.url && (
                <span className="relative flex size-2 2xl:size-3 3xl:size-4">
                  {" "}
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-main-400 opacity-75"></span>{" "}
                  <span className="relative inline-flex size-2 2xl:size-3 3xl:size-4 rounded-full bg-main-200"></span>
                </span>
              )}
              <p className="font-semibold text-white hover:text-main-300 text-sm 2xl:text-base 3xl:text-lg">
                {items.title}
              </p>
            </div>
          ))}
      </div>

      <div className="ml-auto">
        <Button variant={"amg"}>Contact Us</Button>
      </div>
    </div>
  );
};

export default MenuBar;
