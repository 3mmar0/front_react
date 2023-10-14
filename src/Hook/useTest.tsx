import { clearErrors, deleteStore, stores } from "@/slices/store/storeAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import toast from "react-hot-toast";

const useTest = ({ states }: { states: string }) => {
  const { loading, data, errors, success } = useAppSelector(
    (state) => state[`${states}`]
  );
  const {
    loading: delLd,
    msg,
    success: delSucc,
  } = useAppSelector((state) => state.deleteStore);
  const dispatch = useAppDispatch();

  const handleDelete = (id: number | undefined) => {
    dispatch(deleteStore(id));
  };

  useEffect(() => {
    const fetchData = () => {
      dispatch(stores());
    };
    fetchData();
    return () => dispatch(clearErrors());
  }, [dispatch]);

  useEffect(() => {
    if (success === false && errors) {
      toast.error(errors);
    }
  }, [success, errors]);
  useEffect(() => {
    if (delSucc === false && msg) {
      toast.error(msg);
    }
    if (delSucc && msg) {
      toast.success(msg);
      dispatch(stores());
    }
  }, [delSucc, msg, dispatch]);

  return {
    data,
    handleDelete,
    loading: loading || delLd,
  };
};

export default useTest;
