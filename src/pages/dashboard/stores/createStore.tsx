import DashboardContainer from "@/components/DashboardContainer";
import Loader from "@/components/Loader";
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/Button";
import InputFile from "@/components/ui/InputFile";
import { StoreType } from "@/lib/types";
import FormModel from "@/models/form-model";
import { clearErrors, createStore } from "@/slices/store/storeAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FC, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

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
  const { loading, success, msg, errors } = useAppSelector(
    (state) => state.createStore
  );
  const dispatch = useAppDispatch();

  const [name, setname] = useState<string>("");
  const [disc, setdisc] = useState<string>("");
  const [errs, seterrs] = useState<StoreType>();

  const fetchData = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("disc", disc);
    dispatch(createStore(formData));
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
    // dispatch(clearErrors());
  }, [success, msg, errors]);

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
