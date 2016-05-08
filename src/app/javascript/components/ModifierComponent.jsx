import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import ListItemComponent from './ListItemComponent';

class ModifierComponent extends React.Component {
	showListItems() {
		let items = this.props.details.map((detail, index) => {

			let displayName = detail.hasOwnProperty('displayName') ? detail.displayName : detail.itemName;
			let description = detail.hasOwnProperty('description') ? detail.description : detail.itemDescription;
			return (
				<ListItemComponent key={index} title={displayName} description={description} icon={detail.icon} />);
		});
		return items;
	}

	render() {
		return (
			<div className="boxText">
				<ReactCSSTransitionGroup
					transitionName={"fade"}
			        transitionAppear={true}
			        transitionAppearTimeout={500}
			        transitionEnterTimeout={500}
			        transitionLeaveTimeout={300}>
					<h4 className="boxSubtitle">{this.props.title}</h4>
				</ReactCSSTransitionGroup>
				<ul className="boxItems">
					{this.showListItems()}
				</ul>
			</div>
		);
	}
};

export default ModifierComponent;
