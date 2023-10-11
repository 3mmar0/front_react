import { FC } from "react";
import { Link } from "react-router-dom";

interface BreadcampProps {
  ttl?: string;
  links?: {
    name?: string;
    link?: string;
  }[];
}

const Breadcamp: FC<BreadcampProps> = ({ ttl, links }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="md:text-3xl text-xl font-bold text-gray-800">{ttl}</h2>
      <div className="flex items-center flex-wrap md:text-lg sm:text-base text-sm px-2">
        <Link
          className="font-semibold underline mx-1 capitalize"
          to={`/dashboard`}
        >
          dashboard
        </Link>
        {"/"}
        {links?.map((l, i) => (
          <>
            {i === links?.length - 1 ? (
              <span className="font-medium mx-1 text-slate-900">{l.name}</span>
            ) : (
              <Link
                className="font-semibold underline mx-1 capitalize"
                to={`/dashboard/${l.link}`}
              >
                {l.name}
              </Link>
            )}
            {i !== links.length - 1 && <span>/</span>}
          </>
        ))}
      </div>
    </div>
  );
};

export default Breadcamp;
