import useDelete from "@/Hook/useDelete";
import useGet from "@/Hook/useGet";
import DashboardContainer from "@/components/DashboardContainer";
import Loader from "@/components/Loader";
import Pagination from "@/components/ui/Pagination";
import { ProductType } from "@/lib/types";
import {
  clearErrors,
  deleteProduct,
  products,
} from "@/slices/products/productAction";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const links = [
  {
    name: "products",
  },
];

const Products = () => {
  const { data, loading } = useGet({
    states: "products",
    allData: products,
  });
  const { handleDelete, loading: delLD } = useDelete({
    states: "deleteProduct",
    delFun: deleteProduct,
    recalFun: products,
    clearFun: clearErrors(),
  });
  if (loading || delLD) {
    return <Loader />;
  }

  return (
    <DashboardContainer ttl="Products" links={links}>
      <Link
        to={"/dashboard/products/create"}
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
              <th>disc</th>
              <th>price</th>
              <th>compare_price</th>
              <th>store</th>
              <th>category</th>
              <th>rating</th>
              <th>type</th>
              <th>status</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.length ? (
              data?.data?.map((e: ProductType) => (
                <tr key={e?.id}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.disc}</td>
                  <td>{e.price}</td>
                  <td>{e.compare_price}</td>
                  <td>{e?.store_id}</td>
                  <td>{e?.category_id}</td>
                  <td>{e?.rating}</td>
                  <td>{e?.type}</td>
                  <td>{e.status}</td>
                  <td>
                    <div className="flex items-center justify-center gap-2 text-xl">
                      <Link to={`/dashboard/products/update/${e.id}`}>
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
                  colSpan={11}
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

export default Products;
