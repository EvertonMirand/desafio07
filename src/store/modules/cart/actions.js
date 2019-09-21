import {
  CART_ADD_REQUEST,
  CART_ADD_SUCESS,
  CART_UPDATE_AMOUNT_REQUEST,
  CART_UPDATE_AMOUNT_SUCESS,
  CART_REMOVE,
} from './constants';

export function addToCartRequest(id) {
  return {
    type: CART_ADD_REQUEST,
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: CART_ADD_SUCESS,
    product,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: CART_UPDATE_AMOUNT_REQUEST,
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: CART_UPDATE_AMOUNT_SUCESS,
    id,
    amount,
  };
}

export function removeFromCart(id) {
  return {
    type: CART_REMOVE,
    id,
  };
}
