import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { AnyAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import toast from "react-hot-toast";

const useUpdate = ({
  states,
  updateFun,
  clearFun,
}: {
  states: string;
  updateFun: (data?: FormData | { dat: FormData; id?: string }) => AnyAction;
  clearFun(): AnyAction;
}) => {
  const { loading, msg, errors, success } = useAppSelector(
    (state) => state[`${states}`]
  );
  const dispatch = useAppDispatch();

  const handleUpdate = (data: FormData | { dat: FormData; id?: string }) => {
    dispatch(updateFun(data));
  };

  useEffect(() => {
    if (success === false && msg) {
      toast.error(msg);
      dispatch(clearFun());
    }
    if (success && msg) {
      toast.success(msg);
      dispatch(clearFun());
    }
  }, [success, msg, dispatch]);

  return {
    handleUpdate,
    loading: loading,
    errors,
  };
};

export default useUpdate;
