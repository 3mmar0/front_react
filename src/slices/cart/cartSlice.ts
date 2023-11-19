import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  items: JSON.parse(localStorage.getItem("storia_cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const cartItems = JSON.parse(localStorage.getItem("storia_cart")) || [];
      const isAdded = cartItems?.find((e) => e?.id === id);
      if (!isAdded) {
        localStorage.setItem(
          "storia_cart",
          JSON.stringify([...cartItems, action?.payload])
        );
        state.items = [...cartItems, action?.payload];
        toast.success("item added to the cart successfully");
      } else {
        state.items = [...cartItems];
        toast.error("item is already added to the cart");
      }
    },
    removeFromCart: (state, action) => {
      delete state.items[action.payload.id];
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
