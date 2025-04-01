// import React from "react";
// import Image from "next/image";
// import InputField from "./InputField";
// import { FiHome } from "react-icons/fi";
// import { HiOutlineMail } from "react-icons/hi";
// import { LiaBirthdayCakeSolid } from "react-icons/lia";
// import { IoIosMale } from "react-icons/io";
// import ProfileImg from "../../../public/assets/setting/profileImg.png";
// import Button from "./profileComponent/Button";

// const Profile = () => {
//   return (
//     <div className="mt-[48px] ">
//       <div className=" mb-6 ">
//         <h1 className="text-[#242731] text-[20px] leading-[26.04px] font-bold mb-[6px] ">
//           Profile
//         </h1>
//         <p className="text-[#5F6165] leading-[20.83px]   ">
//           Update your photo and personal details here.
//         </p>
//       </div>
//       <span className="flex bg-[#E9EAEC] h-[1px] w-full "></span>
//       <div className=" max-w-[790px] flex flex-col gap-y-[30px] my-[30px] ">
//         <div className=" grid grid-cols-2 gap-x-9 items-center ">
//           <InputField
//             icon={<FiHome className="w-6 h-6 text-[#5F6165] " />}
//             title="Live in"
//             placeholder="Zuichi, Switzerland"
//           />
//           <InputField
//             icon={<FiHome className="w-6 h-6 text-[#5F6165] " />}
//             title="Street Address"
//             placeholder="2445 Crosswind Drive"
//           />
//         </div>
//         <InputField
//           icon={<HiOutlineMail className="w-6 h-6 text-[#5F6165] " />}
//           title="Email Address"
//           placeholder="uihutofficial@gmail.com"
//         />
//         <div className=" grid grid-cols-2 gap-x-9 items-center ">
//           <InputField
//             icon={<LiaBirthdayCakeSolid className="w-6 h-6 text-[#5F6165] " />}
//             title="Date Of Birth"
//             placeholder="07.12.195"
//           />
//           <InputField
//             icon={<IoIosMale className="w-6 h-6 text-[#5F6165] " />}
//             title="Gender"
//             placeholder="Male"
//           />
//         </div>
//       </div>
//       <span className="flex bg-[#E9EAEC] h-[1px] w-full "></span>

//       <div className="flex items-center justify-between max-w-[900px]  my-[25px] ">
//         <div className="flex items-center justify-between w-[500px] ">
//           <div className="flex flex-col gap-y-1 ">
//             <h2 className=" leading-[20.83px] text-[#242731] font-medium">
//               Your Photo
//             </h2>
//             <p className=" leading-[21px] text-[14px] text-[#7C7C8D]  ">
//               This will displayed on your profile
//             </p>
//           </div>
//           <Image src={ProfileImg} alt="Profile img does not show" />
//         </div>
//         <div className="flex items-center gap-x-[22px] ">
//           <Button title="Delete" />
//           <Button title="Update" />
//         </div>
//       </div>

//       <span className="flex bg-[#E9EAEC] h-[1px] w-full "></span>

//       <div className="flex justify-between mt-6 ">
//         <h2 className=" leading-[20.83px] text-[#242731] font-medium">
//           Social Profiles
//         </h2>
//         <div className="w-[800px] ">
//           <div className=" border border-[#E9EAEC] mb-4 max-w-[376px] py-3 px-[14px] rounded-[10px] flex items-center gap-x-2.5  ">
//             <input
//               className=" outline-none placeholder:text-[14px] placeholder:text-[#5F6165] placeholder:leading-[18.23px] placeholder:font-medium      "
//               type="text"
//               placeholder="facebook.com/"
//             />
//           </div>
//           <div className=" border border-[#E9EAEC] max-w-[376px] py-3 px-[14px] rounded-[10px] flex items-center gap-x-2.5  ">
//             <input
//               className=" outline-none placeholder:text-[14px] placeholder:text-[#5F6165] placeholder:leading-[18.23px] placeholder:font-medium      "
//               type="text"
//               placeholder="twitter.com/"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React from "react";
import Image from "next/image";
import InputField from "./InputField";
import { FiHome } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { IoIosMale } from "react-icons/io";
import ProfileImg from "../../../public/assets/setting/profileImg.png";
import Button from "./profileComponent/Button";
import useProfile from "@/hooks/setting/useProfile";
import { useAppSelector } from "@/store/store";

