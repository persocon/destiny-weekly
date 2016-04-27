import React from 'react';

class OptionComponent extends React.Component {
	render() {
		return (
			<option>{this.props.title}</option>
		)
	}
}

export default OptionComponent;