import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import $ from 'jquery';

/* Import all Components */
import SelectActivityContainer from '../containers/SelectActivityContainer';
import ActivityContainer from '../containers/ActivityContainer';
import LoginComponent from './LoginComponent.jsx';

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
        <LoginComponent />
      </div>
    );
  }
}


export default App;
