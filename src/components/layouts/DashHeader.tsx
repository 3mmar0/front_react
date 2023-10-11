import { FC } from "react";
import Input from "../ui/Input";
import { CiSearch } from "react-icons/ci";
import Avatar from "../ui/Avatar";

interface DashHeaderProps {}

const DashHeader: FC<DashHeaderProps> = () => {
  return (
    <div className="px-4 flex items-center border-b border-slate-300 shadow h-[70px]">
      <div className="w-full h-full flex items-center gap-5">
        <div className="w-full">
          <Input
            type="text"
            className="text-lg w-full"
            placeholder="Search..."
            sufixIcon={
              <CiSearch className="text-slate-600 text-[31px] cursor-pointer active:scale-90" />
            }
          />
        </div>
        <nav className="relative">
          <Avatar />
        </nav>
      </div>
    </div>
  );
};

export default DashHeader;
