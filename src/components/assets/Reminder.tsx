import React from "react";

interface ReminderPropsTypes {
  onClick?: () => void;
}

const Reminder: React.FC<ReminderPropsTypes> = ({ onClick }) => {
  const data = [
    {
      description: "Urgent Safety Recall",
      dueDate: "06/04/2022",
      overdue: "08/04/2022",
      notify: "David Demo",
      status: "Completed",
    },
    {
      description: "Urgent Safety Recall",
      dueDate: "06/04/2022",
      overdue: "08/04/2022",
      notify: "David Demo",
      status: "Completed",
    },
  ];

  return (
    <div className="flex flex-col justify-center dark:bg-[#242731] bg-white py-4 px-5 rounded-[14px] max-lg:hidden ">
      <div className="flex items-center justify-between ">
        <h1 className="dark:text-white text-black leading-[23.44px] text-[18px] font-medium  ">
          Reminder
        </h1>
        <button
          onClick={onClick}
          className=" text-white py-[6px] px-3 bg-[#A162F7] rounded-[6px]  "
        >
          + Add New
        </button>
      </div>
      <span className="dark:bg-[#2C303D] bg-[#F3F3F3] h-[1px] w-full my-[14px] "></span>

      <div className=" overflow-x-auto  ">
        <div className="min-w-[600px]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="dark:text-[#7C7C8D] text-[#72767C] text-sm font-medium">
                <th className="p-2 text-left">Description</th>
                <th className="p-2 text-left">Due Date</th>
                <th className="p-2 text-left">Overdue</th>
                <th className="p-2 text-left">Notify</th>
                <th className="p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="border-b dark:border-b-[#2C303D] text-[#242731] text-sm"
                >
                  <td className="dark:text-[#E0E4E7] p-2 whitespace-nowrap">
                    {item.description}
                  </td>
                  <td className="dark:text-[#E0E4E7] p-2 whitespace-nowrap">
                    {item.dueDate}
                  </td>
                  <td className="dark:text-[#E0E4E7] p-2 whitespace-nowrap">
                    {item.overdue}
                  </td>
                  <td className="dark:text-[#E0E4E7] p-2 whitespace-nowrap">
                    {item.notify}
                  </td>
                  <td className="dark:text-[#E0E4E7] p-2 whitespace-nowrap">
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reminder;
