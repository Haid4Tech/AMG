import { FC } from "react";
import Image from "next/image";

interface CoreValuesCardProps {
  slug: string;
  label: string;
  description: string;
  cover: string;
}

const CoreValuesCard: FC<CoreValuesCardProps> = ({
  slug,
  label,
  description,
  cover,
}) => {
  return (
    <div className={"grid grid-cols-3 gap-5"}>
      <div
        className={
          "flex flex-col justify-center col-span-2 space-y-6 border-t-2 border-main-900 py-5"
        }
      >
        <p className="text-main-600 italic">{slug}</p>
        <div className="space-y-3">
          <p className="font-semibold text-lg lg:text-2xl 2xl:text-4xl">
            {label}
          </p>
          <p className="font-light text-base lg:text-base 2xl:text-lg">
            {description}
          </p>
        </div>
      </div>
      <div className="col-span-1">
        <Image
          className="object-cover object-contain rounded-lg"
          src={cover}
          alt={label}
          width={400}
          height={300}
        />
      </div>
    </div>
  );
};

export default CoreValuesCard;
