import React, { PropTypes } from 'react';
import $ from 'jquery';

import HeaderComponent from './HeaderComponent.jsx'
import ModifierComponent from './ModifierComponent.jsx'

class ActivityComponent extends React.Component {
	componentDidMount() {
		this.props.getInitialActivity();
	}
	backgroundImage() {
		let divStyle;
		switch(this.props.identifier){
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
					backgroundImage: 'url('+this.props.backgroundImg+')'	
				}
				break;
		}

		return divStyle
		
	}

	showModifiers() {
		let modifiers = this.props.modifiers.map((modifier, index) => {
			return (<ModifierComponent key={index} title={modifier.title} details={modifier.skulls} />);
		});

		return modifiers;
	}

	showXur() {
		if(this.props.items.length >= 1){
			return <ModifierComponent title="Itens a venda" details={this.props.items} />;
		}
	}

	showBounties(){
		if(this.props.bounties.length >= 1){
			return <ModifierComponent title="Contratos" details={this.props.bounties} />;
		}	
	}

	showBosses() {		
		let bosses = this.props.bosses.map((boss, index)=>{
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
					<HeaderComponent style={this.backgroundImage()} title={this.props.title} subtitle={this.props.name} description={this.props.desc} />
					
					{this.showModifiers()}

					{this.showXur()}

					{this.showBounties()}

					{this.showBosses()}
				</div>
			</div>
		);
	}
};

ActivityComponent.propTypes = {
	getInitialActivity: PropTypes.func.isRequired
}

export default ActivityComponent;
