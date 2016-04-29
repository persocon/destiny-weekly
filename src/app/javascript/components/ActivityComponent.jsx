import React from 'react';
import $ from 'jquery';

import HeaderComponent from './HeaderComponent.jsx'
import ModifierComponent from './ModifierComponent.jsx'

class ActivityComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			identifier: '',
			title: 'Carregando',
			name: '',
			desc: '',
			backgroundImg: '',
			modifiers: [],
			bosses: [],
			items: [],
			bounties: [],
			apiUrl: this.props.url
		};
	}

	componentDidMount() {
		this.serverRequest = $.get(this.state.apiUrl, function (result) {
			let lastGist = result[0];
			console.log(result)
			this.setState({
				identifier: result.display.identifier,
				title: (result.display.hasOwnProperty('advisorTypeCategory'))? result.display.advisorTypeCategory : '',
				name: (result.hasOwnProperty('details') && result.details.hasOwnProperty('activityName')) ? result.details.activityName : '',
				desc: (result.hasOwnProperty('details') && result.details.hasOwnProperty('activityDescription')) ? result.details.activityDescription : '',
				backgroundImg: (result.display.hasOwnProperty('image')) ? 'http://bungie.net' + result.display.image : '',
				modifiers: (result.hasOwnProperty('extended') && result.extended.hasOwnProperty('skullCategories')) ? result.extended.skullCategories : [],
				bosses: (result.hasOwnProperty('bosses')) ? result.bosses : [],
				items: (result.hasOwnProperty('items') && result.display.identifier == "xur") ? result.items : [],
				bounties: (result.hasOwnProperty('bounties')) ? result.bounties : []
			});
		}.bind(this));
	}

	componentWillUnmount() {
		this.serverRequest.abort();
	}

	backgroundImage(){
		let divStyle;
		switch(this.state.identifier){
			case "xur":
				divStyle = {
					backgroundImage: 'url(http://bungie.net/img/theme/bungienet/bgs/bg_xuravailable.jpg)',
					backgroundPosition: '25% 0'
				};
				break;
			case "ironbanner":
				divStyle = {
					backgroundImage: 'url(https://www.bungie.net/img/theme/destiny/bgs/event/ironbanner/bg_iron_banner_section_powermatters.jpg)',
					backgroundPosition: 'right center'
				};
				break;
			default:
				divStyle = {
					backgroundImage: 'url('+this.state.backgroundImg+')'	
				}
				break;
		}

		return divStyle
		
	}

	showModifiers() {
		let modifiers = this.state.modifiers.map((modifier, index) => {
			return (<ModifierComponent key={index} title={modifier.title} details={modifier.skulls} />);
		});

		return modifiers;
	}

	showXur() {
		if(this.state.items.length >= 1){
			return <ModifierComponent title="Itens a venda" details={this.state.items} />;
		}
	}

	showBounties(){
		if(this.state.bounties.length >= 1){
			return <ModifierComponent title="Contratos" details={this.state.bounties} />;
		}	
	}

	showBosses() {		
		let bosses = this.state.bosses.map((boss, index)=>{
			let style = {
				backgroundImage: 'url(http://bungie.net'+boss.image+')'
			};
			return (<HeaderComponent key={index} style={style} title={boss.combatantName} subtitle="" description={boss.description} />);
		});

		return bosses;

	}

	render(){

		return (	
			<div className="activityComponent box"> 
				<div className="boxContent">
					<HeaderComponent style={this.backgroundImage()} title={this.state.title} subtitle={this.state.name} description={this.state.desc} />
					
					{this.showModifiers()}

					{this.showXur()}

					{this.showBounties()}

					{this.showBosses()}
				</div>
			</div>
		);
	}
};

export default ActivityComponent;
