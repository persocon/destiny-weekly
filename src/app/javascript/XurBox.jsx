import React from 'react';
import $ from 'jquery';

import ListItem from './ListItem.jsx'

class XurBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Carregando',
			backgroundImg: '',
			items: [],
			active: false
		};
	}

	componentDidMount() {
		this.serverRequest = $.get('/api/xur', function (result) {
			var lastGist = result[0];
			var xur = result.xur;
			if (xur.hasOwnProperty('status') && xur.status.hasOwnProperty('active')) {
				this.setState({
					title: xur.display.advisorTypeCategory,
					active: xur.status.active,
					backgroundImg: 'http://bungie.net/img/theme/bungienet/bgs/bg_xuravailable.jpg',
					items: xur.items
				});
			}
		}.bind(this));
	}

	componentWillUnmount() {
		this.serverRequest.abort();
	}

	render() {
		if(this.state.active){
			var divStyle = {
				backgroundImage: 'url(' + this.state.backgroundImg + ')',
				backgroundPosition: '25% 0'
			};
			return (
				<div className="xurBox box"> 
					<HeaderBox style={divStyle} title={this.state.title} subtitle={this.state.name} description="" />
					<div className="boxText">
						<h4 className="boxSubtitle">Itens a venda</h4>
						<ul className="boxItems">
							{this.state.items.map((item, index) => { 
								return <ListItem key={index} icon={item.icon} title={item.itemName} description={item.itemDescription} />
							})}
						</ul>
					</div>
				</div>
			)
		}else{
			return (<div className="noXur" />);
		}
	}
};

export default XurBox;