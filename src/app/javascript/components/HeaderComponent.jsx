import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import CharactersMiniContainer from '../containers/CharactersMiniContainer';
import IconComponent from './IconComponent';

class HeaderComponent extends React.Component {
  handleLogOut(event) {
    event.preventDefault();
    this.props.resetApp();
  }
  logoutButton() {
    return (
      <a
        href="#"
        onClick={(event) => this.handleLogOut(event)}
        className="menuComponentLogOut"
      >
        <IconComponent icon="exit" />
      </a>
    );
  }
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName={"fade"}
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <div className="menuComponent">
          <CharactersMiniContainer />
          {this.logoutButton()}
        </div>
      </ReactCSSTransitionGroup>
		);
  }
}

HeaderComponent.propTypes = {
  resetApp: PropTypes.func.isRequired,
};

export default HeaderComponent;
