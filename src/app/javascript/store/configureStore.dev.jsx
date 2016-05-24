import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';
import appReducer from '../reducers/index';

let enhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

export default function configureStore(){
  let store = createStore(
  	appReducer,
  	enhancer
  	);
  persistStore(store, {blacklist: ['activity', 'select']});

  return store;
}
