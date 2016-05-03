import React from 'react';

class HeaderBox extends React.Component {
	icon() {
		if(this.props.icon){
			return <img src={this.props.icon} />;
		}		
	}
	description() {
		if(this.props.description){
			return (
				<div className="boxDescription">
					<p>{this.props.description}</p>
				</div>
			)
		}
	}
	render() {
		return (
			<div className="headerBox">
				<div className="boxImage" style={this.props.style} >
					<div className="boxImageTextWrap">
						{this.icon()}
						<div className="boxImageText">
							<h4 className="boxTitle">{this.props.title}</h4>
							<h5 className="boxSubtitle">{this.props.subtitle}</h5>
						</div>
					</div>
				</div>
				{this.description()}
			</div>
		);
	}
};

export default HeaderBox;