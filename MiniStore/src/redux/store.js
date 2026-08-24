import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "./slices/ProductsSlice"
import cartReducer from "./slices/CartSlice"

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer
  }
})