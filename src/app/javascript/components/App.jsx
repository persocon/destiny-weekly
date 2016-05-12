import React from 'react';

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
