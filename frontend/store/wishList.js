import { createSlice } from "@reduxjs/toolkit";

export const wishList = createSlice({
  name: "wishlist",
  initialState: {
    listItems: [],
  },
  reducers: {
    addToList: (state, action) => {
      const item = state.listItems.find((p) => p.id === action.payload.id);
      if (item) {
        console.log("Item already added");
      } else {
        state.listItems.push({ ...action.payload });
      }
    },
    removeFromList: (state, action) => {
      state.listItems = state.listItems.filter(
        (p) => p.id !== action.payload.id
      );
    },
  },
});

export const { addToList, removeFromList } = wishList.actions;

export default wishList.reducer;
