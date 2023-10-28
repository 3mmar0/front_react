import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { AnyAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const useSingle = ({
  states,
  callFun,
}: {
  states: string;
  callFun: (id: number) => AnyAction;
}) => {
  const params = useParams()?.id;
  const { loading, data, errors, success, msg } = useAppSelector(
    (state) => state[`${states}`]
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (success === true && msg) {
      toast.success(msg);
    }
    if (success === false && msg) {
      toast.error(msg);
    }
    if (success === false && errors) {
      toast.error(errors);
    }
  }, [params, success, msg, errors]);

  useEffect(() => {
    const fetchData = () => {
      dispatch(callFun(Number(params)));
    };

    fetchData();
  }, [dispatch, params]);

  return {
    data,
    loading: loading,
  };
};

export default useSingle;
