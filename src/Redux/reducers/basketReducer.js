import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

const basketReducer = (state = initialState.basket, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      const addedItem = state.find(
        (basketItem) => basketItem.product.id === action.payload.product.id
      );
      if (addedItem) {
        const newState = state.map((basketItem) => {
          if (basketItem.product.id === action.payload.product.id) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });
          }
          return basketItem;
        });
        return newState;
      } else {
        return [...state, { ...action.payload }];
      }

    case actionTypes.REMOVE_FROM_BASKET:
      const newState2 = state.filter(
        (cartItem) => cartItem.product.id !== action.payload.id
      );
      return newState2;
    default:
      return state;
  }
};

export default basketReducer;
