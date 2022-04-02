import { createSlice } from "@reduxjs/toolkit";
import StorageKeys from "../../../../constants/storage-keys";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showMiniCart: false,
    cartItems: JSON.parse(localStorage.getItem(StorageKeys.CART)) || [],
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },
    hideMiniCart(state) {
      state.showMiniCart = false;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      // console.log(newItem, 'newItem');
      const index = state.cartItems.findIndex(
        (x) => x._id === newItem._id && x.size === newItem.size
      );
      if (index >= 0) {
        state.cartItems[index].qty += newItem.qty;
      } else {
        state.cartItems.push(newItem);
      }
      localStorage.setItem(StorageKeys.CART, JSON.stringify(state.cartItems));
    },
    setQuantity(state, action) {
      const { id, qtyItem } = action.payload;

      const index = state.cartItems.findIndex((x) => x.id === id);
      // console.log(index);
      if (index >= 0) {
        state.cartItems[index].qty = qtyItem;
      }
      // localStorage.setItem(StorageKeys.CART, JSON.stringify(state.cartItems));
    },
    removeFormCart(state, action) {
      const idNeedRemove = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== idNeedRemove);
      localStorage.setItem(StorageKeys.CART, JSON.stringify(state.cartItems));
    },
    removeAllCart(state) {
      localStorage.removeItem(StorageKeys.CART);
      localStorage.removeItem(StorageKeys.CART_ID);
      state.cartItems = [];
    },
  },
  extraReducers: {},
});
const { actions, reducer } = cartSlice;
export const {
  showMiniCart,
  hideMiniCart,
  addToCart,
  setQuantity,
  removeFormCart,
  removeAllCart,
} = actions;
export default reducer;
