import forgetPassword from "@/slices/forgotPass/forgetPassword";
import login from "@/slices/login/login";
import register from "@/slices/reg/register";
import createStore from "@/slices/store/createStore";
import deleteStore from "@/slices/store/deleteStore";
import singleStore from "@/slices/store/singleStore";
import stores from "@/slices/store/stores";
import updateStore from "@/slices/store/updateStore";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // Auth
    login: login,
    register: register,
    forgetPassword,
    // stores
    stores,
    singleStore,
    updateStore,
    deleteStore,
    createStore,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
