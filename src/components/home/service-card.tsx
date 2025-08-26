import { FC } from "react";
import { MoveUpRight, LucideIcon } from "lucide-react";

interface IServiceCard {
  imageUrl: string;
  bgColor: string;
  height?: {
    base?: string;
    xl?: string;
    xxl?: string;
  };
  Icon: LucideIcon;
  children?: React.ReactNode;
}

const ServiceCard: FC<IServiceCard> = ({
  imageUrl,
  height = {
    base: "h-[300px]",
    xl: "2xl:h-[400px]",
    xxl: "3xl:h-[500px]",
  },
  Icon,
  children,
}) => {
  return (
    <div
      className={`relative container ${height.base} ${height.xl} ${height.xxl}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Gradient only at bottom */}
      <div className="rounded-[2.8rem] absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/100 to-transparent z-0"></div>

      {/* Inverted cutout section */}
      <div className="m z-20"></div>

      <button className="z-30 absolute bottom-0 right-0 cursor-pointer rounded-full p-4 2xl:p-6 bg-main-300/80">
        <Icon />
      </button>

      {/* Content above gradient but below the inverted cut */}
      <div className="px-2 absolute bottom-8 right-[24%] 2xl:right-[23%] z-10 mr-auto">
        {children}
      </div>
    </div>
  );
};

export default ServiceCard;
