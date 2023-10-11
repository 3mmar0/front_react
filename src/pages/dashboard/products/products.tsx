import DashboardContainer from "@/components/DashboardContainer";
import { FC } from "react";
import { Link } from "react-router-dom";

interface productsProps {}

const links = [
  {
    name: "products",
  },
];

const Products: FC<productsProps> = () => {
  return (
    <DashboardContainer ttl="Products" links={links}>
      <Link
        to={"/dashboard/products/create"}
        className="bg-green-900 text-slate-50 w-full p-2 text-center rounded-md hover:opacity-80 active:scale-90"
      >
        Create new
      </Link>
      <div className="mt-10 py-2 overflow-auto w-full">
        <table className="min-w-[300px]">
          <tr>
            <th>#id</th>
            <th>name</th>
            <th>disc</th>
            <th>price</th>
            <th>actions</th>
          </tr>
          <tr>
            <td>#id</td>
            <td>name</td>
            <td>disc</td>
            <td>price</td>
            <td>actions</td>
          </tr>
        </table>
      </div>
    </DashboardContainer>
  );
};

export default Products;
