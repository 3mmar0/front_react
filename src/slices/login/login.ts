import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import { clearErrors, loginUser } from "./loginAction";
import { Slice, UserData } from "@/lib/types";

const cookies = new Cookies();

const initialState: Slice<UserData> = {
  loading: null,
  success: null,
  msg: "",
  user: {},
  errors: {},
  data: {},
};

const LoginAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** Login ********** //
    [loginUser.pending.type]: (state: Slice<UserData>) => {
      state.loading = true;
      state.msg = "";
      state.user = {};
      state.errors = {};
      state.success = null;
    },
    [loginUser.fulfilled.type]: (
      state: Slice<UserData>,
      action: PayloadAction<Slice<UserData>>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
      state.user = action.payload.data;
      if (state?.user?.email) {
        cookies.set("user", JSON.stringify(state.user), {
          path: "/",
          maxAge: 3600 * 24 * 10,
        });
        cookies.set("token", JSON.stringify(state.user.token), {
          path: "/",
          maxAge: 3600 * 24 * 10,
        });
      }
    },
    [loginUser.rejected.type]: (
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
