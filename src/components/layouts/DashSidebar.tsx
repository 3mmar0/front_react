import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import {
  AiFillDashboard,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { BiSolidGridAlt, BiSolidStore } from "react-icons/bi";
import { FaShapes } from "react-icons/fa";
import NavItem from "./NavItem";

interface DashSidebarProps {}

const data = [
  {
    ttl: "dashboard",
    link: "/dashboard",
    icon: <AiFillDashboard />,
  },
  {
    ttl: "products",
    link: "/dashboard/products",
    icon: <BiSolidGridAlt />,
    children: [
      {
        ttl: "all",
        link: "/dashboard/products/all",
      },
      {
        ttl: "create",
        link: "/dashboard/products/create",
      },
    ],
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
          open ? "w-[250px]" : "",
          "p-4 bg-slate-900 text-slate-50 cursor-pointer text-3xl flex items-center justify-center h-[75px] shadow border border-r-0 border-slate-400"
        )}
      >
        {open ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
      </div>
      <div className=" border-r border-slate-400 shadow-md h-full">
        <nav className="flex flex-col items-center gap-3 h-full p-2">
          {data.map((e, i) => {
            return <NavItem key={i} open={open} data={e} />;
          })}
        </nav>
      </div>
    </div>
  );
};

export default DashSidebar;
