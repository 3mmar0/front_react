import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, deleteStore } from "./storeAction";

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

const DeleteStoreSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** Delete ********** //
    [deleteStore.pending.type]: (state: Store) => {
      state.loading = true;
      state.msg = "";
      state.data = {};
      state.errors = {};
      state.success = null;
    },
    [deleteStore.fulfilled.type]: (
      state: Store,
      action: PayloadAction<Store>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
      state.data = action.payload.data;
      state.errors = {};
    },
    [deleteStore.rejected.type]: (
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

export default DeleteStoreSlice.reducer;
