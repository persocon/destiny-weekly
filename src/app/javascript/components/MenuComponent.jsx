import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import CharactersMiniContainer from '../containers/CharactersMiniContainer';
import IconComponent from './IconComponent';

class MenuComponent extends React.Component {
	render() {
		let exitSVG = '<use xlink:href="" />';

		return (
			<ReactCSSTransitionGroup
				transitionName={"fade"}
		        transitionAppear={true}
		        transitionAppearTimeout={500}
		        transitionEnterTimeout={500}
		        transitionLeaveTimeout={300}>
				<div className="menuComponent">
          <CharactersMiniContainer />
          <a href="#" onClick={(event)=>this.props.handleLogOut(event)} className="menuComponentLogOut">
            <IconComponent icon="exit" />
          </a>
        </div>
			</ReactCSSTransitionGroup>
		);
	}
};

MenuComponent.propTypes = {
	handleLogOut: PropTypes.func.isRequired
}

export default MenuComponent;
