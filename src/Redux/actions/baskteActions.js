import * as actionTypes from "./actionTypes";

export function addToBasket(basketItem) {
  return {
    type: actionTypes.ADD_TO_BASKET,
    payload: basketItem,
  };
}

export function removeFromBasket(product) {
  return {
    type: actionTypes.REMOVE_FROM_BASKET,
    payload: product,
  };
}
