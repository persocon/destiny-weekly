import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import activityApp from './reducers/index.jsx';
import App from './components/App.jsx';

/* Import all CSS */
import Style from '../stylesheet/style.scss';


let store = createStore(
	activityApp,
	applyMiddleware(thunk)
	);

render(
	<Provider store={store}>
		<App/>
	</Provider>, 
	document.getElementById('app')
);