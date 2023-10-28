import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, home } from "./homeAction";
import { HomeType, Slice } from "@/lib/types";

const initialState: Slice<HomeType> = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: [],
};

const HomeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** register ********** //
    [home.pending.type]: (state: Slice<HomeType>) => {
      state.loading = true;
      state.msg = "";
      state.data = [];
      state.errors = {};
      state.success = null;
    },
    [home.fulfilled.type]: (
      state: Slice<HomeType>,
      action: PayloadAction<Slice<HomeType>>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
      state.data = action.payload.data;
      state.errors = {};
    },
    [home.rejected.type]: (
      state: Slice<HomeType>,
      action: PayloadAction<Slice<HomeType>>
    ) => {
      state.loading = false;
      state.success = false;
      state.msg = action.payload?.msg;
      state.errors = action.payload?.errors;
    },
    [clearErrors.fulfilled.type]: (state: Slice<HomeType>) => {
      state.loading = false;
      state.success = null;
      state.msg = "";
      state.errors = {};
    },
  },
});

export default HomeSlice.reducer;
