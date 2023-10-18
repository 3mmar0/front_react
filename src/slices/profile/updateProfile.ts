import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, updateProfile } from "./profileAction";
import { Slice, UserData } from "@/lib/types";
import Cookies from "universal-cookie";
const cookie = new Cookies();

const initialState: Slice<UserData> = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: {},
};

const updateProfileSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** Login ********** //
    [updateProfile.pending.type]: (state: Slice<UserData>) => {
      state.loading = true;
      state.msg = "";
      state.errors = {};
      state.success = null;
    },
    [updateProfile.fulfilled.type]: (
      state: Slice<UserData>,
      action: PayloadAction<Slice<UserData>>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
      state.data = action.payload.data;
      cookie.set("user", JSON.stringify(state.data), {
        path: "/",
        maxAge: 3600 * 24 * 10,
      });
    },
    [updateProfile.rejected.type]: (
      state: Slice<UserData>,
      action: PayloadAction<Slice<UserData>>
    ) => {
      state.loading = false;
      state.success = false;
      state.msg = action.payload?.msg;
      state.errors = action.payload?.errors;
    },
    [clearErrors.fulfilled.type]: (state: Slice<UserData>) => {
      state.loading = false;
      state.success = null;
      state.msg = "";
      state.errors = {};
    },
  },
});

export default updateProfileSlice.reducer;
