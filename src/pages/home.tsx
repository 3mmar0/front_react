import Loader from "@/components/Loader";
import MetaDate from "@/lib/metaDate";
import { HomeType } from "@/lib/types";
import { clearErrors } from "@/slices/home/homeAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FC, useEffect } from "react";
import toast from "react-hot-toast";
import { LuChevronDown } from "react-icons/lu";

interface homeProps {}

const Home: FC<homeProps> = () => {
  const dispatch = useAppDispatch();
  const { loading, data, errors } = useAppSelector((state) => state.home);
  useEffect(() => {
    if ((errors as string) === "Error: Network Error") {
      toast.error("Error: Network Error, pleaze check your connection");
      dispatch(clearErrors());
    }
  }, [errors, dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex-1">
      <MetaDate ttl="Home - page" />
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
      <section className="p-4 mb-4 grid md:grid-cols-3 grid-cols-1 gap-2 md:h-[400px] h-[500px]">
        <div className="bg-slate-600 md:col-span-2 md:row-span-1 row-span-2"></div>
        <div className="grid md:grid-cols-1 grid-cols-2 gap-2">
          <div className="bg-slate-600"></div>
          <div className="bg-slate-600"></div>
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
