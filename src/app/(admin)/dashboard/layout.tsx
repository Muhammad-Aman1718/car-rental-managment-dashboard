// import React from "react";
// import SideBar from "@/components/dashboard/SideBar";
// import Navbar from "@/components/dashboard/Navbar";

// const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return (
//     <div className="flex h-screen">
//       <SideBar />

//       {/* <div className=" flex flex-col w-full h-screen"> */}
//       <div className="md:ml-[250px] ml-[50px] flex flex-col w-full h-screen">
//         <Navbar />

//         <div className="flex-1 overflow-auto mt-[70px] p-6 max-sm:p-3 bg-gray-100">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;

// import React from "react";
// import SideBar from "@/components/dashboard/SideBar";
// import Navbar from "@/components/dashboard/Navbar";

// const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return (
//     <div className="flex h-screen overflow-hidden">
//       <SideBar />

//       <div className="md:ml-[250px] ml-[50px] flex flex-col w-full h-screen min-h-0">
//         <Navbar />

//         <div className="flex-1 overflow-auto mt-[70px] p-6 max-sm:p-3 bg-gray-100">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;

import React from "react";
import SideBar from "@/components/dashboard/SideBar";
import Navbar from "@/components/dashboard/Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen ">
      <SideBar />

      <div className="md:ml-[250px] ml-[50px] flex flex-col w-full h-screen min-h-0">
        <Navbar />

        <div className="flex-1 overflow-y-auto mt-[70px] p-6 max-sm:p-3 dark:bg-[#1F2128] bg-gray-100">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
