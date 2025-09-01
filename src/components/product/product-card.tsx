import { FC } from "react";
import Image from "next/image";
import { Button } from "../ui/button";

interface IProductCard {
  productImage: string;
  title: string;
  model: string;
  capacityHeader: string;
  capacity: string[];
}

const ProductCard: FC<IProductCard> = ({
  title,
  model,
  productImage,
  capacityHeader,
  capacity,
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
        <div className="border border-gray-100 shadow-xs">
          <Image
            className="place-self-center w-full lg:w-[20rem] lg:h-[25rem] 2xl:w-[25rem] 2xl:h-[30rem] object-contain object-center"
            src={productImage}
            alt={title}
            width={400}
            height={300}
          />
        </div>
        <div className="flex flex-col items-stretch gap-5">
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
          <div>
            <h3 className={"font-semibold text-lg lg:text-xl 2xl:text-3xl"}>
              {title} Essentials
            </h3>

            <div></div>
          </div>

          <Button className="w-fit my-auto bg-secondary-500">
            View Specifications
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
