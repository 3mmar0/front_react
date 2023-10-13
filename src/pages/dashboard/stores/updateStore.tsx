import DashboardContainer from "@/components/DashboardContainer";
import Loader from "@/components/Loader";
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/Button";
import InputFile from "@/components/ui/InputFile";
import InputSelect from "@/components/ui/InputSelect";
import { StoreType } from "@/lib/types";
import FormModel from "@/models/form-model";
import {
  clearErrors,
  singleStore,
  updateStore,
} from "@/slices/store/storeAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FC, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

interface UpdateStoreProps {}

const links = [
  {
    name: "stores",
    link: "stores",
  },
  {
    name: "create",
  },
];

const UpdateStore: FC<UpdateStoreProps> = () => {
  const params = useParams()?.id;
  const dispatch = useAppDispatch();
  const { loading, success, msg, errors } = useAppSelector(
    (state) => state.updateStore
  );
  const {
    loading: snLd,
    success: snSucc,
    msg: snMsg,
    data,
  } = useAppSelector((state) => state.singleStore);

  const [name, setname] = useState<string>("");
  const [disc, setdisc] = useState<string>("");
  const [status, setstatus] = useState("");
  const [errs, seterrs] = useState<StoreType>();

  const fetchData = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("disc", disc);
    formData.append("status", status);
    formData.append("_method", "put");
    dispatch(updateStore({ dat: formData, id: params }));
  };

  useEffect(() => {
    if (success === true && msg) {
      toast.success(msg);
      // window.location.href = "/dashboard/stores";
    }
    if (success === false && msg) {
      toast.error(msg);
    }
    if (errors) {
      seterrs(errors);
    }
  }, [success, msg, errors]);
  useEffect(() => {
    if (snSucc === true && snMsg) {
      toast.success(snMsg);
    }
    if (snSucc === false && snMsg) {
      toast.error(snMsg);
    }
    if (data?.name) {
      setname(data?.name);
      setdisc(data?.disc);
      setstatus(data?.status);
    }
  }, [params, snSucc, snMsg, data, dispatch]);

  useEffect(() => {
    const fetchData = () => {
      dispatch(singleStore(Number(params)));
    };

    return () => fetchData();
  }, [dispatch, params]);

  if (loading || snLd) {
    return <Loader />;
  }
  return (
    <DashboardContainer className="" ttl="Stores" links={links}>
      <FormModel
        className="mx-auto"
        title="create new store"
        disc=""
        isOauth={false}
        onSubmit={fetchData}
      >
        <FormInput
          value={name}
          onChange={(e) => setname(e.target.value)}
          label="name"
          name="name"
          placeholder="Store name"
          error={errs?.name}
        />
        <FormInput
          value={disc}
          onChange={(e) => setdisc(e.target.value)}
          label="disc"
          name="disc"
          placeholder="Store disc"
          error={errs?.disc}
        />
        <InputFile name="logo" label="Selcet Logo img" error={errs?.logo} />
        <InputFile name="cover" label="Select Cover img" error={errs?.cover} />
        <InputSelect
          label="Status"
          name="status"
          options={[
            { name: "Active", val: "active" },
            { name: "disactive", val: "disactive" },
          ]}
          value={status}
          onChange={(e) => setstatus(e.target.value)}
        />
        <Button type="submit" className="mt-4">
          Update
        </Button>
      </FormModel>
    </DashboardContainer>
  );
};

export default UpdateStore;
