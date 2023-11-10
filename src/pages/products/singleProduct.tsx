import useSingle from "@/Hook/useSingle";
import Breadcamp from "@/components/Breadcamp";
import Loader from "@/components/Loader";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/Button";
import MetaDate from "@/lib/metaDate";
import { ProductType } from "@/lib/types";
import { userSingleProduct } from "@/slices/home/homeAction";
import { FC } from "react";
import { BiSolidStar } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";

interface SingleProductProps {}

const links = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products" },
];

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
      <div className="flex-1 md:p-6 p-4">
        <Breadcamp
          isDash={false}
          ttl="Product Details"
          links={[...links, { name: data?.slug }]}
        />
        <div className="flex sm:flex-row flex-col gap-3">
          <div className="md:w-[80%] w-full">
            <img
              src={data?.image}
              className="rounded-md w-full max-w-[400px] block m-auto"
              alt=""
            />
          </div>
          <div className="w-full py-2">
            <span className="block">{data?.category}</span>
            <span>
              <strong>Brand: </strong>
              {data?.store}
            </span>
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
            <div>
              <p className="text-slate-900 font-bold">Tags:</p>
              <div className="p-2 flex gap-2 flex-wrap">
                {(data?.tags as { name: string }[])?.map((tag, i) => (
                  <span
                    className="px-3 py-1 bg-green-900 text-white rounded-full"
                    key={i}
                  >
                    {tag?.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-slate-900 font-bold">Rating:</p>
              <div className="p-2 flex gap-2 flex-wrap">
                {Array(data?.rating)
                  ?.fill("")
                  ?.map((i) => (
                    <BiSolidStar key={i} className="text-xl text-yellow-600" />
                  ))}
              </div>
            </div>
            <Button
              className="w-full mt-5"
              variant={"outline"}
              text="Add to card"
            >
              <FaCartPlus className="mx-2 scale-125" />
            </Button>
          </div>
        </div>
        <div>content like more options and reviews</div>
        <h2 className="sec_ttl w-fit text-2xl font-semibold my-4">
          You may also like:
        </h2>
        <div className="grid grid-cols-product gap-4">
          {data?.sameProducts?.map((e) => (
            <ProductCard product={e} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
