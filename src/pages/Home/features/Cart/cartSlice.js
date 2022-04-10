import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import StorageKeys from '../../../../constants/storage-keys';
import { useState } from 'react';
import { toast } from 'react-toastify';

const cartSlice = createSlice({
  name: 'cart',
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
      const index = state.cartItems.findIndex((x) => x.products === newItem.products);
      if (index >= 0) {
        state.cartItems[index].qty += newItem.qty;
      } else {
        state.cartItems.push(newItem);
      }
      localStorage.setItem(StorageKeys.CART, JSON.stringify(state.cartItems));
      toast.success('Add product success');
    },
    setQuantity(state, action) {
      const { products, qtyItem } = action.payload;
      const index = state.cartItems.findIndex((x) => x.products === products);
      // console.log(index);
      if (index >= 0) {
        state.cartItems[index].qty = qtyItem;
      }
      localStorage.setItem(StorageKeys.CART, JSON.stringify(state.cartItems));
      toast.success('Update product success');
    },
    removeFormCart(state, action) {
      const idNeedRemove = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.products !== idNeedRemove);
      localStorage.setItem(StorageKeys.CART, JSON.stringify(state.cartItems));
      toast.success('Remove product success');
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
export const { showMiniCart, hideMiniCart, addToCart, setQuantity, removeFormCart, removeAllCart } = actions;
export default reducer;
