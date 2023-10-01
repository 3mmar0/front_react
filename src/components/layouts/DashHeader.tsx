import { FC } from "react";
import Input from "../ui/Input";
import { FaSearch } from "react-icons/fa";

interface DashHeaderProps {}

const DashHeader: FC<DashHeaderProps> = () => {
  return (
    <div className="px-4 flex items-center border border-slate-400 shadow h-[70px]">
      <div className="w-full h-full flex items-center gap-3">
        <div className="w-full">
          <Input
            type="text"
            className="text-lg w-full"
            placeholder="Search..."
            icon={<FaSearch />}
          />
        </div>
        <nav>icon</nav>
      </div>
    </div>
  );
};

export default DashHeader;
