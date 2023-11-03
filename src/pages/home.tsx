import Loader from "@/components/Loader";
import MetaDate from "@/lib/metaDate";
<<<<<<< HEAD
import { CaruselType } from "@/lib/types";
=======
import { HomeType } from "@/lib/types";
>>>>>>> 981713949f819f7049981d91b66292a5e9adbebe
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { LuChevronDown } from "react-icons/lu";
import notFound from "@assets/notFound.png";
import ProductCard from "@/components/products/ProductCard";

interface homeProps {}

const Home: FC<homeProps> = () => {
  const dispatch = useAppDispatch();
  const { loading, data, errors } = useAppSelector((state) => state.home);

  const [currentImg, setcurrentImg] = useState<number>(1);

  const handleNext = () => {
    console.log(data?.carusels?.length);

<<<<<<< HEAD
    if (data?.carusels?.length === currentImg) {
=======
    if ((data as HomeType)?.carusels?.slice(0, 3)?.length === currentImg) {
>>>>>>> 981713949f819f7049981d91b66292a5e9adbebe
      setcurrentImg(1);
    } else {
      setcurrentImg(currentImg + 1);
    }
  };
  const handlePrev = () => {
    if (currentImg > 1) {
      setcurrentImg(currentImg - 1);
    } else {
<<<<<<< HEAD
      setcurrentImg(data?.carusels?.length);
=======
      setcurrentImg((data as HomeType)?.carusels?.slice(0, 3)?.length);
>>>>>>> 981713949f819f7049981d91b66292a5e9adbebe
    }
  };

  useEffect(() => {
    if ((errors as string) === "Error: Network Error") {
      toast.error("Error: Network Error, pleaze check your connection");
    }
  }, [errors, dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex-1">
      <MetaDate ttl="Home - page" />
      {/* Categories - header */}
      <div className="min-h-[45px] px-4 flex items-center flex-nowrap overflow-x-auto border-b border-slate-300">
        <li
          key={0}
          className="px-3 h-[45px] whitespace-nowrap border-x border-slate-300  flex items-center justify-center"
        >
          All Categories
        </li>
        {data?.categories?.map((e) => (
          <li
            key={e?.name}
            className="h-[45px] whitespace-nowrap flex items-center gap-1 font-semibold px-2 border-r border-slate-300"
          >
            {e?.name}{" "}
            <p className=" mt-1">
              <LuChevronDown />
            </p>
          </li>
        ))}
      </div>
      {/* Carusels */}
<<<<<<< HEAD
      <section className="mb-4 h-[500px] max-h-[500px]">
        <div className="relative flex h-[500px] w-full max-h-[500px]">
          <div className="w-full h-[500px] max-h-[500px] flex-1">
            {data?.carusels?.map((e, i) => {
              return i+1 === currentImg ? (
                <img
                  key={e?.id}
                  className="object-contain w-full  h-[500px] max-h-[500px]"
                  src={e?.image}
=======
      <section className="p-4 mb-4 h-fit max-h-[500px]">
        <div className="relative flex h-full w-full max-h-[500px]">
          <div className="w-full h-full max-h-[500px] flex-1">
            {(data as HomeType)?.carusels?.slice(0, 3)?.map((e, i) => {
              return i + 1 === currentImg ? (
                <img
                  key={e?.id}
                  className="object-contain w-full h-full max-h-[500px]"
                  src={e?.image ? e?.image : notFound}
>>>>>>> 981713949f819f7049981d91b66292a5e9adbebe
                  alt=""
                />
              ) : (
                ""
              );
            })}
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-0 bottom-0 left-0 w-10 bg-slate-800/60 flex items-center justify-center"
          >
            <FaArrowLeft className="text-2xl text-slate-50" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-0 bottom-0 right-0 w-10 bg-slate-800/60 flex items-center justify-center"
          >
            <FaArrowRight className="text-2xl text-slate-50" />
          </button>
          <div className="absolute w-fit bottom-3 left-1/2 right-1/2 -translate-x-1/2 flex gap-2 items-center">
<<<<<<< HEAD
            {data?.carusels?.map((e, i) => (
=======
            {(data as HomeType)?.carusels?.slice(0, 3)?.map((e, i) => (
>>>>>>> 981713949f819f7049981d91b66292a5e9adbebe
              <span
                key={e?.id}
                className={cn(
                  i === currentImg - 1 ? "bg-slate-800" : "bg-slate-300",
                  " cursor-pointer w-3 h-3 block rounded-full"
                )}
              ></span>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
      
=======
      {/* Services
>>>>>>> 981713949f819f7049981d91b66292a5e9adbebe
      <section className="p-4">
        <h2 className="sec_ttl mb-16 cursor-pointer w-fit text-4xl font-semibold text-slate-900">
          Our Service
        </h2>
        <div className="w-full rounded-md p-4 h-[200px] min-h-[200px] bg-gradient-to-t from-slate-100 to-main">
          <div className="flex h-full -mt-14 gap-3 text-slate-50">
            <div className="bg-slate-900 rounded shadow-md hover:scale-105 w-full h-full text-center p-5">
              Speed
            </div>
            <div className="bg-slate-900 rounded shadow-md hover:scale-105 w-full h-full text-center p-5">
              Speed
            </div>
            <div className="bg-slate-900 rounded shadow-md hover:scale-105 w-full h-full text-center p-5">
              Speed
            </div>
          </div>
        </div>
      </section> */}
      {/* New Products */}
      <section className="p-4">
        <h2 className="sec_ttl mb-4 cursor-pointer w-fit text-4xl font-semibold text-slate-900">
          New Products
        </h2>
        <div className="w-full grid grid-cols-product justify-center gap-5 overflow-auto py-3 px-6">
          {data &&
<<<<<<< HEAD
            data?.categories?.map((e, i) => (
              <div
                key={i}
                className="rounded-full bg-main h-[50px] w-[50px] min-w-[50px]"
              ></div>
=======
            (data as HomeType)?.newProd?.map((e, i) => (
              <ProductCard key={i} product={e} />
            ))}
        </div>
      </section>
      {/* AD */}
      {(data as HomeType)?.carusels?.length > 3 && (
        <div className="p-4">
          <img
            className="rounded-xl mx-auto max-w-[1000px] w-full"
            src={(data as HomeType)?.carusels[3]?.image}
            alt=""
          />
        </div>
      )}
      {/* Hot Products */}
      <section className="p-4">
        <h2 className="sec_ttl mb-4 cursor-pointer w-fit text-4xl font-semibold text-slate-900">
          Hot Products
        </h2>
        <div className="w-full grid grid-cols-product justify-center gap-5 overflow-auto py-3 px-6">
          {data &&
            (data as HomeType)?.hotProd?.map((e, i) => (
              <ProductCard key={i} product={e} />
            ))}
        </div>
      </section>
      {/* Top rated Products */}
      <section className="p-4">
        <h2 className="sec_ttl mb-4 cursor-pointer w-fit text-4xl font-semibold text-slate-900">
          Top rated Products
        </h2>
        <div className="w-full grid grid-cols-product justify-center gap-5 overflow-auto py-3 px-6">
          {data &&
            (data as HomeType)?.topProd?.map((e, i) => (
              <ProductCard key={i} product={e} />
            ))}
        </div>
      </section>
      {/* Best Selling Products */}
      <section className="p-4">
        <h2 className="sec_ttl mb-4 cursor-pointer w-fit text-4xl font-semibold text-slate-900">
          Best Selling Products
        </h2>
        <div className="w-full grid grid-cols-product justify-center gap-5 overflow-auto py-3 px-6">
          {data &&
            (data as HomeType)?.bestSellingProd?.map((e, i) => (
              <ProductCard key={i} product={e} />
>>>>>>> 981713949f819f7049981d91b66292a5e9adbebe
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
