import {
  reduxSnipitCreate,
  reduxSnipitDelete,
  reduxSnipitGet,
  reduxSnipitSingle,
  reduxSnipitUpdate,
} from "@/lib/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";

// ****************************** //
// ****************************** //
// *********** Stores *********** //
// ****************************** //
// ****************************** //
// *********** All *********** //
export const stores = reduxSnipitGet({
  name: "stores/all",
  url: "/dashboard/stores",
});
// *********** Single *********** //
export const singleStore = reduxSnipitSingle({
  name: "stores/single",
  url: "/dashboard/stores",
});
// *********** Create *********** //
export const createStore = reduxSnipitCreate({
  name: "stores/create",
  url: "/dashboard/stores",
});
// *********** Update *********** //
export const updateStore = reduxSnipitUpdate({
  name: "stores/update",
  url: "/dashboard/stores",
});
// *********** Delete *********** //
export const deleteStore = reduxSnipitDelete({
  name: "stores/delete",
  url: "/dashboard/stores",
});

// *********** ClearErrrors *********** //
export const clearErrors = createAsyncThunk("stores/clear", async () => {
  return true;
});
