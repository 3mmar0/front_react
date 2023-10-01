import ProfileImg from "@/components/ui/ProfileImg";
import Cookies from "universal-cookie";
import { useState } from "react";
import {
  FaBoxes,
  FaSearch,
  FaShoppingBag,
  FaSignOutAlt,
  FaUserAlt,
  FaHome,
} from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import Logo from "@assets/mainLogo.png";
import { cn } from "@/lib/utils";

const cookies = new Cookies({ path: "/" });

const data = [
  {
    ttl: "dashboard",
    link: "/dashboard",
    icon: <AiFillDashboard className="text-slate-800" />,
  },
  {
    ttl: "home",
    link: "/",
    icon: <FaHome className="text-slate-800" />,
  },
  {
    ttl: "profile",
    link: "/profile",
    icon: <FaUserAlt className="text-slate-800" />,
  },
  {
    ttl: "products",
    link: "/products",
    icon: <FaBoxes className="text-slate-800" />,
  },
  {
    ttl: "cart",
    link: "/cart",
    icon: <FaShoppingBag className="text-slate-800" />,
  },
];

const Header = () => {
  const user = cookies.get("user");
  const location = useLocation();

  const [open, setopen] = useState<boolean>(false);

  const handleLogout = () => {
    cookies.remove("user");
  };

  const IsMatch = (e: string): string => {
    const match = location.pathname === e;

    return match ? "bg-slate-200" : "";
  };

  return (
    <div className=" h-[60px] py-3 px-5 flex items-center justify-between shadow-lg">
      <Link to={"/"} className="font-bold text-xl">
        <img src={Logo} className="w-[55px] h-[50px]" alt="Logo" />
      </Link>
      <div className="flex items-center h-full">
        <nav className="sm:flex list-none gap-2 hidden">
          {data?.map((e, i) => (
            <li key={i}>
              <Link
                to={e?.link}
                className={cn(
                  IsMatch(e.link),
                  "flex items-center gap-2 font-semibold hover:bg-slate-200 rounded py-2 px-3"
                )}
              >
                <span>{e?.ttl}</span>
              </Link>
            </li>
          ))}
        </nav>
        <p className="h-full sm:block hidden w-[2px] bg-slate-400 mx-3" />
        <div className="relative flex items-center gap-3">
          <FaSearch />
          <ProfileImg
            onClick={() => setopen(!open)}
            img={user?.image}
            text={user?.first_name}
            link={user?.id ? null : "/login"}
          />
          {open && user?.id ? (
            <div className="absolute text-sm top-12 right-0 bg-white shadow-md rounded-md w-[250px] border-slate-400 border">
              <div className="p-2 ">
                <h2 className="text-slate-900 text-lg bg-slate-100 p-2 rounded-md font-semibold">
                  {user?.first_name}
                </h2>
              </div>
              <span className=" bg-slate-400 block h-[1px]"></span>
              <ul className="flex flex-col p-2">
                {data?.map((e, i) => (
                  <li key={i}>
                    <Link
                      to={e?.link}
                      className={cn(
                        IsMatch(e.link),
                        "flex items-center gap-2 font-semibold hover:bg-slate-100 rounded p-2"
                      )}
                    >
                      {e?.icon}
                      <span>{e?.ttl}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <span className=" bg-slate-400 block h-[1px]"></span>
              <div className="p-2 cursor-pointer" onClick={handleLogout}>
                <h2 className="text-slate-900 flex items-center gap-2 bg-red-100 p-2 rounded-md font-semibold">
                  <FaSignOutAlt />
                  Log out
                </h2>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
