import { createSlice } from "@reduxjs/toolkit";

export const wishList = createSlice({
  name: "wishlist", // name of the slice
  initialState: {
    listItems: [],
  },
  reducers: {
    addToList: (state, action) => {
      //add items to the wishList
      const item = state.listItems.find((p) => p.id === action.payload.id); //looks for the product with id in the list
      if (item) {
        //if item already present, console message
        console.log("Item already added");
      } else {
        //else add the item to the list
        state.listItems.push({ ...action.payload });
      }
    },
    removeFromList: (state, action) => {
      //removes the item from the list
      state.listItems = state.listItems.filter(
        (p) => p.id !== action.payload.id // filters out the item with the matching id from the payload
      );
    },
  },
});

export const { addToList, removeFromList } = wishList.actions;

export default wishList.reducer;
