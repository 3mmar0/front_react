import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, updateProduct } from "./productAction";
import { Slice, ProductType } from "@/lib/types";

const initialState: Slice<ProductType> = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: {},
};

const UpdateProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** Delete ********** //
    [updateProduct.pending.type]: (state: Slice<ProductType>) => {
      state.loading = true;
      state.msg = "";
      state.data = {};
      state.errors = {};
      state.success = null;
    },
    [updateProduct.fulfilled.type]: (
      state: Slice<ProductType>,
      action: PayloadAction<Slice<ProductType>>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
      state.data = action.payload.data;
      state.errors = {};
    },
    [updateProduct.rejected.type]: (
      state: Slice<ProductType>,
      action: PayloadAction<Slice<ProductType>>
    ) => {
      state.loading = false;
      state.success = false;
      state.msg = action.payload?.msg;
      state.errors = action.payload?.errors;
    },
    [clearErrors.fulfilled.type]: (state: Slice<ProductType>) => {
      state.loading = false;
      state.success = null;
      state.msg = "";
      state.errors = {};
    },
  },
});

export default UpdateProductSlice.reducer;
