import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import { UserData } from "@/lib/types";

// *********** Supplier *********** //
export const loginUser = createAsyncThunk(
  "auth/login",
  async (args: UserData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post("/login", args);
      return data;
    } catch (err) {
      console.log(err);

      return rejectWithValue(err?.response?.data);
    }
  }
);

export const clearErrors = createAsyncThunk("auth/login/clear", async () => {
  return true;
});
