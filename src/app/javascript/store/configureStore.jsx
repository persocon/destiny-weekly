import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import appReducer from '../reducers/index';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer, autoRehydrate()];
if (process.env.NODE_ENV === 'development') {
  const debugEnhancer = window.devToolsExtension ? window.devToolsExtension() : f => f;
  enhancers.push(debugEnhancer);
}

const composedEnhancer = compose(...enhancers);

export default function configureStore() {
  const store = createStore(
    appReducer,
    undefined,
    composedEnhancer
  );
  persistStore(store, { blacklist: ['activity', 'select'] });
  sagaMiddleware.run(rootSaga);
  return store;
}
