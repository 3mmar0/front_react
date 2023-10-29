import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { AnyAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import toast from "react-hot-toast";

const useDelete = ({
  states,
  delFun,
  clearFun,
  recalFun,
}: {
  states: string;
  delFun: (id: string | undefined) => AnyAction;
  clearFun: () => AnyAction;
  recalFun: () => AnyAction;
}) => {
  const { loading, msg, errors, success } = useAppSelector(
    (state) => state[`${states}`]
  );
  const dispatch = useAppDispatch();

  const handleDelete = (id: string | undefined) => {
    dispatch(delFun(id));
  };

  useEffect(() => {
    if (success === false && msg) {
      toast.error(msg);
      dispatch(clearFun);
    }
    if (success && msg) {
      toast.success(msg);
      dispatch(clearFun);
      dispatch(recalFun());
    }
    if (success === false && errors) {
      toast.error(errors);
    }
  }, [success, msg, errors, dispatch]);

  return {
    handleDelete,
    loading: loading,
  };
};

export default useDelete;
