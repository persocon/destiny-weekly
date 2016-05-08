import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import $ from 'jquery';

/* Import all Components */
import SelectActivityContainer from '../containers/SelectActivityContainer';
import ActivityContainer from '../containers/ActivityContainer';

class App extends React.Component {
  activity() {
    return (
      <div className='activityComponents'>
        <SelectActivityContainer />
        <div className="cardsComponents">
          <ActivityContainer />
        </div>
      </div>
    )
  }
  render () {
    return (
      <div className='appComponents'>
    		{this.activity()}
      </div>
    );
  }
}


export default App;
