import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

/* Import all Components */
import NightFallBox from './NightfallBox.jsx';
import XurBox from './XurBox.jsx';


/* Import all CSS */
import Style from '../stylesheet/style.scss';

class App extends React.Component {
  render () {
    return (
    	<div className='cardsBox'>
    		<XurBox />
			<NightFallBox />
    	</div>
    );
  }
}

render(<App/>, document.getElementById('app'));