import React, { PropTypes } from 'react';
import $ from 'jquery';
import OptionComponent from './OptionComponent.jsx';

class SelectComponent extends React.Component {
	componentDidMount() {
		this.props.getInitialOptions();
	}

	showOptions() {
		let options = this.props.options.map((option, index) => { 
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
	onSelectChange: PropTypes.func.isRequired,
	getInitialOptions: PropTypes.func.isRequired
}

export default SelectComponent;