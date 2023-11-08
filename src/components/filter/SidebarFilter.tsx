import { FC, FormEvent, useState } from "react";
import InputSelect from "../ui/InputSelect";
import { CategoryType, Filter } from "@/lib/types";
import { useAppSelector } from "@/store/hooks";
import SliderRange from "./SliderRange";
import { Button } from "../ui/Button";
import { useSearchParams } from "react-router-dom";

interface SidebarFilterProps {}

const SidebarFilter: FC<SidebarFilterProps> = () => {
  const [search, setSearch] = useSearchParams();
  // const queryParams = new URLSearchParams(location.search);
  const currentPage = search.get("page") || "1";
  const currentSearch = search.get("name") || "";

  const cats = useAppSelector((state) => state.GlobalCats);

  const [filter, setfilter] = useState<Filter>({
    price: search.get("price") || "1000",
    category_id: search.get("category_id") || "",
    rating: search.get("rating") || "5",
  });
  const handleSearchFilter = (e: FormEvent) => {
    e.preventDefault();

    setSearch({ ...filter, page: currentPage, name: currentSearch });
  };

  return (
    <form
      onSubmit={handleSearchFilter}
      className="md:flex hidden flex-col w-[300px] min-w-[300px] border p-2"
    >
      {/* Price */}
      <div className="pb-3 p-2 border-b border-slate-400">
        <h2 className="text-xl font-semibold">Price</h2>
        <SliderRange filter={filter} handleFilter={setfilter} />
      </div>
      {/* Category */}
      <div className="pb-5 p-2 border-b border-slate-400">
        <h2 className="text-xl font-semibold">Category</h2>
        <InputSelect
          name="category_id"
          onChange={(e) =>
            setfilter({ ...filter, category_id: e.target.value })
          }
          value={filter?.category_id}
          emptyOption="All"
          options={(cats?.data as CategoryType[])?.map((e) => {
            return { val: e?.id, name: e?.name };
          })}
        />
      </div>
      {/* Rating */}
      <div className="pb-5 p-2 border-b border-slate-400">
        <h2 className="text-xl font-semibold">Rating</h2>
        <InputSelect
          name="rating"
          onChange={(e) => setfilter({ ...filter, rating: e.target.value })}
          value={filter?.rating}
          options={[
            { val: "5", name: "5" },
            { val: "4", name: "4" },
            { val: "3", name: "3" },
            { val: "2", name: "2" },
            { val: "1", name: "1" },
          ]}
        />
      </div>
      <Button
        type="submit"
        className="mt-3"
        variant={"outline"}
        text="Filter"
      />
    </form>
  );
};

export default SidebarFilter;
