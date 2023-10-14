import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, forgetPass } from "./forgetPasswordAction";
import { Slice } from "@/lib/types";

const initialState: Slice<object> = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: {},
};

const ForgetPassSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** Login ********** //
    [forgetPass.pending.type]: (state: Slice<object>) => {
      state.loading = true;
      state.msg = "";
      state.errors = {};
      state.success = null;
    },
    [forgetPass.fulfilled.type]: (
      state: Slice<object>,
      action: PayloadAction<Slice<object>>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
    },
    [forgetPass.rejected.type]: (
      state: Slice<object>,
      action: PayloadAction<Slice<object>>
    ) => {
      state.loading = false;
      state.success = false;
      state.msg = action.payload?.msg;
      state.errors = action.payload?.errors;
    },
    [clearErrors.fulfilled.type]: (state: Slice<object>) => {
      state.loading = false;
      state.success = null;
      state.msg = "";
      state.errors = {};
    },
  },
});

export default ForgetPassSlice.reducer;
