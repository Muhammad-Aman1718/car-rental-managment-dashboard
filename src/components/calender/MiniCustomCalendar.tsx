// "use client";

// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import {
//   MdOutlineKeyboardArrowLeft,
//   MdOutlineKeyboardArrowRight,
// } from "react-icons/md";

// const MiniCustomCalendar = () => {
//   const [date, setDate] = useState(new Date());
//   const [view, setView] = useState<"month" | "week">("month"); // Toggle state

//   return (
//     <div className="bg-white px-5 py-6 rounded-lg shadow-lg  border border-gray-200">
//       {/* Header */}
//       <div className="flex items-center justify-between pb-6 ">
//         {/* Left: Title */}
//         <h2 className="text-lg text-gray-900 font-semibold">
//           {date.toLocaleString("default", { month: "long" })},{" "}
//           {date.getFullYear()}
//         </h2>

//         {/* Right: Navigation Arrows */}
//         <div className="flex items-center gap-2">
//           <button
//             onClick={() =>
//               setDate((prev) => {
//                 const newDate = new Date(prev);
//                 newDate.setMonth(prev.getMonth() - 1);
//                 return newDate;
//               })
//             }
//             className="p-1 rounded-full hover:bg-gray-200 transition"
//           >
//             <MdOutlineKeyboardArrowLeft className="text-gray-500 h-5 w-5" />
//           </button>
//           <button
//             onClick={() =>
//               setDate((prev) => {
//                 const newDate = new Date(prev);
//                 newDate.setMonth(prev.getMonth() + 1);
//                 return newDate;
//               })
//             }
//             className="p-1 rounded-full hover:bg-gray-200 transition"
//           >
//             <MdOutlineKeyboardArrowRight className="text-gray-500 h-5 w-5" />
//           </button>
//         </div>
//       </div>

//       {/* Toggle Buttons */}
//       <div className="flex items-center justify-center bg-[#F9F9F9] rounded-[19px] mb-2">
//         <button
//           className={`flex items-center justify-center w-full py-2 rounded-full ${
//             view === "week" ? "bg-[#FF6370] text-white" : "text-gray-500"
//           }`}
//           onClick={() => setView("week")}
//         >
//           Week
//         </button>
//         <button
//           className={`flex items-center justify-center w-full py-2 rounded-[19px]  ${
//             view === "month" ? "bg-[#FF6370] text-white" : "text-gray-500"
//           }`}
//           onClick={() => setView("month")}
//         >
//           Month
//         </button>
//       </div>

//       {/* Calendar Component */}
//       <Calendar
//         value={date}
//         onChange={(value) => {
//           if (value instanceof Date) {
//             setDate(value); // Single Date
//           } else if (
//             Array.isArray(value) &&
//             value.length > 0 &&
//             value[0] instanceof Date
//           ) {
//             setDate(value[0]); // Range Case: Set to start date
//           }
//         }}
//         showNavigation={false}
//         className="custom-calendar    "
//         tileClassName={({ date: tileDate }) =>
//           tileDate.toDateString() === date.toDateString()
//             ? "selected-date"
//             : "text-gray-700"
//         }
//       />
//     </div>
//   );
// };

// export default MiniCustomCalendar;

"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const MiniCustomCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<"month" | "week">("month");

  return (
    <div className="dark:bg-[#242731] bg-white p-5 rounded-lg shadow-lg w-full max-w-md mx-auto md:max-w-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-4">
        {/* Title */}
        <h2 className="dark:text-white text-lg text-gray-900 font-semibold text-center md:text-left">
          {date.toLocaleString("default", { month: "long" })},{" "}
          {date.getFullYear()}
        </h2>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              setDate((prev) => {
                const newDate = new Date(prev);
                newDate.setMonth(prev.getMonth() - 1);
                return newDate;
              })
            }
            className="p-1 rounded-full hover:bg-gray-200 transition"
          >
            <MdOutlineKeyboardArrowLeft className="text-gray-500 h-5 w-5" />
          </button>
          <button
            onClick={() =>
              setDate((prev) => {
                const newDate = new Date(prev);
                newDate.setMonth(prev.getMonth() + 1);
                return newDate;
              })
            }
            className="p-1 rounded-full hover:bg-gray-200 transition"
          >
            <MdOutlineKeyboardArrowRight className="text-gray-500 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Toggle Buttons */}
      <div className="flex items-center justify-center dark:bg-[#2B2E38] bg-[#F9F9F9] rounded-[19px] mb-3 w-full">
        <button
          className={`flex-1 py-2 rounded-full transition ${
            view === "week"
              ? "bg-[#FF6370] text-white"
              : "dark:text-white text-gray-500"
          }`}
          onClick={() => setView("week")}
        >
          Week
        </button>
        <button
          className={`flex-1 py-2 rounded-[19px] transition ${
            view === "month"
              ? "bg-[#FF6370] text-white"
              : "dark:text-white text-gray-500"
          }`}
          onClick={() => setView("month")}
        >
          Month
        </button>
      </div>

      {/* Calendar Component */}
      <div className="w-full">
        <Calendar
          value={date}
          onChange={(value) => {
            if (value instanceof Date) {
              setDate(value);
            } else if (
              Array.isArray(value) &&
              value.length > 0 &&
              value[0] instanceof Date
            ) {
              setDate(value[0]);
            }
          }}
          showNavigation={false}
          className="custom-calendar w-full"
          tileClassName={({ date: tileDate }) =>
            tileDate.toDateString() === date.toDateString()
              ? "selected-date"
              : "text-gray-700"
          }
        />
      </div>
    </div>
  );
};

export default MiniCustomCalendar;
