import { ProductType } from "@/lib/types";
import { FC } from "react";
import notFound from "@assets/notFound.png";
import { BiPlus, BiSolidStar } from "react-icons/bi";
import { CiShoppingBasket } from "react-icons/ci";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="relative flex flex-col rounded-lg w-full p-2 border border-slate-300 overflow-hidden">
      <div>
        <img
          className="w-[200px] h-[200px] m-auto object-cover rounded-lg"
          src={product?.image ? product?.image : notFound}
          alt="product - img"
          loading="lazy"
        />
      </div>
      <span className="text-slate-500">{product?.category}</span>
      <h2 className="text-xl text text-slate-900 font-semibold">
        {product?.name}
      </h2>
      <p className="text-2 text-slate-500 flex-1">{product?.disc}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="flex items-center gap-1 text-xl">
          {product?.rating}
          <BiSolidStar className="text-yellow-500" />
        </span>
        <span className="text-xl font-semibold">{product?.price}$</span>
      </div>
      <div className="absolute top-0 right-0 w-11 h-11 bg-cyan-900 text-white text-3xl flex items-center justify-center rounded-bl-md active:scale-95">
        <CiShoppingBasket />
      </div>
    </div>
  );
};

export default ProductCard;
