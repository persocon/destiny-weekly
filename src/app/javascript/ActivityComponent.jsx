import React from 'react';
import $ from 'jquery';

import HeaderComponent from './HeaderComponent.jsx'
import ModifierComponent from './ModifierComponent.jsx'

class ActivityComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Carregando',
			name: '',
			desc: '',
			backgroundImg: '',
			modifiers: [],
			apiUrl: this.props.url
		};
	}

	componentDidMount() {
		this.serverRequest = $.get(this.state.apiUrl, function (result) {
			let lastGist = result[0];
			console.log(result)
			this.setState({
				title: result.display.advisorTypeCategory,
				name: result.details.activityName,
				desc: result.details.activityDescription,
				backgroundImg: 'http://bungie.net' + result.display.image,
				modifiers: (result.hasOwnProperty('extended') && result.extended.hasOwnProperty('skullCategories')) ? result.extended.skullCategories : []
			});
		}.bind(this));
	}

	componentWillUnmount() {
		this.serverRequest.abort();
	}

	render(){
		let divStyle = {
			backgroundImage: 'url(' + this.state.backgroundImg + ')'
		};
		return (	
			<div className="activityComponent box"> 
				<div className="boxContent">
					<HeaderComponent style={divStyle} title={this.state.title} subtitle={this.state.name} description={this.state.desc} />
					
					{this.state.modifiers.map((modifier, index) => {
						return <ModifierComponent key={index} title={modifier.title} details={modifier.skulls} />
					})}
				</div>
			</div>
		);
	}
};

export default ActivityComponent;
