import React from "react";
import HeadingLogo from "../../public/assets/home/Heading.png";
import { IoReorderTwoOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-[#0F0F0F]">
      <header className="border w-[1216px]  text-white">
        <nav>
          <IoReorderTwoOutline />
          <Image src={HeadingLogo} alt="Heading does not show " />
          <Link href={`/auth/signUp`}>
            <button className="">Login/Register</button>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Home;
