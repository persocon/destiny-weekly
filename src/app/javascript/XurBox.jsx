import React from 'react';
import $ from 'jquery';


class XurBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Carregando',
			backgroundImg: '',
			active: false
		};
	}

	componentDidMount() {
		this.serverRequest = $.get('/api/xur', function (result) {
			var lastGist = result[0];
			var xur = result.xur;
			console.log(xur);
			this.setState({
				title: xur.display.advisorTypeCategory,
				active: xur.status.active,
				backgroundImg: 'http://bungie.net/img/theme/bungienet/bgs/bg_xuravailable.jpg',
			});
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
					<div className="boxContent">
						<div className="boxImage" style={divStyle} >
							<h2 className="boxTitle">{this.state.title}</h2>
							<h3 className="boxSubtitle">{this.state.name}</h3>
						</div>
					</div>
				</div>
			)
		}else{
			return (<div className="noXur" />);
		}
	}
};

export default XurBox;