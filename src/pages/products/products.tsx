import useGet from "@/Hook/useGet";
import Breadcamp from "@/components/Breadcamp";
import Loader from "@/components/Loader";
import SidebarFilter from "@/components/filter/SidebarFilter";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Pagination from "@/components/ui/Pagination";
import MetaDate from "@/lib/metaDate";
import { ProductType } from "@/lib/types";
import { userProducts } from "@/slices/home/homeAction";
import { FC, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LuFilter } from "react-icons/lu";
import { useSearchParams } from "react-router-dom";

interface ProductsProps {}

const links = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products" },
];

const Products: FC<ProductsProps> = () => {
  const [search, setSearch] = useSearchParams();
  const currentSearch = search.get("name") || "";

  const [name, setname] = useState<string>(currentSearch);

  const { loading, data } = useGet({
    states: "userProducts",
    allData: userProducts,
  });

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="flex-1 p-4">
      <MetaDate ttl="All Products - page" />
      <Breadcamp isDash={false} ttl="Products" links={links} />
      <div className="flex gap-2">
        <SidebarFilter />
        <div className="w-full ">
          <div className="md:hidden block">
            <Button
              className="mb-2 flex items-center gap-2 text-lg"
              text="Filter"
              variant={"outline"}
            >
              <LuFilter />
            </Button>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSearch(search.toString());
            }}
            className="mb-2"
          >
            <Input
              type="text"
              className="text-lg w-full"
              placeholder="Search..."
              value={name}
              onChange={(e) => {
                setname(e.target.value);
                search.set("name", e.target.value);
              }}
              sufixIcon={
                <CiSearch
                  onClick={() => setSearch(search.toString())}
                  className="text-slate-600 text-[31px] cursor-pointer active:scale-90"
                />
              }
            />
          </form>
          <div className="w-full grid grid-cols-product gap-4 p-2">
            {data?.data?.map((e: ProductType) => (
              <ProductCard key={e?.id} product={e} />
            ))}
          </div>
        </div>
      </div>
      <div className="my-5 mx-6">
        <Pagination data={data} />
      </div>
    </div>
  );
};

export default Products;
