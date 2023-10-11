import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, stores } from "./storeAction";
import { StoreType } from "@/lib/types";

interface Store {
  loading: boolean | null;
  success: boolean | null;
  msg: string;
  errors: object | string;
  data: null | StoreType[];
}

const initialState: Store = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: [],
};

const StoresSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** register ********** //
    [stores.pending.type]: (state: Store) => {
      state.loading = true;
      state.msg = "";
      state.data = [];
      state.errors = {};
      state.success = null;
    },
    [stores.fulfilled.type]: (state: Store, action: PayloadAction<Store>) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
      state.data = action.payload.data;
      state.errors = {};
    },
    [stores.rejected.type]: (state: Store, action: PayloadAction<Store>) => {
      state.loading = false;
      state.success = false;
      state.msg = action.payload?.msg;
      state.errors = action.payload?.errors || action.payload;
    },
    [clearErrors.fulfilled.type]: (state: Store) => {
      state.loading = false;
      state.success = null;
      state.msg = "";
      state.errors = {};
    },
  },
});

export default StoresSlice.reducer;
