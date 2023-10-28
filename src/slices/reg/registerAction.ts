import { createAsyncThunk } from "@reduxjs/toolkit";
import { reduxSnipitCreate } from "@/lib/utils";

// *********** Supplier *********** //
export const registerUser = reduxSnipitCreate({
  name: "auth/register",
  url: "/register",
});

export const clearErrors = createAsyncThunk("auth/register/clear", async () => {
  return true;
});
