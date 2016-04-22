import React from 'react';
import $ from 'jquery';

class ModifierListItem extends React.Component {
	render() {
		return (
			<li className="modifierListItem boxItem">
				<img src={'http://bungie.net' + this.props.data.icon} /> 
				<div className="boxItemText">
					<p><strong>{this.props.data.displayName}</strong></p> 
					<p><small>{this.props.data.description}</small></p>
				</div>
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
		var divStyle = {
			backgroundImage: 'url(' + this.state.backgroundImg + ')'
		};
		return (	
			<div className="nightFallBox box"> 
				<div className="boxContent">
					<div className="boxImage" style={divStyle} >
						<h2 className="boxTitle">{this.state.title}</h2>
						<h3 className="boxSubtitle">{this.state.name}</h3>
						<p>{this.state.desc}</p>
					</div>
					<div className="boxText">
						<h4 className="boxSubtitle">{this.state.modifiersTitle}</h4>
						<ul className="boxItems">
							{this.state.modifiers.map((modifier, index) => { 
								return <ModifierListItem key={index} data={modifier} />
							})}
						</ul>
					</div>
				</div>
			</div>
		);
	}
};

export default NightFallBox;
