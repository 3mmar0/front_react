import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";

interface mainProps {}

const Root: FC<mainProps> = () => {
  const location = useLocation().pathname;
  const isDash = location.split("/").find((e) => e === "dashboard");

  return (
    <div className="w-full h-full flex flex-col">
      {isDash == "dashboard" ? null : <Header />}
      <Outlet />
      {isDash == "dashboard" ? null : <Footer />}
    </div>
  );
};

export default Root;
