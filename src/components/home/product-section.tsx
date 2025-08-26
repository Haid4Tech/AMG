"use client";

import { useRouter } from "next/navigation";
import ProductPreviewCard from "../product/product-preview-card";
import { MoveUpRight } from "lucide-react";

const ProductSection = () => {
  const router = useRouter();
  return (
    <div
      className={
        "grid grid-cols-1 md:grid-cols-3 items-end py-10 px-6 md:px-10 lg:px-26 2xl:px-54 gap-6"
      }
    >
      {/* Section 1 */}
      <div className={"grid grid-cols-2 gap-3 h-full"}>
        <div className="flex items-center justify-center bg-main-800 rounded-lg h-full">
          <p className="text-main-50 uppercase text-lg lg:text-6xl 2xl:text-[5.5rem] font-bold -rotate-90">
            Products
          </p>
        </div>
        <div className="grid grid-row-4 gap-3 rounded-lg h-full">
          <div
            className={
              "row-span-3 rounded-lg bg-[url('https://images.unsplash.com/photo-1637525609391-ab1919948bbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyZWVuJTIwZW5lcmd5fGVufDB8fDB8fHww')] bg-cover bg-center"
            }
          ></div>
          <div
            onClick={() => router.push("/products")}
            className={
              "group transition-all ease-in-out hover:bg-main-800 p-3 w-full flex flex-col justify-between cursor-pointer row-span-1 bg-main-300/20 rounded-lg"
            }
          >
            <MoveUpRight
              size={23}
              className={"ml-auto group-hover:text-main-50 text-main-800"}
            />
            <p
              className={
                "capitalize self-end font-semibold group-hover:text-main-50 text-main-800 text-base 2xl:text-lg mb-2"
              }
            >
              Click to See More Products
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}

      <ProductPreviewCard
        imageUrl="/products/solar_lil.png"
        title="Solar Product 1"
        description="Description for Solar Project 1"
      />

      <ProductPreviewCard
        imageUrl="/products/solar2.png"
        title="Solar Product 2"
        description="Description for Solar Project 2"
      />
    </div>
  );
};

export default ProductSection;
