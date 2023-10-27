import DashHeader from "@/components/layouts/DashHeader";
import DashSidebar from "@/components/layouts/DashSidebar";
import { FC } from "react";
import { Outlet } from "react-router-dom";

interface dashProps {}

const Dash: FC<dashProps> = () => {
  // const cats = useGet({
  //   states: "categories",
  //   allData: categories(),
  // });
  return (
    <div className="flex flex-1">
      <DashSidebar />
      <div className="flex-1 h-full flex flex-col">
        <DashHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default Dash;
