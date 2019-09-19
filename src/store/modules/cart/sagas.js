import { Alert } from 'react-native';
import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import NavigationService from '../../../services/navigation';

import { formatPrice } from '../../../util/format';
import api from '../../../services/api';
import { addToCartSucess, updateAmountSucess } from './actions';
import { CART_ADD_REQUEST, CART_UPDATE_AMOUNT_REQUEST } from './constants';

function* addNewProduct(id) {
  const response = yield call(api.get, `/products/${id}`);
  const data = {
    ...response.data,
    amount: 1,
    priceFormatted: formatPrice(response.data.price),
  };

  yield put(addToCartSucess(data));

  NavigationService.navigate('Cart');
}

function* getStockById(id) {
  return yield call(api.get, `/stock/${id}`);
}

function outOfStockAlert() {
  Alert.alert('Quantidade solicitada fora do estoque');
}

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield getStockById(id);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    outOfStockAlert();
    return;
  }

  if (productExists) {
    yield put(updateAmountSucess(id, amount));
  } else {
    addNewProduct(id);
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;
  const stock = yield getStockById(id);
  const stockAmount = stock.data.amount;
  if (amount > stockAmount) {
    outOfStockAlert();
    return;
  }
  yield put(updateAmountSucess(id, amount));
}

export default all([
  takeLatest(CART_ADD_REQUEST, addToCart),
  takeLatest(CART_UPDATE_AMOUNT_REQUEST, updateAmount),
]);
