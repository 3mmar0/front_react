import useCreate from "@/Hook/useCreate";
import DashboardContainer from "@/components/DashboardContainer";
import Loader from "@/components/Loader";
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/Button";
import InputFile from "@/components/ui/InputFile";
import { StoreType } from "@/lib/types";
import FormModel from "@/models/form-model";
import { clearErrors, createStore } from "@/slices/store/storeAction";
import { FC, FormEvent, useEffect, useState } from "react";

interface createStoreProps {}

const links = [
  {
    name: "stores",
    link: "stores",
  },
  {
    name: "create",
  },
];

const CreateStore: FC<createStoreProps> = () => {
  const { loading, handleCreate, errors } = useCreate({
    states: "createStore",
    createFun: createStore,
    clearFun: clearErrors(),
  });

  const [name, setname] = useState<string>("");
  const [disc, setdisc] = useState<string>("");
  const [errs, seterrs] = useState<StoreType>();
  const fetchData = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    name && formData.append("name", name);
    disc && formData.append("disc", disc);
    handleCreate(formData);
  };

  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      seterrs(errors);
    }
  }, [errors]);

  if (loading) {
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
        <Button type="submit">Create</Button>
      </FormModel>
    </DashboardContainer>
  );
};

export default CreateStore;
