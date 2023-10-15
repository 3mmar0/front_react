import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, getProfile } from "./profileAction";
import { Slice, UserData } from "@/lib/types";

const initialState: Slice<UserData> = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: {},
};

const getProfileSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** Login ********** //
    [getProfile.pending.type]: (state: Slice<UserData>) => {
      state.loading = true;
      state.msg = "";
      state.errors = {};
      state.success = null;
    },
    [getProfile.fulfilled.type]: (
      state: Slice<UserData>,
      action: PayloadAction<Slice<UserData>>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
      state.data = action.payload.data;
    },
    [getProfile.rejected.type]: (
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

export default getProfileSlice.reducer;
