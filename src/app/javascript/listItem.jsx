import React from 'react';

class ListItem extends React.Component {
	render() {
		return (
			<li className="listItem boxItem">
				<img src={'http://bungie.net' + this.props.icon} /> 
				<div className="boxItemText">
					<p><strong>{this.props.title}</strong></p> 
					<p><small>{this.props.description}</small></p>
				</div>
			</li>	
		);
	}
};

export default ListItem;