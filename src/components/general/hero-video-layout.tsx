import { FC, ReactNode } from "react";

interface IHeroVideoLayout {
  video: string;
  children: ReactNode;
}

const HeroVideoLayout: FC<IHeroVideoLayout> = ({ video, children }) => {
  return (
    <div className="relative md:h-[40rem] 2xl:h-[55rem] 3xl:h-[60rem] p-6 2xl:p-8 3xl:p-12">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        loop
        autoPlay
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10"></div>

      {/* Content above video */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default HeroVideoLayout;
