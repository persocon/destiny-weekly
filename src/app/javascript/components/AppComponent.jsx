import React, { PropTypes } from 'react';

/* Import all Components */
import SelectActivityContainer from '../containers/SelectActivityContainer';
import ActivityContainer from '../containers/ActivityContainer';
import LoginContainer from '../containers/LoginContainer.jsx';
import CharactersContainer from '../containers/CharactersContainer.jsx';
import MenuContainer from '../containers/MenuContainer.jsx';

class AppComponent extends React.Component {
  componentWillMount() {
    this.props.getInitialScreen();
  }
  activity() {
    return (
      <div className='activityComponents'>
        <MenuContainer />
        <SelectActivityContainer />
        <div className="cardsComponents">
          <ActivityContainer />
        </div>
      </div>
    )
  }
  screen() {
    if(this.props.app.screen == 'login'){
      return (<LoginContainer />);
    }else if(this.props.app.screen == 'character_list'){
      return(<CharactersContainer />);
    }else if(this.props.app.screen == 'activity'){
      return(this.activity());
    }else{
      return (<LoginContainer />);
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
