// actions/wishlistActions.js
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';

export const addToWishlist = (item) => ({
  type: ADD_TO_WISHLIST,
  payload: item,
});
