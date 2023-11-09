import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Root from "@/pages/root";
import Login from "@pages/login";
import ErrorPage from "./ErrorPage";
import Home from "@pages/home";
import ProductsPage from "@/pages/products/products";
import Register from "@pages/register";
import GuestUser from "@/middlewares/GuestUser";
import Dash from "@pages/dashboard/dash";
import Products from "@/pages/dashboard/products/products";
import CreateProduct from "./pages/dashboard/products/createProduct";
import Stores from "@/pages/dashboard/stores/stores";
import CreateStore from "./pages/dashboard/stores/createStore";
import FotgetPassword from "./pages/fotgetPassword";
import RessetPassword from "./pages/ressetPassword";
import Profile from "./pages/profile";
import UpdateStore from "./pages/dashboard/stores/updateStore";
import AuthUser from "./middlewares/AuthUser";
import Categories from "./pages/dashboard/categories/categories";
import UpdateCategory from "./pages/dashboard/categories/updateCategory";
import CreateCategory from "./pages/dashboard/categories/createCategory";
import UpdateProduct from "./pages/dashboard/products/updateProduct";
import AdminUser from "./middlewares/AdminUser";
import Carusels from "./pages/dashboard/carusels/carusels";
import CreateCarusel from "./pages/dashboard/carusels/createCarusel";
import UpdateCarusel from "./pages/dashboard/carusels/updateCarusel";
import SingleProduct from "./pages/products/singleProduct";

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
      ////////////////// Auth //////////////////
      {
        path: "/login",
        element: (
          <GuestUser>
            <Login />,
          </GuestUser>
        ),
      },
      {
        path: "/register",
        element: (
          <GuestUser>
            <Register />,
          </GuestUser>
        ),
      },
      {
        path: "/fotget-password",
        element: (
          <GuestUser>
            <FotgetPassword />
          </GuestUser>
        ),
      },
      {
        path: "/resset-password",
        element: (
          <GuestUser>
            <RessetPassword />
          </GuestUser>
        ),
      },
      {
        path: "/profile",
        element: (
          <AuthUser>
            <Profile />
          </AuthUser>
        ),
      },
      // Products
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      ////////////////// Dashboard //////////////////
      {
        path: "/dashboard",
        element: (
          <AdminUser>
            <Dash />
          </AdminUser>
        ),
        children: [
          // Products//
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "products/create",
            element: <CreateProduct />,
          },
          {
            path: "products/update/:id",
            element: <UpdateProduct />,
          },
          // stores
          {
            path: "stores",
            element: <Stores />,
          },
          {
            path: "stores/create",
            element: <CreateStore />,
          },
          {
            path: "stores/update/:id",
            element: <UpdateStore />,
          },
          // categories
          {
            path: "categories",
            element: <Categories />,
          },
          {
            path: "categories/create",
            element: <CreateCategory />,
          },
          {
            path: "categories/update/:id",
            element: <UpdateCategory />,
          },
          // carusels
          {
            path: "carusels",
            element: <Carusels />,
          },
          {
            path: "carusels/create",
            element: <CreateCarusel />,
          },
          {
            path: "carusels/update/:id",
            element: <UpdateCarusel />,
          },
        ],
      },
    ],
  },
]);

export default router;
