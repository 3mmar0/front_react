import useDelete from "@/Hook/useDelete";
import useGet from "@/Hook/useGet";
import DashboardContainer from "@/components/DashboardContainer";
import Loader from "@/components/Loader";
import Pagination from "@/components/ui/Pagination";
import { CategoryType } from "@/lib/types";
import {
  clearErrors,
  carusels,
  deleteCarusel,
} from "@/slices/carusel/caruselAction";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const links = [
  {
    name: "carusels",
  },
];

const Carusels = () => {
  const { data, loading } = useGet({
    states: "carusels",
    allData: carusels,
  });

  const { handleDelete, loading: delLD } = useDelete({
    states: "deleteCarusel",
    delFun: deleteCarusel,
    recalFun: carusels,
    clearFun: clearErrors(),
  });

  if (loading || delLD) {
    return <Loader />;
  }

  return (
    <DashboardContainer ttl="Carusels" links={links}>
      <Link
        to={"/dashboard/carusels/create"}
        className="bg-green-900 text-slate-50 w-full p-2 text-center rounded-md hover:opacity-80 active:scale-90"
      >
        Create new
      </Link>
      <div className="mt-10 py-2 overflow-auto sm:w-full">
        <table className="min-w-[300px]">
          <thead>
            <tr>
              <th>#id</th>
              <th>image</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.length ? (
              data?.map((e: CategoryType) => (
                <tr key={e?.id}>
                  <td>{e.id}</td>
                  <td>
                    <img src={e.image} className="h-[100px]" alt="carusel" />
                  </td>
                  <td>
                    <div className="flex items-center justify-center gap-2 text-xl">
                      <Link to={`/dashboard/carusels/update/${e.id}`}>
                        <BiEditAlt className="active:scale-95 cursor-pointer text-green-700" />
                      </Link>
                      <AiOutlineDelete
                        onClick={() => handleDelete(e.id)}
                        className="active:scale-95 cursor-pointer text-red-800"
                      />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className="text-center font-semibold text-xl text-slate-500"
                  colSpan={3}
                >
                  No data to show
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-10">
        <Pagination data={data} />
      </div>
    </DashboardContainer>
  );
};

export default Carusels;
