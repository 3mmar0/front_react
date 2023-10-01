import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "@/store/store.ts";
import { RouterProvider } from "react-router-dom";
import router from "./App";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </Provider>
  </React.StrictMode>
);
