import FormInput from "@/components/form/FormInput";
import FormModel from "@/models/form-model";
import { FC } from "react";

interface createProps {}

const CreateProduct: FC<createProps> = () => {
  return (
    <div className="grid place-items-center flex-1 p-4">
      <FormModel title="create new product" disc="" isOauth={false}>
        <FormInput label="name" />
        <FormInput label="disc" />
      </FormModel>
    </div>
  );
};

export default CreateProduct;
