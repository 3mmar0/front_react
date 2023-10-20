import useDelete from "@/Hook/useDelete";
import useGet from "@/Hook/useGet";
import DashboardContainer from "@/components/DashboardContainer";
import Loader from "@/components/Loader";
import Pagination from "@/components/ui/Pagination";
import { CategoryType } from "@/lib/types";
import {
  categories,
  clearErrors,
  deleteCategory,
} from "@/slices/categories/categoryAction";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const links = [
  {
    name: "categories",
  },
];

const Categories = () => {
  const { data, loading } = useGet({
    states: "categories",
    allData: categories,
  });

  const { handleDelete, loading: delLD } = useDelete({
    states: "deleteCategory",
    delFun: deleteCategory,
    recalFun: categories,
    clearFun: clearErrors(),
  });

  if (loading || delLD) {
    return <Loader />;
  }

  return (
    <DashboardContainer ttl="Categories" links={links}>
      <Link
        to={"/dashboard/categories/create"}
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
              <th>Parent</th>
              <th>status</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((e: CategoryType) => (
              <tr key={e?.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.slug}</td>
                <td>{e.disc}</td>
                <td className="text-center">
                  {e?.parent?.name ? e?.parent?.name : "Main"}
                </td>
                <td>{e.status}</td>
                <td>
                  <div className="flex items-center justify-center gap-2 text-xl">
                    <Link to={`/dashboard/categories/update/${e.id}`}>
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
      <div className="mt-10">
        <Pagination data={data} />
      </div>
    </DashboardContainer>
  );
};

export default Categories;
