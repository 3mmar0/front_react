import Loader from "@/components/Loader";
import MetaDate from "@/lib/metaDate";
import { CaruselType, HomeType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { LuChevronDown } from "react-icons/lu";

interface homeProps {}

const Home: FC<homeProps> = () => {
  const dispatch = useAppDispatch();
  const { loading, data, errors } = useAppSelector((state) => state.home);

  const [currentImg, setcurrentImg] = useState(1);

  const handleNext = () => {
    console.log((data as HomeType)?.carusels?.length);

    if ((data as HomeType)?.carusels?.length === currentImg) {
      setcurrentImg(1);
    } else {
      setcurrentImg(currentImg + 1);
    }
  };
  const handlePrev = () => {
    if (currentImg > 1) {
      setcurrentImg(currentImg - 1);
    } else {
      setcurrentImg((data as HomeType)?.carusels?.length);
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
      <div className="h-[45px] px-4 flex items-center border-b border-slate-300">
        <li
          key={0}
          className="px-3 border-x border-slate-300 h-full flex items-center justify-center"
        >
          All Categories
        </li>
        {(data as HomeType)?.categories?.map((e) => (
          <li
            key={e?.name}
            className="h-full flex items-center gap-1 font-semibold px-2 border-r border-slate-300"
          >
            {e?.name}{" "}
            <p className=" mt-1">
              <LuChevronDown />
            </p>
          </li>
        ))}
      </div>
      {/* Carusels */}
      <section className="mb-4 h-fit max-h-[500px]">
        <div className="relative flex h-full w-full max-h-[500px]">
          <div className="w-full h-full max-h-[500px] flex-1">
            {(data as HomeType)?.carusels?.map((e) => {
              return e?.id === currentImg ? (
                <img
                  key={e?.id}
                  className="object-contain w-full h-full max-h-[500px]"
                  src={e?.image}
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
            {(data as HomeType)?.carusels?.map((e, i) => (
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
      <section className="p-4">
        <h2 className="sec_ttl mb-16 cursor-pointer w-fit text-2xl font-semibold text-slate-900">
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
      </section>
      <section className="p-4">
        <h2 className="sec_ttl mb-4 cursor-pointer w-fit text-2xl font-semibold text-slate-900">
          Best Categories
        </h2>
        <div className="h-[100px] w-full flex flex-nowrap gap-3 overflow-auto p-3">
          {data &&
            (data as HomeType)?.categories?.map((e, i) => (
              <div
                key={i}
                className="rounded-full bg-main h-[50px] w-[50px] min-w-[50px]"
              ></div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
