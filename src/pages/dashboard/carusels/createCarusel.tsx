import useCreate from "@/Hook/useCreate";
import DashboardContainer from "@/components/DashboardContainer";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/Button";
import InputFile from "@/components/ui/InputFile";
import { CategoryType } from "@/lib/types";
import { uploadImg } from "@/lib/utils";
import FormModel from "@/models/form-model";
import { clearErrors, createCarusel } from "@/slices/carusel/caruselAction";

import { FormEvent, useEffect, useState } from "react";

const links = [
  {
    name: "carusels",
    link: "carusels",
  },
  {
    name: "create",
  },
];

const CreateCarusel = () => {
  const { loading, handleCreate, errors } = useCreate({
    states: "createCarusel",
    createFun: createCarusel,
    clearFun: clearErrors(),
  });

  const [image, setimage] = useState<{ img: File }>();
  const [errs, seterrs] = useState<CategoryType>();

  const fetchData = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
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
    <DashboardContainer className="" ttl="carusels" links={links}>
      <FormModel
        className="mx-auto"
        title="create new Carusel"
        disc=""
        isOauth={false}
        onSubmit={fetchData}
      >
        <InputFile
          name="image"
          label="Selcet Carusel img"
          onChange={(e) => setimage(uploadImg(e))}
          error={errs?.image}
        />
        <div className="p-2">
          <img
            src={image?.img && URL?.createObjectURL(image?.img)}
            className="h-24 w-24 object-contain"
            alt=""
          />
        </div>
        <Button type="submit">Create</Button>
      </FormModel>
    </DashboardContainer>
  );
};

export default CreateCarusel;
