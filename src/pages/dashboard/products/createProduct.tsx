import DashboardContainer from "@/components/DashboardContainer";
import FormInput from "@/components/form/FormInput";
import FormModel from "@/models/form-model";
import { FC } from "react";

interface createProps {}

const links = [
  {
    name: "products",
    link: "products",
  },
  {
    name: "create",
  },
];
const CreateProduct: FC<createProps> = () => {
  return (
    <DashboardContainer className="" ttl="Products" links={links}>
      <FormModel
        className="mx-auto"
        title="create new product"
        disc=""
        isOauth={false}
      >
        <FormInput label="name" />
        <FormInput label="disc" />
      </FormModel>
    </DashboardContainer>
  );
};

export default CreateProduct;
