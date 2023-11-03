import { FC } from "react";
import InputSelect from "../ui/InputSelect";
import { CategoryType } from "@/lib/types";
import { useAppSelector } from "@/store/hooks";

interface SidebarFilterProps {}

const SidebarFilter: FC<SidebarFilterProps> = () => {
  const cats = useAppSelector((state) => state.GlobalCats);
  return (
    <div className="md:flex hidden flex-col w-[300px] min-w-[300px] border p-2">
      {/* Price */}
      <div className="pb-3 p-2 border-b border-slate-400">
        <h2 className="text-xl font-semibold">Price</h2>
        <input className="w-full" type="range" name="price" />
      </div>
      {/* Category */}
      <div className="pb-5 p-2 border-b border-slate-400">
        <h2 className="text-xl font-semibold">Category</h2>
        <InputSelect
          name="category_id"
          //   onChange={(e) => setcategory_id(e.target.value)}
          options={(cats?.data as CategoryType[])?.map((e) => {
            return { val: e?.id, name: e?.name };
          })}
        />
      </div>
    </div>
  );
};

export default SidebarFilter;
