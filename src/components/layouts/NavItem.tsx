import { FC, useState } from "react";
import { IsMatch } from "../hook/hooks";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

interface NavItemProps {
  open: boolean;
  data: {
    ttl?: string | undefined;
    link?: string;
    icon?: string | JSX.Element;
    children?: {
      ttl?: string | undefined;
      link?: string;
    }[];
  };
}

const NavItem: FC<NavItemProps> = ({ open, data }) => {
  const [openCh, setopenCh] = useState<boolean>(false);

  return (
    <li
      onClick={() => setopenCh(!openCh)}
      className={cn(
        IsMatch(`${data.link}`)
          ? "bg-slate-800 text-slate-50"
          : "text-slate-800 hover:bg-slate-100",
        " p-2 cursor-pointer",
        open ? "rounded-md w-full" : "rounded-full"
      )}
    >
      <Link
        className={cn(
          open ? "justify-between" : "justify-center",
          "flex items-center text-xl gap-3"
        )}
        to={`${data.link}`}
      >
        <div className="flex items-center">
          <span className="">{data.icon}</span>
          {open && (
            <h3
              className={cn(
                open ? "block" : "hidden",
                "ml-3 text-xl font-semibold capitalize"
              )}
            >
              {data.ttl}
            </h3>
          )}
        </div>
        {data?.children && open ? (
          <>
            {!openCh ? (
              <IoIosArrowDroprightCircle />
            ) : (
              <IoIosArrowDropdownCircle />
            )}
          </>
        ) : (
          ""
        )}
      </Link>
      {openCh && open && data?.children ? (
        <ul className="flex flex-col items-center gap-3 h-full p-2">
          {data?.children.map((c, i) => (
            <li
              key={i}
              className="w-full py-2 px-3 rounded-md bg-slate-900 text-slate-50"
            >
              <Link
                className="flex items-center text-xl gap-3"
                to={`${c.link}`}
              >
                <h3
                  className={cn(
                    open ? "block" : "hidden",
                    "text-xl font-semibold capitalize "
                  )}
                >
                  {c.ttl}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </li>
  );
};

export default NavItem;
