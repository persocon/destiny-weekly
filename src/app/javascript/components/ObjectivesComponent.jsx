import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import ObjectiveProgressionComponent from './ObjectiveProgressionComponent';

class ObjectivesComponent extends React.Component {
	showProgressionItems() {
		let items = this.props.objectives.map((detail, index) => {
			return (
				<ObjectiveProgressionComponent key={index} title={detail.displayDescription} progress={detail.progress} completionValue={detail.completionValue}/>);
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
				</ReactCSSTransitionGroup>
				<ul className="boxItems progressObjectives">
					{this.showProgressionItems()}
				</ul>
			</div>
		);
	}
};

export default ObjectivesComponent;
