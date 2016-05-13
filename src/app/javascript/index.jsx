import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import appReducer from './reducers/index';
import App from './containers/AppContainer';

/* Import all CSS */
import Style from '../stylesheet/style.scss';


let store = createStore(
	appReducer,
	applyMiddleware(thunk)
	);

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
);
