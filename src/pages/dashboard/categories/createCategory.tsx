import useCreate from "@/Hook/useCreate";
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
  createCategory,
} from "@/slices/categories/categoryAction";
import { useAppSelector } from "@/store/hooks";

import { FormEvent, useEffect, useState } from "react";

const links = [
  {
    name: "categories",
    link: "categories",
  },
  {
    name: "create",
  },
];

const CreateCategory = () => {
  const { data } = useAppSelector((state) => state.categories);
  const { loading, handleCreate, errors } = useCreate({
    states: "createCategory",
    createFun: createCategory,
    clearFun: clearErrors(),
  });

  const [name, setname] = useState<string>("");
  const [disc, setdisc] = useState<string>("");
  const [parent_id, setparent_id] = useState<string>("");
  const [image, setimage] = useState<object>();
  const [errs, seterrs] = useState<CategoryType>();

  const fetchData = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    name && formData.append("name", name);
    disc && formData.append("disc", disc);
    parent_id && formData.append("parent_id", parent_id);
    image?.img && formData.append("image", image.img);
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
    <DashboardContainer className="" ttl="Categories" links={links}>
      <FormModel
        className="mx-auto"
        title="create new Ccategory"
        disc=""
        isOauth={false}
        onSubmit={fetchData}
      >
        <FormInput
          value={name}
          onChange={(e) => setname(e.target.value)}
          label="name"
          name="name"
          placeholder="Category name"
          error={errs?.name}
        />
        <FormInput
          value={disc}
          onChange={(e) => setdisc(e.target.value)}
          label="disc"
          name="disc"
          placeholder="Category disc"
          error={errs?.disc}
        />
        <InputSelect
          label="Parent category"
          name="parent_id"
          onChange={(e) => setparent_id(e.target.value)}
          error={errs?.parent_id}
          options={[]}
        />
        <InputFile
          name="image"
          label="Selcet Category img"
          onChange={(e) => setimage(uploadImg(e))}
          error={errs?.image}
        />
        <div className="p-2">
          <img
            src={image?.imgPrev[0]}
            className="h-24 w-24 object-contain"
            alt=""
          />
        </div>
        <Button type="submit">Create</Button>
      </FormModel>
    </DashboardContainer>
  );
};

export default CreateCategory;
