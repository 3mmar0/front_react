import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  reduxSnipitCreate,
  reduxSnipitDelete,
  reduxSnipitGet,
  reduxSnipitSingle,
  reduxSnipitUpdate,
} from "@/lib/utils";

// ****************************** //
// ****************************** //
// *********** Products *********** //
// ****************************** //
// ****************************** //
// *********** All *********** //
export const products = reduxSnipitGet({
  name: "products/all",
  url: "/dashboard/products",
});
// *********** Single *********** //
export const singleProduct = reduxSnipitSingle({
  name: "products/single",
  url: "/dashboard/products",
});
// *********** Create *********** //
export const createProduct = reduxSnipitCreate({
  name: "products/create",
  url: "/dashboard/products",
});
// *********** Update *********** //
export const updateProduct = reduxSnipitUpdate({
  name: "products/update",
  url: "/dashboard/products",
});
// *********** Delete *********** //
export const deleteProduct = reduxSnipitDelete({
  name: "products/delete",
  url: "/dashboard/products",
});
// *********** ClearErrrors *********** //
export const clearErrors = createAsyncThunk("products/clear", async () => {
  return true;
});
