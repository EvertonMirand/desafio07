import produce from 'immer';
import {
  CART_ADD_SUCESS,
  CART_REMOVE,
  CART_UPDATE_AMOUNT_SUCESS,
} from './constants';

export default function cart(state = [], action) {
  switch (action.type) {
    case CART_ADD_SUCESS:
      return cartAddSucess(action, state);
    case CART_REMOVE:
      return cartRemove(action, state);
    case CART_UPDATE_AMOUNT_SUCESS: {
      return cartUpdate(action, state);
    }
    default:
      return state;
  }
}

function findProductIndex(products, id) {
  return products.findIndex(p => p.id === id);
}

function cartAddSucess(action, state) {
  return produce(state, draft => {
    const { product } = action;
    console.warn(draft);

    draft.push(product);
  });
}

function cartRemove(action, state) {
  return produce(state, draft => {
    const productIndex = findProductIndex(draft, action.id);
    if (productIndex >= 0) {
      draft.splice(productIndex, 1);
    }
  });
}

function cartUpdate(action, state) {
  if (action.amount <= 0) {
    return state;
  }
  return produce(state, draft => {
    const productIndex = findProductIndex(draft, action.id);
    if (productIndex >= 0) {
      draft[productIndex].amount = Number(action.amount);
    }
  });
}
