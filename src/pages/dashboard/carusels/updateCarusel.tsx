import useSingle from "@/Hook/useSingle";
import useUpdate from "@/Hook/useUpdate";
import DashboardContainer from "@/components/DashboardContainer";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/Button";
import InputFile from "@/components/ui/InputFile";
import { uploadImg } from "@/lib/utils";
import FormModel from "@/models/form-model";
import {
  clearErrors,
  singleCategory,
  updateCategory,
} from "@/slices/categories/categoryAction";
import { FormEvent, useEffect, useState } from "react";
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

const UpdateCarusel = () => {
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

  const [image, setimage] = useState<{ img?: File; imgApi?: string | null }>();

  const [errs, seterrs] = useState<{ image: string }>();

  const fetchData = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    image?.img && formData.append("image", image.img);
    formData.append("_method", "put");
    handleUpdate({ dat: formData, id: params });
  };
  useEffect(() => {
    if (data?.image) {
      setimage({ ...image, imgApi: data?.image });
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
        title="Update Category"
        disc=""
        isOauth={false}
        onSubmit={fetchData}
      >
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
        <Button type="submit" className="mt-4">
          Update
        </Button>
      </FormModel>
    </DashboardContainer>
  );
};

export default UpdateCarusel;
