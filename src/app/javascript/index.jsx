import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

/* Import all Components */
import ActivityComponent from './ActivityComponent.jsx';
import XurComponent from './XurComponent.jsx';


/* Import all CSS */
import Style from '../stylesheet/style.scss';

class App extends React.Component {
  render () {
    return (
    	<div className='cardsBox'>
    		<XurComponent />
			<ActivityComponent url="/api/weeklycrucible" />
    	</div>
    );
  }
}

render(<App/>, document.getElementById('app'));