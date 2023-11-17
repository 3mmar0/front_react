import { ProductType } from "@/lib/types";
import { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CiShoppingBasket } from "react-icons/ci";
import Loader from "../Loader";
import { BiLoaderCircle } from "react-icons/bi";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/slices/cart/cartSlice";

interface AddToCartBtnProps {
  product: ProductType;
}

const AddToCartBtn: FC<AddToCartBtnProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product?.id,
        name: product?.name,
        price: product?.price,
        imageUrl: product?.image,
        quantity: 1,
      })
    );
  };

  return (
    <div
      onClick={handleAddToCart}
      className="absolute cursor-pointer top-0 right-0 w-11 h-11 bg-cyan-900 text-white text-3xl flex items-center justify-center rounded-bl-md active:scale-95"
    >
      <CiShoppingBasket />
    </div>
  );
};

export default AddToCartBtn;
