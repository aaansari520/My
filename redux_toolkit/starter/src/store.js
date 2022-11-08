import { configureStore } from "@reduxjs/toolkit";

// import "./features/cart/createSlice";
import cartReducer from "./features/cart/createSlice";
import modalReducer from "./features/modal/modalSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
