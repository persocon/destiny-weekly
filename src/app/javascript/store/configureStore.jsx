import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import appReducer from '../reducers/index';

const enhancer = () => {
  if (process.env.NODE_ENV === 'development') {
    return compose(
      // applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    );
  }
  return applyMiddleware(thunk);
};

export default function configureStore() {
  const store = createStore(
    appReducer,
    enhancer(),
    autoRehydrate()
  );
  persistStore(store, { blacklist: ['activity', 'select'] });

  return store;
}
