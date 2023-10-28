import { IsMatch } from "@/components/hook/hooks";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { globalCategories, globalStores } from "@/slices/globals/globalsAction";
import { home } from "@/slices/home/homeAction";
import { useAppDispatch } from "@/store/hooks";
import { FC, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

interface mainProps {}

const Root: FC<mainProps> = () => {
  const location = useLocation().pathname;
  const isDash = location.split("/").find((e) => e === "dashboard");

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = () => {
      dispatch(globalCategories(""));
      dispatch(globalStores(""));
      dispatch(home(""));
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="w-full h-full flex flex-col">
      {isDash == "dashboard" ? null : <Header />}
      <Outlet />
      {isDash == "dashboard" ||
      IsMatch("/login") ||
      IsMatch("/register") ? null : (
        <Footer />
      )}
    </div>
  );
};

export default Root;
