
import { createSlice } from "https://cdn.skypack.dev/@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const { id, plant } = action.payload;
      if (!state.items[id]) {
        state.items[id] = { ...plant, quantity: 1 };
        state.totalQuantity++;
        state.totalPrice += plant.price;
      }
    },
    increaseItem(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity++;
        state.totalQuantity++;
        state.totalPrice += state.items[id].price;
      }
    },
    decreaseItem(state, action) {
      const id = action.payload;
      if (state.items[id] && state.items[id].quantity > 1) {
        state.items[id].quantity--;
        state.totalQuantity--;
        state.totalPrice -= state.items[id].price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        state.totalQuantity -= state.items[id].quantity;
        state.totalPrice -= state.items[id].price * state.items[id].quantity;
        delete state.items[id];
      }
    },
  },
});

export const { addToCart, increaseItem, decreaseItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
