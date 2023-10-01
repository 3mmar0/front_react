import { Button } from "@/components/ui/Button";
import { FC } from "react";

interface productsProps {}

const Products: FC<productsProps> = () => {
  return (
    <div className="p-4 flex-1">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Products</h2>
      <Button
        variant={"secondary"}
        className="bg-green-900 text-slate-50 w-full"
      >
        Create new
      </Button>
    </div>
  );
};

export default Products;
