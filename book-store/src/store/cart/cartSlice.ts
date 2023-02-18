import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import { CartItem, CartState } from "./types";

const initialState: CartState = {
  cartItems: [],
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemToAdd = action.payload;
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === itemToAdd.id
      );
      if (existingCartItem) {
        existingCartItem.quantity += itemToAdd.quantity;
      } else {
        state.cartItems.push({ ...itemToAdd, quantity: itemToAdd.quantity });
      }
    },
    removeCartItem: (state, action: PayloadAction<CartItem>) => {
      const itemToRemove = action.payload;
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === itemToRemove.id
      );
      if (existingCartItem && existingCartItem?.quantity - 1 === 0) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== itemToRemove.id
        );
      } else if (existingCartItem) {
        existingCartItem.quantity--;
      }
    },
    clearCartItem: (state, action: PayloadAction<CartItem>) => {
      const itemToClear = action.payload;
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== itemToClear.id
      );
    },
  },
});

const selectCartSlice = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  selectCartSlice,
  (cartSlice) => cartSlice.cartItems
);

export const selectCartIsOpen = createSelector(
  selectCartSlice,
  (cartSlice) => cartSlice.isCartOpen
);

export const { addToCart, removeCartItem, clearCartItem } = cartSlice.actions;
export default cartSlice.reducer;
