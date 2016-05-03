import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import $ from 'jquery';

/* Import all Components */
import SelectContainer from '../containers/SelectContainer.jsx';
import ActivityContainer from '../containers/ActivityContainer.jsx';

class App extends React.Component {
  render () {
    return (
    	<div className='appComponents'>
    		<SelectContainer />
    		<div className="cardsComponents">
				  <ActivityContainer />
  			</div>
    	</div>
    );
  }
}


export default App;