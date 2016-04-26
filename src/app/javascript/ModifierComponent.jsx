import React from 'react';
import ListItemComponent from './ListItemComponent.jsx';

class ModifierComponent extends React.Component {
	render() {
		return (
			<div className="boxText">
				<h4 className="boxSubtitle">{this.props.title}</h4>
				<ul className="boxItems">
					{this.props.details.map((detail, index) => { 
						return <ListItemComponent key={index} title={detail.displayName} description={detail.description} icon={detail.icon} />
					})}
				</ul>
			</div>
		);
	}
};

export default ModifierComponent;