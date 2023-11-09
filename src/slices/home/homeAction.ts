import { createAsyncThunk } from "@reduxjs/toolkit";
import { reduxSnipitGet, reduxSnipitSingle } from "@/lib/utils";

// *********** Supplier *********** //
export const home = reduxSnipitGet({
  name: "home",
  url: "/home",
});
export const userProducts = reduxSnipitGet({
  name: "home/products",
  url: "/products",
});
export const userSingleProduct = reduxSnipitSingle({
  name: "home/product/single",
  url: "/products",
});

export const clearErrors = createAsyncThunk("home/clear", async () => {
  return true;
});
