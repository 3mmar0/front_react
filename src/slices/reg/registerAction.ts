import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import { UserData } from "@/lib/types";

// *********** Supplier *********** //
export const registerUser = createAsyncThunk(
  "auth/register",
  async (args: UserData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post("/register", args);
      return data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

export const clearErrors = createAsyncThunk("auth/register/clear", async () => {
  return true;
});
