import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist'


import appReducer from './reducers/index';
import App from './containers/AppContainer';

/* Import all CSS */
import Style from '../stylesheet/style.scss';


let store = createStore(
	appReducer,
	compose(applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f)
	);
persistStore(store)

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
);
