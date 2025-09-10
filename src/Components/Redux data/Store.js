import { configureStore } from "@reduxjs/toolkit";
import Productlist from "./Product";
import { CartSlice } from "./CartSlice";
import authReducer from "./Auth"

export const store = configureStore({
  reducer: {
    products: Productlist.reducer,
    cart: CartSlice.reducer,
    auth: authReducer, 
  },
});
