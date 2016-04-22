import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

/* Import all Components */
import NightFallBox from './NightfallBox.jsx';


/* Import all CSS */
import Style from '../stylesheet/style.scss';

class App extends React.Component {
  render () {
    return (
    	<div className='cardsBox'>
			<NightFallBox />
    	</div>
    );
  }
}

render(<App/>, document.getElementById('app'));