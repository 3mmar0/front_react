import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, deleteStore } from "./storeAction";
import { Slice } from "@/lib/types";

const initialState: Slice<object> = {
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
    // *********** Delete -Store ********** //
    [deleteStore.pending.type]: (state: Slice<object>) => {
      state.loading = true;
      state.msg = "";
      state.data = {};
      state.errors = {};
      state.success = null;
    },
    [deleteStore.fulfilled.type]: (
      state: Slice<object>,
      action: PayloadAction<Slice<object>>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
      state.data = action.payload.data;
      state.errors = {};
    },
    [deleteStore.rejected.type]: (
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

export default DeleteStoreSlice.reducer;
