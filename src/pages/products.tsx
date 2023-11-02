import useGet from "@/Hook/useGet";
import Breadcamp from "@/components/Breadcamp";
import Loader from "@/components/Loader";
import ProductCard from "@/components/products/ProductCard";
import Pagination from "@/components/ui/Pagination";
import { ProductType } from "@/lib/types";
import { userProducts } from "@/slices/home/homeAction";
import { FC } from "react";

interface ProductsProps {}

const links = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products" },
];

const Products: FC<ProductsProps> = () => {
  const { loading, data } = useGet({
    states: "userProducts",
    allData: userProducts,
  });
  console.log(data?.data);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="flex-1 p-4">
      <Breadcamp isDash={false} ttl="Products" links={links} />
      <div className="flex gap-2">
        <div className="w-[300px] border">Filter</div>
        <div className="w-full grid grid-cols-product gap-4 p-2">
          {data?.data?.map((e: ProductType) => (
            <ProductCard key={e?.id} product={e} />
          ))}
        </div>
      </div>
      <div className="my-5 mx-6">
        <Pagination data={data} />
      </div>
    </div>
  );
};

export default Products;
