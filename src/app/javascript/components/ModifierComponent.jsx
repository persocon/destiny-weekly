import React from 'react';
import ListItemComponent from './ListItemComponent.jsx';

class ModifierComponent extends React.Component {
	showListItems() {
		let items = this.props.details.map((detail, index) => {

			let displayName = detail.hasOwnProperty('displayName') ? detail.displayName : detail.itemName;
			let description = detail.hasOwnProperty('description') ? detail.description : detail.itemDescription;
			return (<ListItemComponent key={index} title={displayName} description={description} icon={detail.icon} />);
		});
		return items;
	}

	render() {
		return (
			<div className="boxText">
				<h4 className="boxSubtitle">{this.props.title}</h4>
				<ul className="boxItems">
					{this.showListItems()}
				</ul>
			</div>
		);
	}
};

export default ModifierComponent;