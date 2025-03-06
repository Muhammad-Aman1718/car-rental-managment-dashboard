// import React from "react";
// import ServicesCard from "@/components/services/ServicesCard";
// import ServicesRequired from "@/components/services/servicesRequired/ServicesRequired";
// import ServicesSchedule from "@/components/services/servicesSchedule/ServicesSchedule";
// import ServicesStation from "@/components/services/servicesStation/ServicesStation";
// import YourOrder from "@/components/services/yourOrder/YourOrder";
// import { IMAGES } from "@/constants/images";

// const Services = () => {
//   return (
//     <div>
//       <div className="flex gap-x-[30px] ">
//         <div className=" flex-1 ">
//           <ServicesStation />
//           <YourOrder />
//         </div>
//         <div className="flex-1 ">
//           <ServicesRequired />
//           <ServicesSchedule />
//         </div>
//       </div>
//       {/* <div className="flex items-center justify-around bg-white rounded-[14px] py-[32px] px-8 ">
//         <ServicesCard
//           className=" bg-[#A162F7] w-[70%] "
//           condition="Don’t Replace"
//           parts="Engine"
//           title="Oil Level"
//           imgSrc={IMAGES.OIL_LEVEL}
//         />
//         <ServicesCard
//           className=" bg-[#70CF97] w-[30%] "
//           condition="Still Good"
//           parts="Wheels"
//           title="Brake Pads"
//           imgSrc={IMAGES.BRAKE_PADS}
//         />
//         <ServicesCard
//           className="bg-[#F6CC0D] w-[10%]  "
//           condition="Need Change"
//           parts="Drivetrain"
//           title="Steering"
//           imgSrc={IMAGES.STEERING}
//         />
//         <ServicesCard
//           className="bg-[#FF764C] w-[80%] "
//           condition="Don’t Replace"
//           parts="Engine"
//           title="Oil Level"
//           imgSrc={IMAGES.OIL_LEVEL}
//         />
//       </div> */}

//       <div className="flex flex-col md:flex-row items-center justify-around bg-white mt-[30px] rounded-[14px] py-[32px] px-8 gap-4 md:gap-0">
//         <ServicesCard
//           className="bg-[#A162F7] w-full md:w-[70%]"
//           condition="Don’t Replace"
//           parts="Engine"
//           title="Oil Level"
//           imgSrc={IMAGES.OIL_LEVEL}
//         />
//         <span className="w-full h-px bg-gray-200 md:w-px md:h-8 md:mx-4" />

//         <ServicesCard
//           className="bg-[#70CF97] w-full md:w-[30%]"
//           condition="Still Good"
//           parts="Wheels"
//           title="Brake Pads"
//           imgSrc={IMAGES.BRAKE_PADS}
//         />
//         <span className="w-full h-px bg-gray-200 md:w-px md:h-8 md:mx-4" />

//         <ServicesCard
//           className="bg-[#F6CC0D] w-full md:w-[10%]"
//           condition="Need Change"
//           parts="Drivetrain"
//           title="Steering"
//           imgSrc={IMAGES.STEERING}
//         />
//         <span className="w-full h-px bg-gray-200 md:w-px md:h-8 md:mx-4" />

//         <ServicesCard
//           className="bg-[#FF764C] w-full md:w-[80%]"
//           condition="Don’t Replace"
//           parts="Engine"
//           title="Oil Level"
//           imgSrc={IMAGES.OIL_LEVEL}
//         />
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from "react";
import ServicesCard from "@/components/services/ServicesCard";
import ServicesRequired from "@/components/services/servicesRequired/ServicesRequired";
import ServicesSchedule from "@/components/services/servicesSchedule/ServicesSchedule";
import ServicesStation from "@/components/services/servicesStation/ServicesStation";
import YourOrder from "@/components/services/yourOrder/YourOrder";
import { IMAGES } from "@/constants/images";

const Services = () => {
  return (
    <div className="p-4 max-sm:p-1 ">
      {/* First Section */}
      <div className="flex max-xl:flex-col gap-4">
        <div className="flex-1">
          <ServicesStation />
          <YourOrder />
        </div>
        <div className="flex-1">
          <ServicesRequired />
          <ServicesSchedule />
        </div>
      </div>

      {/* Second Section - Scrollable Cards */}
      <div className="overflow-x-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 dark:bg-[#242731] bg-white p-6 rounded-[14px]">
          <ServicesCard
            className="bg-[#A162F7] w-full"
            condition="Don’t Replace"
            parts="Engine"
            title="Oil Level"
            imgSrc={IMAGES.OIL_LEVEL}
          />

          <ServicesCard
            className="bg-[#70CF97] w-full"
            condition="Still Good"
            parts="Wheels"
            title="Brake Pads"
            imgSrc={IMAGES.BRAKE_PADS}
          />

          <ServicesCard
            className="bg-[#F6CC0D] w-full"
            condition="Need Change"
            parts="Drivetrain"
            title="Steering"
            imgSrc={IMAGES.STEERING}
          />

          <ServicesCard
            className="bg-[#FF764C] w-full"
            condition="Don’t Replace"
            parts="Engine"
            title="Oil Level"
            imgSrc={IMAGES.OIL_LEVEL}
          />
        </div>
      </div>

      {/* <div className="flex flex-col md:flex-row items-center justify-around bg-white mt-[30px] rounded-[14px] py-[32px] px-8 gap-4 md:gap-0">
        <ServicesCard
          className="bg-[#A162F7] w-full md:w-[70%]"
          condition="Don’t Replace"
          parts="Engine"
          title="Oil Level"
          imgSrc={IMAGES.OIL_LEVEL}
        />
        <span className="w-full h-px bg-gray-200 md:w-px md:h-8 md:mx-4" />

        <ServicesCard
          className="bg-[#70CF97] w-full md:w-[30%]"
          condition="Still Good"
          parts="Wheels"
          title="Brake Pads"
          imgSrc={IMAGES.BRAKE_PADS}
        />
        <span className="w-full h-px bg-gray-200 md:w-px md:h-8 md:mx-4" />

        <ServicesCard
          className="bg-[#F6CC0D] w-full md:w-[10%]"
          condition="Need Change"
          parts="Drivetrain"
          title="Steering"
          imgSrc={IMAGES.STEERING}
        />
        <span className="w-full h-px bg-gray-200 md:w-px md:h-8 md:mx-4" />

        <ServicesCard
          className="bg-[#FF764C] w-full md:w-[80%]"
          condition="Don’t Replace"
          parts="Engine"
          title="Oil Level"
          imgSrc={IMAGES.OIL_LEVEL}
        />
      </div> */}
    </div>
  );
};

export default Services;
