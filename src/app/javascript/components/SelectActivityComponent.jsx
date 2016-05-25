import React, { PropTypes } from 'react';
import OptionComponent from './OptionComponent';

class SelectActivityComponent extends React.Component {
	componentDidMount() {
		this.props.getInitialOptions();
	}

	showOptions() {
		let options = this.props.options.map((option, index) => {
			return (<OptionComponent key={index} title={option.advisorTypeCategory} value={option.identifier} disabled={option.disabled} />);
		});

		return options;
	}

	render() {
		return (
			<div className="selectActivityComponent">
    			<div className="selectWrap">
		    		<select onChange={event => this.props.onSelectChange(event.target.value)}>
		    			{this.showOptions()}
		    		</select>
	    		</div>
    		</div>
		);
	}
};

SelectActivityComponent.propTypes = {
	onSelectChange: PropTypes.func.isRequired,
	getInitialOptions: PropTypes.func.isRequired
}

export default SelectActivityComponent;
