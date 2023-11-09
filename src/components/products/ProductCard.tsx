import { ProductType } from "@/lib/types";
import { FC } from "react";
import notFound from "@assets/notFound.png";
import { BiSolidStar } from "react-icons/bi";
import { CiShoppingBasket } from "react-icons/ci";
import { adminImgUrl } from "@/lib/utils";
import { FaPercentage } from "react-icons/fa";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const handleImg = () => {
    return product?.image?.includes("http")
      ? product?.image
      : adminImgUrl({ img: product?.image });
  };
  return (
    <div className="relative flex flex-col rounded-lg w-full p-2 hover:scale-105 hover:shadow-lg border border-slate-300 overflow-hidden">
      <Link to={`/products/${product?.slug}`}>
        <img
          className="w-[200px] h-[200px] m-auto object-cover rounded-lg"
          src={product?.image ? handleImg() : notFound}
          alt="product - img"
          loading="lazy"
        />
      </Link>
      <span className="text-slate-500">{product?.category}</span>
      <Link
        to={`/products/${product?.slug}`}
        className="text-xl text text-slate-900 font-semibold"
      >
        {product?.name}
      </Link>
      <p className="text-2 text-slate-500 flex-1">{product?.disc}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="flex items-center gap-1 text-xl">
          {product?.rating}
          <BiSolidStar className="text-yellow-500" />
        </span>
        <p className="text-xl font-semibold flex items-center gap-1">
          {product?.compare_price && (
            <span className="line-through text-base text-red-700">
              {product?.compare_price}$
            </span>
          )}
          {product?.price}$
        </p>
      </div>
      <div className="absolute cursor-pointer top-0 right-0 w-11 h-11 bg-cyan-900 text-white text-3xl flex items-center justify-center rounded-bl-md active:scale-95">
        <CiShoppingBasket />
      </div>
      {product?.compare_price && (
        <div className="absolute cursor-pointer top-0 left-0 text-sm px-2 h-7 bg-red-900 text-white flex items-center justify-center gap-1">
          <FaPercentage />
          {(100 - (product?.compare_price / product?.price) * 100).toFixed(1)}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
