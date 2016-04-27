import React from 'react';
import $ from 'jquery';
import OptionComponent from './OptionComponent.jsx';

class SelectComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: [{advisorTypeCategory: 'Carregando...'}]
		};
	}

	componentDidMount() {
		this.serverRequest = $.get('/api/selectActivity', function (result) {
			let lastGist = result[0];
			console.log(result)
			result.unshift({advisorTypeCategory: "Selecione Uma Atividade", identifier: ""});
			this.setState({
				options: result
				
			});
		}.bind(this));
	}

	componentWillUnmount() {
		this.serverRequest.abort();
	}
	render() {
		return (
			<div className="selectComponent">
    			<div className="selectWrap">
		    		<select>
		    			{this.state.options.map((option, index) => { 
			    			return <OptionComponent key={index} title={option.advisorTypeCategory} identifier={option.identifier} />
		    			})}
		    		</select>
	    		</div>
    		</div>
		);
	}
};

export default SelectComponent;