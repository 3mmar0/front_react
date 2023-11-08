import { PaginationType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { Link, useSearchParams } from "react-router-dom";

interface PaginationProps {
  data: PaginationType;
}

const Pagination: FC<PaginationProps> = ({ data }) => {
  const [search, setSearch] = useSearchParams();

  const handlePagination = (e: string | undefined) => {
    if (e) {
      search.set("page", e?.split("=")[1]);
    }

    return `?${search.toString()}`;
  };

  return (
    <div className="flex items-center justify-end">
      <Link
        to={handlePagination(data?.first_page_url?.split("?")[1])}
        className="paginate__link"
      >
        {"<<"}
      </Link>
      <Link
        to={handlePagination(data?.prev_page_url?.split("?")[1])}
        className={cn(
          data?.prev_page_url !== null
            ? ""
            : "text-gray-600 bg-slate-200 cursor-not-allowed",
          "paginate__link"
        )}
      >
        {"Prev"}
      </Link>
      {data?.links?.map((e, i) => {
        return i === 0 || i === data?.links?.length - 1 ? (
          ""
        ) : (
          <Link
            key={i}
            to={handlePagination(e?.url?.split("?")[1])}
            className={cn(
              e?.active
                ? "z-[1] bg-sky-400 text-slate-50 outline-3 outline outline-sky-400 -outline-offset-2"
                : "",
              "paginate__link whitespace-nowrap"
            )}
          >
            {e.label}
          </Link>
        );
      })}
      <Link
        to={handlePagination(data?.next_page_url?.split("?")[1])}
        className={cn(
          data?.next_page_url !== null
            ? ""
            : "text-gray-600 bg-slate-200 cursor-not-allowed",
          "paginate__link"
        )}
      >
        {"Next"}
      </Link>
      <Link
        to={handlePagination(data?.last_page_url?.split("?")[1])}
        className="paginate__link"
      >
        {">>"}
      </Link>
    </div>
  );
};

export default Pagination;
