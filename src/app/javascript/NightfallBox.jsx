import React from 'react';
import $ from 'jquery';

class ModifierListItem extends React.Component {
	render() {
		return (
			<li>
				<img src={'http://bungie.net' + this.props.data.icon} /> 
				<p>{this.props.data.displayName}</p> 
				<p><small>{this.props.data.description}</small></p>
			</li>	
		);
	}
};

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
			var lastGist = result[0];
			var nightfall = result.nightfall;
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
		return (	
			<div className="nightFallBox box"> 
				<img src={this.state.backgroundImg} />
				<h2>{this.state.title}</h2>
				<h3>{this.state.name}</h3>
				<p>{this.state.desc}</p>
				<h4>{this.state.modifiersTitle}</h4>
				<ul>
					{this.state.modifiers.map((modifier, index) => { 
						return <ModifierListItem key={index} data={modifier} />
					})}
				</ul>
			</div>
		);
	}
};

export default NightFallBox;
