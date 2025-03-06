// import Email from "@/components/setting/Email";
// import MyDetails from "@/components/setting/MyDetails";
// import Notification from "@/components/setting/Notification";
// import PagesBtn from "@/components/setting/PagesBtn";
// import Password from "@/components/setting/Password";
// import Profile from "@/components/setting/Profile";
// import React from "react";

// const Setting = () => {
//   return (
//     <div className="bg-white ">
//       <h1 className="text-[#242731] text-[30px] leading-[39.06px] font-bold ">
//         Setting
//       </h1>
//       <div className="flex items-center gap-x-[48px]  ">
//         <PagesBtn className="" heading="My Details" />
//         <PagesBtn className="" heading="Profile" />
//         <PagesBtn className="" heading="Password" />
//         <PagesBtn className="" heading="Email" />
//         <PagesBtn className="" heading="Notification" />
//       </div>
//       <MyDetails />
//       <Password />
//       <Profile />
//       <Email />
//       <Notification />
//     </div>
//   );
// };

// export default Setting;

"use client";
import React, { useState } from "react";
import Email from "@/components/setting/Email";
import MyDetails from "@/components/setting/MyDetails";
import Notification from "@/components/setting/Notification";
import PagesBtn from "@/components/setting/PagesBtn";
import Password from "@/components/setting/Password";
import Profile from "@/components/setting/Profile";

const Setting = () => {
  const [activeComponent, setActiveComponent] = useState("Profile");

  return (
    <div className="dark:bg-[#242731] bg-white px-10 py-[25px] max-xl:px-6 max-sm:p-3 ">
      <h1 className="dark:text-white text-[#242731] text-[30px] leading-[39.06px] font-bold mb-[30px] ">
        Setting
      </h1>

      {/* <div className="flex items-center gap-x-[48px]  ">
        {["My Details", "Profile", "Password", "Email", "Notification"].map(
          (item) => (
            <PagesBtn
              key={item}
              onClick={() => setActiveComponent(item)}
              className={`p-2 rounded-md  text-nowrap ${
                activeComponent === item
                  ? "bg-[#A162F71A] dark:text-white "
                  : "dark:text-white "
              }`}
              heading={item}
            />
          )
        )}
      </div> */}

      <div className="flex items-center gap-x-[48px] overflow-x-auto md:overflow-x-visible whitespace-nowrap w-full">
        <div className="flex space-x-4 min-w-max ">
          {["My Details", "Profile", "Password", "Email", "Notification"].map(
            (item) => (
              <PagesBtn
                key={item}
                onClick={() => setActiveComponent(item)}
                className={`p-2 rounded-md ${
                  activeComponent === item
                    ? "bg-[#A162F71A] dark:text-white"
                    : "dark:text-white"
                }`}
                heading={item}
              />
            )
          )}
        </div>
      </div>

      <div>
        {activeComponent === "My Details" && <MyDetails />}
        {activeComponent === "Profile" && <Profile />}
        {activeComponent === "Password" && <Password />}
        {activeComponent === "Email" && <Email />}
        {activeComponent === "Notification" && <Notification />}
      </div>
    </div>
  );
};

export default Setting;
