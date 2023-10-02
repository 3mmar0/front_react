import { cn } from "@/lib/utils";
import { ClassAttributes, FC, HTMLAttributes } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IsMatch } from "../hook/hooks";
import { DataLinks, UserData } from "@/lib/types";

interface UserCardProps
  extends ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement> {
  user?: UserData;
  data?: DataLinks[];
  onclick?: () => void;
}

const UserCard: FC<UserCardProps> = ({ user, data, onclick, ...props }) => {
  return (
    <div
      {...props}
      className="absolute z-50 text-sm top-12 sm:right-0 -right-5 bg-white shadow-md rounded-md w-[250px] border-slate-400 border"
    >
      <div className="p-2 ">
        <h2 className="text-slate-900 text-lg bg-slate-100 p-2 rounded-md font-semibold">
          {`${user?.first_name}_${user?.last_name}`}
        </h2>
      </div>
      <span className=" bg-slate-400 block h-[1px]"></span>
      <ul className="flex flex-col p-2 gap-1">
        {data?.map((e, i) => (
          <li key={i}>
            <Link
              to={`${e?.link}`}
              className={cn(
                IsMatch(`${e?.link}`)
                  ? "bg-slate-900 text-slate-50 hover:text-slate-900"
                  : "text-slate-900",
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
      <div className="p-2 cursor-pointer" onClick={onclick}>
        <h2 className="text-slate-900 flex items-center gap-2 bg-red-100 p-2 rounded-md font-semibold">
          <FaSignOutAlt />
          Log out
        </h2>
      </div>
    </div>
  );
};

export default UserCard;
