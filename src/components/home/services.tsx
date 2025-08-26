import { Badge } from "../ui/badge";
import ServiceCard from "./service-card";

const Services = () => {
  return (
    <div className="space-y-10 2xl:space-y-16 3xl:space-y-20 py-10 2xl:py-16 3xl:py-20 px-6 md:px-10 lg:px-26 2xl:px-54">
      <div className="flex flex-row justify-between items-end w-full">
        <div className="space-y-4 2xl:space-y-6 3xl:space-y-8">
          <Badge variant={"amg"}>Service</Badge>
          <p className="font-semibold text-main-900 text-3xl md:text-4xl 2xl:text-4xl">
            Our Solar Solutions
          </p>
        </div>
        <p
          className={
            "w-[35%] 2xl:w-[30%] 3xl:w-[25%] text-sm md:text-base 2xl:text-lg"
          }
        >
          We believe in the power of solar energy to transform lives and
          communities.
        </p>
      </div>

      {/* Service Items */}
      <div className="grid grid-cols-3 gap-6 2xl:gap-8 3xl:gap-12">
        <ServiceCard
          bgColor="#f9fafb"
          imageUrl="https://plus.unsplash.com/premium_photo-1682148205811-e8a8ce759f4b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNvbGFyJTIwcGFuZWxzJTIwb24lMjBob3VzZXN8ZW58MHx8MHx8fDA%3D"
        >
          <div className="flex h-full items-center justify-center text-white">
            <h1 className="text-base 2xl:text-lg font-bold">
              Solar Panel & Wind Inverter Installations
            </h1>
          </div>
        </ServiceCard>

        {/* Service 2 */}
        <ServiceCard
          bgColor="bg-gray-50"
          imageUrl="https://plus.unsplash.com/premium_photo-1678766819199-5660bab7085b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjBpbiUyMGVsZWN0cmljJTIwY29udHJvbCUyMHBhbmVsfGVufDB8fDB8fHww"
        >
          <div className="flex h-full items-center justify-center text-white">
            <h1 className="text-base 2xl:text-lg font-bold">
              Design & Installation Trainings
            </h1>
          </div>
        </ServiceCard>

        {/* Service 3 */}
        <ServiceCard
          bgColor="bg-gray-50"
          imageUrl="https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg"
        >
          <div className="flex h-full items-center justify-center text-white">
            <h1 className="text-base 2xl:text-lg font-bold">
              Complete Sale of Equipment
            </h1>
          </div>
        </ServiceCard>
      </div>
    </div>
  );
};

export default Services;
