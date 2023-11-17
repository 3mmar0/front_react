import forgetPassword from "@/slices/forgotPass/forgetPassword";
import ressetPassword from "@/slices/forgotPass/ressetPassword";
import login from "@/slices/login/login";
import profile from "@/slices/profile/profile";
import updateProfile from "@/slices/profile/updateProfile";
import register from "@/slices/reg/register";
import createStore from "@/slices/store/createStore";
import deleteStore from "@/slices/store/deleteStore";
import singleStore from "@/slices/store/singleStore";
import stores from "@/slices/store/stores";
import updateStore from "@/slices/store/updateStore";
import createCategory from "@/slices/categories/createCategory";
import deleteCategory from "@/slices/categories/deleteCategory";
import singleCategory from "@/slices/categories/singleCategory";
import categories from "@/slices/categories/categories";
import updateCategory from "@/slices/categories/updateCategory";
import createProduct from "@/slices/products/createProduct";
import deleteProduct from "@/slices/products/deleteProduct";
import singleProduct from "@/slices/products/singleProduct";
import products from "@/slices/products/products";
import updateProduct from "@/slices/products/updateProduct";
import { configureStore } from "@reduxjs/toolkit";
import globalCategories from "@/slices/globals/globalCategories";
import globalStores from "@/slices/globals/globalStores";
import carusels from "@/slices/carusel/carusels";
import singleCarusel from "@/slices/carusel/singleCarusel";
import createCarusel from "@/slices/carusel/createCarusel";
import updateCarusel from "@/slices/carusel/updateCarusel";
import deleteCarusel from "@/slices/carusel/deleteCarusel";
import home from "@/slices/home/home";
import userProducts from "@/slices/home/userProducts";
import userSingleProducts from "@/slices/home/userSingleProducts";
import cartSlice from "@/slices/cart/cartSlice";

export const store = configureStore({
  reducer: {
    // Globals
    GlobalCats: globalCategories,
    GlobalStores: globalStores,
    // Cart
    cart: cartSlice,
    // Home
    home: home,
    userProducts: userProducts,
    userSingleProducts: userSingleProducts,
    // Auth
    profile: profile,
    updateProfile,
    login,
    register,
    forgetPassword,
    ressetPassword,
    // stores
    stores,
    singleStore,
    createStore,
    updateStore,
    deleteStore,
    // Categories
    categories,
    singleCategory,
    createCategory,
    updateCategory,
    deleteCategory,
    // Products
    products,
    singleProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    // carusels
    carusels: carusels,
    singleCarusel: singleCarusel,
    createCarusel: createCarusel,
    updateCarusel: updateCarusel,
    deleteCarusel: deleteCarusel,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
