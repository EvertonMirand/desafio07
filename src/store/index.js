import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
});

const applySagaMiddleWare = applyMiddleware(sagaMiddleware);

const enhancer = __DEV__
  ? compose(
      console.tron.createEnhancer(),
      applySagaMiddleWare
    )
  : applySagaMiddleWare;

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
