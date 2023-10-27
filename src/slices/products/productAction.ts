import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("token");
const TOKEN = `Bearer ${token}`;
const config = {
  headers: {
    Authorization: TOKEN,
  },
};

// ****************************** //
// ****************************** //
// *********** Products *********** //
// ****************************** //
// ****************************** //
// *********** Create *********** //
export const createProduct = createAsyncThunk(
  "products/create",
  async (args: FormData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post("/dashboard/products", args, config);
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
export const updateProduct = createAsyncThunk(
  "products/update",
  async (args: { dat: FormData; id: number }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post(
        `/dashboard/products/${args.id}`,
        args.dat,
        config
      );
      return data;
    } catch (err) {
      if (err?.response?.data?.message === "Unauthenticated.") {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err?.response?.data);
    }
  }
);
// *********** All *********** //
export const products = createAsyncThunk(
  "products/all",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(`/dashboard/products${args}`, config);

      return data;
    } catch (err) {
      if (err?.response?.data?.message === "Unauthenticated.") {
        return rejectWithValue(err?.response?.data?.message);
      }

      return rejectWithValue(err?.response?.data);
    }
  }
);
// *********** Single *********** //
export const singleProduct = createAsyncThunk(
  "products/single",
  async (args: number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(`/dashboard/products/${args}`, config);
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
export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (args: number | undefined, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.delete(
        `/dashboard/products/${args}`,
        config
      );
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
export const clearErrors = createAsyncThunk("products/clear", async () => {
  return true;
});
