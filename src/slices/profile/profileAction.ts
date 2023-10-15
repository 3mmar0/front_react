import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import Cookies from "universal-cookie";
import { UserData } from "@/lib/types";

const cookies = new Cookies();
const token = cookies.get("token");
const TOKEN = `Bearer ${token}`;
const config = {
  headers: {
    Authorization: TOKEN,
  },
};

// *********** Profile - user *********** //
export const getProfile = createAsyncThunk(
  "auth/profile",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get("/profile", config);
      return data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);
// *********** Profile - update *********** //
export const updateProfile = createAsyncThunk(
  "auth/profile",
  async (args: FormData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post("/profile/update", args, config);
      return data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

export const clearErrors = createAsyncThunk("auth/profile/clear", async () => {
  return true;
});
