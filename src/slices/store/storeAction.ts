import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import Cookies from "universal-cookie";
import { AxiosError } from "axios";

const cookies = new Cookies();
const user = cookies.get("token");
const TOKEN = `Bearerr ${user}`;
const config = {
  headers: {
    Authorization: TOKEN,
  },
};

// ****************************** //
// ****************************** //
// *********** Stores *********** //
// ****************************** //
// ****************************** //
// *********** Create *********** //
export const createStore = createAsyncThunk(
  "stores/create",
  async (args: FormData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post("/dashboard/stores", args, config);
      return data;
    } catch (err) {
      if (err?.response?.data?.message === "Unauthenticated.") {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err?.response?.data);
    }
  }
);
// *********** Update *********** //
export const updateStore = createAsyncThunk(
  "stores/update",
  async (args: { dat: FormData; id: number }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post(
        `/dashboard/stores/${args.id}`,
        args.dat,
        config
      );
      return data;
    } catch (err) {
      if (err.response?.data?.message === "Unauthenticated.") {
        return rejectWithValue(err.response?.data?.message);
      }
      return rejectWithValue(err.response?.data);
    }
  }
);
// *********** All *********** //
export const stores = createAsyncThunk("stores/all", async (args, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { data } = await axios.get("/dashboard/stores", config);
    return data;
  } catch (_err) {
    const err: AxiosError = _err;
    if (err?.response?.data === "Unauthenticated.") {
      return rejectWithValue(err?.response?.data);
    }

    return rejectWithValue(err?.response?.data);
  }
});
// *********** Single *********** //
export const singleStore = createAsyncThunk(
  "stores/single",
  async (args: number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(`/dashboard/stores/${args}`, config);
      return data;
    } catch (err) {
      if (err?.response?.data?.message === "Unauthenticated.") {
        return rejectWithValue(err?.response?.data?.message);
      }

      return rejectWithValue(err?.response?.data);
    }
  }
);
// *********** Delete *********** //
export const deleteStore = createAsyncThunk(
  "stores/delete",
  async (args: number | undefined, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.delete(`/dashboard/stores/${args}`, config);
      return data;
    } catch (err) {
      if (err?.response?.data?.message === "Unauthenticated.") {
        return rejectWithValue(err?.response?.data?.message);
      }

      return rejectWithValue(err?.response?.data);
    }
  }
);
// *********** ClearErrrors *********** //
export const clearErrors = createAsyncThunk("stores/clear", async () => {
  return true;
});
