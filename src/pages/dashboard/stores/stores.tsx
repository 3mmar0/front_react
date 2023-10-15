import useGet from "@/Hook/useGet";
import DashboardContainer from "@/components/DashboardContainer";
import Loader from "@/components/Loader";
import { StoreType } from "@/lib/types";
import { FC } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

interface storesProps {}

const links = [
  {
    name: "stores",
  },
];

const Stores: FC<storesProps> = () => {
  const { data, handleDelete, loading } = useGet({ states: "stores" });
  if (loading) {
    return <Loader />;
  }
  return (
    <DashboardContainer ttl="Stores" links={links}>
      <Link
        to={"/dashboard/stores/create"}
        className="bg-green-900 text-slate-50 w-full p-2 text-center rounded-md hover:opacity-80 active:scale-90"
      >
        Create new
      </Link>
      <div className="mt-10 py-2 overflow-auto sm:w-full">
        <table className="min-w-[300px]">
          <thead>
            <tr>
              <th>#id</th>
              <th>name</th>
              <th>slug</th>
              <th>disc</th>
              <th>status</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((e: StoreType) => (
              <tr key={e?.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.slug}</td>
                <td>{e.disc}</td>
                <td>{e.status}</td>
                <td>
                  <div className="flex items-center justify-center gap-2 text-xl">
                    <Link to={`/dashboard/stores/update/${e.id}`}>
                      <BiEditAlt className="active:scale-95 cursor-pointer text-green-700" />
                    </Link>
                    <AiOutlineDelete
                      onClick={() => handleDelete(e.id)}
                      className="active:scale-95 cursor-pointer text-red-800"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardContainer>
  );
};

export default Stores;
