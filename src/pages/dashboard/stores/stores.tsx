import DashboardContainer from "@/components/DashboardContainer";
import Loader from "@/components/Loader";
import { clearErrors, deleteStore, stores } from "@/slices/store/storeAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FC, useEffect } from "react";
import toast from "react-hot-toast";
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
  const { loading, data, errors, success } = useAppSelector(
    (state) => state.stores
  );
  const {
    loading: delLd,
    msg,
    success: delSucc,
  } = useAppSelector((state) => state.deleteStore);
  const dispatch = useAppDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteStore(id));
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch(stores());
    };

    return async () => await fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (success === false && errors) {
      toast.error(errors);
    }
  }, [success, errors]);
  useEffect(() => {
    if (delSucc === false && msg) {
      toast.error(msg);
      dispatch(clearErrors());
    }
    if (delSucc && msg) {
      toast.success(msg);
      dispatch(stores());
    }
  }, [delSucc, msg, dispatch]);

  if (loading || delLd) {
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
      <div className="mt-10 py-2 overflow-auto w-full">
        <table className="min-w-[300px]">
          <tr>
            <th>#id</th>
            <th>name</th>
            <th>slug</th>
            <th>disc</th>
            <th>status</th>
            <th>actions</th>
          </tr>
          {data?.map((e) => (
            <tr key={e?.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.slug}</td>
              <td>{e.disc}</td>
              <td>{e.status}</td>
              <td>
                <div className="flex items-center justify-center gap-2 text-xl">
                  <BiEditAlt className="active:scale-95 cursor-pointer text-green-700" />
                  <AiOutlineDelete
                    onClick={() => handleDelete(e.id)}
                    className="active:scale-95 cursor-pointer text-red-800"
                  />
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </DashboardContainer>
  );
};

export default Stores;
