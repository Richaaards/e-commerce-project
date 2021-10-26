import { createSelector } from "reselect";

// Input selector
const selectCart = (state) => state.cart;

// createSelector method takes 2 arguments :
// An array of inputs & a function that returns the value needed
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// Gets total quantity of cart items
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedItemsQuantity, cartItem) =>
        accumulatedItemsQuantity + cartItem.quantity,
      0
    )
);
