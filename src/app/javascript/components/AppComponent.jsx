import React, { PropTypes } from 'react';

/* Import all Components */
import SelectActivityContainer from '../containers/SelectActivityContainer';
import ActivityContainer from '../containers/ActivityContainer';
import LoginContainer from '../containers/LoginContainer.jsx';
import CharactersContainer from '../containers/CharactersContainer.jsx';

class AppComponent extends React.Component {
  componentWillMount() {
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
    }else if(this.props.screen == 'character_list'){
      return(<CharactersContainer />);
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
