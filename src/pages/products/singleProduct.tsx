import useSingle from "@/Hook/useSingle";
import Loader from "@/components/Loader";
import MetaDate from "@/lib/metaDate";
import { ProductType } from "@/lib/types";
import { userSingleProduct } from "@/slices/home/homeAction";
import { FC } from "react";

interface SingleProductProps {}

const SingleProduct: FC<SingleProductProps> = () => {
  const { loading, data }: { data: ProductType; loading: boolean } = useSingle({
    states: "userSingleProducts",
    callFun: userSingleProduct,
  });
  console.log(data);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <MetaDate ttl="All Products - page" />
      <div className="flex-1 p-4">
        <div className="flex gap-3">
          <div className="w-full">
            <img src={data?.image} className="rounded-md" alt="" />
          </div>
          <div className="w-full">
            <span>{data?.category}</span>
            <p className="text-2xl font-bold flex items-center gap-1">
              {data?.compare_price && (
                <span className="line-through text-xl text-red-700">
                  {data?.compare_price}$
                </span>
              )}
              {data?.price}$
            </p>
            <h2 className="text-2xl font-bold my-2">{data?.name}</h2>
            <p className="text-slate-700">{data?.disc}</p>
          </div>
        </div>
        <div>content</div>
      </div>
    </>
  );
};

export default SingleProduct;
