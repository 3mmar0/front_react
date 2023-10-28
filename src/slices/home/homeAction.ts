import { createAsyncThunk } from "@reduxjs/toolkit";
import { reduxSnipitGet } from "@/lib/utils";

// *********** Supplier *********** //
export const home = reduxSnipitGet({
  name: "home",
  url: "/home",
});

export const clearErrors = createAsyncThunk("home/clear", async () => {
  return true;
});