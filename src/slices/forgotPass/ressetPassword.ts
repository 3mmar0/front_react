import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, ressetPass } from "./forgetPasswordAction";

interface Login {
  loading: boolean | null;
  success: boolean | null;
  msg: string;
  errors: object;
  data: object | null | [];
}

const initialState: Login = {
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
    // *********** Login ********** //
    [ressetPass.pending.type]: (state: Login) => {
      state.loading = true;
      state.msg = "";
      state.errors = {};
      state.success = null;
    },
    [ressetPass.fulfilled.type]: (
      state: Login,
      action: PayloadAction<Login>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
    },
    [ressetPass.rejected.type]: (
      state: Login,
      action: PayloadAction<Login>
    ) => {
      state.loading = false;
      state.success = false;
      state.msg = action.payload?.msg;
      state.errors = action.payload?.errors;
    },
    [clearErrors.fulfilled.type]: (state: Login) => {
      state.loading = false;
      state.success = null;
      state.msg = "";
      state.errors = {};
    },
  },
});

export default RessetPassSlice.reducer;
