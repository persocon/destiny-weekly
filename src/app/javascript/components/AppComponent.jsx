import React, { PropTypes } from 'react';

/* Import all Components */
import SelectActivityContainer from '../containers/SelectActivityContainer';
import ActivityContainer from '../containers/ActivityContainer';
import LoginContainer from '../containers/LoginContainer.jsx';

class AppComponent extends React.Component {
  componentDidMount() {
    this.props.getInitialScreen();
  }
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
  screen() {
    // debugger;
    if(this.props.screen == 'login'){
      return (<LoginContainer />);
    }else{
      return(this.activity());
    }
  }
  render () {
    return(
      <div className='appComponents'>
        {this.screen()}
      </div>
    );
  }
}
AppComponent.propTypes = {
	getInitialScreen: PropTypes.func.isRequired
}

export default AppComponent;
