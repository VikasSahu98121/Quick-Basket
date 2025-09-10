import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Cart: [],     
  Counter: 0,
  Sum: 0
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    AddCart: (state, action) => {
      const product = action.payload;
      const exists = state.Cart.find(item => item.id === product.id);

      if (!exists) {
        state.Cart.push({ ...product, quantity: 1 });
        state.Counter += 1;
        state.Sum += parseFloat(product.price);
      } else {
        // Agar already exist → quantity update aur Sum update
        exists.quantity += 1;
        state.Sum += parseFloat(product.price);
      }
    },

    Removecart: (state, action) => {
      const productId = action.payload.id;
      const item = state.Cart.find(item => item.id === productId);

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.Sum -= parseFloat(item.price);
        } else {
          state.Cart = state.Cart.filter(i => i.id !== productId);
          state.Sum -= parseFloat(item.price);
          state.Counter -= 1;
        }
      }
    },
  }
});

export const { AddCart, Removecart } = CartSlice.actions;
export default CartSlice.reducer;
