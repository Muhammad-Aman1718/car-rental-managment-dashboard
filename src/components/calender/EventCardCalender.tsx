import React from "react";
import Image, { StaticImageData } from "next/image";
import AvatorImg1 from "../../../public/assets/calendar/avator.png";

interface EventCardCalenderPropsTypes {
  className?: string;
  src?: string | StaticImageData;
}

const EventCardCalender: React.FC<EventCardCalenderPropsTypes> = ({
  src,
  className,
}) => {
  return (
    <div className={`${className} bg-[#A162F7] p-2.5  w-full rounded-[10px] `}>
      <h2 className="leading-[18.23px] text-[14px] font-medium text-white mb-1 ">
        Drift Series Firs Round
      </h2>
      <div className="flex items-center justify-between ">
        <h3 className="leading-[18.23px] text-[14px] font-medium text-white ">
          JDM
        </h3>
        <Image src={src!} alt="Avator img does not show" />
      </div>
    </div>
  );
};

export default EventCardCalender;
