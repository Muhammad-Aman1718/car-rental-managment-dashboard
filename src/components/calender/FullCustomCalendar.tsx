// "use client";

// import React, { useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import timeGridWeek from "@fullcalendar/timegrid";
// import timeGridDay from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import { EventClickArg } from "@fullcalendar/core";

// const CustomCalendar = () => {
//   const [events, setEvents] = useState([
//     {
//       id: "1",
//       title: "Team Meeting",
//       start: "2025-02-20T10:00:00",
//       color: "#FF5733",
//     },
//     {
//       id: "2",
//       title: "Project Deadline",
//       start: "2025-02-22T23:59:00",
//       color: "#33B5E5",
//     },
//   ]);

//   const handleDateClick = (arg: any) => {
//     const title = prompt("Enter event title:");
//     if (title) {
//       setEvents([
//         ...events,
//         { id: Date.now().toString(), title, start: arg.date, color: "#4CAF50" },
//       ]);
//     }
//   };

//   const handleEventClick = (eventClickInfo: EventClickArg) => {
//     const action = confirm("Delete this event?");
//     if (action) {
//       setEvents(events.filter((event) => event.id !== eventClickInfo.event.id));
//     }
//   };

//   return (
//     <div className="  bg-white ">
//       <FullCalendar
//         plugins={[dayGridPlugin, timeGridWeek, timeGridDay, interactionPlugin]}
//         initialView="dayGridMonth"
//         events={events}
//         dateClick={handleDateClick}
//         eventClick={handleEventClick}
//         editable={true}
//         selectable={true}
//         height="600px"
//         headerToolbar={{
//           right: "prev,next today",
//           center: "title",
//           left: "dayGridMonth,timeGridWeek,timeGridDay",
//         }}
//         titleFormat={{ year: "numeric", month: "long", day: "numeric" }}
//         customButtons={{
//           myTitle: {
//             text: "", // Text blank rakhna hai
//             click: () => alert("Calendar Title Clicked!"),
//           },
//         }}
//       />

//       <style jsx global>
//         {`
//           .fc-toolbar {
//             background-color: #2884ff !important;
//             padding: 15px 20px;
//             border-radius: 10px 10px 0 0;
//           }

//           .fc-button-group,
//           .fc-button-group * {
//             background-color: #549cfd !important;
//             // padding: 6px 12px;
//             border-radius: 10px;
//             dispaly: flex;
//             align-items: center;
//           }

//           #fc-dom-1 {
//             background-color: #549cfd !important;
//             border-radius: 10px;
//             padding: 6px 12px;
//             color: white;
//             line-height: 20.83px;
//             font-weight: 500;
//             font-size: 16px !important;
//           }

//           .fc-button {
//             border: none !important;
//             padding: none;
//           }
//           .fc-today-button {
//             display: none !important;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default CustomCalendar;

"use client";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridWeek from "@fullcalendar/timegrid";
import timeGridDay from "@fullcalendar/timegrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { EventClickArg } from "@fullcalendar/core";

const CustomCalendar = () => {
  const [events, setEvents] = useState([
    {
      id: "1",
      title: "Team Meeting",
      start: "2025-02-20T10:00:00",
      color: "#FF5733",
    },
    {
      id: "2",
      title: "Project Deadline",
      start: "2025-02-22T23:59:00",
      color: "#33B5E5",
    },
  ]);

  const handleDateClick = (arg: DateClickArg) => {
    const title = prompt("Enter event title:");
    if (title) {
      setEvents([
        ...events,
        {
          id: Date.now().toString(),
          title,
          start: arg.date.toISOString(),
          color: "#4CAF50",
        },
      ]);
    }
  };

  const handleEventClick = (eventClickInfo: EventClickArg) => {
    const action = confirm("Delete this event?");
    if (action) {
      setEvents(events.filter((event) => event.id !== eventClickInfo.event.id));
    }
  };

  return (
    <div className="dark:bg-[#242731] bg-white p-5 max-sm:p-2 rounded-lg shadow-lg border border-gray-200 w-full max-w-4xl mx-auto">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridWeek, timeGridDay, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        editable={true}
        selectable={true}
        height="auto"
        headerToolbar={{
          right: "prev,next today",
          center: "title",
          left: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        titleFormat={{ year: "numeric", month: "long", day: "numeric" }}
      />

      <style jsx global>
        {`
          .fc-toolbar {
            background-color: #2884ff !important;
            padding: 12px 15px;
            border-radius: 10px 10px 0 0;
            text-align: center;
          }

          .fc-button-group,
          .fc-button-group * {
            background-color: #549cfd !important;
            border-radius: 8px;
          }

          .fc-button {
            border: none !important;
          }
          .fc-today-button {
            display: none !important;
          }

          .dark .fc {
            // background-color: #242731 !important;
            color: white !important;
          }

          .dark .fc-toolbar {
            // background-color: #1e1e1e !important;
          }

          .dark .fc-button-group,
          .dark .fc-button-group * {
            background-color: #374151 !important;
          }

          .dark .fc-button {
            color: white !important;
            background: #3b82f6 !important;
          }

          .dark .fc-daygrid-day {
            color: white !important;
          }

          /* Mobile Responsive */
          @media (max-width: 768px) {
            .fc-header-toolbar {
              flex-direction: column;
              gap: 10px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CustomCalendar;
