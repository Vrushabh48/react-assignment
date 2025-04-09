import { configureStore } from "https://cdn.skypack.dev/@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
