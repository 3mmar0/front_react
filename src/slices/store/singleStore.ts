import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, singleStore } from "./storeAction";

interface Store {
  loading: boolean | null;
  success: boolean | null;
  msg: string;
  errors: object;
  data: object | null;
}

const initialState: Store = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: {},
};

const SingleStoreSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** Delete ********** //
    [singleStore.pending.type]: (state: Store) => {
      state.loading = true;
      state.msg = "";
      state.data = {};
      state.errors = {};
      state.success = null;
    },
    [singleStore.fulfilled.type]: (
      state: Store,
      action: PayloadAction<Store>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
      state.data = action.payload.data;
      state.errors = {};
    },
    [singleStore.rejected.type]: (
      state: Store,
      action: PayloadAction<Store>
    ) => {
      state.loading = false;
      state.success = false;
      state.msg = action.payload?.msg;
      state.errors = action.payload?.errors;
    },
    [clearErrors.fulfilled.type]: (state: Store) => {
      state.loading = false;
      state.success = null;
      state.msg = "";
      state.errors = {};
    },
  },
});

export default SingleStoreSlice.reducer;