const Profile = () => {
  const {
    livesIn,
    setLivesIn,
    streetAddress,
    setStreetAddress,
    dateOfBirth,
    setDateOfBirth,
    gender,
    setGender,
    handleUpdateData,
  } = useProfile();

  const userData = useAppSelector((state) => state.userDataReducer.userData);

  console.log("this is  userData ,", userData);
  console.log("this is profile userData ,", userData?.liveIn);

  return (
    <div className="mt-12 px-4 md:px-8">
      <div className="mb-6">
        <h1 className="dark:text-white text-[#242731] text-xl font-bold mb-2">
          Profile
        </h1>
        <p className="dark:text-[#7C7C8D] text-[#5F6165] text-sm">
          Update your photo and personal details here.
        </p>
      </div>

      <span className="flex dark:bg-[#323745] bg-[#E9EAEC] h-[1px] w-full"></span>

      {/* Input Fields */}
      <div className="max-w-3xl flex flex-col gap-y-6 my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            value={livesIn}
            onChange={(e) => setLivesIn(e.target.value)}
            icon={<FiHome className=" max-sm:hidden w-6 h-6 text-[#5F6165]" />}
            title="Live in"
            placeholder={userData?.liveIn as string | undefined}
          />
          <InputField
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            icon={<FiHome className="max-sm:hidden w-6 h-6 text-[#5F6165]" />}
            title="Street Address"
            placeholder="2445 Crosswind Drive"
          />
        </div>

        <InputField
          icon={<HiOutlineMail className="w-6 h-6 text-[#5F6165]" />}
          title="Email Address"
          placeholder="uihutofficial@gmail.com"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            icon={<LiaBirthdayCakeSolid className="w-6 h-6 text-[#5F6165]" />}
            title="Date Of Birth"
            placeholder="07.12.195"
          />
          <InputField
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            icon={<IoIosMale className="w-6 h-6 text-[#5F6165]" />}
            title="Gender"
            placeholder="Male"
          />
        </div>
      </div>

      <span className="flex dark:bg-[#323745] bg-[#E9EAEC] h-[1px] w-full"></span>

      {/* Profile Image Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-3xl my-6 gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div>
            <h2 className="text-[#242731] font-medium">Your Photo</h2>
            <p className="text-[#7C7C8D] text-sm">
              This will be displayed on your profile
            </p>
          </div>
          <Image
            src={ProfileImg}
            alt="Profile image"
            className="w-24 h-24 rounded-full"
          />
        </div>
        <div className="flex gap-4">
          <Button title="Add" onClick={handleUpdateData} />
          <Button title="Delete" />
          <Button title="Update" />
        </div>
      </div>

      <span className="flex dark:bg-[#323745] bg-[#E9EAEC] h-[1px] w-full"></span>

      {/* Social Profiles */}
      <div className="flex flex-col md:flex-row justify-between mt-6 gap-6">
        <h2 className="text-[#242731] font-medium">Social Profiles</h2>
        <div className="w-full max-w-lg">
          <div className="border dark:border-[#2C303D] border-[#E9EAEC]  mb-4 py-3 px-4 rounded-lg flex items-center">
            <input
              className="w-full outline-none placeholder:text-sm dark:placeholder:text-[#7C7C8D] dark:bg-[#242731] text-[#5F6165]"
              type="text"
              placeholder="facebook.com/"
            />
          </div>
          <div className="border dark:border-[#2C303D] border-[#E9EAEC] py-3 px-4 rounded-lg flex items-center">
            <input
              className="w-full outline-none placeholder:text-sm dark:placeholder:text-[#7C7C8D] dark:bg-[#242731]  text-[#5F6165]"
              type="text"
              placeholder="twitter.com/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
