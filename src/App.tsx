import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Root from "@/pages/root";
import Login from "@pages/login";
import ErrorPage from "./ErrorPage";
import Home from "@pages/home";
import Register from "@pages/register";
import AuthUser from "@middlewares/AuthUser";
import Dash from "@pages/dashboard/dash";
import Products from "@/pages/dashboard/products/products";
import CreateProduct from "./pages/dashboard/products/createProduct";
import Stores from "@/pages/dashboard/stores/stores";
import CreateStore from "./pages/dashboard/stores/createStore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthUser>
            <Login />,
          </AuthUser>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: (
          <>
            <Dash />
          </>
        ),
        children: [
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "products/create",
            element: <CreateProduct />,
          },
          {
            path: "stores",
            element: <Stores />,
          },
          {
            path: "stores/create",
            element: <CreateStore />,
          },
        ],
      },
    ],
  },
]);

export default router;
