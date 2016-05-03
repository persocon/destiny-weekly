import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class ListItem extends React.Component {
	render() {
		return (
			<ReactCSSTransitionGroup 
				transitionName={"fade"}
		        transitionAppear={true}
		        transitionAppearTimeout={500}
		        transitionEnterTimeout={500}
		        transitionLeaveTimeout={300}>
				<li className="listItem boxItem">
					<img src={'http://bungie.net' + this.props.icon} /> 
					<div className="boxItemText">
						<p><strong>{this.props.title}</strong></p> 
						<p><small>{this.props.description}</small></p>
					</div>
				</li>	
			</ReactCSSTransitionGroup>
		);
	}
};

export default ListItem;