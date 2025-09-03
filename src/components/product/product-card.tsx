import { FC } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface IProductCard {
  productImage: string;
  title: string;
  model: string;
  capacityHeader: string;
  capacity: string[];
  pdf: string;
}

const ProductCard: FC<IProductCard> = ({
  title,
  model,
  productImage,
  capacityHeader,
  capacity,
  pdf,
}) => {
  return (
    <div className="w-full sticky top-0 space-y-5 bg-white">
      <div className={"bg-gray-100 px-6 md:px-10 lg:px-26 2xl:px-54 py-4"}>
        <p
          className={"text-xl lg:text-3xl 2xl:text-5xl uppercase font-semibold"}
        >
          {title} <span className="text-secondary-500">{model}</span>
        </p>
      </div>
      <div className="grid grid-cols-2 lg:gap-5 2xl:gap-10 px-6 md:px-10 lg:px-26 2xl:px-54">
        <div className="border border-gray-100 shadow-xs hover:shadow-lg p-5 rounded-2xl">
          <Image
            className="rounded-2xl place-self-center w-full lg:w-[20rem] lg:h-[30rem] 2xl:w-[30rem] 2xl:h-[40rem] object-contain object-center"
            src={productImage}
            alt={title}
            width={400}
            height={300}
          />
        </div>
        <div className="flex flex-col items-stretch gap-8 border border-red-500">
          <h2 className="lg:text-4xl 2xl:text-5xl font-bold">{title}</h2>

          {/* Product Capacity */}
          <div className="space-y-2">
            <h3 className="text-lg lg:text-xl 2xl:text-2xl font-semibold text-secondary-500 italic">
              {capacityHeader}
            </h3>
            <div className={"flex flex-col gap-1"}>
              {capacity.map((item, index) => (
                <p key={index} className="text-base 2xl:text-lg">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Related products */}
          <div className="space-y-6">
            <h3 className={"font-semibold text-lg lg:text-xl 2xl:text-3xl"}>
              {title} Essentials
            </h3>

            <div className="border border-red-500 h-[15rem]">
              carousel of related items
            </div>
          </div>

          <Button className="w-fit mt-auto bg-secondary-500">
            <Link target="_blank" href={pdf}>
              View Specifications
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
