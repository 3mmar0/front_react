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
// *********** Categories *********** //
// ****************************** //
// ****************************** //
// *********** All *********** //
export const categories = reduxSnipitGet({
  name: "categories/all",
  url: "/dashboard/categories",
});
// *********** Single *********** //
export const singleCategory = reduxSnipitSingle({
  name: "categories/single",
  url: "/dashboard/categories",
});
// *********** Create *********** //
export const createCategory = reduxSnipitCreate({
  name: "categories/create",
  url: "/dashboard/categories",
});
// *********** Update *********** //
export const updateCategory = reduxSnipitUpdate({
  name: "categories/update",
  url: "/dashboard/categories",
});
// *********** Delete *********** //
export const deleteCategory = reduxSnipitDelete({
  name: "categories/delete",
  url: "/dashboard/categories",
});
// *********** ClearErrrors *********** //
export const clearErrors = createAsyncThunk("categories/clear", async () => {
  return true;
});
