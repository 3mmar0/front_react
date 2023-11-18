import { Link } from "react-router-dom";
import Logo from "@assets/mainLogo.png";
import Avatar from "../ui/Avatar";
import { BiHomeAlt2, BiShoppingBag } from "react-icons/bi";
import { CiGrid42, CiSearch } from "react-icons/ci";
import Input from "../ui/Input";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/store/hooks";

const Header = () => {
  const { items } = useAppSelector((s) => s.cart);

  return (
    <div
      className={cn(
        "sticky top-0 left-0 right-0 bg-white min-h-[60px] h-full max-h-[70px] border-b border-slate-200 py-3 px-6 flex items-center justify-between gap-3 z-[999]"
      )}
    >
      <Link to={"/"} className="">
        <img
          src={Logo}
          className="w-[55px] h-[55px] object-contain"
          alt="Logo"
          draggable={false}
        />
      </Link>
      <div className="flex items-center h-full flex-1 justify-end">
        <nav className="flex items-center flex-1 list-none gap-2">
          <div className="flex items-center flex-1 w-full">
            <div className="w-full mx-3">
              <Input
                type="text"
                className="text-lg w-full"
                placeholder="Search..."
                sufixIcon={
                  <CiSearch className="text-slate-600 text-[31px] cursor-pointer active:scale-90" />
                }
              />
            </div>
          </div>
          <Link
            to={"/"}
            className="flex items-center justify-center border border-slate-300 rounded-full w-[35px] h-[35px] cursor-pointer active:scale-95"
          >
            <BiHomeAlt2 className="text-slate-700 text-xl" />
          </Link>
          <Link
            to={"/products"}
            className="flex items-center justify-center border border-slate-300 rounded-full w-[35px] h-[35px] cursor-pointer active:scale-95"
          >
            <CiGrid42 className="text-slate-700 text-xl" />
          </Link>
        </nav>
        <p className="h-[80%] block w-[1.5px] bg-slate-400 mx-3" />
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center border border-slate-300 rounded-full w-[35px] h-[35px] cursor-pointer active:scale-95">
            <BiShoppingBag className="text-slate-700 text-[23px]" />
            <span className="absolute -top-2 -left-2 w-5 h-5 text-sm bg-green-900 flex items-center justify-center text-white rounded-full">
              {items?.length}
            </span>
          </div>
          <div className="relative flex items-center gap-3">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
