import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { AnyAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import toast from "react-hot-toast";

const useCreate = ({
  states,
  createFun,
  clearFun,
}: {
  states: string;
  createFun: (data: FormData) => AnyAction;
  clearFun: () => AnyAction;
}) => {
  const dispatch = useAppDispatch();
  const { loading, msg, errors, success } = useAppSelector(
    (state) => state[`${states}`]
  );

  const handleCreate = (data: FormData) => {
    dispatch(createFun(data));
  };

  useEffect(() => {
    if (success === false && msg) {
      toast.error(msg);
      dispatch(clearFun);
    }
    if (success && msg) {
      toast.success(msg);
      dispatch(clearFun);
    }
    if (success === false && typeof errors == typeof String) {
      toast.error(errors);
    }
  }, [success, msg, errors, dispatch]);

  return {
    handleCreate,
    loading: loading,
    errors,
  };
};

export default useCreate;
