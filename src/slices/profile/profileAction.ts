import { createAsyncThunk } from "@reduxjs/toolkit";
import { reduxSnipitCreate, reduxSnipitGet } from "@/lib/utils";

// *********** Profile - user *********** //
export const getProfile = reduxSnipitGet({
  name: "auth/profile",
  url: "/profile",
});
// *********** Profile - update *********** //
export const updateProfile = reduxSnipitCreate({
  name: "auth/profile/update",
  url: "/profile/update",
});

export const clearErrors = createAsyncThunk("auth/profile/clear", async () => {
  return true;
});
