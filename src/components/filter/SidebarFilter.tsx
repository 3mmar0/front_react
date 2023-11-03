import { FC } from "react";

interface SidebarFilterProps {}

const SidebarFilter: FC<SidebarFilterProps> = () => {
  return (
    <div className="md:flex hidden flex-col w-[300px] min-w-[300px] border">
      <div>
        <h2>Price</h2>
        <input type="range" name="price" />
      </div>
    </div>
  );
};

export default SidebarFilter;
