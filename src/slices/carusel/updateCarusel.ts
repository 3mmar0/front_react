import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearErrors, updateCarusel } from "./caruselAction";
import { Slice, CaruselType } from "@/lib/types";

const initialState: Slice<CaruselType> = {
  loading: null,
  success: null,
  msg: "",
  errors: {},
  data: {},
};

const UpdateCaruselSlice = createSlice({
  name: "carusels",
  initialState,
  reducers: {},
  extraReducers: {
    // *********** Delete ********** //
    [updateCarusel.pending.type]: (state: Slice<CaruselType>) => {
      state.loading = true;
      state.msg = "";
      state.data = {};
      state.errors = {};
      state.success = null;
    },
    [updateCarusel.fulfilled.type]: (
      state: Slice<CaruselType>,
      action: PayloadAction<Slice<CaruselType>>
    ) => {
      state.loading = false;
      state.success = action.payload.success;
      state.msg = action.payload.msg;
      state.data = action.payload.data;
      state.errors = {};
    },
    [updateCarusel.rejected.type]: (
      state: Slice<CaruselType>,
      action: PayloadAction<Slice<CaruselType>>
    ) => {
      state.loading = false;
      state.success = false;
      state.msg = action.payload?.msg;
      state.errors = action.payload?.errors;
    },
    [clearErrors.fulfilled.type]: (state: Slice<CaruselType>) => {
      state.loading = false;
      state.success = null;
      state.msg = "";
      state.errors = {};
    },
  },
});

export default UpdateCaruselSlice.reducer;
