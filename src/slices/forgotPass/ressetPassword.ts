import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, ressetPass } from "./forgetPasswordAction";
import { Slice } from "@/lib/types";

const initialState: Slice<object> = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: {},
};

const RessetPassSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** Resset - Password ********** //
    [ressetPass.pending.type]: (state: Slice<object>) => {
      state.loading = true;
      state.msg = "";
      state.errors = {};
      state.success = null;
    },
    [ressetPass.fulfilled.type]: (
      state: Slice<object>,
      action: PayloadAction<Slice<object>>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
    },
    [ressetPass.rejected.type]: (
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

export default RessetPassSlice.reducer;
