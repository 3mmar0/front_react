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
export const carusels = reduxSnipitGet({
  name: "carusels/all",
  url: "/dashboard/carusels",
});
// *********** Single *********** //
export const singleCarusel = reduxSnipitSingle({
  name: "carusels/single",
  url: "/dashboard/carusels",
});
// *********** Create *********** //
export const createCarusel = reduxSnipitCreate({
  name: "carusels/create",
  url: "/dashboard/carusels",
});
// *********** Update *********** //
export const updateCarusel = reduxSnipitUpdate({
  name: "carusels/update",
  url: "/dashboard/carusels",
});
// *********** Delete *********** //
export const deleteCarusel = reduxSnipitDelete({
  name: "carusels/delete",
  url: "/dashboard/carusels",
});
// *********** ClearErrrors *********** //
export const clearErrors = createAsyncThunk("carusels/clear", async () => {
  return true;
});
