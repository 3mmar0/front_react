import { createAsyncThunk } from "@reduxjs/toolkit";
import { reduxSnipitCreate } from "@/lib/utils";

// *********** Password - Actions *********** //
export const forgetPass = reduxSnipitCreate({
  name: "auth/forget-pass",
  url: "/password/forget",
});
export const ressetPass = reduxSnipitCreate({
  name: "auth/resset-pass",
  url: "/password/reset",
});

export const clearErrors = createAsyncThunk("auth/clear", async () => {
  return true;
});
