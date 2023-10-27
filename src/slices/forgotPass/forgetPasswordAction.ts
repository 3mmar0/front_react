import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import { UserData } from "@/lib/types";

// *********** Supplier *********** //
export const forgetPass = createAsyncThunk(
  "auth/forget-pass",
  async (args: UserData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post("/password/forget", args);
      return data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);
export const ressetPass = createAsyncThunk(
  "auth/resset-pass",
  async (
    args: { email: string; otp: string | undefined; password: string },
    thunkAPI
  ) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post("/password/reset", args);
      return data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

export const clearErrors = createAsyncThunk("auth/clear", async () => {
  return true;
});
