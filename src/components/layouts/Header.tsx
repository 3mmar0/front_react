import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "@assets/mainLogo.png";
import { cn } from "@/lib/utils";
import { IsMatch } from "../hook/hooks";
import Avatar from "../ui/Avatar";
import { headerLinks } from "@/lib/data";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-slate-900 min-h-[60px] h-full max-h-[70px] py-3 px-6 flex items-center justify-center shadow-lg">
      <div className="h-full w-full bg-slate-50 flex items-center justify-between gap-4 px-5 py-2 rounded-full border border-slate-300">
        <Link to={"/"} className="">
          <img
            src={Logo}
            className="w-[42px] h-[42px] object-contain"
            alt="Logo"
          />
        </Link>
        <div className="flex items-center h-full">
          <nav className="sm:flex list-none hidden">
            {headerLinks?.map((e, i) => (
              <li key={i}>
                <Link
                  to={e?.link}
                  className={cn(
                    "flex items-center text-slate-700 text-[15px] font-semibold"
                  )}
                >
                  <span
                    className={cn(
                      "rounded-full py-1 px-4 block",
                      IsMatch(e.link)
                        ? "head_ttl text-slate-900"
                        : "hover:bg-main/20"
                    )}
                  >
                    {e?.ttl}
                  </span>
                </Link>
              </li>
            ))}
          </nav>
          <p className="h-[80%] sm:block hidden w-[1.5px] bg-slate-400 mx-3" />
          <div className="relative flex items-center gap-3">
            <div className="flex items-center justify-center border border-slate-300 rounded-full w-[35px] h-[35px] cursor-pointer active:scale-95">
              <FaSearch className="text-slate-700" />
            </div>
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
