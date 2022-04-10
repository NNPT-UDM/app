import { createSelector } from '@reduxjs/toolkit';
const cartItemsSelector = (state) => state.cart.cartItems;
export const cartItemsCountSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((count, item) => count + item.qty, 0)
);
export const cartTotalSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((total, item) => total + item.qty * item.info.price.sell, 0)
);
