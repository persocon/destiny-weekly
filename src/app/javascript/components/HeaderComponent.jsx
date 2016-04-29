import React from 'react';

class HeaderBox extends React.Component {
	render() {
		return (
			<div className="boxImage" style={this.props.style} >
				<h2 className="boxTitle">{this.props.title}</h2>
				<h3 className="boxSubtitle">{this.props.subtitle}</h3>
				<p>{this.props.description}</p>
			</div>
		);
	}
};

export default HeaderBox;