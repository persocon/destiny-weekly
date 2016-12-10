import React, { PropTypes } from 'react';

/* Import all Components */
import SelectActivityContainer from '../containers/SelectActivityContainer';
import ActivityContainer from '../containers/ActivityContainer';
import LoginContainer from '../containers/LoginContainer.jsx';
import CharactersContainer from '../containers/CharactersContainer.jsx';
import HeaderContainer from '../containers/HeaderContainer.jsx';

class AppComponent extends React.Component {
  componentWillMount() {
    this.props.getAppScreen();
  }
  activity() {
    return (
      <div className="activityComponents">
        <HeaderContainer />
        <SelectActivityContainer />
        <div className="cardsComponents">
          <ActivityContainer />
        </div>
      </div>
    );
  }
  screen() {
    if (this.props.app.screen === 'login') {
      return (<LoginContainer />);
    } else if (this.props.app.screen === 'character_list') {
      return (<CharactersContainer />);
    } else if (this.props.app.screen === 'activity') {
      return (this.activity());
    }
    return (<LoginContainer />);
  }
  render() {
    return (
      <div className="appComponents">
        {this.screen()}
      </div>
    );
  }
}
AppComponent.propTypes = {
  getAppScreen: PropTypes.func.isRequired,
  app: PropTypes.object.isRequired,
};

export default AppComponent;
