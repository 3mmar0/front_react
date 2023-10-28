import { createAsyncThunk } from "@reduxjs/toolkit";
import { reduxSnipitCreate } from "@/lib/utils";

// *********** Supplier *********** //
export const loginUser = reduxSnipitCreate({
  name: "auth/login",
  url: "/login",
});

export const clearErrors = createAsyncThunk("auth/login/clear", async () => {
  return true;
});
