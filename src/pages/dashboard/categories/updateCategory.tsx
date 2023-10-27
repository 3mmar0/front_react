import useSingle from "@/Hook/useSingle";
import useUpdate from "@/Hook/useUpdate";
import DashboardContainer from "@/components/DashboardContainer";
import Loader from "@/components/Loader";
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/Button";
import InputFile from "@/components/ui/InputFile";
import InputSelect from "@/components/ui/InputSelect";
import { CategoryType } from "@/lib/types";
import { uploadImg } from "@/lib/utils";
import FormModel from "@/models/form-model";
import {
  clearErrors,
  singleCategory,
  updateCategory,
} from "@/slices/categories/categoryAction";
import { FC, FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const links = [
  {
    name: "categories",
    link: "categories",
  },
  {
    name: "update",
  },
];

const UpdateCategory = () => {
  const params = useParams()?.id;
  const { data, loading } = useSingle({
    states: "singleCategory",
    callFun: singleCategory,
  });

  const {
    loading: updateLD,
    errors,
    handleUpdate,
  } = useUpdate({
    states: "updateCategory",
    updateFun: updateCategory,
    clearFn: clearErrors,
  });

  const [name, setname] = useState<string>("");
  const [disc, setdisc] = useState<string>("");
  const [parent_id, setparent_id] = useState<string>("");
  const [image, setimage] = useState<object>();
  const [status, setstatus] = useState("");
  const [errs, seterrs] = useState<CategoryType>();

  const fetchData = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    name && formData.append("name", name);
    disc && formData.append("disc", disc);
    parent_id && formData.append("parent_id", parent_id);
    image?.img && formData.append("image", image.img);
    status && formData.append("status", status);
    formData.append("_method", "put");
    handleUpdate({ dat: formData, id: params });
  };
  useEffect(() => {
    if (data?.name) {
      setname(data?.name);
      setdisc(data?.disc);
      setparent_id(data?.parent_id);
      setimage({ ...image, imgApi: data?.image });
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
    <DashboardContainer className="" ttl="Categories" links={links}>
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
          error={errors?.name}
        />
        <FormInput
          value={disc}
          onChange={(e) => setdisc(e.target.value)}
          label="disc"
          name="disc"
          placeholder="Store disc"
          error={errors?.disc}
        />
        <InputFile
          name="image"
          label="Selcet Category img"
          onChange={(e) => setimage(uploadImg(e))}
          error={errs?.image}
        />
        {image?.imgApi ? (
          <div className="p-2">
            <img
              src={`http://localhost:8000/storage/${image?.imgApi}`}
              className="h-24 w-24 object-contain"
              alt=""
            />
          </div>
        ) : (
          <div className="p-2">
            <img
              src={image?.img && URL?.createObjectURL(image?.img)}
              className="h-24 w-24 object-contain"
              alt="img"
            />
          </div>
        )}
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

export default UpdateCategory;
