import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import logo from "@assets/mainLogo.png";
import {
  AiOutlineDashboard,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { BiSolidGridAlt, BiSolidStore } from "react-icons/bi";
import NavItem from "./NavItem";
import { FaShapes } from "react-icons/fa";

interface DashSidebarProps {}

const data = [
  {
    ttl: "dashboard",
    link: "/dashboard",
    icon: <AiOutlineDashboard />,
  },
  {
    ttl: "products",
    link: "/dashboard/products",
    icon: <BiSolidGridAlt />,
  },
  {
    ttl: "categories",
    link: "/dashboard/categories",
    icon: <FaShapes />,
  },
  {
    ttl: "stores",
    link: "/dashboard/stores",
    icon: <BiSolidStore />,
  },
];

const DashSidebar: FC<DashSidebarProps> = () => {
  const [open, setopen] = useState<boolean>(false);

  return (
    <div className="flex flex-col">
      <div
        onClick={() => setopen(!open)}
        className={cn(
          open ? "w-[200px]" : "",
          "py-2 px-4 z-10 text-slate-800 cursor-pointer text-3xl flex items-center justify-between gap-2 h-[76px] max-h-[76px] overflow-hidden shadow border-y border-r border-l-0 border-slate-300"
        )}
      >
        <img
          className={cn(open ? "" : "hidden", "object-contain h-full")}
          src={logo}
          alt="main logo"
        />
        {open ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
      </div>
      <div className="border-r border-slate-300 shadow-md h-full w-full">
        <ul className="flex flex-col items-center gap-3 h-full p-2">
          {data.map((e, i) => {
            return <NavItem key={i} open={open} data={e} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default DashSidebar;
