"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import dayjs from "dayjs";
import { MoveUpRight } from "lucide-react";

interface INewsCardPreview {
  title: string;
  url: string | undefined;
  description: string;
  imageUrl: string;
  publishDate: Date | string;
  readTime: string;
}

const NewsCardPreview: FC<INewsCardPreview> = ({
  title,
  description,
  url,
  imageUrl,
  publishDate,
  readTime,
}) => {
  const router = useRouter();
  return (
    <div className={"grid grid-cols-1 md:grid-cols-3 items-center"}>
      {/* Image */}
      <div className="">
        <Image
          className={
            "h-[180px] lg:h-[150px] 2xl:h-[200px] w-[70%] lg:w-[60%] 2xl:w-[90%] rounded-lg object-cover object-center"
          }
          src={imageUrl}
          alt={title}
          width={200}
          height={100}
        />
      </div>

      {/* Description  */}
      <div className="space-y-4">
        <h3
          className={
            "font-semibold text-main-900 text-lg md:text-2xl lg:text-3xl 2xl:text-5xl"
          }
        >
          {title}
        </h3>
        <p className={"text-sm md:text-base lg:text-lg 2xl:text-lg"}>
          {description}
        </p>
      </div>

      {/* Date & CTA */}
      <div className="space-y-4 justify-self-center">
        <div className="space-y-2">
          <p className="font-bold text-main-800">{readTime}</p>
          <p className="text-main-800">
            {dayjs(publishDate).format("MMM D, YYYY")}
          </p>
        </div>
        <button
          className={"cursor-pointer rounded-full p-4 2xl:p-6 bg-main-300/80"}
          onClick={() => router.push(url ?? "")}
        >
          <MoveUpRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default NewsCardPreview;
