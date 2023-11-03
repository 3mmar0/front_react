import useCreate from "@/Hook/useCreate";
import DashboardContainer from "@/components/DashboardContainer";
import Loader from "@/components/Loader";
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/Button";
import InputFile from "@/components/ui/InputFile";
import InputSelect from "@/components/ui/InputSelect";
import { CategoryType, ProductType, StoreType } from "@/lib/types";
import { uploadImg } from "@/lib/utils";
import FormModel from "@/models/form-model";
import { clearErrors, createProduct } from "@/slices/products/productAction";
import { useAppSelector } from "@/store/hooks";

import { FormEvent, useEffect, useState } from "react";

const links = [
  {
    name: "products",
    link: "products",
  },
  {
    name: "create",
  },
];

const CreateProduct = () => {
  const { loading, handleCreate, errors } = useCreate({
    states: "createProduct",
    createFun: createProduct,
    clearFun: clearErrors(),
  });

  const cats = useAppSelector((state) => state["GlobalCats"]);
  const stores = useAppSelector((state) => state.GlobalStores);

  const [name, setname] = useState<string>("");
  const [disc, setdisc] = useState<string>("");
  const [category_id, setcategory_id] = useState<string>("");
  const [store_id, setstore_id] = useState<string>("");
  const [price, setprice] = useState<string>("");
  const [compare_price, setcompare_price] = useState<string>("");
  const [tags, settags] = useState<string>("");
  const [rating, setrating] = useState<string>("5");
  const [type, settype] = useState<string>("new");
  const [image, setimage] = useState<{ img: File }>();
  const [errs, seterrs] = useState<ProductType>();

  const fetchData = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    name && formData.append("name", name);
    disc && formData.append("disc", disc);
    category_id && formData.append("category_id", category_id);
    store_id && formData.append("store_id", store_id);
    price && formData.append("price", price);
    compare_price && formData.append("compare_price", compare_price);
    tags && formData.append("tags", tags);
    rating && formData.append("rating", rating);
    type && formData.append("type", type);
    image?.img && formData.append("image", image.img);
    handleCreate(formData);
  };

  useEffect(() => {
    if (Object?.keys(errors).length !== 0) {
      seterrs(errors);
    }
  }, [errors]);

  if (loading) {
    return <Loader />;
  }
  return (
    <DashboardContainer ttl="Products" links={links}>
      <FormModel
        className="mx-auto"
        title="create new Product"
        disc=""
        isOauth={false}
        onSubmit={fetchData}
      >
        <FormInput
          value={name}
          onChange={(e) => setname(e.target.value)}
          label="name"
          name="name"
          placeholder="Product name"
          error={errs?.name}
        />
        <FormInput
          value={tags}
          onChange={(e) => settags(e.target.value)}
          label="tags"
          name="tags"
          placeholder="Product tags"
          error={errs?.tags}
        />
        <FormInput
          value={disc}
          onChange={(e) => setdisc(e.target.value)}
          label="disc"
          name="disc"
          placeholder="Product disc"
          error={errs?.disc}
        />
        <FormInput
          type="number"
          value={price}
          onChange={(e) => setprice(e.target.value)}
          label="price"
          name="price"
          placeholder="Product price"
          error={errors?.price}
        />
        <FormInput
          type="number"
          value={compare_price}
          onChange={(e) => setcompare_price(e.target.value)}
          label="compare_price"
          name="compare_price"
          placeholder="Product compare_price"
          error={errors?.compare_price}
        />
        <InputSelect
          label="category"
          name="category_id"
          onChange={(e) => setcategory_id(e.target.value)}
          error={errs?.category_id}
          options={(cats?.data as CategoryType[])?.map((e) => {
            return { val: e?.id, name: e?.name };
          })}
        />
        <InputSelect
          label="store"
          name="store_id"
          onChange={(e) => setstore_id(e.target.value)}
          error={errs?.store_id}
          options={(stores?.data as StoreType[])?.map((e) => {
            return { val: e?.id, name: e?.name };
          })}
        />
        <InputSelect
          label="Rating"
          name="rating"
          options={[
            { name: "5", val: "5" },
            { name: "4", val: "4" },
            { name: "3", val: "3" },
            { name: "2", val: "2" },
            { name: "1", val: "1" },
          ]}
          value={rating}
          onChange={(e) => setrating(e.target.value)}
        />
        <InputFile
          name="image"
          label="Selcet Product img"
          onChange={(e) => setimage(uploadImg(e))}
          error={errs?.image}
        />
        {image?.img && (
          <div className="p-2">
            <img
              src={image?.img && URL?.createObjectURL(image?.img)}
              className="h-24 w-24 object-contain"
              alt=""
            />
          </div>
        )}
        <InputSelect
          label="Type"
          name="type"
          options={[
            { name: "hot", val: "hot" },
            { name: "new", val: "new" },
            { name: "top_rated", val: "top_rated" },
            { name: "best_selling", val: "best_selling" },
          ]}
          value={type}
          onChange={(e) => settype(e.target.value)}
        />
        <Button type="submit">Create</Button>
      </FormModel>
    </DashboardContainer>
  );
};

export default CreateProduct;
