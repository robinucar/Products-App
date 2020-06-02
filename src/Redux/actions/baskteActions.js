import * as actionTypes from "./actionTypes";

export const addToBasket = basketItem => {
  return {
    type: actionTypes.ADD_TO_BASKET,
    payload: basketItem,
  };
};

export const removeFromBasket = product => {
  return {
    type: actionTypes.REMOVE_FROM_BASKET,
    payload: product,
  };
};
