import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart", //the name of the slice
  initialState: {
    //sets the inital state of the cart slice which is intially empty
    cartItems: [],
  },
  reducers: {
    /*this section defines the reducers, which are functions that modifies the state of the cart */
    addToCart: (state, action) => {
      //addToCart reducer adds an item to the cart. It takes current state and an action that contains a payload
      const item = state.cartItems.find(
        (p) => p.id === action.payload.id
      ); /*It fins an item in the cartItems that has the same 'id' as the 'action.payload.id' */
      if (item) {
        // if it finds the item
        item.quantity++; //the quantity of the item is incremented
        item.attributes.price = item.oneQuantityPrice * item.quantity; //the price of the item is multiplied with the Quantity
      } else {
        // if it doesnt finds it, it will add the item to the cartIten
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    updateCart: (state, action) => {
      //updates the attributes of an item in the cart
      state.cartItems = state.cartItems.map((p) => {
        if (p.id === action.payload.id) {
          //finds an item with matching array in the cartItems array
          if (action.payload.key === "quantity") {
            p.attributes.price = p.oneQuantityPrice * action.payload.val; //if it finds the item, it increment its quantity and updates its price
          }
          return { ...p, [action.payload.key]: action.payload.val }; //otherwise, it adds the item with a quantity 1
        }
        return p;
      });
    },
    removeFromCart: (state, action) => {
      //removes the item from the cart
      state.cartItems = state.cartItems.filter(
        /*removes an item from the carTiems array by filtering out the item with the matching 'id' from the payload */
        (p) => p.id !== action.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
