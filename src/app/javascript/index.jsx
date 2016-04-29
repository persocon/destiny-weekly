import React from 'react';
import {render} from 'react-dom';

import App from './components/App.jsx'

/* Import all CSS */
import Style from '../stylesheet/style.scss';

render(<App/>, document.getElementById('app'));