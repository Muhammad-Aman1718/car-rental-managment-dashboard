// import EventCalendar from "@/components/calender/EventCalendar";
// import FilterBtn from "@/components/calender/FilterBtn";
// import FullCustomCalendar from "@/components/calender/FullCustomCalendar";
// import MiniCustomCalendar from "@/components/calender/MiniCustomCalendar";

// const Calender = () => {
//   return (
//     <div className="grid grid-cols-2 gap-6 ">
//       <div className="flex flex-col gap-y-6 ">
//         <h1 className="text-[#242731] text-[30px] leading-[39.06px] font-bold mb-1 ">
//           Calender
//         </h1>
//         <MiniCustomCalendar />
//         <EventCalendar />
//       </div>
//       <div>
//         <div className="flex items-center gap-x-4 mb-6 ">
//           <FilterBtn heading="Toyota" />
//           <FilterBtn heading="Time" />
//           <FilterBtn heading="Status" />
//         </div>
//         <FullCustomCalendar />
//       </div>
//     </div>
//   );
// };

// export default Calender;

import EventCalendar from "@/components/calender/EventCalendar";
import FilterBtn from "@/components/calender/FilterBtn";
import FullCustomCalendar from "@/components/calender/FullCustomCalendar";
import MiniCustomCalendar from "@/components/calender/MiniCustomCalendar";

const Calender = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
      {/* Left Section */}
      <div className="flex flex-col gap-y-6">
        <h1 className="dark:text-white text-[#242731] text-2xl font-bold mb-1 lg:text-left">
          Calendar
        </h1>
        <MiniCustomCalendar />
        <EventCalendar />
      </div>

      {/* Right Section */}
      <div>
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
          <FilterBtn heading="Toyota" />
          <FilterBtn heading="Time" />
          <FilterBtn heading="Status" />
        </div>

        <FullCustomCalendar />
      </div>
    </div>
  );
};

export default Calender;
