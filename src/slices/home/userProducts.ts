import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, userProducts } from "./homeAction";
import { ProductType, Slice } from "@/lib/types";

const initialState: Slice<ProductType> = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: [],
};

const UserProductsSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** register ********** //
    [userProducts.pending.type]: (state: Slice<ProductType>) => {
      state.loading = true;
      state.msg = "";
      state.data = [];
      state.errors = {};
      state.success = null;
    },
    [userProducts.fulfilled.type]: (
      state: Slice<ProductType>,
      action: PayloadAction<Slice<ProductType>>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
      state.data = action.payload.data;
      state.errors = {};
    },
    [userProducts.rejected.type]: (
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

export default UserProductsSlice.reducer;
