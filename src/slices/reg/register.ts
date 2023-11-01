import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import { clearErrors, registerUser } from "./registerAction";
import { Slice, UserData } from "@/lib/types";

const cookies = new Cookies();

const initialState: Slice<UserData> = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: {},
};

const LoginAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** register ********** //
    [registerUser.pending.type]: (state: Slice<UserData>) => {
      state.loading = true;
      state.msg = "";
      state.data = {};
      state.errors = {};
      state.success = null;
    },
    [registerUser.fulfilled.type]: (
      state: Slice<UserData>,
      action: PayloadAction<Slice<UserData>>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
      state.data = action.payload.data;
      if ((state?.data as UserData).email) {
        cookies.set("user", JSON.stringify(state.data), {
          path: "/",
          maxAge: 3600 * 24 * 10,
        });
        cookies.set("token", JSON.stringify((state?.data as UserData).token), {
          path: "/",
          maxAge: 3600 * 24 * 10,
        });
      }
    },
    [registerUser.rejected.type]: (
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

export default LoginAuthSlice.reducer;
