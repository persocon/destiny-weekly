import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

/* Import all Components */
import SelectComponent from './selectComponent.jsx';
import ActivityComponent from './ActivityComponent.jsx';
import XurComponent from './XurComponent.jsx';


/* Import all CSS */
import Style from '../stylesheet/style.scss';

class App extends React.Component {
  render () {
    return (
    	<div className='appComponents'>
    		<SelectComponent />
    		<div className="cardsComponents">
	    		<XurComponent />
				<ActivityComponent url="/api/elderchallenge" />
			</div>
    	</div>
    );
  }
}

render(<App/>, document.getElementById('app'));