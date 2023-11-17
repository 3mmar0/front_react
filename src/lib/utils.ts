import { createAsyncThunk } from "@reduxjs/toolkit";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "@slices/axios";
import { AxiosError } from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("token");
const TOKEN = `Bearer ${token}`;
const config = {
  headers: {
    Authorization: TOKEN,
  },
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const adminImgUrl = ({ img }: { img: string | undefined }) => {
  return window.location.hostname === "localhost"
    ? `http://localhost:8000/storage/${img}`
    : `https://estore.ammarelgendy.online/storage/${img}`;
};

export const uploadImg = (e: React.ChangeEvent) => {
  const reader = new FileReader();
  reader.onload = () => {};

  const target = e.target as HTMLInputElement;
  reader.readAsDataURL((target.files as FileList)[0]);
  const img = (target.files as FileList)[0];

  return { img };
};

export const reduxSnipitGet = ({ name, url }: { name: string; url: string }) =>
  createAsyncThunk(name, async (args: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data } = await axios.get(`${url}${args ? args : ""}`, config);
      return data;
    } catch (_err) {
      const error: AxiosError = _err as AxiosError; // cast the error for access
      if (!error.response) {
        return rejectWithValue({ errors: "Error: Network Error" });
      }
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return rejectWithValue(error.response.data);
    }
  });

export const reduxSnipitSingle = ({
  name,
  url,
}: {
  name: string;
  url: string;
}) =>
  createAsyncThunk(name, async (args: number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data } = await axios.get(`${url}/${args}`, config);
      return data;
    } catch (_err) {
      const error: AxiosError = _err as AxiosError; // cast the error for access
      if (!error.response) {
        return rejectWithValue({ errors: "Error: Network Error" });
      }
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return rejectWithValue(error.response.data);
    }
  });

export const reduxSnipitDelete = ({
  name,
  url,
}: {
  name: string;
  url: string;
}) =>
  createAsyncThunk(name, async (args: number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data } = await axios.delete(`${url}/${args}`, config);
      return data;
    } catch (_err) {
      const error: AxiosError = _err as AxiosError; // cast the error for access
      if (!error.response) {
        return rejectWithValue({ errors: "Error: Network Error" });
      }
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return rejectWithValue(error.response.data);
    }
  });

export const reduxSnipitUpdate = ({
  name,
  url,
}: {
  name: string;
  url: string;
}) =>
  createAsyncThunk(
    name,
    async (args: { dat: FormData; id: number }, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;

      try {
        const { data } = await axios.post(
          `${url}/${args?.id}`,
          args?.dat,
          config
        );
        return data;
      } catch (_err) {
        const error: AxiosError = _err as AxiosError; // cast the error for access
        if (!error.response) {
          return rejectWithValue({ errors: "Error: Network Error" });
        }
        // We got validation errors, let's return those so we can reference in our component and set form errors
        return rejectWithValue(error.response.data);
      }
    }
  );

export const reduxSnipitCreate = ({
  name,
  url,
}: {
  name: string;
  url: string;
}) =>
  createAsyncThunk(name, async (args: FormData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data } = await axios.post(`${url}`, args, config);
      return data;
    } catch (_err) {
      const error: AxiosError = _err as AxiosError; // cast the error for access
      if (!error.response) {
        return rejectWithValue({ errors: "Error: Network Error" });
      }
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return rejectWithValue(error.response.data);
    }
  });
