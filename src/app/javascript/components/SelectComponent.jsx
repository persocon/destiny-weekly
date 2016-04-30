import React, { PropTypes } from 'react';
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
			result.unshift({advisorTypeCategory: "Selecione Uma Atividade", identifier: "", disabled: "disabled"});
			this.setState({
				options: result
				
			});
		}.bind(this));
	}

	componentWillUnmount() {
		this.serverRequest.abort();
	}

	showOptions() {
		let options = this.state.options.map((option, index) => { 
			return (<OptionComponent key={index} title={option.advisorTypeCategory} identifier={option.identifier} disabled={option.disabled} />);
		});

		return options;
	}

	render() {
		return (
			<div className="selectComponent">
    			<div className="selectWrap">
		    		<select onChange={event => this.props.onSelectChange(event.target.value)}>
		    			{this.showOptions()}
		    		</select>
	    		</div>
    		</div>
		);
	}
};

SelectComponent.propTypes = {
	onSelectChange: PropTypes.func.isRequired
}

export default SelectComponent;