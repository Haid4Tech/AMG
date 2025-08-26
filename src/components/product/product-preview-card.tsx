import { FC } from "react";
import Image from "next/image";

interface IProductPreviewCard {
  imageUrl: string;
  title: string;
  description: string;
}

<div className="flex-1 flex justify-center items-center">
  <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
    <Image
      className="object-contain object-center w-full h-full"
      src={"/products/solar_lil.png"}
      alt="Solar Project Image 1"
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  </div>
</div>;

const ProductPreviewCard: FC<IProductPreviewCard> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className={"border border-main-800/20 rounded-lg p-6"}>
      <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
        <Image
          className="object-contain object-center w-full h-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src={imageUrl}
          alt={title}
          fill
        />
      </div>

      <div className={"space-y-2"}>
        <h2
          className={"text-lg lg:text-xl 2xl:text-2xl font-bold text-main-800"}
        >
          {title}
        </h2>
        <p className={"font-light text-sm md:text-base 2xl:text-lg"}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductPreviewCard;
