import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import $ from 'jquery';

/* Import all Components */
import SelectActivityContainer from '../containers/SelectActivityContainer';
import ActivityContainer from '../containers/ActivityContainer';
import LoginContainer from '../containers/LoginContainer.jsx';

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
        <LoginContainer />
      </div>
    );
  }
}


export default App;
