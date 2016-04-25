import React from 'react';
import $ from 'jquery';

import ListItem from './ListItem.jsx'
import HeaderBox from './HeaderBox.jsx'

class NightFallBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Carregando',
			name: '',
			desc: '',
			backgroundImg: '',
			modifiersTitle: '',
			modifiers: []
		};
	}

	componentDidMount() {
		this.serverRequest = $.get('/api/nightfall', function (result) {
			let lastGist = result[0];
			let nightfall = result.nightfall;
			console.log(nightfall)
			this.setState({
				title: nightfall.display.advisorTypeCategory,
				name: nightfall.details.activityName,
				desc: nightfall.details.activityDescription,
				backgroundImg: 'http://bungie.net' + nightfall.display.image,
				modifiersTitle: nightfall.extended.skullCategories[0].title,
				modifiers: nightfall.extended.skullCategories[0].skulls
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
			<div className="nightFallBox box"> 
				<div className="boxContent">
					<HeaderBox style={divStyle} title={this.state.title} subtitle={this.state.name} description={this.state.description} />
					<div className="boxText">
						<h4 className="boxSubtitle">{this.state.modifiersTitle}</h4>
						<ul className="boxItems">
							{this.state.modifiers.map((modifier, index) => { 
								return <ListItem key={index} title={modifier.displayName} description={modifier.description} icon={modifier.icon} />
							})}
						</ul>
					</div>
				</div>
			</div>
		);
	}
};

export default NightFallBox;
