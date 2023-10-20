import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, singleProduct } from "./productAction";
import { Slice, ProductType } from "@/lib/types";

const initialState: Slice<ProductType> = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: {},
};

const SingleProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** Delete ********** //
    [singleProduct.pending.type]: (state: Slice<ProductType>) => {
      state.loading = true;
      state.msg = "";
      state.data = {};
      state.errors = {};
      state.success = null;
    },
    [singleProduct.fulfilled.type]: (
      state: Slice<ProductType>,
      action: PayloadAction<Slice<ProductType>>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
      state.data = action.payload.data;
      state.errors = {};
    },
    [singleProduct.rejected.type]: (
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

export default SingleProductSlice.reducer;
