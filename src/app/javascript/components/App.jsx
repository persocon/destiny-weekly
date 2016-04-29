import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import $ from 'jquery';

/* Import all Components */
import SelectComponent from './selectComponent.jsx';
import ActivityComponent from './ActivityComponent.jsx';
import XurComponent from './XurComponent.jsx';


class App extends React.Component {
  render () {
    return (
    	<div className='appComponents'>
    		<SelectComponent />
    		<div className="cardsComponents">
  				<ActivityComponent url="/api/trials" />
  			</div>
    	</div>
    );
  }
}


export default App;