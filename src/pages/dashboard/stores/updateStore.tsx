import useSingle from "@/Hook/useSingle";
import useUpdate from "@/Hook/useUpdate";
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
import { FC, FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface UpdateStoreProps {}

const links = [
  {
    name: "stores",
    link: "stores",
  },
  {
    name: "update",
  },
];

const UpdateStore: FC<UpdateStoreProps> = () => {
  const params = useParams()?.id;
  const { data, loading } = useSingle({
    states: "singleStore",
    callFun: singleStore,
  });
  const {
    handleUpdate,
    loading: updateLD,
    errors,
  } = useUpdate({
    states: "updateStore",
    updateFun: updateStore,
    clearFun: clearErrors(),
  });

  const [name, setname] = useState<string>("");
  const [disc, setdisc] = useState<string>("");
  const [status, setstatus] = useState("");
  const [errs, seterrs] = useState<StoreType>();

  const fetchData = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    name && formData.append("name", name);
    disc && formData.append("disc", disc);
    status && formData.append("status", status);
    formData.append("_method", "put");
    handleUpdate({ dat: formData, id: params });
  };
  useEffect(() => {
    if (data?.name) {
      setname(data?.name);
      setdisc(data?.disc);
      setstatus(data?.status);
    }
  }, [data]);

  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      seterrs(errors);
    }
  }, [errors]);

  if (loading || updateLD) {
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
