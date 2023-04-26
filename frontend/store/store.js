import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import wishList from "./wishList";

export default configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishList,
  },
});
