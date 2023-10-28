import { createAsyncThunk } from "@reduxjs/toolkit";
import { reduxSnipitGet } from "@/lib/utils";

// ****************************** //
// ****************************** //
// *********** Categories *********** //
// ****************************** //
// ****************************** //
// *********** All *********** //
export const globalCategories = reduxSnipitGet({
  name: "globals/categories",
  url: "/globals/categories",
});
// *********** All *********** //
export const globalStores = reduxSnipitGet({
  name: "globals/stores",
  url: "/globals/stores",
});

// *********** ClearErrrors *********** //
export const clearErrors = createAsyncThunk("globals/clear", async () => {
  return true;
});
