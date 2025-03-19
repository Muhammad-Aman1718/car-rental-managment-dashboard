import { RxDashboard } from "react-icons/rx";
import { TbSteeringWheel } from "react-icons/tb";
import { BiCar } from "react-icons/bi";
import { HiOutlineCalendar, HiOutlineShoppingBag } from "react-icons/hi";
import { GiCrossedSabres } from "react-icons/gi";
import { LuMessageSquareText } from "react-icons/lu";

export const MENU_ITEMS = [
  { href: "/dashboard", icon: RxDashboard, label: "Dashboard" },
  { href: "/dashboard/assets", icon: TbSteeringWheel, label: "Assets" },
  { href: "/dashboard/booking", icon: BiCar, label: "Booking" },
  {
    href: "/dashboard/sellCars",
    icon: HiOutlineShoppingBag,
    label: "Sell Cars",
  },
  { href: "/dashboard/services", icon: GiCrossedSabres, label: "Services" },
  { href: "/dashboard/calender", icon: HiOutlineCalendar, label: "Calendar" },
  { href: "/dashboard/messages", icon: LuMessageSquareText, label: "Messages" },
];

export const USER_MENU_ITEMS = [
  { href: "/dashboard/booking", icon: BiCar, label: "Booking" },
  {
    href: "/dashboard/sellCars",
    icon: HiOutlineShoppingBag,
    label: "Sell Cars",
  },
  { href: "/dashboard/services", icon: GiCrossedSabres, label: "Services" },
  { href: "/dashboard/messages", icon: LuMessageSquareText, label: "Messages" },
];
