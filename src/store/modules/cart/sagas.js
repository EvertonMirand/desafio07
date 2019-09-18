import { call, select, put, all, takeLatest } from 'redux-saga/effects';
function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);
}
