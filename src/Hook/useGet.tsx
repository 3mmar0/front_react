import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { AnyAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const useGet = ({
  states,
  allData,
}: {
  states: string;
  allData: (data: string | undefined) => AnyAction;
}) => {
  const { search } = useLocation();

  const { loading, data, errors, success } = useAppSelector(
    (state) => state[`${states}`]
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = () => {
      dispatch(allData(search));
    };
    fetchData();
  }, [dispatch, search]);

  useEffect(() => {
    if (success === false && errors) {
      toast.error(errors);
    }
  }, [success, errors]);

  return {
    data,
    loading: loading,
  };
};

export default useGet;
