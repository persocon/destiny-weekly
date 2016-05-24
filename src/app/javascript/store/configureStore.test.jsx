import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';
import appReducer from '../reducers/index';

let enhancer = applyMiddleware(thunk);

export default function configureStore(){
  let store = createStore(
  	appReducer,
  	enhancer
  	);
  persistStore(store, {blacklist: ['activity', 'select']});

  return store;
}
